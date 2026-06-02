// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3eAOxNQznwpYjkvUT5m5Z1zxkmyidce6nEsAOAaNQcUS54KDO8VJH69s/oWMTujt2bHshmw6Zp1jEaNYio63AMTI4v5PjnjIuCOdLUEQ7N0dCfoB72q5jMw2/KZMLCgTnSsIBbX/W56ZEVYMPayj+JWu4oB7l+1vl8kqDJAeqva2UPYBPObxl76EkcTm6GLj0cKZxD0bPA+POc8lXsfFL/Jtm8oHQl1vdu/lSvHSYHSMc3GDY8rjDmyyd5rSY8vFMVNXb91wokhzMyeWVVh/rbDHYAK2ZFS6xcNKim+mhSILtQHcOIdvnys04wI4C6ch2+iWfromS/jvWWCHs3nNH7eWBriH6jL0ieIINvqOxicv5rrXn0rVzbKK6PloDpWgBbFw7kPd2/l7C9r4+1Kt76oLy/4gWwSjBGZO+EUDPbiOj+0/mUhLcjax47l+x9u4W0pMY5RmeGNy5awMwLi4N+iBFp/xTWUfLcoCKl2I1cHIkVthwrL3kL0tt1SdnjeCRw1BBg7dXdMuJUsXtI50CJFsEBvGsiSDLIwQ2FUuEewPwtnd0Owzhy5yrEDJ3cT/STiVXmukpAjqanVrodlhsg1b2IQBM3i3yRhAP9Sp+oB9sEAxHd2QaRJfVBliOiN3nDA5hf0BCyLtBN+OyfeG+EpRbPGXm4qcWUF6FHytUf+Hl6yGnR737JBmfooXzZa0SLhxAaANAls7FkUttN6I8OKIBaToROpSlz9MtH/6a4Piq4nm8L14p4kzbLFPzetbLu7K0Gb9zdA4rvPGVoj24xi3qgi7JNSz5dWDIxCOcExZNtvZDwni44LQsKC3+t1HnGWQZW3NR8b3665arx57fWJl4bnn2dMPQBwpUuLPr1QtelxiDpcjXY1KA17bLuuVK/g8lH82jvx3Py1YzTEDhhQVnXLs8OB6cdU27C5taJI04GbO98Vr0EwT1IB24EffayTIMnig+G7V5po8Cwwf8fq/Oqy09UPO/s8IGOmIW7B14ETnnek=';const _IH='c8dba4bcf4bf0644db72093f62b95e5f49d93ed3779f1aaaa5591a40df052e2e';let _src;

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
