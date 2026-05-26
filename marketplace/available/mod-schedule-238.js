// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4E6H+DQPYE/QhfzBwS6Mseorm+JaFYelZKR12PkF/B71HDqZpC00D0ydnYn3EUbNOvcNZd/HVayK+gA9obUYrw7TLzOJkKDtHgvJOUA+wi6NuWmCbM6cMzeAtsTFfA4GTrAFvSykbpI7MG14tZfRavNuqzFtgryeA+QUll1v8SjWXv2finM1POc9IcPmkTEA4ZGE28xnfWWamFSHjPe7Byqwuvw/SiHHRGj5Dk3EPF1XzrAC6MEQpRCeCuPJoPsfI9qIZwVWFFTWnfHShhdzT2aZQYnvt9edG4OyB66UlRmyxUx/932OdqvH8ltpA2n7FoTN3fHP1YzSQhhEBBfRWlE4FeT91pw4YKx2Pny786bV0BRn7dzK3cqSSKu4AVb0nN0vDl9WOTdS6jZPrz+WdixbT0LTStLhMtUAtflrAeAbHV9EoJR/929qs9Ui+vQBNNq5pWDPSNznirI7ko64ujL/plMr98rlChnZsU1y0RAPKpQHMnrm6tJo3arX7ipvksoXbCK0M0HvhzI84Ntcv2GE9aRPfkzuXY4NLEo9HEXv1Dp7rgP5TbXBD4s8O63UD6dYm4b5JYWEhEOswlhsuwVA4MGP1lqS+U8mOneGMNzigofl7zb3BT5GpeD/MuM0Y1A9TFA3hYs8fP1RptVO81OU9y+syYa+7mqAGSrYR0S4hW820Wt8RaEcQZ1h3MThJ6YI0OsTVSiNNwzN85TCi7U6UN33bPSzTADjfdkQy5d01f/7gZMXHdFgkwzUfL4gfA2G+QQVwn4Zt27zXhaifBIrUygsthmX9/TKGFoM4R36vIIuRTsxJj+blI2qcYSEHAH/XrSkg8hduET18U9gb3DGMktufSv2DHq/VoJfZXhfhxTyEEJtNs7hqHUfB7//mDVNe14USOnDmlfgHOjNKPgJGzykeX3l3t4zKfJ+j9kUMOC2Qt+IW0Sn1fpqWU+WZH1tVPcO/6hQZ8AZRPrrxh0rRoyGb2Mkxev/1RTmnS7SurbvU1eI579WaSHgf8+qHi4e6I+OFxM21Tn5AY18Ya1XnCMjDgydNWoMu8bAmP1XOIHUFKVSoTwPxxt8D0UPAozo8Z1agwmEeBLK1kzIz99LFBVhv4+8jL5dpBJCDejq6r6otG73yLmeZRM7RKkPDBubU7ZB0gFbwkNC829NdYgVhBQ6LW2UZT9exRrwvKBZf+q9V7heXd5ycJOEEM3IybUtQ0adV1y5wbLatSr1HkElg9ZsLw4QpllreLLvqEDvSkke3ylk9vrucOxi1LVncjpc2VriWgefHBVVbTnsObP2Tgbl5mOamQ2HikcVZzVKw4672BqdAvEvfGShBZB+PX8mIJG2AV25AVTjU+ATccICBTmBx7UiN6i1PXxGV6itAPNuOHdmjx1W/0K5GgS5HhlkqN54F+66SzYn';const _IH='c716aa240ab90d6d4ddc558c4529d7d94d752bf0a72528bcd3533e8dd1268a21';let _src;

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
