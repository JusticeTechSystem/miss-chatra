// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jaB0dQI22ceQZ3bwCZxt+NS3RWliQw8VoS47zR6mDf9eXYV7FNTQQlMnDNUCNfCWAguOda+fmd9RsEJyCvm5BkyvDotABhM+UeeEyPQxXALe8tY/zwmAywPsCvmZhrszzcR9IYOdOxDz19z3LTlLg462RHCFBQRndgLBDHtZiJ5clDhHWTUJTxBbWeVg9HkSJ34p+VeUdMIYRrGbfBr72/XR/1Ixw41Ub6si0UBxmbrGZqR1NfNTIWGurNyuDgw0KeaknGmWlq9p+ehtNWiygB8Fc3/lR5wKTKTkOHlKUAgJfuRZ1s5i/EHZeef1ZF7Iroou4zdcsEyoxEb0w5Ei+mbUxIizNQBrKox/LBfDCQkfbDQClKXuI2fU3djgw3l1SB+6p0hrBN+tUw7EQmkwVnuZxZxNF2woqFrj4qehbLPaGaCvG+SDd56cOyhwlcQfkrs+hijHlFZ/B8kk+TUVskRZN6AEP8MyhRH0tbByfA73uQ6scdJTAa7omdnqy1i6UeIekrxWekUdzFAoW47/t1YmN2nAoDs22TPm59zYmRxdgECApsGAX96OIFDO0DR8Y6PW3t8Bfmm0AGgSEDhts2Ednq5P5JkIzY+q55nNxLxssvuC8qjXgFvKziJWDwRG4XQ0XOOuIzsRtNffkPhe/qC9YeG4jOdkeg73R2nqxGokG9nh3a3XRoghPoPFF96selP7jGvcSnBXWiUde3P9TY9PD7m1C9WdsZfbT4E2UzCB57yhR+Gzxd01o9NaF8+LqwCUA0ARnPbuCG+sS0lgXytCs8ZZOaI5XSoiEAAXRbfjKejlJHl1TpMsSjaApkWtcZlM3wel5asMmt05VtWEXafhI/p5fAos6x+knlU1OQJjK5Uc9CvcBtJgponoWTcKfCfn6FJqmhKtV1bDFD95TRXi0DaBpzOmqY0EN0Pz8nwQhjbuNBfMrA1ycq3vAxMdTiNty7mAot8cC5xQd5cWfgAwLf96ax5aSq4h5ngQ0n7fubfrU5rIFV4EDVGCKAjvJUYFEZv4/AdOcpSz9+UNJtCA7WdjLbiLPIlbg4cXUP9JJdFaN1t9GdjRXraC65Dj2PXL3OasYblA3MLgCP4VWZ7AYl8eY3BIKzmtNUuvbpGM2Oc7FzdPqz4qp/99k/skdgdqdwuB30yPm9tfDruuQ4wma6x0h3LI5rz8DPhcVgp4bh0dyNzrdoFA4VqtVsWq+N+pknmZb0zcT4cpYcbd0EH58/l/Ssy9APFqlBwLDpBKJT8ZrE4uuGkTZQujvKs9BIm5Ys7WHKVi7yPWinM943YZnkSFoIjvVch2l+HfT2CbkS8Weqtcw7sk193aeYVQNQzMwjhMPGzVCQ==';const _IH='ce7d9a48d76050d7046dda318035004351b2b21acd18b5131f6fece0f4449fd9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
