class Api::FeedsController < ApplicationController
  def destroy
    Feed.find(params[:id]).destroy!
    render json: {}
  end

  def index
    render :json => Feed.all
  end

  def show
    @feed = Feed.find(params[:id])
    render :show
  end

  def create
    @feed = Feed.find_or_create_by_url(feed_params[:url])
    if @feed
      render json: { feed: @feed }
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  private

  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
