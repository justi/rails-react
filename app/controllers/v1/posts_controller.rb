class V1::PostsController < ApplicationController
  def index
    @posts = Post.where(nil) # creates an anonymous scope
    if params[:s].present?
      if params[:b] == "true"
        @posts = @posts.search params[:s]
      else
        @posts = @posts.search_by_title params[:s]
      end
    end
    respond_to :json
  end
end
