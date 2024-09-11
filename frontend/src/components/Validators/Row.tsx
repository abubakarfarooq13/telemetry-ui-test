import * as React from 'react';
import { Types } from '../../common';
import { Node } from '../../state';
import { PersistentSet } from '../../persist';
import // Column,
// ValidatorCurrentPosition,
// NameColumn,
// ValidatorColumn,
// LocationColumn,
// ImplementationColumn,
// NetworkIdColumn,
// PeersColumn,
// TxsColumn,
// UploadColumn,
// DownloadColumn,
// StateCacheColumn,
// BlockNumberColumn,
// BlockHashColumn,
// FinalizedBlockColumn,
// FinalizedHashColumn,
// BlockTimeColumn,
// BlockPropagationColumn,
// LastBlockColumn,
// UptimeColumn,
'./';

import './Row.css';

interface RowProps {
  node: Node;
  pins: PersistentSet<Types.NodeName>;
  // columns: Column[];
}

interface RowState {
  update: number;
}

export class Row extends React.Component<RowProps, RowState> {
  // public static readonly columns: Column[] = [
  // ValidatorCurrentPosition,
  // NameColumn,
  // ValidatorColumn,
  // LocationColumn,
  // ImplementationColumn,
  // NetworkIdColumn,
  // PeersColumn,
  // TxsColumn,
  // UploadColumn,
  // DownloadColumn,
  // StateCacheColumn,
  // BlockNumberColumn,
  // BlockHashColumn,
  // FinalizedBlockColumn,
  // FinalizedHashColumn,
  // BlockTimeColumn,
  // BlockPropagationColumn,
  // LastBlockColumn,
  // UptimeColumn,
  // ];

  private renderedChangeRef = 0;

  public shouldComponentUpdate(nextProps: RowProps): boolean {
    return (
      this.props.node.id !== nextProps.node.id ||
      this.renderedChangeRef !== nextProps.node.changeRef
    );
  }

  public render() {
    const { node } = this.props;

    this.renderedChangeRef = node.changeRef;

    let className = 'Row';

    if (node.propagationTime != null) {
      className += ' Row-synced';
    }

    if (node.pinned) {
      className += ' Row-pinned';
    }

    if (node.stale) {
      className += ' Row-stale';
    }

    return (
      <tr className={className} onClick={this.toggle}>
        {/* {columns.map((col, index) =>
          React.createElement(col, { node, key: index })
        )} */}
        <td className="">Sample Data</td>

        <td>Sample Data</td>

        <td>Sample Data</td>

        <td>Sample Data</td>

        <td>Sample Data</td>
      </tr>
    );
  }

  public toggle = () => {
    const { pins, node } = this.props;

    if (node.pinned) {
      pins.delete(node.name);
    } else {
      pins.add(node.name);
    }
  };
}
