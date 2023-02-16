require 'rails_helper'

RSpec.describe "Posts", type: :request do
  describe "GET /index" do
    it "gets a list of posts" do
      user = User.create(email:"test1@example.com", password:"123456", username:"exampletester")
      user.posts.create(
        post_title: "Notes on Conditionals",
        post_content: "Please share some notes on conditionals",
        category_tag: "Notes",
        create_date: "16-02-2023"
      )

      get '/posts'

      post = JSON.parse( response.body)
      expect(response).to have_http_status(200)
      expect(post.length).to eq 1
    end     
  end


end
