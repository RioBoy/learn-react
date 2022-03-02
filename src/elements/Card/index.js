import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons';

library.add(faAws, faAmazonPay, faAmazon);

export default function Card({ type, name }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="bg-card-header">
          <FontAwesomeIcon
            icon={[type, name]}
            size="3x"
            style={{ color: 'white' }}
          />
        </div>
      </div>
      <div className="card-body">
        <h5>This is Feature</h5>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </p>
      </div>
    </div>
  );
}
