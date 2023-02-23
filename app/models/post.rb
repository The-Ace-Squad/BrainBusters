class Post < ApplicationRecord
  has_many :users
  has_many :comments
  validates :user_id, :post_title, :post_content, :category_tag, :create_date, presence:true
end
