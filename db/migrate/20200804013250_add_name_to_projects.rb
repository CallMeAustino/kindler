class AddNameToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :name, :string
    add_column :projects, :goal, :integer
  end
end
