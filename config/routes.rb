Rails.application.routes.draw do
  resources :todos, only: [:create, :destroy, :index, :update]
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
