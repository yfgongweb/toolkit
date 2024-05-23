import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Segmented } from 'antd';
import './Popup.scss';

const Popup = () => {
  return (
    <div className="App">
      <Flex gap="small" align="flex-start" vertical>
        <Segmented
          onChange={(e) => {
            console.log(e);
            chrome.tabs.create({
              url: chrome.runtime.getURL('Newtab.html'),
            });
          }}
          options={[
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                  <div>查看JSON</div>
                </div>
              ),
              value: 'user1',
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                  <div>代码对比</div>
                </div>
              ),
              value: 'user2',
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<UserOutlined />}
                  />
                  <div>常用工具</div>
                </div>
              ),
              value: 'user3',
            },
          ]}
        />
      </Flex>
    </div>
  );
};

export default Popup;
