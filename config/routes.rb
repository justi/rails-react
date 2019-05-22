Rails.application.routes.draw do
  namespace :v1 do
    get 'posts/index', defaults: { format: 'json' }
  end
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end

  get '*pages', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
