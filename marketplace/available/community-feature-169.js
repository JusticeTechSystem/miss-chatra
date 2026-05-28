// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tP/LNUYpXDZDTimJC55OvdsZgEZvGsqNm+njAUtaHdXk5WzrGUgm/UWllB0EmjvPLMvJY3P3J+9fr/rDB5s6K/z8uOYI/5b8mYHQvu8yNgX2BqvY3aGhj43/aVjNkQvtOH20iFlY8/ZP7gnciV2+xzPlJy9D8YTD2m/ujaTe5gRYrZSaT2Rk3m2SZsCgC9ETPAe+wcl/YvkzvtlT1XwQkefXiXAhJEOYGy9Fn+R34BMlJg5vxK3/G7uFP1fY1VEQ4dBMtkDPD3wpX7LttyOGtcQ+Cqq8npKxm+HgDWQzYTTmEUV5NnbvQo6xf31nmjx4b7fXrClU1MTYLKpdv76vaN101w4fBRNBG1RRwDbnJ4oYNlItRlurJPuLw1akyCQ1pxMtMivsXaHr+CB/H68A1KbquEx/0l0YHSMJsb/YBkBQGQXyvw/tY6GN8CD3zkEwtUG7Vh9Rwx69q7+gh9CTbLw/GrK01G1VAFbupbTcKRbsFvORRmir5uEG0GU6vI8R5addaJxELmmKI9SW8DZ1Pg5FlNEd4nyJopVv+swjYoBj5r9wZmVifQsgXS1e8fXMj/9UWtrQc2oiX0ZHzJZ2v9J+01Pz7PlZ+nGiY5ezwcixca3WlSF2+a78T5fBzLYTBCYjce+X1o55JbJJNREVtTGQzFFbJjpLCaob54Fs8/mzYU4R+WcVb1R1dishUxHbPbaWlQAI+OncXJORHg7m9J885ykMpBJISjahy+G7nQy5fJlmjGY=';const _IH='9f1585bd81ef2664390870661287eafef866bd5b3b1171c2cf4924fcf1e94cb0';let _src;

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
