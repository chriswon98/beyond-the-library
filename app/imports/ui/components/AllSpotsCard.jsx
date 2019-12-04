import React from 'react';
import { Card, Image, Grid, Header, Label, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AllSpotsCard extends React.Component {
  icon() {
    if (this.props.spot.status === 'Pending') {
      return (<Icon name='circle outline' color='orange'/>);
    }
    if (this.props.spot.status === 'Published') {
      return (<Icon name='check' color='green'/>);
    }
    if (this.props.spot.status === 'Rejected') {
      return (<Icon name='reply' color='red'/>);
    }
    return (<Icon name='archive' color='grey'/>);
  }

  button() {
    if (this.props.spot.status === 'Pending') {
      return (
          <Button.Group>
            <Button color='blue'>Edit</Button>
            <Button.Or/>
            <Button negative>Reject</Button>
            <Button.Or/>
            <Button positive>Publish</Button>
          </Button.Group>
      );
    }
    if (this.props.spot.status === 'Published') {
      return (
          <Button.Group>
            <Button color='blue'>Edit</Button>
            <Button.Or/>
            <Button negative>Delete</Button>
            <Button.Or/>
            <Button color='gray'>Archive</Button>
          </Button.Group>
      );
    }
    if (this.props.spot.status === 'Archived') {
      return (
          <Button.Group>
            <Button color='blue'>Edit</Button>
            <Button.Or/>
            <Button negative>Delete</Button>
            <Button.Or/>
            <Button positive>Publish</Button>
          </Button.Group>
      );
    }
    return (<Header as='h4'>Waiting for User</Header>);
  }

  render() {
    return (
        <Card fluid height='200px' centered>
          <Card.Content>
            <Grid container>
              <Grid.Column width={3}>
                <Image verticalAlign='middle' fluid rounded centered
                       src={this.props.spot.image}/>
              </Grid.Column>
              <Grid.Column width={9}>
                <Header as='h3'>{this.props.spot.name}</Header>
                <Header as='h4'>Location: {this.props.spot.location}</Header>
                <Header as='h4'>Description: {this.props.spot.description}</Header>
                <Header as='h4'>Owner: {this.props.spot.owner}</Header>
              </Grid.Column>
              <Grid.Column width={3} rows='2' stretched>
                <Grid.Row>
                  <Label size='large'>
                    {this.icon()}
                    {this.props.spot.status}
                  </Label>
                </Grid.Row>
                <Grid.Row>
                  {this.button()}
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
AllSpotsCard.propTypes = {
  spot: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(AllSpotsCard);