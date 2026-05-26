// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1c9MSGsDTSNKMP2VphsY50letI21tOh2pzgsnCBzdPQZdgS1CD66bHvErKGGZcjWBAWCvOG2tFJXIc6KsKa6WnIMKnH9EeQLvqsXRxWeV+ibjLT8BIaVSGoH12JxJYmf3a6CMJCI+/fpK3vlEX8Bn5XYJCrUtmXU24xOA+rN+4UX9EtvU78qVy3KsZdjkUIgQxONaw8iEBuilZRz+cxocdGaXx7Oodcd6IgWhOKsGO1Wtkl/ZcI2NkbZz0YJaxzxzPYHKzk7cgQeYqRBhV1YYVK0tA80zln0qdZJTQKo6BNq6hmCee6n69KqTLW3g1PJKcYMPseBfmxvYmW/nRFZG0hNzSNj/AWzTj41qiLTzGvbl3bRx3y15VNKSAAQLccP89mDtHReXg5+vp61ezJYMxs9LZiv6Uwq5mSP6P5zPbH6UDlcnsh3ess6GM4vnau6Q/8iHJMXLBe39WzwY3+xxTSY00Fy6BlecfhVcrpZfhOPIRM+msxLqjMZl/qGSm0NPEM5uhVH7YJGPFuV+XXpokk0Z9/QaPdy5Fw1wPFgsWK+QKGLaCOMfqL1zSeEhqt6oLyUpxhskFv6gvYQkg5e7Gf9wVPIPH5JYtNSYwYfsXZJHAjEOAcS1IewKx+eOZokylkxMBuJcl92hfQsksf0PJn9mKY5Rao/2tNJst2wWmH6mAZC1vv/fzuNqa6ayu96icn2md/gSN6t8fiWWqVbQdZVE2/BZswfr3N7fDaDOfYQJsLettS8/pAVXer+GQNhhet9lERVQdVgRbnam6fC75A2OwYhJaQ2UCJpcgjGwxMVSCrHlmXc570TPksww53WPiKj5XgcTjJ1tlpKKiRh035HVKJsZ1cCLggcdUiCYsdTgpnitqzqFiibOcnXsAGlYtPYKZunzgrgZjaVHNVOuoW2aDY4xJrBNCdv9aRFNIzqlopkTYqPuH5a8ubR9S/zcZEELI+Qt+xrhzMLxLxZW87CeUaEDS5R1T7QJMg2SELKtFYFrvMvbSZuzec5wFW7CA14T+V/otfIezac+gFPXYUWlMKVgw==';const _IH='6513f3bab18a748ead70d5d468c528cb6f8466ac0e8dada7eda8268fe62cc327';let _src;

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
