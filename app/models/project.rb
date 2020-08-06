class Project < ApplicationRecord

    validates :category, :description, :author_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Comment

    has_many :project_backers,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :ProjectBacker

    has_many :backers, 
        through: :project_backers,
        source: :backer

    def find_by_user(userId) 
        Project.where('author_id = ?', userId)
    end

    def find_sum
        ProjectBacker.where(project_id: self.id).sum(:amount)
    end

    def total_backers
        ProjectBacker.where(project_id: self.id).count
    end
end
