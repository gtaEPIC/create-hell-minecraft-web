import PageLayout from '../components/PageLayout';
import '../styles/pages.css';

export const Rules = () => {
  const rules = [
    "Be respectful to all players - no harassment, hate speech, or toxic behavior",
    "No griefing or stealing from other players' bases or builds",
    "No cheating, hacking, or exploiting game bugs for personal advantage",
    "Keep chat appropriate - no spam, excessive profanity, or inappropriate content",
    "Follow staff instructions and respect their decisions",
    "No lag machines or intentionally causing server performance issues",
    "Build at least 100 blocks away from spawn unless given permission",
    "Ask before taking items from community farms or shared resources",
    "Use common sense - if something feels wrong, it probably is",
    "Have fun and help create a welcoming community for everyone!"
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
