describe('clinical:hl7-resources-binarys', function () {
  var server = meteor();
  var client = browser(server);

  it('Binarys should exist on the client', function () {
    return client.execute(function () {
      expect(Binarys).to.exist;
    });
  });

  it('Binarys should exist on the server', function () {
    return server.execute(function () {
      expect(Binarys).to.exist;
    });
  });

});
