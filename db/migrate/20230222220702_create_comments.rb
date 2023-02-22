class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :content
      t.references :post, foreign_key: true
      t.references :user, foreign_key:true
      t.integer :vote_count, default: 0
      t.timestamps
    end
  end
end
