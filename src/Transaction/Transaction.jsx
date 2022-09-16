import PropTypes from 'prop-types';
import { CommonStyleDiv } from 'components/commonStyle/Common.styled';
import {
  Table,
  TableHead,
  TableRow,
  Tableth,
  Tbody,
} from './Transactions-styled';
import { RenderTable } from './Transactions--render/render-table';
export function Transaction(data) {
  return (
    <CommonStyleDiv>
      <Table>
        <TableHead>
          <TableRow>
            <Tableth>Type</Tableth>
            <Tableth>Amount</Tableth>
            <Tableth>Currency</Tableth>
          </TableRow>
        </TableHead>
        <Tbody>{RenderTable(data)}</Tbody>
      </Table>
    </CommonStyleDiv>
  );
}

Transaction.prototype = {
  data: PropTypes.exact.isRequired,
};
