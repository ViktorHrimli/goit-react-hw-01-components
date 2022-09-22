import PropTypes from 'prop-types';
import { TableRowRender, TableD } from './Table.styled';
export function RenderTable({ data }) {
  return data.map(item => {
    return (
      <TableRowRender key={item.id}>
        <TableD>{item.type}</TableD>
        <TableD>{item.amount}</TableD>
        <TableD>{item.currency}</TableD>
      </TableRowRender>
    );
  });
}

RenderTable.prototype = {
  data: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
