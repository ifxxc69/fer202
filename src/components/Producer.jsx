import React from 'react';
import { producers } from '../data';

export default function Producer() {
  return (
    <div className="mt-4">
      <h3>Producers</h3>
      <div className="list-group">
        {producers.map((producer) => (
          <div key={producer.id} className="list-group-item">
            {producer.Name}
          </div>
        ))}
      </div>
    </div>
  );
}
