import "./App.css";
import UserCard from "./UserCard";

const users = [
  {
    id: "1",
    name: "Yafet Getachew",
    username: "yafet1223",
    email: "yafet@gmail.com",
    followers: "1.2K",
    posts: "45",
    location: "Addis Ababa",
    bio: "Building MERN projects, sharing creative ideas, and learning one feature at a time.",
    cover:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "2",
    name: "John Doe",
    username: "johndoe",
    email: "john@gmail.com",
    followers: "850",
    posts: "30",
    location: "New York",
    bio: "Frontend learner, coffee-powered coder, and fan of clean social interfaces.",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <nav className="topbar">
          <span className="brand">SocialNest</span>
          <div className="topbar-actions">
            <button type="button" aria-label="Search profiles">
              Search
            </button>
            <button type="button" className="primary-action">
              Create Post
            </button>
          </div>
        </nav>

        <section className="hero-content">
          <p className="eyebrow">Profile cards with image upload</p>
          <h1>Discover people, posts, and polished social profiles.</h1>
          <p>
            A beautiful React social media layout based on your starter code,
            now with profile photos, cover images, stats, and upload previews.
          </p>
        </section>
      </header>

      <main className="profile-board" aria-label="Social media users">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>
    </div>
  );
}

export default App;
