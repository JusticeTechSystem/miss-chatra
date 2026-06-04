// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Naua2ZpMvvSjW0A8iNGoBpMnStBdZKlNMQX5L9qpM2FmTzfJyUU34J/9WvF0oIgX1/S6azPvGxCTd9Nh07BZ9hrrxKKcC3Jy8bVLiH7Fv72Tu9Heko5mV2CU3pJ7hr4QL3Fa+gbAf36Z6LJco5/193rSXmWjwAAdUw7ZrfKKfY8FCLW/gjLH0rw0q6bhhARk8QclurY4j1Ug9WRTRzlHL+xgZnn/vHr4j7FFQpi9eAl6Sn7OVl+G88DsjODXE8ZUOnW/0hYgJluHuzeIj/vNRDgAuPeCOb71Dxo+c18Zec/oQvP0wnri3HUbMmOWDBceDDtJ20+LKXq08sPMqzKulw3cKiw9KIz5+e+wEa+SH5Eacba5GzeGmu9YMmRIUo5gYs5wdpbCYSwMzTZd+h9VjV3BW/OM4DUZbrxgwDbDAp8PXxHtg/CYufIg6OlKjlU6sE5T9Rx4L+uBu0JinTt+Xz4R6jPOArQLTSWU/PsbEEnn8pUwyHMBn9mkXkJHaT7Ha+ujGdKD97WlKr/ZMQKdh0f2QF/QGL4KaJU5qTwOS59dVpKALi+R60pfIt7K6wPk4JvvklHjygAvdRkNKGKRsN9beMeTLj8M5uxJd1cE79KobL6B4JFfwgrrOIyPRqIEhEIisyYCsf30iAJwnBuvLHsMz2OpNantfMITwyH5bjr/cARGobKePqS7A10qf/dzGe+RQrPrr3RD/984T6Jrbn/8BbMoNUoN1ZWNq+mLBIV6KevpTPFDHyBsL90dRe3obiIQlcwG3H1/g/bAvEIkknWP7VgqCyATA+9bV8dAYIGNdyYwyVWQyhnJpNXQKd/o5eIwe+eSDqoHo7Sr/qMHAewF5grg0Qo+4GbR5Ke7iYeMXPUe9gFXeOUj9VeGh9Cvmb/DL3QAPJGpLoV5wS0G65oGhVe1/qWfkwQbtoJ1V9D3wqdioO6ghVqqTQXRs3BV6A7kTYUkChSJ+K+Z3TboPKGalkR1zU89u5DK+G6YJvUtCP+g9kM/T8R7fVxiDsfJGw8yvWAyfEFcTNozemeKinKSTZ7VV3Z7BwbJcJ9Ebdjq+UZB1zhKLpNu+eoQOo40WgGmTgwzBFzWROBGW0H3N0NGXwVgE/Hi8092tmjJNLkKCSEXy2iINDSm4I9IHiZmybBjiocFTBeCKhFQkOM7kLbbf+aDUEeNJqbrHp84EUN6opDs8dmqTNns7Mf7i342Or4ZJ3TjhJ70wqMx8YGJ/F5kOd5xk/rO5vEdtfZjN0I5dsQ4hA/+XRzQTvcSOwyrwlNSYBymqA8Hag9x7fJjernxVZGDjG4CHWvlmpyOEwGmspMYeVrNw8154GbRVwyh5RlhNf3iLNudldMWJC+4Lvj94Wbs831LNW/vONI+';const _IH='ad7bace78d9f04d4318b91b07126c9bb91c6cacdc066d3912f0286215f9c8194';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
