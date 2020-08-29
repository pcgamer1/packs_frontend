import React, {useState, useEffect} from 'react';
import {FlowForm} from '../../forms/flow.form';
import TableWithTabHOC from '../../hocs/TableWithTab.hoc';
import flowsColumns from 'common/columns/Flows.column';
import KitsTable from '../../components/KitsTable';
import {Popconfirm, Button, Input} from 'antd';
import {deleteFlow, retreiveFlows} from 'common/api/auth';
import {deleteHOC} from '../../hocs/deleteHoc';
import Delete from '../../icons/Delete';
import Edit from '../../icons/Edit';
import {connect} from 'react-redux';
import {useTableSearch} from 'hooks/useTableSearch';

const {Search} = Input;

const FlowEmployeeScreen = ({currentPage}) => {
  const [searchVal, setSearchVal] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [csvData, setCsvData] = useState(null);

  const {filteredData, loading, reload} = useTableSearch({searchVal, retrieve: retreiveFlows});

  useEffect(() => {
    if (filteredData) {
      console.log(filteredData);
      let csvd = [];
      filteredData.forEach((d) => {
        let temp = {
          ...d,
          ['sender_client']: d.sender_client.client_name,
          ['receiver_client']: d.receiver_client.name,
        };
        delete temp['kits'];
        delete temp['owner'];
        csvd.push(temp);
        d['kits'].forEach((k) => {
          csvd.push({
            KitName: k.kit.kit_name,
            Quantity: k.quantity,
            ComponentPM: k.component_pm,
            TripCost: k.trip_cost,
          });
        });
      });
      setCsvData(csvd);
    }
  }, [filteredData]);

  const cancelEditing = () => {
    setEditingId(null);
  };

  const columns = [
    {
      title: 'Sr. No.',
      key: 'srno',
      render: (text, record, index) => (currentPage - 1) * 10 + index + 1,
    },
    ...flowsColumns,
    {
      title: 'Action',
      key: 'operation',
      width: '7vw',
      render: (text, record) => (
        <div className="row justify-evenly">
          <Button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: '1px',
            }}
            onClick={(e) => {
              setEditingId(record.id);
              e.stopPropagation();
            }}>
            <Edit />
          </Button>
          <Popconfirm
            title="Confirm Delete"
            onConfirm={deleteHOC({
              record,
              reload,
              api: deleteFlow,
              success: 'Deleted Flow successfully',
              failure: 'Error in deleting flow',
            })}>
            <Button
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none',
                padding: '1px',
              }}
              onClick={(e) => e.stopPropagation()}>
              <Delete />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const tabs = [
    {
      name: 'All Flows',
      key: 'allFlows',
      data: filteredData,
      columns,
      loading,
    },
  ];

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div style={{width: '15vw', display: 'flex', alignItems: 'flex-end'}}>
          <Search onChange={(e) => setSearchVal(e.target.value)} placeholder="Search" enterButton />
        </div>
      </div>
      <br />
      <TableWithTabHOC
        rowKey={(record) => record.id}
        refresh={reload}
        tabs={tabs}
        size="middle"
        title="Flows"
        editingId={editingId}
        cancelEditing={cancelEditing}
        modalBody={FlowForm}
        modalWidth={50}
        expandHandleKey="kits"
        expandParams={{loading}}
        ExpandBody={KitsTable}
        csvdata={csvData}
        csvname={'Flows' + searchVal + '.csv'}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {currentPage: state.page.currentPage};
};

export default connect(mapStateToProps)(FlowEmployeeScreen);