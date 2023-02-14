class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :post_title
      t.text :post_content
      t.string :category_tag
      t.date :create_date
      t.string :share_file

      t.timestamps
    end
  end
end
