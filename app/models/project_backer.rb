class ProjectBacker < ApplicationRecord

    validates :amount, :backer_id, :project_id, presence: true

    belongs_to :project,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Project

    belongs_to :backer,
        primary_key: :id,
        foreign_key: :backer_id,
        class_name: :User

end