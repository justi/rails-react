Rails.application.routes.draw do

  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
    get 'posts', to: 'posts#index'
  end

  get '*pages', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
