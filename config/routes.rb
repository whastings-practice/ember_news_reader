NewsReader::Application.routes.draw do
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :feeds, only: [:index, :create, :destroy, :show] do
      resources :entries, only: [:index]
    end
  end

  root to: "static_pages#index"
end
