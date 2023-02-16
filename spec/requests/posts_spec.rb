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
  describe "POST /create" do
    it "creates a post" do
      user = User.create(email:"test1@example.com", password:"123456", username:"exampletester")
      post_params= {
        post: {
          user_id: user.id,
          post_title: "Notes on Conditionals",
          post_content: "Please share some notes on conditionals",
          category_tag: "Notes",
          create_date: "16-02-2023",
        }
      }
      post "/posts", params: post_params
      expect(response).to have_http_status(200)
      
      post2=Post.first
      expect(post2.post_title).to eq("Notes on Conditionals")
    end   
  end  
end
