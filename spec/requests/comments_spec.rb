require 'rails_helper'

RSpec.describe "Comments", type: :request do
  let(:user) { User.create email:"test1@example.com", password:"123456", username:"exampletester" }
  let(:faux_post) {user.posts.create(
    post_title: "Notes on Conditionals",
    post_content: "Please share some notes on conditionals",
    category_tag: "Notes",
    create_date: "16-02-2023"
  )}

  describe "GET /index" do
    it "gets a list of comments" do
      comment = Comment.create(
        content: "Refer to the syllabus",
        post_id: faux_post.id,
        user_id: user.id,
        vote_count:0
      )

      get '/comments'

      comment = JSON.parse( response.body)
      expect(response).to have_http_status(200)
      expect(comment.length).to eq 1
      
    end
  end
  describe "POST /create" do
    it "creates a comment" do
      comment_params= {
        comment: {
          content: "Refer to the syllabus",
          post_id: faux_post.id,
          user_id: user.id,
          vote_count:0
        }
      }
      post "/comments", params: comment_params
      expect(response).to have_http_status(200)
      
      comment2 = Comment.first
      expect(comment2.content).to eq("Refer to the syllabus")
    end
  end
  describe "PATCH /update" do
    it "updates a comment" do
      comment_params= {
        comment: {
          content: "Refer to the syllabus",
          post_id: faux_post.id,
          user_id: user.id,
          vote_count:0
        }
      }
      post "/comments", params: comment_params
      comment = Comment.first

      updated_comment_params= {
        comment: {
          content: "Refer to the notes",
          post_id: faux_post.id,
          user_id: user.id,
          vote_count:0
        }
      }
      patch "/comments/#{comment.id}", params: updated_comment_params
      comment3 = Comment.last
      expect(response).to have_http_status(200)
      expect(comment3.content).to eq("Refer to the notes")
    end
  end
  describe "DELETE /destroy" do
    it "deletes a comment" do
      comment_params= {
        comment: {
          content: "Refer to the syllabus",
          post_id: faux_post.id,
          user_id: user.id,
          vote_count:0
        }
      }
      post '/comments', params: comment_params
      comment = Comment.first

      delete "/comments/#{comment.id}"

      comments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(comments.length).to eq 0
    end
  end
end
