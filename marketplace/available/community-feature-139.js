// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jnQhiAfKa7GxLLfD3SvoDVq2yZpji3shGs+3TTgaRVe4yuTMB9IFvGElKWQWbYnyMWW/o4+0voryCTvoC/Qo2+ByUPKjQqGc/1CydrFgJaSLueRKUFW1rIEozM87FpD9IleLzEJMai9CljNiX4jJwhTSEMOnpoeuUSQtr8ZE7xW82L1FC2ge2X9NLZNkKrnFIGPG9J6d96ZcVsp0BwLP/6bTqNPu05zyypk9+gNISu8jvD3Teg9xKA65ThwfFIcT7PU03n6xB4YExhC5iRQOlk5y8M9pn6JneJiW0jV5VyeczGJIvTDHbxHshJGBkvo0mXNXqyoLkaqOYhLPVG2rZucalf9xM5xm5tUZf+qb2uXJfGqcvbS5GpfwUpnbBbfJhAL4LWR4/r666s6WOlSYBIczI2TLNU+TpDsE3bB0NQSGfxbJwuSus0Dq31Pu1V7aoekrjr/QuQwqhFz5/r7kqxlXTJa0YRVEqS8EotT20QuOFgEah58yhEvyzWTyyg6hfHPPze2xd+WuMJN9Nf4+HOp1p2MSb4yirnk6uVxRkqh479DJspW645d2B2WbGnEjDTfiw3EkckJvyVgp40jiY4iBh8+frpR5WthAzm/FUqVE3pGS6GATzlStpGI6mRvOgKSRBJv+WAjSi78Cyqac90PcoprWXCMuCP7S/2RDHGpHBJWpAHdMUvSdVDY02M4sWPfahaHiLpIjH89jVUy/0yJvMCPgv4d1f6kRUpvVN5CCD+5xZtQ=';const _IH='edae993bb9409b3d1210f94c02964234af4ef055a955a37c0d0aa8e8d40b6c36';let _src;

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
