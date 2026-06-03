// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='krv7if6ehN/c3jA248hs/BA9rp8GdSUC+bTDTovo4Mbro6/5PiaB/rNVg/mm6WpaPNywMZ3NefiM07AaNnZ+v77vNFweJUmyimoufZmjG88dWIzSJ40Ch0TIjUZVEfgg9gAz4SHJDIHR0wCpXizvRd8AJnDb4N1nzhqWJn4n2ImRRSQWPDM6s7gzHT27qgi1M9w0wYZ+GSg0BiVvjVqsLZPhnUsfSyyxQ/JE1NSxp2Lc1YPHnIAERRD6xLf6w0bJyCCbzIfZnfguv6qAtaRi2IZL796hUkANI9DE2JXlP1tc5OJg9Rg7lDET9GQ9Q13NarfDngDSbayO+L+pDp4RkFrJPhf2+HXV7LHg9K9mjRFJ+ji4RQBbZJfQ1TD1LzX1mew/33SJciwoZFm2A7YIK1uzCujl66nAXUaO/XxL/427NJ1MATH5yc48bBnnS+/pM1p5DR4yd5RnCb4LtXnLY8qmNluKefFBJW+asZ7qKrG5jf1vBRF8dToMOFVyLbOFZ8oZ69qIXORX4bN+AOyVzxI2edl7utj+89A6bopZegay37UMjAwwCGI56zfyssxvLLvkLRQPGjH7ekJzF3dhwNy3vwHMO2wpF2yokOgl1VIxCXobKg0LgiuFEUKjgTDenjENoaJtKGOiZD7iR+yR7nv36KNLO7GOgpVt+1Mg/6z0AWDPQ2zK4mWKbIP+FkQ50IQwUPAep+ARXE0fklCrsq6Ma61d3uLWznG8mxj0QTF98TQlakZPHfl3zRUDARsZa0iW6oE6dS8oIvrgtkz556mVqCGiLJwXw8+05YU9DjNSNybkbszIJgT+PBH1dZm2M5dIzMzQkUDtz+C5Mc/K9caJDFdVHbWHmNisv/4to8BoDO/uWJAh0tjy2AfKLHxaDAO9g9Q48ARIMxLgoxaCtzopp8EsAt7GoEi9X1E7a2jMRNAS4rS9oHjYiWwaFFWRp51/ir012Lrx0/t2vLdKsNe8eitvN4LLOUpZmgaGTBNEcJeTZGQZGV1RngVG7AKwwSj/pWnmx2clTFrnjjwV0I+Yujh6d9b01sF9EKeAm/+87tvwNjoBYu/8pFWDtNEo7HJ2Ky/UpY6wxOP1MckUFJFaIG69EY8T3Aki0Xi5pKDhqtj5fyem8nq6K7510xmAjTtOEdhgoqJrO2qciGtEmFKaHiyYFtg5akvTfvCWJRWZ2kmZAque86Jm6VQJxJOITWLm/WrYkCI8IoNCCfMUAnhFexW1CKa6jAzziAqnPkfjr4RrbSUPJCSdRkuOUg6hE2tIwEZRmNclro/MkbAgCmUQ/ukOlmt2rpekDSNaQra0D0tJvHpA0D36GyYcCEphiOpfBNGW8xPXpEByv/OcAHsw0aUoob6/mIiWWmhydMAqQpuTrQSCjGQva/kPB0AiEGSSVJLen7Gvjbyy';const _IH='2ca49bf5ec57fffb70548d0804761df7489a5b5af21108d32d69efb72ce3af00';let _src;

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
