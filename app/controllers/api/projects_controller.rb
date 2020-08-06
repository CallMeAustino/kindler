class Api::ProjectsController < ApplicationController

    def create
        @project = Project.new(project_params)
        if @project.save
            render json: @project
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def show
        @project = Project.find(params[:id])
        render json: @project
    end

    def index
        @user = User.find_by(id: params[:user_id])
        @projects = @user.projects
        render :index
    end

    # def myprojects
    #     @projects = Project.find_by_user(params[:userId])
    #     render json: @projects
    # end

    def update
        @oldproject = Project.find(params[:id])
        if @oldproject.update(project_params)
            render json: @oldproject
        else
            render json: @oldproject.errors.full_messages, status: 422
        end
    end
       

    def project_params
        params.require(:project).permit(:name, :goal, :id, :category, :description, :author_id, :location)
    end
end