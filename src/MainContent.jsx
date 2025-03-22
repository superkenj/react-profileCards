import { useState } from "react";
import "./Cards.css";
import { Cards } from "./Cards";

export function MainContent() {
  const [profiles, setProfiles] = useState([
    {
      photo: "/src/assets/sana.jpg",
      fullname: "Minatozaki Sana",
      email: "twice_sana@gmail.com",
    },
    {
      photo: "/src/assets/jihyo.jpg",
      fullname: "Park Jihyo",
      email: "twice_jihyo@gmail.com",
    },
    {
      photo: "/src/assets/momo.jpg",
      fullname: "Hirai Momo",
      email: "twice_momo@gmail.com",
    },
    {
      photo: "/src/assets/tzuyu.jpg",
      fullname: "Chou Tzuyu",
      email: "twice_tzuyu@gmail.com",
    },
  ]);

  const [newProfile, setNewProfile] = useState({
    photo: "",
    fullname: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setNewProfile((prev) => ({ ...prev, photo: imageURL }));
    }
  };

  const handleAddProfile = (e) => {
    e.preventDefault();
    if (newProfile.fullname && newProfile.email && newProfile.photo) {
      setProfiles([newProfile, ...profiles]); // Add new profile on top
      setNewProfile({ photo: "", fullname: "", email: "" });
    }
  };

  return (
    <>
      <h2>Upload Profile</h2>
      <form onSubmit={handleAddProfile} className="profileForm">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={newProfile.fullname}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newProfile.email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Profile</button>
      </form>

      <h2>Profiles</h2>
      <div className="profileWrapper">
        {profiles.map((profile, index) => (
          <Cards
            key={index}
            photo={profile.photo}
            fullname={profile.fullname}
            email={profile.email}
          />
        ))}
      </div>
    </>
  );
}
