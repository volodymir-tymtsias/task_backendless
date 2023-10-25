import React from 'react';

const DummyTable = () => {
  return (
    <div className="box table-container">
      <h1 className="title">Dummy Table</h1>
      <table className="table is-striped is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Dummy Table</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DummyTable;

