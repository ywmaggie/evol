import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const styles = {
  column: {
    // textAlign: left,
    width: 100
  }
}
class FilmTipsTable extends React.Component {
  render() {
    return <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn style={styles.column}>关卡</TableHeaderColumn>
          <TableHeaderColumn style={styles.column}>事件类型</TableHeaderColumn>
          <TableHeaderColumn style={styles.column}>关键字</TableHeaderColumn>
          <TableHeaderColumn>专家</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn style={styles.column}>1-2</TableRowColumn>
          <TableRowColumn style={styles.column}>
            特殊事件</TableRowColumn>
          <TableRowColumn style={styles.column}>纪录片 知识</TableRowColumn>
          <TableRowColumn>贺尊</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn>特殊事件</TableRowColumn>
          <TableRowColumn>纯真</TableRowColumn>
          <TableRowColumn>林萌萌、克里斯蒂安、牛大伟、乔布斯</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>1-3</TableRowColumn>
          <TableRowColumn>特殊事件</TableRowColumn>
          <TableRowColumn>纪录片 运动</TableRowColumn>
          <TableRowColumn>泰森娜、山口贤、杨婕、南枫</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn>缘分时间</TableRowColumn>
          <TableRowColumn>浪漫</TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>;
  }
}

export default FilmTipsTable;
