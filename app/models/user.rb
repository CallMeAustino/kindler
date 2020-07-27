class User < ApplicationRecord

    attr_reader :password

    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    has_many :projects,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Project

    has_many :comments,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Comment

    #unsure of other associations (through associations?)
    #FIG VAPER

    def find_by_credentials(username, password)
    end

    def is_password?(password)
    end

    def generate_session_token
    end

    def password=(password)
    end

    def ensure_session_token
    end

    def reset_session_token!    
    end