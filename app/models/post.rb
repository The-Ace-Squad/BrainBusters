class Post < ApplicationRecord
  belongs_to :user
  validates :user_id, :post_title, :post_content, :category_tag, :create_date, presence:true
end
