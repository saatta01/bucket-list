import React from 'react';
import InputBar from './InputBar';
import BucketList from './BucketList';
import '../stylesheets/App.css'

class App extends React.Component {
  state = {
    bucketList: []
  };

  onBucketItemAdd = (bucketListItem) => {
    this.setState({ bucketList: [...this.state.bucketList, bucketListItem] });
    console.log(this.state.bucketList);
  };

  onRemoveBucketItem = (index) => {
    if(this.state.bucketList !== undefined && this.state.bucketList.length !== 0) {
      console.log(index);
      console.log(`you're trying to delete ${this.state.bucketList[index]}`);
      this.setState({
        bucketList: [...this.state.bucketList.slice(0,index), ...this.state.bucketList.slice(index+1)]
      });
      console.log(this.state.bucketList);
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="outerWrap">
          <div className="lowerLayer"></div>
          <div className="bucketMain">
            <div className="header">
              <h1> My Bucket List </h1>
            </div>
            <InputBar onSubmit={this.onBucketItemAdd} />
            <BucketList bucketList={this.state.bucketList} onRemoveBucketItem={this.onRemoveBucketItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
