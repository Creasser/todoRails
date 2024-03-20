class TodosController < ApplicationController

    def create
        todo = Todo.create(todo_params)
        if todo.valid?
            render json: todo, status: :created
        else
            render json: {errors: todo.errors.full_messages}, status: :unprocessible_entity
        end
    end

    private

    def todo_params
        params.permit(:title, :description)
    end
end
