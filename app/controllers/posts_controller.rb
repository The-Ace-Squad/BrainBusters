class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end
    
    def create
    end
    
    def update
    end
    
    def destroy
    end  
end
