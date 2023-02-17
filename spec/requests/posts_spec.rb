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
  describe "PATCH /update" do
    it "updates a post" do
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
      post = Post.first
      updated_post_params= {
        post: {
          user_id: user.id,
          post_title: "Notes on arrays",
          post_content: "Please share some notes on conditionals",
          category_tag: "Notes",
          create_date: "16-02-2023",
        }
      }
      patch "/posts/#{post.id}", params: updated_post_params
      post3 = Post.last
      expect(response).to have_http_status(200)
      expect(post3.post_title).to eq("Notes on arrays")
    end   
  end
  describe "DELETE /destroy" do
    it "deletes a post" do
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

      post '/posts', params: post_params
      post = Post.first

      delete "/posts/#{post.id}"

      posts = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(posts.length).to eq 0
    end
  end   
end
