class Api::ProjectBackersController < ApplicationController

    def create
        @backing = ProjectBacker.new(backer_params)
        if @backing.save
            render json: @backing
        else
            render json: @backing.errors.full_messages, status: 422
        end
    end

    def backer_params
        params.require(:backing).permit(:amount, :backer_id, :project_id)
    end
end