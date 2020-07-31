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
        
    end

    def index
        
    end

    def update
       
    end

    def project_params
        params.require(:project).permit(:category, :description, :author_id, :location)
    end
end