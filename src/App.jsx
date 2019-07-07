import React, { Component } from "react";
import axios from "axios";
import { List, Pagination } from "antd";
import styled from "styled-components";
import { makchaAPI } from "./api";

const HeaderText = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class App extends Component {
  state = { content: [], pageSize: 5 };
  componentDidMount() {
    makchaAPI.getFeedback(0, this.state.pageSize).then(res => {
      console.log(res.data);
      this.setState({
        content: res.data.content,
        totalPages: res.data.totalPages
      });
    });
  }

  onChange = page => {
    this.setState({
      current: page
    });

    makchaAPI.getFeedback(page - 1, this.state.pageSize).then(res => {
      this.setState({
        content: res.data.content
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <List
        header={<HeaderText>막차 운영 시스템</HeaderText>}
        // current={this.state.current}
        footer={
          <PaginationContainer>
            <Pagination
              current={this.state.current}
              defaultPageSize={this.state.pageSize}
              defaultCurrent={1}
              total={this.state.totalPages}
              onChange={this.onChange}
            />
          </PaginationContainer>
        }
        bordered
        dataSource={this.state.content}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<p>{item.createdDate}</p>}
              description={"사용자: " + item.uid}
            />
            {item.feedback}
          </List.Item>
        )}
      />
    );
  }
}

export default App;
