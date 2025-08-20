import React from 'react';
import './TeamSection.css'; // Importing CSS for styling

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="/images/member1.jpg" alt="Team Member 1" className="member-photo" />
          <h3 className="member-name">Jane Doe</h3>
          <p className="member-role">Creative Director</p>
        </div>
        <div className="team-member">
          <img src="/images/member2.jpg" alt="Team Member 2" className="member-photo" />
          <h3 className="member-name">John Smith</h3>
          <p className="member-role">Lead Makeup Artist</p>
        </div>
        <div className="team-member">
          <img src="/images/member3.jpg" alt="Team Member 3" className="member-photo" />
          <h3 className="member-name">Emily Johnson</h3>
          <p className="member-role">Brand Manager</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;