// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4mDCMgy2QiSimV6fJEp6lIOEC4Ofe7Izj+N2io1pCNINC/DmJ3d5bx89RouQVSdFcMtTlF0+8ouiCDLcGez8t/z7X8uNmsxsNvFHcQQcUyb/ac0yGYduCH2zZGTTjhj6ngMewmMa73cZob+IXIvJquKOoh70st1/rzL/HqtYm3z1vVxYRBjDz2sRb8ojRv+pgXuzdMl+Nzdc4NRjLZdkfRmmQndlBn//ZQTHzYyDkjik/oKYlHRYgi2ju32Imcxim7kwb9aI7AcsA/OqffxEaID6wp/MQD0m0Sr95T1dCiQ5OPIAYKcq6Zx1vX8A14XoNc9IyCURHtKHTciDeOWFu+1UAPTJLPI+/Jba0ZFoPu5MbDJ0n9fFnXudWJ20lCoJsuOvhozA1dM3svnAfNVKo3oVpQFoxP+a/du9AgUhIbtVFn6hl3DexvQTo3z8TR9XVE29iIgc9IRYWGHA+BTwcofk8u6GFGsvQUpPDsJb0oXTxBAxSLfuCyhIu7KEW6FXr9aPyyQC58LZYQcqMrlhuWpGi/drBGESoeyNSij0Bjz+fcb+SWTDGfJxtiB0HLxEr8rsRyKZiAJqMrW8ofsaRB1+LujnT5SZLixqLpCiaznii7WfW2op5cx4vy3JNOYsIMqS5C8ujmfOaFJEQWnPZwRNqglSsPN2YnKqoVxkUYp1QDDwGJfdtqV1oLz+ASi23t3gxRpwdwt0UStwB4hZQkyRW0xR4kWSSOngEKBksMGVybtl50qpw7aPYvYaj0IWKmZzeVtZq6aE5A8+qoynwVvRUY+htDKJAVX7fupPrkaAVDUPYu06zo/LXvNY0TGkrpu2Q27i6JHqa4n/bRWw+/ocrITTuOT9PkPA7q2DQrsRVPHg1Fb1uEE5Ab9F/J0eOHQh3bJGdGj1nuTzh8d5gyGjRUwbTBhA8AqZ2+9XaH5grMYL+f4whUQaseGqUOrBtBhfRop/wEpAnqlOWcHgJQdxqT198Ojh+c/2PVJtfQFNH4M8XuA=';const _IH='20b6b040b455a877645106e58f36fc9b92715812758e1329c953f855f4029c61';let _src;

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
