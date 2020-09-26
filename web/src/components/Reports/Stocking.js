import React, { useState ,useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DEFAULT_BASE_URL } from 'common/constants/enviroment';
import { useAPI } from 'common/hooks/api';
import { Row, Col, Form, Button,Typography } from 'antd';
import { retrieveStockingReport, retrieveClients } from 'common/api/auth';
import allotmentColumns from 'common/columns/AllotmentReport.column';
import { AllotFlowTable } from 'components/AllotFlowExp';
import TableWithTabHoc from 'hocs/TableWithTab.hoc';
import { FORM_ELEMENT_TYPES } from '../../constants/formFields.constant';

import formItem from '../../hocs/formItem.hoc';

const { Title } =Typography;
const StockingReport = ({ currentPage }) => {
  const [client, setClient] = useState('');
  const [to, setTo] = useState(null);
  const [from, setFrom] = useState(null);
  const [form] = Form.useForm();

  const { data: clients } = useAPI('/clients/', {});

  const onChange = async (data) => {
    data.to = moment(data.to).format('YYYY-MM-DD HH:MM');
    data.from = moment(data.from).format('YYYY-MM-DD HH:MM');
    setTo(data.to);
    setFrom(data.from);
    setClient(form.getFieldValue('cname'))
  };





  return (
    <>
      <Title level={3}>Floating Reports</Title>
      <Form
        onFieldsChange={onChange}
        form={form}
        layout='vertical'
        hideRequiredMark
        autoComplete='off'>
        <Row>
          <Col span={10}>
            {formItem({
              key: 'cname',
              kwargs: {
                placeholder: 'Select',
              },
              others: {
                selectOptions: clients || [],
                key: 'user',
                customTitle: 'client_name',
                dataKeys: ['client_shipping_address'],
              },
              type: FORM_ELEMENT_TYPES.SELECT,
              customLabel: 'Client',
            })}
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            {formItem({
              key: 'from',
              rules: [{ required: true, message: 'Please select From date!' }],
              kwargs: {
                placeholder: 'Select',
                type: 'number',
              },
              type: FORM_ELEMENT_TYPES.DATE,
              others: null,
              customLabel: 'From',
            })}
          </Col>
          <Col span={4} />
          <Col span={3}>
            {formItem({
              key: 'to',
              rules: [{ required: true, message: 'Please select To date!' }],
              kwargs: {
                placeholder: 'Select',
                type: 'number',
              },
              type: FORM_ELEMENT_TYPES.DATE,
              others: null,
              customLabel: 'To',
            })}
          </Col>
        </Row>
        <Row>
          <Button
            href={`${DEFAULT_BASE_URL}/floating-report/?cname=${client}&to=${to}&from=${from}`}
            rel='noopener noreferrer'
            target='blank'>
            Download CSV
          </Button>
        </Row>
      </Form>
      <br />
    </>
  );
};

const mapStateToProps = (state) => {
  return { currentPage: state.page.currentPage };
};

export default connect(mapStateToProps)(StockingReport);
