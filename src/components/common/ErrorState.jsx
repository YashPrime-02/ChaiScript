import '../../styles/states.css';

export default function ErrorState({
  message = "Something went wrong"
}) {
  return (
    <div className="state">
      <h2>{message}</h2>
    </div>
  );
}

