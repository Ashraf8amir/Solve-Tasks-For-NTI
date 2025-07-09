async function getPostsWithAsync(limit) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok){
        alert('Failed to fetch posts');
        return;
      }
      const data = await response.json();   
      const postsPerCard = limit;
      const totalPosts = limit * postsPerCard;  
      const limitedPosts = data.slice(0, totalPosts);   
      for (let i = 0; i < limit; i++) {
        const start = i * postsPerCard;
        const end = start + postsPerCard;
        const postsGroup = limitedPosts.slice(start, end);  
        displayPostCard(postsGroup, i + 1);
      } 
    } catch (error) {
      console.error('Error:', error);
    }
}

function displayPostCard(posts, cardNumber) {
    const card = document.createElement('div');
    card.style.border = '2px solid #333';
    card.style.padding = '15px';
    card.style.margin = '15px';
    card.style.borderRadius = '8px';
    card.style.backgroundColor = '#222';
    card.style.color = 'white'; 
    const heading = document.createElement('h2');
    heading.textContent = `Card #${cardNumber}`;
    card.appendChild(heading);  
    posts.forEach(post => {
      const body = document.createElement('p');
      body.textContent = post.body; 
      card.appendChild(body);
    }); 
    document.body.appendChild(card);
}

getPostsWithAsync(4); 
