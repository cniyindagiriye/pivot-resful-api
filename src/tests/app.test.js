import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { assert } = chai;
chai.use(chaiHttp);

describe('Test app', () => {
  it('Is app on', (done) => {
    assert.isNotNull(app, 'app should be on');
    done();
  });
  it('Test GET /', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        assert.isObject(res.body);
        assert.equal(res.status, 200, 'Status should be 200-Ok');
        done();
      });
  });
});

describe('Test GET /q2?user_id=<ID>&type=<TYPE>&phrase=<PHRASE>&hashtag=<HASHTAG>', () => {
  it('it should return retweets with type=retweet', (done) => {
    chai
      .request(app)
      .get(`/q2?user_id=1112745398&type=retweet&phrase=ok&hashtag=rw`)
      .end((err, res) => {
        assert.isObject(res.body);
        assert.equal(res.status, 200, 'Status should be 200-Ok');
        done();
      });
  });

  it('it should return reply tweets with type=reply', (done) => {
    chai
      .request(app)
      .get(`/q2?user_id=1112745398&type=reply&phrase=ok&hashtag=rw`)
      .end((err, res) => {
        assert.isObject(res.body);
        assert.equal(res.status, 200, 'Status should be 200-Ok');
        done();
      });
  });

  it('it should return both tweets with type=both', (done) => {
    chai
      .request(app)
      .get(`/q2?user_id=1112745398&type=both&phrase=ok&hashtag=rw`)
      .end((err, res) => {
        assert.isObject(res.body);
        assert.equal(res.status, 200, 'Status should be 200-Ok');
        done();
      });
  });
});
