import React from 'react';
import './DataTable.css';

// This is a re-creation of your "testing - Execution details" table.
const DataTable = () => {
  // Static data based on your screenshot
  const testData = [
    { id: 2630, release: 'R.1.1.1', cycle: 4, user: 'vchoubey', machine: 'ITEM-S147891', start: '2025-07-14 15:40:09', time: '0:2:16', status: [2, 0, 2] },
    { id: 2629, release: 'R.1.1.1', cycle: 3, user: 'vchoubey', machine: 'ITEM-S147891', start: '2025-07-14 15:35:46', time: '0:1:30', status: [2, 0, 1] },
    { id: 2628, release: 'R.1.1.1', cycle: 2, user: 'vchoubey', machine: 'ITEM-S147891', start: '2025-07-14 15:32:20', time: '0:1:18', status: [2, 0, 1] },
    { id: 2627, release: 'R.1.1.1', cycle: 1, user: 'vchoubey', machine: 'ITEM-S147891', start: '2025-07-14 15:12:26', time: '0:1:20', status: [2, 0, 2] },
    { id: 2625, release: 'R.1.1.1', cycle: 21, user: 'arpijain', machine: 'AAP-5CD220BXV3', start: '2025-05-27 10:54:33', time: '0:0:10', status: [4, 0, 0] },
    { id: 2624, release: 'R.1.1.1', cycle: 5, user: 'arpijain', machine: 'AAP-5CD220BXV3', start: '2025-05-27 10:03:11', time: '0:0:13', status: [4, 0, 0] },
    { id: 2623, release: 'R.1.1.1', cycle: 4, user: 'arpijain', machine: 'AAP-5CD220BXV3', start: '2025-05-27 09:59:26', time: '0:0:00', status: [3, 0, 0] },
    { id: 2622, release: 'R.1.1.1', cycle: 3, user: 'arpijain', machine: 'AAP-5CD220BXV3', start: '2025-05-26 22:49:18', time: '0:2:11', status: [1, 0, 1] },
  ];

  return (
    <div className="data-table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Release</th>
            <th>Cycle</th>
            <th>Username</th>
            <th>Machine</th>
            <th>StartTime</th>
            <th>TimeTaken</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((row) => (
            <tr key={row.id}>
              <td className="cell-id">#{row.id}</td>
              <td>{row.release}</td>
              <td>{row.cycle}</td>
              <td>{row.user}</td>
              <td>{row.machine}</td>
              <td>{row.start}</td>
              <td>{row.time}</td>
              <td className="cell-status">
                {/* We map over the status array to create the colored blocks */}
                <span className="status-tag pass">{row.status[0]}</span>
                <span className="status-tag warn">{row.status[1]}</span>
                <span className="status-tag fail">{row.status[2]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;