class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user
  validates :user_id, :content, :post_id, :vote_count, presence: true
end
