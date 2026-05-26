// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9cpLFEycTy1z6QHqSLFsXtPUrzkVyhlBl8fDA+wsNyeMr7tDkDwugaG260q4lNA3Z2rhQMNyTMD6ChsDi1MwA64cbhi0JJEhoRtES7VFAlyEaib1GsIdTwaIM93dtFU1LwpAbAVo5yvATBfMOOb6MPec2lWLCFGidzh5bCHL+4IAc3qYF6gE+/ooZ4Vf/Hs3Y3EvvXf2pbi76osbfY6uBQnwTWYj0okgIjDWapNXCBeoWPdBIw3dRh0a4iJJ6IRfPpjU0vo7ddFRIVcBY0PZes0/lbN+o2p6MtLhvFJ876vHU7SvtJb71+4/Mebt0mRVurxbHFY1KWj2eedlc5rb6LwZuRCTrTGxOHPP+AJBiiaogzBitMW7ZBHt6letXkv86HdbG2ZNNxplua0G16DgrEiteelozp1wWQ9hFHyaZh67ivEynZwrI5x9YSrfvSZ4CajAvdvRLcROMigpYL+Nc4n4rmIuDROl5pje9NTZQ+tZjAaMyiMNALM7S0aCXMt1zVl7oFbViNTSVjsmhcJFBWCLTLKhYbSGqbR16AedHQ3EhHVX/UIhA+6Egc8bD2Kymx+PFa/XqDRbANHazn3cebw9Tlhckd+anUO9mD/TaVdlSrGrKz90qC6nDN2koUjVprfRFyHjXW/FVKOc2Zsd3No+chPWoirRDk1dBZVOGVevOnMn8/nNmUGo30GXxQ4QLtWIj2f1r8aEj0g4vxpklmdS8ezEMnsBCqq/RAv6KA==';const _IH='8b024eedd1d5cd713000397a5d4e6c3caef21375bc92b528044b852d196f5003';let _src;

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
