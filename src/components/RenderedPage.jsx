import React from 'react';
import { useState } from 'react';
import Header from './Header.jsx';
import ComponentTree from './ComponentTree.jsx';
import Visualizer from './Visualizer.jsx';
import FileList from './FileList.jsx';
import IndividualComponent from './IndividualComponent.jsx';

// Page that will show once directory has been imported
export default function RenderedPage(props) {
  const [view, useView] = useState('full');

  return (
    <div className='renderedPage' data-testid="RenderedPage" >
      <Header />
      {view === 'full' ? (
        <div className='container'>
          <p>
            Below is your entire application rendered as well as a fiber tree
            representing the elements currently on the page. <br />
            If you would rather render individual components, please click here.
          </p>
          <button onClick={() => useView('individual')}>
            Individual Components
          </button>
          <ComponentTree />
          <Visualizer />
        </div>
      ) : (
        <div className='container'>
          {' '}
          <p>
            Below is a list of the individual components you uploaded. Click on
            any one of them to see it rendered. <br />
            If you would rather render your entire application, please click
            here.
          </p>
          <button onClick={() => useView('full')}>Entire Application</button>
          <FileList files={props.filesArr} />
          <IndividualComponent />
        </div>
      )}
    </div>
  );
}
