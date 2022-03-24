Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/reviews', to: 'reviews#create'
  delete '/reviews/:id', to: 'reviews#destroy'
  get '/reviews/:recipe_id', to: 'reviews#show'
  patch '/reviews/:id', to: 'reviews#update'


  post '/recipes', to: 'recipes#create'
  patch '/recipes/:id', to: 'recipes#update'
end
