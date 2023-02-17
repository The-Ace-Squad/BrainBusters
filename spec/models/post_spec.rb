require 'rails_helper'

RSpec.describe Post, type: :model do
  it "should validate title" do
    post = Post.create(
      post_content: "Please share answer for problem three on week two assessment",
      category_tag: "assessments",
      create_date: "14-02-2023"
    )
    expect(post.errors[:post_title]).to_not be_empty
  end
  it "should validate post content" do
    post = Post.create(
      post_title: "Week two assessment problem three code challenge",
      category_tag: "assessments",
      create_date: "14-02-2023"
    )
  end
  it "should validate category tag" do
    post = Post.create(
      post_title: "Week two assessment problem three code challenge",
      post_content: "Please share answer for problem three on week two assessment",
      create_date: "14-02-2023"
    )
  end
  it "should validate create date" do
    post = Post.create(
      post_title: "Week two assessment problem three code challenge",
      post_content: "Please share answer for problem three on week two assessment",
      category_tag: "assessments",
    )
  end
end
