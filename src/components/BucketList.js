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


  onTrashClick = (index) => {
    this.props.onRemoveBucketItem(index);
  }

  onCheckClick = (index) => {
    this.props.onToggleCheck(index);
  }

  bucketItems() {
      if(this.props.bucketList !== undefined && this.props.bucketList.length !== 0) {
        console.log(`the bucket list items are: ${this.props.bucketList}`);
        const listItems = this.props.bucketList.map((item, index) => {
          if (item.checked === false) {
            return (
              <li key={index}>
                <span>{item.input}</span>
                <i className="trash alternate outline icon" onClick={(e) => this.onTrashClick(index)}></i>
                <i className="circle outline icon" onClick={(e) => this.onCheckClick(index)}></i>
              </li>
            );
          }
          else if (item.checked === true){
            return(
              <li key={index}>
                <span className="checked">{item.input}</span>
                <i className="trash alternate outline icon" onClick={(e) => this.onTrashClick(index)}></i>
                <i className="check circle outline icon" onClick={(e) => this.onCheckClick(index)}></i>
              </li>
            );
          }


          // <li key={index}>
          //   {item.input}
          //   <i className="trash alternate outline icon" onClick={(e) => this.onTrashClick(index)}></i>
          //   <i className="circle outline icon"></i>
          // </li>
        });
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
