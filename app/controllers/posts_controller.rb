class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end

end

  def create
    Post.create(content: params[:content])
  end
end
