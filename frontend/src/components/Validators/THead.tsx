// Source code for the Substrate Telemetry Server.
// Copyright (C) 2023 Parity Technologies (UK) Ltd.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

import * as React from 'react';
import { Maybe } from '../../common';
// import { Column, THeadCell } from './';
import { Persistent } from '../../persist';

import './THead.css';

interface THeadProps {
  // columns: Column[];
  sortBy: Persistent<Maybe<number>>;
}
const tdHead = [
  {
    id: '1',
    name: 'Validator Current Position',
    icon: '',
  },
  {
    id: '2',
    name: 'Blocks Produced Last Session',
    icon: '',
  },
  {
    id: '3',
    name: 'Blocks Produced Since Genesis',
    icon: '',
  },
  {
    id: '4',
    name: 'Performance Factor',
    icon: '',
  },
  {
    id: '5',
    name: 'Allocated Era Sessions',
    icon: '',
  },
];
export class THead extends React.Component<THeadProps> {
  private sortBy: Maybe<number>;

  constructor(props: THeadProps) {
    super(props);

    this.sortBy = props.sortBy.get();
  }

  public shouldComponentUpdate(nextProps: THeadProps) {
    return this.sortBy !== nextProps.sortBy.get();
  }

  public render() {
    const { sortBy } = this.props;
    // const last = columns.length - 1;

    this.sortBy = sortBy.get();

    return (
      <thead>
        <tr className="THead">
          {/* {columns.map((col, index) => (
            <THeadCell
              key={index}
              column={col}
              index={index}
              last={last}
              sortBy={sortBy}
            />
          ))} */}
          {tdHead.map((i, index) => (
            <td className="TdHead" key={index}>
              {i.name}
            </td>
          ))}
        </tr>
      </thead>
    );
  }
}
