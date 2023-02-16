class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end
    
    def create
        post = Post.create(post_params)
        if post.valid?
            render json: post
        else
            render json: post.errors, status: 422
        end
    end
    
    def update
        post = Post.find(params[:id])
        post.update(post_params)
        if post.valid?
            render json: post
        else
            render json: post.errors, status: 422
        end
    end
    
    def destroy
    end  

    private
    def post_params
        params.require(:post).permit(:user_id, :post_title, :post_content, :category_tag, :create_date, :share_file)
    end
end
