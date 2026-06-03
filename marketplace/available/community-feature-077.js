// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jqT1eosOw1GXDl1l0u41uDKsaWb7VVoisz4yvahxKaCd8ntsi0x85/ptit1Pc0AWlkYvS11Z02AZWczWF3aDlm3ZVGhLlpIygLBbTTwYxDlJ6qlKuRzpdo69/Uf0RU4mnnXm7hAtT9fpR3AUX3/ubNnnvtT4Q33r5tBvRMxn8rv2kI5LyBcGQTvliuos/sRK/ZRGdxIPZApoLwiSR8XK2txS6cU484aKBolX9OoiZIB3TomGYkpz/dzp0n1Wght0qpOlr2fHf/CnJcL6lYxtya3ZzQePB+ohO6iDcLQFC6nGrofkn8BhtzFIvN7tSD0wtcuDCSNwSwhSLe8a2ffOA1X4y0fmDVVLCIJF9Z4/wZ+dIkNv7hY0l5p5CQQ1w7dh6WW3DOvpEEkWioPkCOygZmT93fPkf0K96rimMaSV1xMZP/5PO0pPmmhMqRqKcKJJgECdBgwu0KgBUUZI/+TyzU5w9rssdsyvhsWi8qf2VML3vuxp1FURJbnn67H28jLFWiVq1AnBVpi0OqVpAc0qJoFe541jQo1Rd6muchHo1ezr9hoBH4KMA0djdOwnzGhHB3qUTKAcfjed8LOkwVslVOZ8zfmvVFMDYKfJerxvdFq97fIGm5pxq0ip6kHq5AXf8EA0BbzBQ66yrNQKrwIzurg9MTiqafZStPSu9x5cDvofrgQyv+Yjplyw0cz37v76gWcEmR50e63YJjGvHZEq6UqF2HRFittFOzwd3zEBFw==';const _IH='b880ab68abd2cc1961330ed59206c8ce1fe5750805f6bb36d01a6b0a9bbcf38d';let _src;

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
