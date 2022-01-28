<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Gate;

class BlogPolicy
{
    use HandlesAuthorization, Gate;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    public function viewAny($user)
    {
        return Gate::any(['viewBlog', 'manageBlog'], $user);
    }

    public function view($user, $post)
    {
        return Gate::any(['viewBlog', 'manageBlog'], $user, $post);
    }

    public function create($user)
    {
        return $user->can('manageBlog');
    }

    public function update($user, $post)
    {
        return $user->can('manageBlog', $post);
    }

    public function delete($user, $post)
    {
        return $user->can('manageBlog', $post);
    }

    public function restore($user, $post)
    {
        return $user->can('manageBlog', $post);
    }

    public function forceDelete($user, $post)
    {
        return $user->can('manageBlog', $post);
    }
}
