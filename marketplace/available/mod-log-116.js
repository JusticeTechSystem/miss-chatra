// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OjuJIN9Az5hG8sCr7T5A6q3qdOWYk9SexNf+ZTyai6PsoVkU4vlxzE69SxJsE3pTKmuFY4+d5AzWf2Qi0QRSSwViNU8f5qvfSEGFaN5kLGyIFeTzajAmyMNkvRzKbw80mOmTC92pYjytWPuCGeXZLqEclJXvcfRYq36/4IsRgD6+VVTv5rEIrOhtQE5PmKwSx0WPuxXTVV1uGOtKVwGozvgYgk/Rd+aPGRdForcECEsUcDFxgb4RKQEqjUaEDjQX9LvpyjBg6AQRfFiDJEqbpreZWKSxL4URHS+t/LHZh1W/cqKotzXVK5xeQwGeti9rVUhbVK7PcmotERH8m36cx5nozPFwyKOZWSvLsvnZgrU0Q49QsCDX74h3C+VMyCJVNJK5dko71WUUkiwcTVmN+DHQ3ShuSQSz7KgrvcqMMDHDASNMK0YRhswNzvJY1qa3wBM5Zecazag0ovSrDhcpBS1TMJa8cVXuYDfZotAYMilyWhasu797ofBUezDJOhOQDAhfkDawXezasVhuv1sHIA3TWGmNeEGKNETwCg1JowTiiCTOuAneEaaBQpwlQIDdUFyq3ndgFDv0eorhuaPrpeQFHvcTmETzr+p5L3dZTKnMIWSv0vxmQy9xVXd243d9XySBRMgUdOpLrEOyMYM8cvapjrhYL5FzncuVgrB0571hfCyHLPnuLwSX2eK0asEOhe7WuUhd8GIslvOOd05LjZf7a5wrQ1sOaBlCj4Y3IYeZOOKFOYvIlTRWkIPAzg1IJMoEI6pQHznR4tHEyJG/MjN+ts6M46OPNT/kJxA+iu4R7ztknmIXlY8+XD5KbEwNUW9GKXhuS1Yj9VKk7XubMLRnolXYX/UngYLFpq/LyoRZPEVrr2llXciMwMBphuazXIfPHaRygJjRPQ3o6ifuv47DbwxqtvsKvDbynd0t3qJm2obi8u2Rf6kLIdnh1ZTSb6uGaRfk1RgvDlvJJ4zN+ThKxK3XA+UCvAxm/XTiHHLjAYKc2dmHdxBC7odZQqsfSPhVlB6e2qRvs8VNPstwbFkb8HWW7BMz88vks8KT16DGGkaPnWAl4n2L3WVQSeSW8NUsSsxzK5WokWhRjld/wn4Q3r6MNdoLp7lKvf8xGYenZGwhgi/W+GwFSY0lDU1XxV29qAgBE08JUZ7CoeOXq30jCM19+hFqpeFP4heSZAMT4r9v8mMYLJXUjTdlyhndxc7jRrKq4LiCVy6ewLSTpnAZQAKsfHjqf4Jz9VY6cZRuFn+qO3ZiEP7s7ee5UyKEKqkIinoiN+DGb8Jn69WL8qIscLNgqrffXbUCJRo/AdCow7/MXlHT81JdVrjtLqSLdH9av3yJb/zpfw==';const _IH='dce1097f2407656e903f94c241ac60bf255e8daf29166bff2f126afed64e93d5';let _src;

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
