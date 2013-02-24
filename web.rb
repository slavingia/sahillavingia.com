require 'sinatra'

get '/' do
  erb :index
end

get '*' do
  erb :error
end