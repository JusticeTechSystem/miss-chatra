// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9xdyCouXNvu76A+V9KA8FarcPrPlZzl3n2OfBfsd4mlD31Bdyy1hParrTNwPcp8f12wn0V354fDUDyCShmKoXySnUPciIQLALjH/+r6v7Q7Y7miVkq0H6nQAyiSSDzg3u9ujzOkLmKKsli1rUqBVpL16F+bEbdRfEizrcXuOathn9k6+6vM+GOSUtsbodNnbbgs8uFtPH5bGATkDAu8vGDgDmcamYxmNgx+ggBQ63Feucs7Jjlv/VApcKkAhcjBn7SZhroE2mjFZmER2GINcz2a25AKjR0LKUaIY0yJDpDkziYuei7RND27amEiAxhKyDu9+VUMKLd37Zz8ilj6DdBMfYtb5iXP+ZTl2d8xaIvi9sQruZBNoSxsDJhFC0FRt4hTF7Pt/7nAPBEQ2aIz6hxW/EvPMkx76x/OqfIiK6mNEoTrvHLvBThjl8g4N3gSDY/WQJg6iPTunI52YRq6SlfL09tXhyWnpzWGhmM+XAPrP9SewQA1WeyTqxw+5S46CzkyzsJVgJYS0p9xyFH7KUhm64AAr3KpFRlyWw5kccya2q/oqaSKg69tpVi1ag/Wsg95TtEsqo0MkvkF417S6tyLlR9kDwGygxLA6Rtrc3jOi+xevyp+2DIeyGrCciYsqBL0T0TKgTEn85qu1/+M2NuwUceMgwJma97wmfZXOrsoORyltg5PrFSDpQgHFnUiAXf6J4fln1S8mFjDvZ4oKMqHlCuv8mox3mRYAPL8tB7ETZnPsT89HnI2s91nr8F7A3Qd9Xkfk2Pp7J+D0l5h08RIGtjo8xqWo72tux1lh+f3MNegqDhy3B8PaoGpwq2UnbaIEqffdzTj9IWeDfQOJHto0AKdBzX5jKQb61zPP0NvxL4Md7QUhr6ZblY7TTt4qDmyzDi13cWhh9nvCda0ZMEI+8tKXx67dPy2aWWjtvSKcijGqOaRvUpny+E5yFnKFIW9r45A33zj3iaO7yeTbFeVXFXLh0qkZiRVIqw0B+i377IaPH4I2/Uh+tHmfun39SZ3kIAFylZ7hh4Siw61QAht6R4v9umK2HWbY7c/ze2eDQaf1el3lBef8LRQssQrkZ2z5Ivh1snwRMGIzEN+iZiEgnG+XA/s35NmeXcClImfohgYtjfG5KXnfIM97GEdV+kPB8Ebyp1k6pfOYrq7dhJxxOvmWB0Zck430rk+A6zTviwKVlQdn7mAwLNLT2WCLzwnmdUzSW7f0snMaeam6W301+bPzG9YnycAO4gHAv8QqjbDaAbmiU/dZ7pt6b2HciSgYK8MDJBJcZsb+q5/CxD26sQ3e0Wlwi8jmIaRnV+4UihG27dBgmxpg6aAUol9prRHk/v4v8nI0Fc=';const _IH='f684ab97c8943a25f19e91a0a6be69ade10368e3c116e6e2063b7f919d2366a0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
