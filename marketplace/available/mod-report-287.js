// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wt5offktTM/lDgZJuOYFfdZN1310775iYTsMBOwocY1rkQha4IMavoOk4EOScVX6v1qPijTCXCCZzn5uCB5hf7cOAGh8HWXqSo5NuIjsk//7aVMK51cIWp72R+I+i6WatPfc5UFuOBM06Ip/FhRWKUFWTO20+teYne/G74cvmDfWKlVBLo+SXwlKDjXsaatnC9qxO6o4IJVWBdnJzfAT0UU7fhW6OcFym5bO7V9MbH+4ZWwqTz7urRGidDR8xVgf1O+UgRXZa9Zn2ULTodNYOQtG4kyiqdtamwR2K/TbOKsiJb5TEPPRtEpdco23kXaGPAQUM0zbB9arTyzWOL9aC+i+p7PqZBaIxI3F6T1S1th8ofcBbElDc9uUM08SgZsHSiAjSQYeCc+l4xsscSu4/d1T7xghjnvKghsg3nyOFWXmZiLaZdDKbRimdY5VIkS9XKNT5t9ZqvPVPm+igEhfqh1ewsjznvw6I9hD5QI2aQq8GRIm7Wfb6n2gKxjM4ifgFenP9JGtwVpUYQbeIxdYpgYI6Q8JKQS3Lg8Pia/Do/cgA5Q/D6HocqADIjxEOtzZu711JxNIB01YSuIV4mer4fI2rBapYFk5+s0yVu9QHok3ycp1bfTfUW+o4dMHbVsVNwLhz582mxh51SYFFN7CX0bTJfveIOj8BI+LKQLDJSCRIo729gMyq4PeknyC6ZbInKD4+psAGlQVJsjIzkJ/kq/3XgNj7QzCE2ssWqRCssoRwtRjA2//X0VVeTL/7q6eSolJe5Rz78pBanasWES6june/tq0+8108PkROhxVpF+xu+QPHjTY53pEZDXd8KingEXyl0a00/7P2lRdxUPvn51jVnnOtieqK4bdM1tlK4gZmxPvNC6nWh8Sod4qtlI9u8tMwv9HIqDvse3y8h9UL+tQARmZjWXueaacf9HfHSjt507JNlqQek2s1TsGmmaipaqD8NfXLtJ5SVfbfSTXL4+dYO8/Qwuc0lB0f59W4Df4Y89+giIx3ZZc42UmnBpXw9xV7KmdCb8+UZC0QEUrgq9eRjJagzFTrUUOXVQbqqWZ1gK+YMv/myLfE4XT4c1bPqdag2asPO+3+99TWDt5jNhj+XimXR7dm4jXxoVM5nsLR+aCYJyEPnK0JuUh+WZiPuQWEbxwQypibwO9MaEZm13NSdMVtrqYvDJK8M10Z2YW0DEk9htPq7+1FJhXQTXN3Og0s8NS1zkUstpQXHRR8Gsxeymw08At95qfSEVJnYyPWR1RbmcdmUIZ6oGyaA1uYa7OFDfc/4mPPnwtkjoZ3KyvcUF0P+cwqfgne6FxTwQGK4Nx6b9IE53DkePu99wn6+pmzH6oMLtzCuYQOvT3ygCBSAemuYjLwHClfcQSX+7tFpHmZUxDgQ==';const _IH='6d7a34363a9655b18bf52d3123d0726df5076d0fe4a82263de3a3a3a4aa1db90';let _src;

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
