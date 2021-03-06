import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text.inverted};
  align-content: center;
  padding: 6px;
`;

export const Header = styled.div`
  color: ${({ theme }) => theme.text.inverted};
  font-weight: 700;
  padding: 0.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0.25rem;
`;

export const AttributionWrapper = styled.div``;

export const AuthorWrapper = styled.div``;

export const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 0,
    width: '19px',
    height: '19px',
    border: '1px solid #ff6ce7',
    backgroundColor: 'white',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      border: '1px solid black',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#ff6ce7',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: '19px',
      height: '19px',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      border: '1px solid black',
      backgroundColor: 'black',
    },
  },
});
