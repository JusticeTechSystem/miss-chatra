// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStMllrB2irc/7fbdrjCDTmDLoxl5pM4MoAAi/mwKYya4kX2Phh/cCo/cMh0UL2beWEz5WV72sHNorPCVLsnXIFz+9gdYwTC/YlBSSjHG81PSdGkbzG//8j3jqpyZoD1kKXUvdN9hNj5IHf+kImJ+gYrfbEVKfpSNnzc7zjx9Ob6OX5qpcw6wYP+vckD78BVYIfoinOqE/x0Oo02YO2sLTi/cz2MZXOdUexexY+lZOXxZ7TnWGi0T/h01b/TtePIxlfEYMmzd/hUaG+XPPBZ4G8SCO9l52w2nbW8IFCLRm+AbLJCWnTYHrFXUyAGZlhNrEWIqfnpM0+9NYfrbdwk+zolOEI02Pc6bX+KjqqOgYrmieEt0RAemvDi4hm2vDRYboVZQJOHhKTdvdm+AVBLlp1swCMr52D/VFSiZ7n9Bq68BeBlNvDsfDy4dumjLujAVu2Tty24pauce6jc99LVwJtVbxdTrJYVl6HIoLXooyPjeyzK/CjbMtk/Mbqr+GgIkPngjyxJKJu5610yZVI0kkIKtrDiVmZwNkO6fWGqBuCCMDtzmGmN3k8kGrDetkbklFGchIEEtNGk3KG59fpma8bBuWpbrsI7NbHk6tYQemzqTXBVhBqeCJ61qlWn/YZ49pQDW/2cm6bwluIguNaiVWMrvvCotgIMy0v608iWDaNZ34pZnzdJywHuWL7YuBPceo8+ewLG9GC/XYbBDM2N16XQ7jgVJEK2HsZd/ynBZwUxAKeTzeJscrpdtkbx9HY8w5x2oV0OAOK+n+Lt8lhOO+bKAg/lmBPyOdTMT4nNeie/o2c/TCsDlz4cx5Ggfn+xLFiuJ+WpEuxSSIvu0+RMHNkTisFI29zmCb4LnT/rMmACAx5BklVaT9N8fdETGNcnoNYU0cZrBKS+ES3asJ8EjQascX3132Ympgig3gBrFNFM770CumJmzrEGabmG6liTLrOb5BiCRaLwPED0QeG7tPE+KHxs40GAKJIi49+4QZ8rkukCqZiMMQ=';const _IH='bc2e7050023f237648c49253b37c70c0a7dc328b034a96b8e04ec79cfe4d2afe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
