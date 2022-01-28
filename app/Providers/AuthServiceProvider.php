<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;
use Silvanite\Brandenburg\Traits\ValidatesPermissions;

class AuthServiceProvider extends ServiceProvider
{
    use ValidatesPermissions;
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // \App\Blog::class => \App\Policies\BlogPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        // collect([
        //     'viewBlog',
        //     'manageBlog',
        // ])->each(function ($permission) {
        //     Gate::define($permission, function ($user) use ($permission) {
        //         if ($this->nobodyHasAccess($permission)) {
        //             return true;
        //         }

        //         return $user->hasRoleWithPermission($permission);
        //     });
        // });
        $this->registerPolicies();

        Passport::routes();
    }
}
