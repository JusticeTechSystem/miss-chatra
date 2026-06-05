// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O4SJgro6k8ENJpSOPoQVqdZ/WEISrT9gckMOkbS14bF+Lho10ZGT6AgcFmNSLThubnD4QSCTm00VTrgeURJ5WLgCAqnVbY6jpMjfQJV7Xy6Xzua6Q7/HZlhH6Z8QH+KfGjfqRucJW127J99M617ogs7zbN3sFP8Ik5zkbk21s+AA8+D3pVbS+zqdbr1U03/dbr1TMXcPVXzCkANc0mV5iIcDpIXwRQEa4DzFjsYpjREtacUwbyjSJdbxj1WKX8KOHYLGEHfYDqlulYJ7kHxRwK/uEtTs/hC7bxxPcjO3mzdssBGidBFRPA1ik/wtC00UUr7n5MCgHWlR681BqbiNXd07vg+F7JvhP9mmim1B9SYQiFtXx9J8ROe6MNT1OQzaXcbXrN1LS4B/lJKZ2p9HZ1hAr2wwpMuRgI2hSB1N53p16a45jbRso23epBmT1g/At1rYA6aG4u28CSDrdRG+VfwthEIl8EARCP/r16LiJsGSa0NnrwU7lonRvB6ifcP83zWYp+UpKJy+2BhEnWgpZpMcGpE+eBWzxRmLQM5pLHzPUj9Kil20TWXqu+Fk/MOtxMuweMlzf9C8zoE9Lw+2ZUdjpJWhJH7FPL/Hdg162ts/hH3C73n86NGvmt/3/YTx9fiBz2OWfttmUkOjkWAmfHUhp7zlZtx13ilohzdsswC0S3ubI3jNXKmLpb9cYEguguuVKf5+DlQ8BkynafrepP80vBMWDbslflom+WCBmeSismaQWHArG3ikR3OKuGVWZxvb4f1/xWEq+S8LvKH3F1AP7crF0mJwUjeKN4chEB+5YuRlWCwa/hOdrFa9ZYN0JhYeMAqC4/u+bN1bMNm+3t0yoDgaUw2t6rck1DKTFXv5U0oKSxrg4amizJPYjP+nV2G33+WgBwzmjbr+6J81vrDLHOeIPrPJ14rQsByZYTtJx8/4y0jUtYKINyKB5i3alXfK3xD8fU/0yQzBcN0l/QGcp2/csUc02vUzmcVN86YdB8fFVRBaMmQOcq4CrVWOxR+ZNr1/lpWEz0E7xVIh2H6TNsk8yoyBjX8Xr5XjZoGYt+6yWc7NXlExNdhyWDMJMFyaIKVy2f71QctTYer6qI6R66/l8+YTzo7DgcYZUpAkrdC2DfSz6qyZrgCn7h+BPo7zKtBRPqxizi+eka+/32Qt9aR4ZE+NVBLw9+pbbyxWSGtABvmgBk2edKv3PjFJeFbN8P4GDTJWnwdTwwgsdp/LZR2N681IZ+2fvyBP8buRnW/Im0oXyAMZESbqijg/YXXWM5y21I9LBy9SemDKaSMbjjmWQkr020Hns6+BfTRQlM4dHQQvANlDc4UU+GVy4GPzNRV8v4TGArCMjsOJmskw9gHal2zqr9RMXsEl';const _IH='0f980812c14c6a022b3d90d4d469cec829560386620939ebdd05e53d195f1d16';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
