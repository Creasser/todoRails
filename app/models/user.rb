class User < ApplicationRecord
    has_many :todos
    has_secure_password
    validates :username, uniqueness: true, presence: true
end
