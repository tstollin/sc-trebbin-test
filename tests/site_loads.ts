import { Selector } from 'testcafe';

fixture `sc-trebbin.de`
    .page `http://www.sc-trebbin.de`;

test('site loads', async t => {
    const headerText = Selector('.site-title').find('a')
    const text = headerText.innerText
    await t.expect(text).eql('Webseite des SC Trebbin')
});