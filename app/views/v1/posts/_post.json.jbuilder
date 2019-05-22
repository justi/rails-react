json.id post.id
json.title post.title
json.content post.content

json.comments post.comments, partial: 'v1/comments/comment', as: :comment