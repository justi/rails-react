class Post < ApplicationRecord
  has_many :comments

  scope :search, ->(query) { where("title LIKE ? OR content LIKE ?", "%#{query}%", "%#{query}%") }
  scope :search_by_title, ->(query) { where("title LIKE ?", "%#{query}%") }
end
