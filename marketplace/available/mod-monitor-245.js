// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2OjJT+L9CU77ULVCccOfea41tLUsj++XeX+rNzmEZ9bk/NSsaxlKnDSH7BY8hUDAOehWGfAnXPmEhGkJkxhdApC2SHuIdcZ7RvTo47505ha4M7jPqLlO6l5c6MtbJxKyLg48rD8kSIO78u+GWv6zDCkYrG4gURU28djethwe/CVXeVSZmwXe/jWrzO8XImUQ4GSL9fk3/4iRwxy1BVNPCATqes0pXolsdgZ4fvs7lTDg42e3QlSwZqVWon0rnkb9/O/608kCoU1k/5L3KRhEBkqQg6DslZy0NR+oFt0fe4ROHFzLUmJpUwyI6C0+taIfeVa8oe3KOBArdBEevKDJ6q0kQOKrcCYb+Tjtz4LIwUQfyG8XbgTjfUXXQ9RJ2hDuyWMePGeP133yWMt7/fCiJipy0gG+P0+Lj8IXt9q0DDs6jwGHNwN5NoA0vdsmvEM0WnypzNPh3cbLd0pYEsdHw/imXAuXtiqUOAC++i5ORt8kz3yf5XcxMfP2T8/EUz1we3Hmo4RMd+xSOJ0jwcE/y7MT/zniMg+f8fo3NNczzCaJhzyKhJnAHLMUxMLpzjgDOf/mHQssdFE3U1W3LVtFJT5EAWVUq1b3PsgcBGr3q6GbPR9sMtZZL93r2mpUW85GJpZKN+4njICALK2H8XRZc/IArZifI6ln6W7+Rf8kqDR80dxbLHaoZGh7YArCtpy9m4KvUEGSj4o6tf1DkISA8bwtrMlIiJ3zs8p1lfQ9h5PNzRL2YAY1IGHTL2vNmDpJPu7oThdqS10dn2SRelfbXYNCNLpZ49wAeJGHpjayHihclAHHvu015W4vpIveGcFwDp8h3mmO2/k9qD1YAFSMc8LPnvMYe6effa10lh7Rm3WdZlIpCCCTvtu8GxBsMP5snGiWDbsa6HlOtBwM1BNHNRV8Xf2HT9s4lN94RaJa1LjTASpXBN8HqFh4mmFcCkJaQbfC9xpH1Uy79EyyGsKG/IF8GVRWimIFGPFL6fR2+L2Xm7VTRB0Gal9IIuu5QllpgbUA+E02/+c5ofL4O2WcC18o1C9wFwMgaR9beycoUSy6Jzzp0qqOPvDMauJFlHfcorkhzh105bD6kGCrCbiP7v5wNnDKnuUb9Afp/+pBrOkqZs+qGoROrKb2z2vY3RUQ9Y6HuSmEkPnkBaj+p9y3WHnz5uTGFPEQumBvM31PKtg8sg9nl/zO9gaOr41OXwzGQcHc37j9ArXawkJxALuj/ITJ+tHwxtRATt/KEqJiwRSY578rxLjSYmjS0AxV4Dtzw+CzZZI8ULcEhIqtcRxAwkxPmiuzMTaZhXObDC/+wu1DbMhSV7xagU5Fi34/u5NViTkVE71KY3emhHE4ohPIxmyjohZJYSAotuH3xNyqZ9MP+xNm6FACfpnAqCwri1tXm/M=';const _IH='d295593b7a5595bcde08172dd3136c94739e2a3f97120a0cc20ccb12451c77da';let _src;

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
