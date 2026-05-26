// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q/ofsqOONUyAlmx9ELAqMI0pzZQSvhf/tTTRUQxxsz8sN697danhCBHKmwExNJoHk/ebGpBExCwQ5JOvpncVkpfzOA092TET8ouaFciYunBgyIcD65GGlD/lA+EqBOjLDhuU5FJ/U2SDiEV/IYq04FLctnXzzFt9U7xSBJj4GIkX+pCkz6rojuIREND6smH/1/B0l6aMYEsFa3i51kACeQxMTdVO2WwuJKvUUotljh+I1+vhZmuD+WrMLkKndHmeydBAwuG/klf526spY+2EnLDZBN4snSVe9FrN4LGhdw+oS3JE8PVNGUHNP6zMwud/6WxluTDb1kE6fJDRg0q/gORo3x37j5sgckGqu6qeSTlmjOYw9S8828gsUsz5lS5be65BAYO4eLwKloAUQrISb5mBBvEj7obwzsiTca1zrW+Q32Xo6fVaUSouEEpOiOVkW29zq+LxXGZzYUxonPMjcSOAAQHyIYAReukP1BlZeTrMGcWU9YHACoC2u/SazrjFWMF1RQUatrAuuW69pSmcfp5Qud7/VMSxSuQJH8yfggBqsfDsG4wC17jUGrvYUQGMktdO0n9mE9bDSy4XgzTPjQVa6KOxVu+hzCDeVlV0xpPJnfjqdhWLSPvKCIA54spj7O6gt5128MV/h65++FnUUWCyOEYz9ige1fBbtna0uOkY7c/0lhLcEM8fVnd0t9m6jyAX6paWTWHPiao0GDqdsg/dqeG69/T2R7thDac6fa6aTPkE7VwsMM90A71IFW8XTWPPqyrRHArelHw4JYpeqkKB63IawH2Nt87bHCBzVGEUWLQt57PzfuEyZMBkN8sl1YPryBeW4psYLNK3bNpX8yuiBDJ5DX9X5w86JKBV1AGuEAinex/y9iT4GQ1u4uop1Q0DpMzkfHdaBa2iSOsfPyaSIFmOJCRK1PvpJ5NbM4aexeRT6ZxkXfkgTEcik1HfMSa/MKLvCDu4XQ+J+a9DwwRTmOZS8kr1O6M0KS+UbR3DijitSy+sA7W2X7//s6U9gZIAzqeRpD6rFIKei6pSojJ2Eq/zcmb8h0oaO4gKtZi96ebu8SfJE4woPvdFxM2S2XBHAr7nJ0QvQg2gC/qxnmuZu6fjr4YF/K9GJ4U+LEkPm1a9LDFzMBnTEynCMwKJbSlgnoR9qtoYo1tMlLyDSS/5jkBttBHcx66bPEgzQuNCg5cV5m+feFLRvlg7+3qus9gkVgtSLQ==';const _IH='24d5f170269f5d260fc1601c561a2fcad114169029d3a320a876ee62521c2388';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
