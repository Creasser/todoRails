class TodosController < ApplicationController

    def index
        todos = Todo.all 
        render json: todos, status: :created
    end

    def create
        todo = Todo.create(todo_params)
        if todo.valid?
            render json: todo, status: :created
        else
            render json: {errors: todo.errors.full_messages}, status: :unprocessible_entity
        end
    end

    def update
        todo = Todo.find_by(id: params[:id])
        todo.update(todo_params)
        if todo.valid?
            render json: todo, status: :created
        else
            render json: {errors: todo.errors.full_messages}, status: :unprocessible_entity
        end
    end

    def destroy
        todo = Todo.find_by(id: params[:id])
        todo.destroy
        head :no_content
    end

    private

    def todo_params
        params.permit(:title, :description)
    end
end
