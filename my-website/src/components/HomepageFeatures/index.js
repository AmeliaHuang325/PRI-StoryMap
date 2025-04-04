import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Innovator',
    image: require('@site/static/img/pri-image-1.jpg').default,
    description: (
      <>
        An innovator that explores technologies, tools, models, and other approaches to 
        prepare and respond to public health crises
      </>
    ),
  },
  {
    title: 'Connector',
    image: require('@site/static/img/pri-image-2.jpg').default,
    description: (
      <>
        DA connector that brings together diverse city stakeholders to create a whole of city response 
        inclusive of governmental agencies, private sector, community organizations as well as academic 
        and research entities.
      </>
    ),
  },
  {
    title: 'Facilitator',
    image: require('@site/static/img/pri-image-3.jpg').default,
    description: (
      <>
        A facilitator, supporting distillation of lessons learned to inform future preparedness, 
        response, and recovery from major health crises.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
