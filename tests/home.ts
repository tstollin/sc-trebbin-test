import { Selector } from 'testcafe';

fixture `homepage sc-trebbin.de`
    .page `http://www.sc-trebbin.de`;

test('loads', async t => {
    const headerText = Selector('.page-title').innerText
    await t.expect(headerText).eql('Herzlich Willkommen auf der Internetseite des SC Trebbin!')
});

test('shows 3 posts each having at least one category from handball, leichtathletik, verein', async t => {
    const posts = Selector('div.entry-content').find('.post')
    const numPosts = await posts.count
    await t.expect(numPosts).eql(3)
    for (let postCount = 0; postCount < numPosts; postCount++) {
        const matchingCategories = posts
                                    .nth(postCount)
                                    .find('span.cat-links')
                                    .find('a')
                                    .withText(/Verein|Handball|Leichtathletik/)
       await t
           .expect(matchingCategories.count)
           .gte(1)
    }
});

test('has linked post', async t => {

});


test('shows category of post', async t => {

});

test('has 5 recent posts widget', async t => {
    const recentPosts = Selector('.sidebar')
                        .find('[id*=recent-posts]')
                        .find('ul[class*=posts-list]')
                        .find('li')
    await t.expect(recentPosts.count).eql(5)
});

test('has sponsors widget with 3 random sponsors', async t => {

});

test('has facebook feed widget', async t => {

});

