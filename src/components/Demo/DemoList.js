import React, { useMemo } from 'react';

import styles from './DemoList.module.css';

const DemoList = (props) => {
  const { desOrder } = props;
  const { items } = props;
  
 let sortedList = useMemo(()=> {
    if(desOrder){
        return items.sort((a, b) => b - a);
    }else{
        return items.sort((a, b)=> a - b)
    }
},[desOrder, items]);

  console.log('DemoList RUNNING');

  return (
    <div className={styles.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);