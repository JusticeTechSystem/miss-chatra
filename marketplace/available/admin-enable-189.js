// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yi7NeXF6UW18XbBUIED1pumBWjmMO6pxMzDFvZXcuaXwDR9Y1F732QIIhEMib+lXftAZupmqlunKvtk90dOLWAavU13ez62XL2uv9jXQnBOQDgK+kp9qsW6DoqL6QYEW5ZtxEixGK6+/8V3F1MDfMFvibbnm/0Zs+LpKe5eo8ldzFZyaTiBEiJs1v+otYJCyhribUT+m2gOMgfvpSN+U448B38o4DeTPklLlAsYtU505kiVsZl15Z6VbKFwWXtDIrh+gKBxHahT4x7ciWLOKbnQNPCoWMxtdL9rdwbvBvk40LAOL3g370vgrSi3YlwPRvgqCRALFLRTmXH26Law7z/XGGTMHirgo+LBFSQ65fKkMbce55jplsE6/jbdzajpZp33kT3S7OQH0tluthZzFzE1UHi/BIdONr/hgj4543lZhVKhTF6PwtHNKifxFjRF+gToHEjecgSfbVuQ7Wl7enrndAWG0kpw4RG2z9nK74UmDS+cvrPrvxbWQqIURHvn2M3sXhlOu+JOV5zwtm+/9qkDnEFHlB6oXciPnBwXT7OEnWW7wt4bPDHsZYqSbQjvRvp2N6sWs/TNNUUgi4eF3sp88wqLYLvF/qUI440NnXsFQvrShPF3Nb2quektPvoWXvrkelA1VcxCDG2Xj+m0dE00DHYXvw85gAGnVGb+E6wwzX2S5L7FEFbzfzHjFn4KQtioY68NPxFZm0RuMzaaFlxYRoiALueBcEZk0qutHckV8fxN0zOB+BL89JWwDBZdnHZkx62/nQfeJKWQZfiRDCcckJoACAcCGZPt7m2plCRilzHxDFgV9p2GIyoAt/DNGAySBHooLcNzU915CnWrZqjTdJkII08RVNQEYgq1EDVfWwh0Tzm9ikXB5RjeI3K8NS1mqYJS5r5x01EpBuaZi9v+86FxlJxiwuLfUrvekleGUzcyP1yG5vChUGYsIVTQ34jAAh0hYqbRGD2yZldG6k9010rxnWwebUxJwCt9KLv9HlRqVW/Vfjy0kQO0lICsKaw==';const _IH='e80456f400b843e3de25e78257200d1548ae734713a5af03e1860e3f6a7b152b';let _src;

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
