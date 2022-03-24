class ReviewsController < ApplicationController
    before_action :authorize

    def show
        reviews = Review.all.where("recipe_id = ?", params[:recipe_id])
        render json: reviews, status: :ok
    end

    def destroy
        review = Review.find(params[:id]).destroy
        head :no_content
    end

    def create
       
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        
        review = Review.find_by(id: params[:id])
   
        review.update(review_params)
        render json: review, status: :ok
    end




    private

    def review_params
        params.permit(:description, :recipe_id, :user_id)
    end


end
