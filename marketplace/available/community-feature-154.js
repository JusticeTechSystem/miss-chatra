// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WjH3GH5s9Xt+gLydbubj/gvOFNuyAf64s+N2AtVOAXUfq6xhJ1IFWXzSetDb5J23o+iyohFNqFO/11DMRermTKj8YQdXY7DDOm6owcOlpaWQUuVBR/87g58uzH5DLZudod4GC0hixRl4qpMkOQJFZeFXVgu1qvmPvTT8esEnPFKLxgeBgmJW1AV1g9PVITRTvQYwgPmriVxpJSsBohsC8oQ6CXglRu0OWDJwxU64b1vvoH1w/pmSXH+aseYKebQK85ZHvFeN25jIDIdTkn29w2l46rssoPN6etszTXooTEbdnno0hsJDy4HFqPR76SxvHk5rJ+koBJaSklP0plKaGjLJ5AyqTJhubSnBjLXNpW9fD9xnmxJGrrd3wn/iTO5nSOmtm8s/oJbtDY52om35TFGnSsVMXBOC0NhoRtunxixM15xR5dNJkq6y0eika+jb5JjjZcq7efpDFDCSP3k8NTgw9LT+HIgnomMvG48f8r46yjyXtK8auITnqPGboaKsnXORJKUtxY4ve/CM/hB7dIjM+rzLwl7VlsG4DEKPLQ1hb4Nsx0SEW69O31mVeFbdE4p0KdmHi8F7GQozUAApTxOfUnjRGiiz+q2zZihsDkdwLpFB3Xt8mWmWNFDf7ntfDJ3Qjjj7Ub+s8tYnH4Qy3ykAVOVSxIsI90RKHGxooxPEpPrfgUOheNSlTK7t0oRNNQ4Og5mGntMFBI8LCa+i1RSssaeclGjw2wOc2AKuPdGmv/gKZSo=';const _IH='67787715ceb5defb24b34edbaa4593b4b59c929a07383ef5e9c7e62ddc49fe21';let _src;

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
