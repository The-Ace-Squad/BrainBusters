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


  private
  def comment_params
      params.require(:comment).permit(:content, :post_id, :user_id, :vote_count)
  end
end


