// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wvzfWj2qPiVfy5mlooBlfmABcMViVqMz3OHSR1b0JuhwfRqLeoZSW5fTKbN0iuz4H9Fa8qH/tQ5OM+5yvZkhJzJNitXaWWCbCGHztHpTmeES07FnPZ4jXJZx3IY3xkdVoqZbMFkbj1IbI7M58pQqdqWUdUGSoqbP9KnDQ7Q0+KiKvTq0D4i5z1sVH9105H75lUYcShAhe0xyOPTjTSpJRR2lfLxOjYR+/9MhbxjfH6VpMhLS94BcRyyYr3NP1AuSBTU5+Xd6I0AYRb9+xQpSnLDYawCqtomEn17mCVvMv+Zi6jH4I9tqz7dmbvXHUrN/4WgobPpE3ihZ30p24KCU7DQ9ejJYJVQJ6tlhLV25PqMBbA2kVpyncqTT1POFxR5UCgvRAeNKX5iUo6PhTcURU2Hcu3xih2E0PNof8qKPEHNe3zo41dX7WXh8TK8IcrJraGKt4VDV3elb71KNnLuaaC3EATTW/rpdWFZsaqt+D9QoERpKpYIiHXRSnLu2fmQvEMyNX1Rx0GOok7gZg4dIxmTm4q1QJgRODfQILhd2u+e6/VR+q2l01uZOItFuaHTCCXiBDnWKImzmLdajrw4A3pvtY+mP/l3SzmoIg/QufC2m7OV/tANtYY/vdzZfVuI2nLqWs7xn5lxxjpIFGHTE+rmD3YTnT1fzPLSJQZNUVni6+Li8j9D73Md2aaJnnYtnr6EWz+2dw5iWy/+MhOP5172udhyhgnai9c7uHQgxyOdp5/ItrDAK/w8MUgNYO1SsRf4VjMZjbbPeol/X71BDCI+wDF7eMqoYWFC9dha/L/DLpPz1djkAHTLWtUdlm3dP62CehT1xzb7CQ0zPfejVj+1Z4F/tRy6aBvplMp+Naa54c+OSP7YChAHuGr1zyPmaTHBtj2YlntNI/v/dCDmq9R/tHA/gzB/uzhBQk56DEq78mJcVRi5vBVVDtAfRIQMAqubM9Ovv8Sj9vV/+1MDb/dub9/uGia4oPk+dDkIAZZ0G/zzJbmdbtTfyu07Ci8MfEcEJ8zs+2LQ=';const _IH='b69ece52e1fddc41f862f9850cd5deb6808e178ab49424214ea7431e9a110c6b';let _src;

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
