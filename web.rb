require 'sinatra'

get '/' do
  erb :index
end

get '/dayta' do
  erb :dayta
end

get '*' do
  erb :error
end