class V1::PostsController < ApplicationController
  def index
    @posts = Post.where(nil) # creates an anonymous scope
    @posts = @posts.where("title LIKE ? OR content LIKE ?", "#{params[:s]}%", "#{params[:s]}%") if params[:s].present?
    respond_to :json
  end
end
