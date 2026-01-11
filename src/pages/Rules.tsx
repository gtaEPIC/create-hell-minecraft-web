import PageLayout from '../components/PageLayout';
import '../styles/pages.css';

export const Rules = () => {
  const rules = [
    "Be respectful to all players - no harassment, hate speech, or toxic behavior",
    "No slurs or discriminatory language of any kind (that includes you Burned and Ryzen)",
    "No griefing or stealing from other players' bases or builds",
    "No cheating, hacking, or exploiting game bugs for personal advantage",
    "No spam, excessive profanity, or inappropriate content",
    "No lag machines or intentionally causing server performance issues",
    "Build at least 100 blocks away from spawn unless given permission",
    "Use common sense - if something feels wrong, it probably is",
    "Put your name on trains (signs) you build for easy identification",
    "Except for near your base, tracks are considered public property - anyone can use / modify them",
    "Do not destroy public infrastructure (including tracks) without permission",
    "You may re-route / modify existing public tracks",
    "Have fun!"
  ];

  return (
    <PageLayout>
      <div className="rules-section">
        <h2>Server Rules</h2>
        <p className="text-center mb-4">
          Please read and follow these rules to ensure a positive experience for all players.
          Violations may result in warnings, temporary bans, or permanent removal from the server.
        </p>
        <ul className="rules-list">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
};

export default Rules;
