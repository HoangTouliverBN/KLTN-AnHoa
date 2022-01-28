<?php

namespace App\Http\Controllers;

use App\Mail\authEmailSent;
use App\Models\User;
use Dotenv\Validator as DotenvValidator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
// use Illuminate\Validation\Validator;

class AuthenticateConttroller extends Controller
{
    public function Register(Request $request)
    {
        $validate = Validator::make($request->input(), [
            'email' => ['required', 'email', 'unique:users,email'],
        ]);
        if ($validate->fails()) {
            return response()->json(["error" => $validate->errors()]);
        }
        $token = random_int(100000, 999999);
        $password = Hash::make($token);
        $name = $request->input('firstName') . ' ' . $request->input('lastName');
        $user = User::create(array_merge($request->input(), [
            'name' => $name,
            "password" => $password,
        ]));
        if ($user) {
            Mail::to($user->email)->send(new authEmailSent($token));
        }
        return response([
            "user" => $user,
            'message' => "You’re almost there! Please enter the verification code sent to your email address"
        ]);
    }
    public function Login(Request $request)
    {
        $validate = Validator::make($request->input(), [
            'email' => ['required', 'email'],
        ]);
        if ($validate->fails()) {
            return response()->json(["error" => $validate->errors()]);
        }
        $token = random_int(100000, 999999);
        $password = Hash::make($token);
        $user = User::where('email', $request->input('email'))->first();
        if ($user) {
            $user->update([
                "password" => $password,
            ]);
            Mail::to($user->email)->send(new authEmailSent($token));
        } else {
            return response([
                'error' => "This email has not been resigned"
            ]);
        }
        return response([
            'message' => "You’re almost there! Please enter the verification code sent to your email address"
        ]);
    }
    public function authenticate(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);
        $email = $request->input('email');
        $password = $request->input('password');
        $token = random_int(100000, 999999);
        $rememberToken = Str::random(100);
        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $userAccess = Auth::user();
            $user = User::find($userAccess->id);
            $user->update([
                "password" => $token,
                "remember_token" => $rememberToken,
            ]);
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            $success['name'] =  $user->name;
            if ($user) {
                return response([
                    "userLogin" => Auth::check(),
                    "message" => "Login success",
                    "redirect" => "/",
                    "access" => $success
                ]);
            }
        } else {
            return response([
                "message" => "These credentials do not match our records."
            ]);
        }
    }

    public function logout()
    {
        Auth::user()->token()->delete();
        return response([
            "message" => "Logout success",
            "redirect" => "/"
        ]);
    }
    public function user()
    {
        if (Auth::user()) {
            return response([
                "login" => Auth::check(),
                'userName' => Auth::user()->name,
                'userAvatar' => Auth::user()->avatar,
            ]);
        }
    }
}
