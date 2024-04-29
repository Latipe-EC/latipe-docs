import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Microservice',
    Svg: require('@site/static/img/microservices1.svg').default,
    description: (
      <>
        Sử dụng kiến trúc microservice cho toàn bộ hệ thống đáp ứng yêu cầu depenendency, scalability và availability.
      </>
    ),
  },
  {
    title: 'Đa dạng công nghệ',
    Svg: require('@site/static/img/code-svgrepo-com.svg').default,
    description: (
      <>
        Tích hợp nhiều công nghệ như: <code>Golang(Fiber)</code>,<code>Java(Spring)</code>, <code>Docker/K8s</code>, <code>MySQL</code>, <code>MongoDB</code>...
      </>
    ),
  },
  {
    title: 'Eccomerce Platform',
    Svg: require('@site/static/img/cart-shop-ecommerce.svg').default,
    description: (
      <>
        Xây dựng nền tảng thương mại điện tử (C2C) cho phép người dùng mua bán hàng hóa, dịch vụ trực tuyến. Tích hợp các tính năng thanh toán hiện đại.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
