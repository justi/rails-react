class V1::PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to :json
  end
end
