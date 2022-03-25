class RecipesController < ApplicationController
 before_action :authorize
     
    def index
        recipes = Recipe.all
        render json: recipes, status: :ok

    end

    def create
        recipe = Recipe.create!( recipe_params )
        render json: recipe, status: :created
    end

    def update
        recipe = Recipe.find_by(id: params[:id])
        recipe.update(recipe_params)
        render json: recipe, status: :created
    end

    private 

    def recipe_params
        params.permit(:name, :ingredients, :image_url, :directions, :time_to_complete)
    end



end
