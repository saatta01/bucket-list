import React from 'react';
import '../stylesheets/BucketList.css';


class BucketList extends React.Component {
  // onTrashClick = (index) => {
  //   if(this.props.bucketList !== undefined && this.props.bucketList.length !== 0) {
  //     console.log(index);
  //     console.log(`you're trying to delete ${this.props.bucketList[index]}`);
  //     this.setState({
  //       bucketList: [...this.props.bucketList.slice(0,index), ...this.props.bucketList.slice(index+1)]
  //     });
  //     console.log(this.props.bucketList);
  //
  //
  //   }
  // }

  state = {
    inactiveItems: [],
    activeItems: []
  };

  onTrashClick = (index) => {
    this.props.onRemoveBucketItem(index);
  }

  bucketItems() {
      if(this.props.bucketList !== undefined && this.props.bucketList.length !== 0) {
        console.log(`the bucket list items are: ${this.props.bucketList}`);
        const listItems = this.props.bucketList.map((item, index) => (
          <li key={index}>
            {item}
            <i className="trash alternate outline icon" onClick={(e) => this.onTrashClick(index)}></i>
            <i className="circle outline icon"></i>
          </li>
        ));
        return (
          <ul>{listItems}</ul>
        )
      } else {
        console.log("There are NO bucket list items in the state object");
      }
  }

  render() {
    return (
      <div>{this.bucketItems()}</div>
    );
  }
}


export default BucketList;
