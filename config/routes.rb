Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :project_backers, only: [:create]
    resources :users do
      resources :projects, only: [:index]
    end
    resources :projects, except: [:index]
    get 'myprojects/:userId', :to => '/projects#myprojects'
  end
  root to: 'root#root'
end
