import '../../styles/states.css';

export default function ErrorState({
  message = "Something went wrong"
}) {
  return (
    <div className="state">

      <div className="state-card error-card">

        <div className="state-icon">
          ⚠️
        </div>

        <h2>Error</h2>

        <p>{message}</p>

      </div>

    </div>
  );
}