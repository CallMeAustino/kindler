class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :author_id, null: false
      t.text :description, null: false
      t.string :category, null: false

      t.timestamps
    end
    add_index :projects, :author_id
  end
end
