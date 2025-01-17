import React from 'react';
import Tree from 'react-tree-graph';
import data from '../data.ts';
import '../tree.css';

// Component Tree for React Fiber Tree
// Currently renders a head node and a node component
// Probably will need to change once we figure out how to show the tree

export default function ComponentTree() {
  return (
    <div className='componentTree' data-testid="ComponentTree">
      <div className='treeGraph'
      data-testid="Tree">
        <Tree
          svgProps={{
            transform: 'rotate(90)',
          }}
          animated={true}
          data={data}
          nodeRadius={15}
          margins={{ top: 20, bottom: 10, left: 20, right: 20 }}
          gProps={{
            className: 'node',
          }}
          height={400}
          width={400}
        />
        <br />
        <button>Refresh Tree</button>
      </div>
      {/* <HeadNode />
      <Node /> */}
    </div>
  );
}
