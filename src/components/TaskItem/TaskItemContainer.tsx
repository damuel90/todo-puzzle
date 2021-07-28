import styled from 'styled-components/native';
import {theme} from '../../constants';

export const TaskItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding-top: ${theme.padding / 2}px;
  padding-bottom: ${theme.padding / 2}px;
  margin-top: ${theme.padding / 2}px;
`;
