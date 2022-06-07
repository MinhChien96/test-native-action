import React, { useState } from 'react';
import { Button, Input, Col, Row } from 'antd';
import './App.scss';

const { TextArea } = Input;

function App() {
    const [type, setType] = useState('');
    const [data, setData] = useState('');

    const handleReset = () => {
        setType('');
        setData('');
    };

    const handleTest = () => {
        if (data && JSON.parse(data)) {
            const actionData = {
                type,
                data: JSON.parse(data),
            };
            window?.ReactNativeWebView?.postMessage(JSON.stringify(actionData));
        } else {
            const actionData = {
                type,
            };
            window?.ReactNativeWebView?.postMessage(JSON.stringify(actionData));
        }
    };

    return (
        <div className='container'>
            <Row>
                <Col span={24}>
                    <Input
                        addonBefore='TYPE'
                        size='large'
                        placeholder='Ví dụ: GO_BACK'
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <TextArea
                        rows={8}
                        size='large'
                        placeholder='Data - Ví dụ: { "tel": "HOTLINE" }'
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </Col>
            </Row>
            <Row gutter={10}>
                <Col span={12}>
                    <Button
                        type='primary'
                        size='large'
                        style={{ width: '100%' }}
                        onClick={handleTest}
                    >
                        Test
                    </Button>
                </Col>
                <Col span={12}>
                    <Button size='large' style={{ width: '100%' }} onClick={handleReset}>
                        Reset
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default App;
