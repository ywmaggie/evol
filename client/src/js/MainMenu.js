import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';

const styles = {
  wrapper: {
    boxSizing: "border-box",
    display: "inline-block",
    marginBottom: 200,
    width: 240
  }
};

class MainMenu extends React.Component {
  render() {
    const icon = <img alt="heart" src="/images/icon/c_general_love_big.png"/>;
    return (
      <div style={styles.wrapper}>
        <List>
          <ListItem
            containerElement={<Link to = "/" />}
            primaryText="主页"
            leftIcon={icon}/>
          <ListItem
            containerElement={<Link to = "/limited-offers" />}
            primaryText="限时活动"
            leftIcon={icon}/>
          <ListItem
            primaryText="关卡攻略"
            leftIcon={icon}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="普通"
                leftIcon={icon}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    containerElement={<Link to = "/mainline/normal/fast" />}
                    primaryText="快速通关"
                    leftIcon={icon}/>,
                  <ListItem
                    key={2}
                    containerElement={<Link to = "/mainline/normal/perfect" />}
                    primaryText="三星完美通关"
                    leftIcon={icon}/>
                ]}/>,
              <ListItem
                key={2}
                primaryText="精英"
                leftIcon={icon}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    containerElement={<Link to = "/mainline/hard/fast" />}
                    primaryText="快速通关"
                    leftIcon={icon}/>,
                  <ListItem
                    key={2}
                    containerElement={<Link to = "/mainline/hard/perfect" />}
                    primaryText="三星完美通关"
                    leftIcon={icon}/>
                ]}/>,
              <ListItem
                key={3}
                primaryText="拍摄副本"
                leftIcon={icon}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    containerElement={<Link to = "/mainline/film/fast" />}
                    primaryText="快速通关"
                    leftIcon={icon}/>,
                  <ListItem
                    key={2}
                    containerElement={<Link to = "/mainline/film/perfect" />}
                    primaryText="三星完美通关"
                    leftIcon={icon}/>
                ]}/>
            ]}/>
          <ListItem
            primaryText="公司发展"
            leftIcon={icon}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="专家"
                leftIcon={icon}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    containerElement={<Link to = "/company/staff/list" />}
                    primaryText="专家列表"
                    leftIcon={icon}/>,
                  <ListItem
                    key={2}
                    containerElement={<Link to = "/company/staff/recommendation" />}
                    primaryText="人才市场推荐"
                    leftIcon={icon}/>
                ]}/>,
              <ListItem
                key={2}
                containerElement={<Link to = "/company/citynews" />}
                primaryText="城市新闻"
                leftIcon={icon}/>,
              <ListItem
                key={3}
                containerElement={<Link to = "/company/training" />}
                primaryText="部门培训"
                leftIcon={icon}/>
            ]}/>
          <ListItem
            primaryText="票房争夺战"
            leftIcon={icon}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                containerElement={<Link to = "/tickets-battle/tips" />}
                primaryText="攻略"
                leftIcon={icon}/>,
              <ListItem
                key={2}
                containerElement={<Link to = "/tickets-battle/exchange-store" />}
                primaryText="商店兑换"
                leftIcon={icon}/>
            ]}/>
          <ListItem
            primaryText="羁绊"
            leftIcon={icon}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                containerElement={<Link to = "/cards/ssr" />}
                primaryText="SSR"
                leftIcon={icon}/>,
              <ListItem
                key={2}
                containerElement={<Link to = "/cards/sr" />}
                primaryText="SR"
                leftIcon={icon}/>,
              <ListItem
                primaryText="R"
                key={3}
                containerElement={<Link to = "/cards/r" />}
                leftIcon={icon}/>,
              <ListItem
                key={4}
                containerElement={<Link to = "/cards/nh" />}
                primaryText="NH"
                leftIcon={icon}/>,
              <ListItem
                key={5}
                containerElement={<Link to = "/cards/wishing-tree" />}
                leftIcon={icon}primaryText="许愿树兑换推荐"/>
            ]}/>
          <ListItem
            primaryText="其他"
            leftIcon={icon}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                containerElement={<Link to = "/misc/past-activities" />}
                primaryText="往期活动"
                leftIcon={icon}/>,
              <ListItem
                key={2}
                containerElement={<Link to = "/misc/money" />}
                leftIcon={icon}primaryText="氪金攻略"/>,
              <ListItem
                key={3}
                containerElement={<Link to = "/misc/functions-unlock" />}
                primaryText="功能开放"
                leftIcon={icon}/>
            ]}/>
        </List>
      </div>
    );
  }
}

export default MainMenu;
