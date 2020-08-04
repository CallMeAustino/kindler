@projects.each do |project|
    json.set! project.id do 
        json.id project.id
        json.description project.description
        json.category project.category
        json.author_id project.author_id
    end
end
