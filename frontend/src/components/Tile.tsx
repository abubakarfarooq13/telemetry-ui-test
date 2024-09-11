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
import './Tile.css';
import { Icon } from './Icon';

interface TileProps {
  title: string;
  icon: string;
  children?: React.ReactNode;
}

export function Tile(props: TileProps) {
  return (
    <>
      {/* <Icon src={props.icon} /> */}
      <div className="stat">
        <img src={props.icon} className="custom-icon" />
        <div className="state--content">
          <span className="stat--content">{props.children}</span>
          <h2 className="stat--label">{props.title}</h2>
        </div>
      </div>
      {/* <div className="Tile">
        <img src={props.icon} className="custom-icon" />
        <span className="Tile-label">{props.title}</span>
        <span className="Tile-content">{props.children}</span>
      </div> */}
    </>
  );
}
