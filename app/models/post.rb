class Post < ApplicationRecord
  has_many :users, through: :comments
  has_many :comments
  validates :user_id, :post_title, :post_content, :category_tag, :create_date, presence:true
end
