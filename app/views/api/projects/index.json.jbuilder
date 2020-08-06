@projects.each do |project|
    json.set! project.id do 
        json.id project.id
        json.name project.name
        json.author_id project.author_id
        json.description project.description
        json.category project.category
        json.goal project.goal
        json.location project.location
        json.sum project.find_sum
        json.total_backers project.total_backers
    end
end
