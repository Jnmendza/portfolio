import { Feature } from "@/types";
import React from "react";

const FeatureList = ({ features }: { features: Feature[] }) => {
  return (
    <div className='space-y-6 mt-4 ml-4'>
      {features.map((feature) => (
        <div key={feature.featureTitle} className='space-y-2'>
          <li className='font-bold text-lg'>{feature.featureTitle}</li>
          <ol className='ml-4'>
            {feature.featurePoints.map((point, index) => (
              <li key={index}>- {point.desc}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
