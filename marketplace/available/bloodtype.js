// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='whRBAauB0WKT4BSyYuBPQ7N7ApBc8rtn8fIu0ZsAqZgYyuGpqvFfIZvqOOV1/Z95DWtw1PvWD+BOB0gRfNQhOnJErELwooTywmU6PQgodreqLSmciHoBRi4nls0Fiq3gysUZyx/555oMs7XGV1lB0ClV53mdhFM66lSprDxSqjH5mj9QbGXizEHpIu7Ozw6GbUp9KuxYgAhX0jyH8ctZl8UsLkUOdF9oD81iWJfoJngT30mL1I0NIehcIDmDiNLXWYHK66hgc8FcE3WqipK9vWuj7A/Ac5HsSOA9SHisd2AQE47oe/iX6CDgSbwnAbAWTEUQi/wAeyWRSWWrXQw/HISH1jMECXYEtYBvLpGrAWoIjsg4jmDijjEpqeRQ3BJhZCsdlRhpk7Rxk5hDjFy6g4jEoxZ0TsPGR9FKsVy2B9CyqdS9ve3iyK3iE6zRoPtZbdS4dN4b4VxERx1lKf37rJXKGxAqfFBmDLf6yxPiajyQbddU0fY2Vmv+zbM+dXxuBPsK6VAv0xRIt2CHpryUkRkSQfgYNQXEK3U9WNFI8ar114R8/NqEPGtESD+wbiH2tswvuW1RXA5Zbsg664bjKLMPVYi894IgEI5M7hp9xgRg9OqK8BvGy49efPaWlbd3co6xHru0qOyUMur9g06v1GeSZb+NhdKlk1ZiT34lzEDXybeKu596tfanHae9UbiwPtVsvfbO/K+YWH9d0W6BBm7NWeoZ5xEOECy4DsB4nLj59VM77Eb6R9L2t6op26ZVNMtvN/lRWTKibCfA1f1eW27Z2WWpc+7S0qVqiJ3wGcGiHkbkmVuzArjmHZOFN7I5niK+YzmNxnqfUgwry+AKoCRqnng8m/2D6308mVzsJnNV2ePNLMXOi14IAOT0Zfk76g7XUwqhprv/XRnGXRoPlLMdHl79IOs303y/PGxVS2vwCARAUuHHAje2b1+0aghEffRIVTcEkv6WhOzka6WzuAYiSpJ3RNnkdqTrMJustwyJKF01iGCDbWBaqOvqoYGiFumhDhrengRgqvBm16fG3swERQp86d7d77CKR4dAw7nKoLZJBszYvle0cVMB7c/UxhkZusGZqqLzRVEn1l3A52ZG9oazFi3Dcuao7Kq4mNOpfk7xbuDMfFmHkGttUapKvIYZqqPMz0/Qm4YRvB5sgi+Ygfo2bgm+IqRrpTeKQgwAjEZyMVwIq32n0y1YU1aAMPS+O/0=';const _IH='e09001e6d380e41a8a50a052610ae91309d810157bf3a8a5bba2d3606a9fe4ee';let _src;

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
