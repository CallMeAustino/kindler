Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy] #new is not here because it is just a form that renders(front end)
    resources :users
  end
  root to: 'root#root'
end
