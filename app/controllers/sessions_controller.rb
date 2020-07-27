class SessionsController < ApplicationController

    def new
        render `/api/session/new` #do I need to manually type in render here since session is under API namespace?
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            redirect_to `/api/users/#{@user.id}` #this will pull json from users/show.json.jbuilder
        else
            flash.now[:errors] = ['Your username / password combination did not match.']
            render :new
        end
    end

    def destroy
        logout!
        redirect_to `/api/session/new`
    end

    def 
end
