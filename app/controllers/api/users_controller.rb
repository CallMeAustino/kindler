class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if !@user
            render json: @user.errors.full_messages, status: 404
        end
    end

    def index
        @users = User.all 
    end

    def update
        @user = User.find_by(id: params[:id])
        if !@user.update(user_params)
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end