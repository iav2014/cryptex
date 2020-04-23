try {
  require('./cryptex').unpack(process.env.CRYPTEXKEY)();
} catch(err) {
  console.error('cryptex error: ' + err.message);
}

