// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AakBmcy65bFY+41kaRRZaUPznOoD8lgSH/D+ogm+7OcNZklj+yE4pK6V4BowFE/9wglAEz3y8r/B/oQ+kE5gte7OKJ4x/has0P8lrpE9Ex+lYZqAGaIYaEJ+nUzU5Bb9QWbYyQHIMYG0/ha/ma+ln3RcGEtRyyKdtWWn51k8oAx+Q/dDvJ0k0nEMxpI3afjYSXmq5FfhGCpoYNnyM0TUIZkdfan4j4M4VRm78MPe96HnTa72CB3F24CnQqHJmGR1ZhXGxsPBUgAStYlbqXZer8ZtAYdxIohI3qoVwX3t2la9CV7Smz+Wuhp3EoN7v1wsrt8WnuTel+ku9LnJte/fvEWdyoJr+QHKFsqc9QIrapDLgV5y1lpJiT9pCXkTD2aUHfSdFf6lIqfAN4zpYne+3Z9+9me1EtDFngLYgRcBhT5aBF0luJlLUNN+gCrdp073tDt3wXPDk7Vvgtn3V8pLgD2rmD7VGs/zjFxq8I2V4+GG6uP9dyq85CERqUg216zuOs6U5xEfnfhnuLwoQzGDpZao7/ZDSUOflEiAoaFf5fXZopRjLqqL9qKwBD/GEMYduF41DKMm9RW3h42Id1r6SevYZw==';const _IH='9b06fc0da805564112d8f469a5d1732b44647e674835280eff1a40b7d600a202';let _src;

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
