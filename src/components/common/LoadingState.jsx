import '../../styles/states.css';

export default function EmptyState({
  message = "No Data Found"
}) {
  return (
    <div className="state">

      <div className="state-card">

        <div className="state-icon">
          🔍
        </div>

        <h2>No Results</h2>

        <p>{message}</p>

      </div>

    </div>
  );
}