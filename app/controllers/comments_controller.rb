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

  def update
    comment = Comment.find(params[:id])
    comment.update(comment_params)
    if comment.valid?
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: Comment.all

  end
  private
  def comment_params
      params.require(:comment).permit(:content, :post_id, :user_id, :vote_count, :username)
  end
end


