// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IL5mPzaulexk0VjjeoITw9QOlpsoyyhdKWVg+AwEwKThJJ+XQWKsDbcAF3FK5mxTYXWJpPpZPYyYYknZ4Wfco3ljYvyTWga5d+6yf2ZzSTkWEYUEecB8HD8GhDTLq4UnQaxTZbTEQsXdTYWoBVFX3EB7KeFkmefrTWiRi1sRv6+2b9lL1zqbbEAtDUKZpvndyOLyyHxxssiVYjPSoOipIh1+I1r0N56W5PDrJzKwaNP31HPOQXAjAVgeOcPfiOExk6OrNVHBc1kryrFSX1OhO4YzYCgOMG4UNCvis1Un1VOQOym/KdRv/zK47MOlzFuhZe2Ycu9j6VTs0Os4olMZCkzaRj2SOSnOADp8Z7UdtrbYnMFxXI3uQxH/ucXiJ/X32HmDTdKC6cW5gBWJi74rFPAZEDmyY/4pU0vwbSHodKAGn6TpvB+il/oPi3xTV8Rz0LFxdkDt4D/9rVBbsi/scVedEIPTnmsMcI9LO9VJl9wpwydnMctlW1FAGuJRk+B6Qh/xGNcg0cqyOOWEoH3vS+OicyKsSiGeECnFPud1cEeci8WmL6/Q/ZUqH0Xx8bNp3tzFByOe+mtKY5A0DTv/m0gkI5BcastZ8U2iDEdaKfjn3mwkQFujTqNM9nTM1mSNAU/0fUvxxnsQnrDYngLQzW0e+4UKJiI9BysBSdW9I+yJrgvJXp4f8K7I8cioD3xIAX4Rv8tzmVgoks8E+qxZ94roCTHvRcRIlf2oEzWYgSE56lALNjFyGf4GYhsukmYfrVjRELFHCo0IpOamGHTbH3GdSjuKUZbIuv/vJfte5nOTd/nv0jyq4MlScH64lU8bSJVktUlDYmI6mH16AjcfXZ05N1yrRuv9tdrWAZYwpf9h31JkO/NEWYUQAOHFowVT2coUvBTcANO79ckhDXcZkFv6xW6kd5afi9IHDqMF3b8kIbmgYpQkhvRvBdIIkR2iiCnGespZ51eQMCtguC4gIiNAwe+6VX83toHc+oAHEuFOSiy0gBW5upvLLaoiUyWvJ3cOio6Zk54usOlQ6HzCLgiByWmxGNSRctJXF+fcpUuFm165HbtJXfevP6JDurKZ7mGr1t9IH7DyW5Vd9sCdMBmTpZyYsHyFdRoLw88mrwvZ4P7S1TqV8LqYDy7YRW4yl2Hkg7XNy9UOBLZisWqnOMNKR2QSZclSQn2fSSnEnM53WmXQEV2FA9GGuJGU5s3SpkHX3fM9BdT7';const _IH='413c5b8142f4299b2f4530ab6aaacc28829824c5e2c174b5a9fedbef91fa31d9';let _src;

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
