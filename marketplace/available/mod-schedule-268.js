// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0jNSSByRbkTO7KFzfsW3cuJ3vmfEuDbOa/ujfHk3oDGOvTp2fos1t9k0PMleobwpRAlfSwH60bJY1b2UGy23FAfoadjqrzol7cwTSvTRMP/mOyZ6cDAzwTZT/GOTjwtmpefO07IBxFE+m49Myo9Rd3dm2z8ShMqZg4bd10p9fWCwWUGCzhDLo8VQN5j9aEmnLPlf68/+tgFum62KFxkqWUKqWk77lSQtzqLlHbEVlg4LjT557PQsLSZKDE0Reidgt/CrSb2oXBU+ja3XBvgD5dTbnmtZs2NDyROiOhYn99nKy4UI49vMSGQW+0ixYwjvxeWxa6iaO3ZlA3kCeroOBA0SRtouNn6gegHy3/S6PpSsYDbg7N1Jp0chSd1POLbfcvFC1wNnwtlQ+R1x/coi/lQLlNkPuBEg4EWv6xICsLsISc2Ijl9A45GdMJw+FnGhT3Ig4R1FOMYRFexJLkpOEFk5gvsad+wmlDoZh4O/KM3mwBzHjZFZQKLJImhtx6xKgfdMDUJfxwKLgxyOAiLomfaxeQRDRTB++MSvi92x+8i5EBR7theqr2VdTyOyuV16OSPwMXkYdRhM8WkvfSeOlMgQhCM87zkvXuugpCnwwp0zdLhvC+OSMnWgx9MSBjGM0Cz9Xfh6utoKhI6PKDyYsEXpOg8S5ycEGnKlX681BJOZxn7zT4xABVWuCADgOlL8xKHPrBkGq5taScULkvItIslvUF57L7BH8ULAYR/Z2Y5s94rB53CpTpHfoF4P3XYepzybZO+Sk6uSsXdtJ4+Jv47gTfidP47ccspXCYlGB7wxWhO3i1Ec9/40wUp84asYivrlF/XQ4it2SWzwA2ZYbso8cnxHjFLLeim5CuydyjELiIWafyPOn9HENBFOe71AlviR7VibWP+EdH6VR3JxlLzgRhM6ki6oPRkKXOP7Zveo7OAzJNR08+xN/P2722eamiZStwuvXBGptFUAit8XfSqUJAevsZldux5He1YLTDB9CoWgZzKVFRbaqQ9XKrlwI11Z8mfyENnLU1q7K6XsgLvGC4Nl5yfYOP6aho18lIFE+K5e/w3EH83SbCMSSBpJ7+x8qb66tMJfzU7VY+0c6uYUsL5YL9zSKKGed/mOW3ZsJCo/bulMcrT8HJPOWRQoB/Sd2p0W+ctDr95kI2g1rZYwdTMkI+Xx18awgaPAIlRy/EzwPvnQPuI6bz4mno6QAwML22jbQcbWZv0GpzkJWBi2VQ6EXPgFFIV/tokBhxkDhGVq1xDRDaih4asfUUQHGeYdvxf1upDFKSMBzjGwOQ3Xdk3dL5pSHi7lrPlF4AmQpokW8oW8XjTE7v9SKaEMCkc3IkgY46DSHLKbUuqb6MNiq/0iImJDpNln+y8sBFC3/E/GnIzxdK4RmAbuc4l+VV/utj1YLzvW3nBx';const _IH='9b39bb91f7379ba072d529b89feee9694bf885faf91137538ce3dae79bb35779';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
