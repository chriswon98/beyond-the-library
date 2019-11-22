import React from 'react';
import { Card, Container, Grid, Image, Header, Button, Label, Icon } from 'semantic-ui-react';

class MySpots extends React.Component {
  render() {
    return this.renderPage();
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Card.Group>
            <Card fluid color='orange' height='200px'>
              <Card.Content>
                <Grid container>
                  <Grid.Column width={3}>
                    <Image verticalAlign='middle' fluid rounded
                        // eslint-disable-next-line max-len
                           src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=1200&quality=80"/>
                  </Grid.Column>
                  <Grid.Column width={9}>
                    <Header as='h3'>XP Hill</Header>
                    <Header as='h4'>Location: Somewhere in the earth</Header>
                    <Header as='h4'>Description: Everyone knows this spot.</Header>
                  </Grid.Column>
                  <Grid.Column width={3} rows='2' stretched>
                    <Grid.Row>
                      <Label size='large'>
                        <Icon name='circle outline' color='orange'/> Pending
                      </Label>
                    </Grid.Row>
                    <Grid.Row>
                      <Button.Group>
                        <Button color='blue'>Edit</Button>
                        <Button.Or/>
                        <Button negative>Reject</Button>
                        <Button.Or/>
                        <Button positive>Publish</Button>
                      </Button.Group>
                    </Grid.Row>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>


            <Card fluid color='green' height='200px'>
              <Card.Content>
                <Grid container>
                  <Grid.Column width={3}>
                    <Image verticalAlign='middle' fluid rounded
                        // eslint-disable-next-line max-len
                           src="https://cdn.britannica.com/s:700x500/97/94197-050-8225D2EE/coastline-Pacific-Ocean-California-Big-Sur.jpg"/>
                  </Grid.Column>
                  <Grid.Column width={9}>
                    <Header as='h3'>Pacific Ocean</Header>
                    <Header as='h4'>Location: Somewhere in the earth</Header>
                    <Header as='h4'>Description: Study like a fish.</Header>
                  </Grid.Column>
                  <Grid.Column width={3} rows='2' stretched>
                    <Grid.Row>
                      <Label size='large'>
                        <Icon name='check' color='green'/> Published
                      </Label>
                    </Grid.Row>
                    <Grid.Row>
                      <Button.Group>
                        <Button color='blue'>Edit</Button>
                        <Button.Or/>
                        <Button negative>Delete</Button>
                        <Button.Or/>
                        <Button active>Archive</Button>
                      </Button.Group>
                    </Grid.Row>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>

            <Card fluid color='grey' height='200px'>
              <Card.Content>
                <Grid container>
                  <Grid.Column width={3}>
                    <Image verticalAlign='middle' fluid rounded
                        // eslint-disable-next-line max-len
                           src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hawaii-volcano-kilauea-1526073605.jpg?crop=0.99975xw:1xh;center,top&resize=980:*"/>
                  </Grid.Column>
                  <Grid.Column width={9}>
                    <Header as='h3'>Kilauea volcano</Header>
                    <Header as='h4'>Location: Somewhere in the earth</Header>
                    <Header as='h4'>Description: My love for study is like this volcano.</Header>
                  </Grid.Column>
                  <Grid.Column width={3} rows='2' stretched>
                    <Grid.Row>
                      <Label size='large'>
                        <Icon name='archive' color='grey'/> Archived
                      </Label>
                    </Grid.Row>
                    <Grid.Row>
                      <Button.Group>
                        <Button color='blue'>Edit</Button>
                        <Button.Or/>
                        <Button negative>Delete</Button>
                        <Button.Or/>
                        <Button positive>Publish</Button>
                      </Button.Group>
                    </Grid.Row>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>

    );
  }
}

export default MySpots;