// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1QoYGMep8Yp9f60K/2oAkNmo4sStyUDBVjR5iyWOsTTwDF5bI9VOyB/KyVEd7CoUlK7Z3UO0Y3KT3mHf2VOspKLcfNDHputWSQW9hWJjnVITVmlbn5KXIGRdoBm+cDq23y253k/DA4IOLgpys1D0h1cSTC/4Sf/e2Y5kNaxXSltNsCy+lw49n+Fc/+dZLhBlbOQtLvlHqzj40zICoZIVZVbKtdecJcwDh7Oh5kiIYjFsR3XGLn4Gngx+3/qlOIboWgMZPBfyYkhmf0ocwFF2TV0O8IjM8ti71OgXbDWS/GD+0/S4mKGDpwbqUVGhoG47VSV01jkn7F7LVxa4tj/CYjz2Bh4lN9yuxJh0L7a0+DuFuRC4PoTh8dn/hxab1nYvB6saJ3gvH//WD+kD27Wn8q5xW3ZdKWWrGOM87wGFB55uAHVIbSMwV6fsTIkaPPJVGzgbfHFUofkSlxuZDvJosAsxVquH4YBa/ocgZlS+OQ3QOFvg+oo+ZjOesgM6cFcWG08GxWaTEExjetj5Nhoysd0G4luwYJ6EVmKdDr7hihQlIFzvVFZLHMfbBeJVZid8SM0y3pPG1usgdGbGZlRzYpPaPeSWdglxh3a6qh5WjOfIAHrbv8Wlp+f6WQmBonvv1bJm7H/vt+OGHalPiktJNQfZYzyZIBR6tNkmUlIxLVxTHzw1VkcJitS3FSp3sG40LC73gy2neaTNjFDvVKOnS3yaRs9ub+BjqRiXkU2hqZnQtjNISXTA5RHTMSV1Qtd0IVmUBm6S8sB7B5wHvjj8H3xOM6zka6UPyG2D2ELiR9o0/tgZ/1jKOYONuilYSgUK714d6QQhCmB9+NGkZPm5XKgvxai/grH3AWhBxhUT++quJmrfymAh4xI+ZH9NH4o3u+tKj/w4K91TPaD9c8x5xkUNC234jVIL8xXJKXsMbBu9z33rN+LUxCCfTjpCbUxAfEqtWfBvxzWxOIh2oYhazrtMKV5KjG/VPhzh+RtO8tsKkKDvu+Rew3q/EW384/aiVjVM3C2bbHHbMG//OXx';const _IH='b036ff8d379695396a62ab004f0bf1713e31a0d36f8f6708aa5c2fc38a2dd2a0';let _src;

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
