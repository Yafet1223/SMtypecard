import { useState } from "react";

function UserCard(props) {
  const [profilePic, setProfilePic] = useState(props.avatar);

  function handlePhotoUpload(event) {
    const file = event.target.files[0];

    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  }

  return (
    <article className="user-card">
      <div
        className="cover-photo"
        style={{ backgroundImage: `url(${props.cover})` }}
        aria-hidden="true"
      />

      <section className="profile-pic-section">
        <img className="profile-pic" src={profilePic} alt={`${props.name} profile`} />
        <label className="upload-button">
          Upload photo
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </label>
      </section>

      <div className="profile-info">
        <div>
          <p className="user-id">ID #{props.id}</p>
          <h2>{props.name}</h2>
          <p className="username">@{props.username}</p>
        </div>
        <span className="status-badge">Online</span>
      </div>

      <p className="bio">{props.bio}</p>

      <div className="stats-grid">
        <div>
          <strong>{props.followers}</strong>
          <span>Followers</span>
        </div>
        <div>
          <strong>{props.posts}</strong>
          <span>Posts</span>
        </div>
        <div>
          <strong>{props.location}</strong>
          <span>Location</span>
        </div>
      </div>

      <footer className="card-footer">
        <a href={`mailto:${props.email}`}>{props.email}</a>
        <button type="button">Follow</button>
      </footer>
    </article>
  );
}

export default UserCard;
