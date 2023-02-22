class CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments
  end

  def create
    comment = Comment.create(comment_params)
    if comment.valid?
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end
end
