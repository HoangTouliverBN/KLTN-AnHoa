<?php

namespace App\Nova;

use Benjaminhirsch\NovaSlugField\TextWithSlug;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Benjaminhirsch\NovaSlugField\Slug;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Trix;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Panel;
use NaskaIt\NovaMediableManager\Mediable;

class Product extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Product::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id', 'name'
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make(__('ID'), 'id')->sortable(),
            TextWithSlug::make(__('Name'), 'name')->rules('required')->sortable()->slug('slug'),

            Slug::make(__('Slug'), 'slug')
                ->rules('required')
                ->sortable(),
            BelongsTo::make('Category'),
            Number::make('Age')->rules('required'),
            Number::make("Price")->rules('required')->onlyOnForms(),
            Number::make("Price")->exceptOnForms()->resolveUsing(function ($price) {
                return number_format($price, 0, ',') . " VNĐ";
            }),
            Trix::make('Description'),
            new Panel('Active', $this->activeFields()),
            new Panel('Discount', $this->discountFields()),
            new Panel('Media', $this->mediaFields()),
            new Panel('Parent', $this->parentFields()),

        ];
    }
    protected function activeFields()
    {
        return [
            Boolean::make('Active')->sortable(),
            Number::make('Quantity')->sortable(),
        ];
    }
    protected function discountFields()
    {
        return [
            BelongsTo::make('Discounts')->nullable(),
        ];
    }
    protected function mediaFields()
    {
        return [
            Mediable::make('Image')
                ->isSingle(),
            Mediable::make('Gallery'),
        ];
    }
    protected function parentFields()
    {
        return [
            Number::make('Parent')->exceptOnForms(),
            Number::make('Version')->exceptOnForms(),
        ];
    }
    /**
     * Get the cards available for the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [
            new Filters\ActiveFilter,
        ];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
