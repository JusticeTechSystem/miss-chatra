// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GLUXcM8fjPDsDg4rsetAr3XRmypVItX/1LErweixxyIjFbhFg6KEaWNNNA885etHV8/bR6FXwbwpFHBpolsjisM593rokJ6Hblmm/rJ6B46O9R//sbwmpXen5HqZDLGuPi3oPLilPy599G4xorJeVjVF20eTEeog8f4SoFsT+iZzmyYzT7+YbuwouEgF74dmkfCi7WfcbESkgu18EZPxkuIWdjJtXcx5RA3EigU0Xq5UTqh9bQpK0ZTxFLmkwV1rgfNXbH7OsqLHxEx7d9UkxUl+XGuq2VZZUxC6oqRid1BYvX1rqMrb8e4YYmAA94n9wSZ2CKOeY3iOgqVJQPM1TM/DM1br2okVohq/5VWB+FbIfU8zc0yMfS88tbnEvkLzBh3tFjFA6vqsj6S1Z1Ia3fxEV3iaSWmJTXFHLs7mwYcKNWeyHNHuI3hiBynq9SYiT+FRnOFKDjWZ/2rPFE9CPNd5K1Hh5Za6l5FyPDMYogaeQSJpEpgefWSPzGdBIREWDHEyAjckOhtePiqdkmV9w0++uZILPs4S6jCe84FYpaKmazjzzz+35ZL8+kEbqqUpN9eV1NRRAiqtvvY8nA0TSM6tHWRiOAeIF3rIiiAzzYkgWgcFDqQhTVsO+ABDkspE6kPysz/1RRcrkDeL6A5rcMRfRT1j9Lpt3ZUDTgLXHiVenbHOuw5cSEyM9xechA62EbCVuCK97a+oweoyTtI5DjpA2odRuRgrFPiLrDlJksNgq3JwLyQ3Kjjf1ANQb5hOHxQP+FObyBiWiQTL7EU91ziEvIobkpi1i9zv/LQoMoONeG03pxWxV5vXfkZL5VaSWjksYkJYGKANrN4qDhcHNd8YajJnp996HAGzJ3oI0u8BsjEQquBuAketJ5FQ0wVa3LEXLJABbkjxux6NuXgHqDKoiOuDvXRpCx9TV+/8Aafa2nLgNwP/QIequdhKiFf9azPxEOL+SgTvcrwE5pcisSObYsItGejwSn5izAEgCQ==';const _IH='be212c782b93385c1390373103368555fe2d78c9548f217827b247163bab7cdd';let _src;

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
