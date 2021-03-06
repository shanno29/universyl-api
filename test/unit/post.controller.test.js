const controller = require('../../api/post/post.controller.js');
const config = require('../../config');
require('chai').should();

describe('Post Controller', () =>{
    it('Create Post No ID', done =>{
        controller
            .make({
                owners: [config.userOne, config.userTwo],
                comments: [{author: config.userOne, text: 'Hello World'}],
            })
            .then(response =>{
                response.comments[0].author.equals(config.userOne);
                response.owners.length.should.equal(2);
                return controller.remove(response._id);
            })
            .then(response => {
                response.comments[0].author.equals(config.userOne);
                response.owners.length.should.equal(2);
                done();
            })
    });
    it('Create Post', done =>{
        controller
            .make({
            _id: config.postOne,
            owners: [config.userOne, config.userTwo],
            comments: [{author: config.userOne, text: 'Hello World'}],
        })
            .then(response => {
                response.comments[0].author.equals(config.userOne);
                response.owners.length.should.equal(2);
                done();
            });
    });
    it('Update Post', done =>{
        controller
            .edit(config.postOne, {
                owners: [config.userOne, config.userTwo],
                comments: [{author: config.userOne, text: 'Post Update Test'}],
            })
            .then(response => {
                response.owners.length.should.equal(2);
                response.comments.length.should.equal(2);
                response.comments[1].text.should.equal('Post Update Test');
                done();
            })
    });
    it('Find Post', done =>{
        controller
            .lookup(config.postOne)
            .then(response => {
                response.comments[0].author.equals(config.userOne);
                response.relative.should.equal('a few seconds ago');
                for(let i = response.comments.length; i--;) response.comments[i].relative.should.equal('a few seconds ago');
                done();
            });
    });
    it('List Posts', done =>{
        controller
            .listAll()
            .then(response => {
                response.length.should.equal(1);
                done();
            });
    });
    it('List User Posts', done =>{
        controller
            .listUser(config.userOne)
            .then(response => {
                response.length.should.equal(1);
                done();
            })
    });
    it('Delete Post', done =>{
        controller
            .remove(config.postOne)
            .then((response) => {
                response.comments[0].author.equals(config.userOne);
                response.owners.length.should.equal(2);
                done();
            });
    });

});