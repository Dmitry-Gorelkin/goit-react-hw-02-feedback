import PropTypes from 'prop-types';
import {
  FeedbackOptionsList,
  FeedbackOptionsItem,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map((name, id) => {
        return (
          <FeedbackOptionsItem key={id} onClick={() => onLeaveFeedback(name)}>
            {name}
          </FeedbackOptionsItem>
        );
      })}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
