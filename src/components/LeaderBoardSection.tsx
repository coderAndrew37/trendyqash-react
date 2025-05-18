const leaderboard = [
  { name: "Jane W.", earnings: "KSH 12,500" },
  { name: "Brian K.", earnings: "KSH 9,850" },
  { name: "David M.", earnings: "KSH 8,445" },
];

export const LeaderboardSection = () => (
  <section className="py-20 bg-light">
    <div className="container mx-auto text-center px-6">
      <h2 className="text-3xl font-bold text-dark mb-6">
        Top Earners This Week
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {leaderboard.map((user, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <p className="text-xl font-bold text-primary">{user.name}</p>
            <p className="text-lg text-dark mt-2">{user.earnings}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
