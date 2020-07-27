class CreateProjectBackers < ActiveRecord::Migration[5.2]
  def change
    create_table :project_backers do |t|
      t.integer :project_id, null: false
      t.integer :backer_id, null: false
      t.integer :amount, null: false
      
      t.timestamps
    end
  end
end
