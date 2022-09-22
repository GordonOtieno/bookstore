import PropTypes from 'prop-types';
import './BookProgress.css';
import CircularProgressBar from './CircularProgressBar';

const BookProgress = ({ progress }) => {
  const { completed, currentChapter } = progress;
  return (
    <div className="progress-section">
      <div className="percent-convered">
        <CircularProgressBar />
        <div>
          <p>{`${completed}%`}</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="progress-divider" />
      <div className="current-chapter">
        <p className="current-chapter-text">CURRENT CHAPTER</p>
        <p>{currentChapter}</p>
        <button className="update-progress-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
BookProgress.propTypes = {
  progress: PropTypes.shape({
    completed: PropTypes.string.isRequired,
    currentChapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookProgress;
