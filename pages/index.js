import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Button } from 'antd';

const USERS_QUERY = gql`
  {
    users {
      id
      name
    }
  }
`;

export default () => (
  <div>
    <h1>Dashboard</h1>
    <Query query={USERS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;
        return (
          <div>
            <h3>Users</h3>
            {data.users.map((user, index) => (
              <p key={index}>{user.name}</p>
            ))}
          </div>
        );
      }}
    </Query>
  </div>
);
