const config = require('../../config');
const request = require("supertest");
const app = require('../../index');
require('chai').should();

describe('Post Route', () =>{

    it('Create Post One', done =>{
        request(app.listen())
            .post('/api/posts')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.postOne,
                owners: [config.userOne, config.userTwo],
                comments: [{author: config.userOne, text: 'Hello World'}],
            })
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userOne);
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Post Two', done =>{
        request(app.listen())
            .post('/api/posts')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.postTwo,
                owners: [config.userTwo, config.userThree],
                comments: [{author: config.userTwo, text: 'Hello World'}],
            })
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userTwo);
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Post Three', done =>{
        request(app.listen())
            .post('/api/posts')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.postThree,
                owners: [config.userThree, config.userOne],
                comments: [{author: config.userThree, text: 'Hello World'}],
            })
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userThree);
                response.body.owners.length.should.equal(2);
                done()
            });
    });

    it('Find Post One', done =>{
        request(app.listen())
            .get('/api/posts/' + config.postOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userOne);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.comments.length; i--;) response.body.comments[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Post Two', done =>{
        request(app.listen())
            .get('/api/posts/' + config.postTwo)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userTwo);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.comments.length; i--;) response.body.comments[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Post Three', done =>{
        request(app.listen())
            .get('/api/posts/' + config.postThree)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.comments[0].author.should.equal(config.userThree);
                response.body.relative.should.equal('a few seconds ago');
                for(let i = response.body.comments.length; i--;) response.body.comments[i].relative.should.equal('a few seconds ago');
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });

    it('Update Post One', done =>{
        request(app.listen())
            .put('/api/posts/' + config.postOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .send({
                owners: [config.userOne, config.userTwo],
                comments: [{author: config.userOne, text: 'Post Update Test'}],
            })
            .then(response =>{
                response.body.owners.length.should.equal(2);
                response.body.comments.length.should.equal(2);
                response.body.comments[1].text.should.equal('Post Update Test');
                done();
            });
    });

    it('List All Posts', done =>{
        request(app.listen())
            .get('/api/posts')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });

    it('List User One Posts', done =>{
        request(app.listen())
            .get('/api/posts/' + config.userOne + '/course' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response => {
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Two Posts', done =>{
        request(app.listen())
            .get('/api/posts/' + config.userTwo + '/course' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Three Posts', done =>{
        request(app.listen())
            .get('/api/posts/' + config.userThree + '/course' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });

});


