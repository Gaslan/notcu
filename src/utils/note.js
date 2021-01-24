export default function Note(title) {
  this.id = 0 // create random unique id
  this.title = title
  this.createdAt = new Date()
  this.favorited = false
  this.pinned = false
  this.deleted = false
  this.tags = []
}

Note.prototype.toggleFavorite = function() {
  this.favorited = !this.favorited
}

Note.prototype.togglePin = function() {
  this.pinned = !this.pinned
}

Note.prototype.toggleDelete = function() {
  this.deleted = !this.deleted
}

Note.prototype.addTag = function(tag) {
  if (!this.tags) {
    this.tags = []
  }
  this.tags.push(tag)
}

Note.prototype.setContent = function(content) {
  this.content = content
}
