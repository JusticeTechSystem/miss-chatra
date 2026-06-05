// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4a6Lwj+Tvv8iMjZ2gu2NYCK4NAu/uf2VN5NTFH+CiDjBeXLTuciKx7mCcdP/oR+J6JN4bysP4YW89ggEblbjvs0MoQmC5MFAIhVV6gYzX5uqtDk/m61IeDo+uklER3XnTSzlj/vYfI8eZn8sNVOQ8nUUfapZJmeavLjpeys/Zy0KkrA0EQoWJtL7jzKyOOK/tq53l6lM5l+jaDMQvpdYUThTAzkvCTLSNLUzo3aqKX5ZIQOcZiglYML/cH2PuObyn507yBehbXmxWMHLtaAoyKOYN51tlv2k66uQJxIdlpnRlK0m/hblo7GQXTA/S7tKLJERU5chKMfHqbVFAKGuAFxOSsvrXK+z3cbjKi0qUPwD5Z6YpKwsFpjG+oFu/ipQlyQVFmUmhWm6/DGwHcZTMFbrF25iSc0bMWeEPhK8vujoSqqGK6QQCbWoeH9uEXJq5PFzU+YgDo1rSHVn6d8OPaKbLbP+sH9LXToluvZ3cMjEpzNxIjG2Zu7+5jjP4Pk2UZ5xTY3WgFaeBFzStvDLSRIetheLirtsZKdi5JkqMmd9GWhIJBvwCKyVimrLZUASsIHT2nzPCFuwCfbYn6qOMPgfrAPK8CKoWeo+srLIVE0ihzL+VK5eVZ4xjiTaJIPDJfMMFn+ZHpOMeGUe8hGAYqsCKmUwwqZBBST+5B7buJPvcoQf6Ce3dnv3+MbL5494LwyCxG5FRD0H4+6XHfkasvDVRRcDl1uQ6vsuEz4qVTTFAzLnvpyFGpwegeqswrnwtkWuCS/YY76rF/4WWKL+J49o13C/y3e/Dsr7RsInIxMoQe81GbGECRPF6FnfUoB5yYR68OoncQNY3+AIzOmwJj6DtVCEPwWnHp5lOh9qrqEIudEBGdiTQ7o8GLbALvpsMKghPGA0BwW9mDf1r+F+VjLV0F5iuSh1ghjv0RcST6SkF63yf7LcvEA73WlK3GS+UyS7ShYa9oLUbdaR00XKCEjuU9DnJWCKMoo+JEDSGraJY51LK17al++YcojfAlFaICJtE0hsufYGqgY6HMyrH1DUlQtMftpz5e/bmWNHf45iyXnzo3W5DpCn0pnEXhgR7hflEzUQaLHOO/0GSVtX+O44g/Dn9KlOvcuP9PKsXjCKgkKWd5VpeCyBbE+Vi62TkHff4fRfdMiZM0qhncrsw+WjmBnhmgl0M1YYLXG3EWsfbPGCs/B9Y8hUoEfJZGd9gnXWTJUK+Xw=';const _IH='832fea26c2dc4ceba36d33ad6fdf8ce93ca1016c7e499e40046d905a2a80b5e0';let _src;

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
