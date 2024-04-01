// Load comments from local storage when the page loads
window.onload = function() {
  loadComments();
};

// Save comment to local storage
function saveComment() {
  const commentInput = document.getElementById('comment-input');
  const comment = commentInput.value.trim();
  if (comment === '') return;

  let comments = localStorage.getItem('comments');
  comments = comments ? JSON.parse(comments) : [];
  comments.push(comment);
  localStorage.setItem('comments', JSON.stringify(comments));

  commentInput.value = '';
  loadComments();
}

// Load comments from local storage and display them
function loadComments() {
  const commentsContainer = document.getElementById('comments-container');
  let comments = localStorage.getItem('comments');
  comments = comments ? JSON.parse(comments) : [];

  let commentsHTML = '';
  comments.forEach(comment => {
    commentsHTML += `<div class="comment">${comment}</div>`;
  });

  commentsContainer.innerHTML = commentsHTML;
}
