// Custom function to extract query parameters from the hash
function getQueryParamsFromHash() {
  const hash = window.location.hash;
  const queryString = hash.includes("?") ? hash.split("?")[1] : "";
  const params = {};

  queryString.split("&").forEach((param) => {
    const [key, value] = param.split("=");
    if (key) params[key] = decodeURIComponent(value);
  });

  return params;
}

// Load blogs data dynamically without using import
fetch("../data/blogs_data.json")
  .then((response) => response.json())
  .then((blogsData) => {
    function fetchBlogContent(blogId) {
      const blog = blogsData.find((b) => b.id === blogId);
      if (!blog) {
        console.error("Blog not found");
        return null;
      }
      let content = contentGen(blog)
      // Generate blog content with updated classes for better alignment with general.css
      return `
      <div class="text">
        <div id="headAndNav">
          <h1 class="title">${blog.title}</h1>
        </div>
          <p class="highlight">Date:</strong> ${blog.date}</p>
        <div>${content}
        </div>
          
      </div>
      `;
    }

    // Extract blog ID using the custom function
    const params = getQueryParamsFromHash();
    const blogId = params.id;

    if (blogId) {
      const blogContent = fetchBlogContent(blogId);
      if (blogContent) {
        const detailedBlogDiv = document.getElementById("detailed_blog");
        detailedBlogDiv.innerHTML = blogContent;
      }
    } else {
      console.error("No blog ID found in the URL");
    }
  })
  .catch((error) => console.error("Failed to load blogs data:", error));