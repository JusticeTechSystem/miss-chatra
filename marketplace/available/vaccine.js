// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WdhPZnWYwzD5yQjyl2pToSmp4j0WkJsMgU1F3/VvgDR0nd6hxTNTNj+e6khd9G3Ndouup8hM4Pkb4/CFfPTke3JYia5qFXGwpXKMt2Pq912+kRsyy1/pWgIZ45lO132clrSUeRVc4kyYZNntboTvITsGl3EBmv/mD8R9IPTY3yEuhLuqrutEuehLfF2Lf5Dm3KsM99/bxWukMA7qfMbO2VEe1uMsfFem7VSTcepIVxEGNLgV9yUylOBuvb5S4K7R4YX4RIkLZ1gChRaVGhi+Op0CEc/tJ1Wjf1QIg6fTgYLvszw9py+C72/Oy3O74PdoyQHuaxyDuMwZ7kT2df/xu24WxyR6BqIOuggHCOx7zI4XwRqhaQUJJJo6G7IPPcvy9SxQmzUVipO3aAuqgakGPuD5eQFK3Lz0lTNd+BrgnepLFHD7lyAH05JaDQukkSKSImnhnLumXn8900MyA3FDLPtBSMzL/J+CWjMxV7/xe4sloLEmto9OR9rcmCnkdD5437ot+LY76EoKXCAsQ/quaula8gjP6dfstidho58oAknuEBuKfsnYid5LQQK1TZKOBy5/HaCuerw/rfvlaBUf2xUlc34Qt+a7f1qSeGZDDrTO6z5cvw3BHsuz4A0ixlNOvPwlT2Qi2j4v7Fdj2I1oHtGXLCQLSvPElyZVcuSTSqNHdY4W61dZ3W/6cvHZtKtlWIfJLwiIV3R1hWfzvVUL5wqNpxp4v2Ei5g2xiDNJKMsL031+AwSsf/s8hcr/76KCDPTyE1l9PmJJXkngy79oZTJIDjHmSTEPUYCdINWtN1/s3+YnVLd3l1f+GUW3saYYbzUl5XeWEmjop7uL9i9TjVtgSBzv6fodwwG/4yYN5QIgQXokz53UBvRus6TLai+1Ka/AQlGCOSjQAk7Lm55kESYsp4WMDccWMLTJXWWIaZu6h/pWMf0jqL/1kQ8EhXUAN/GgPJGRZuKYt0pub4cTeEaJsBt3BBMZYNdsWs7qvoANLITbbraMx4Q6Lg82jdEOe+BQRYdanCEa0Vq9spwDI+MXbt04PyY96P9tbqX2AIEg9OkpZtx/nShMbzhrVdK3lyeCrP9sS0jYyUD/6FiFeABsSFt8S51MH5tVlUzDVY2jGdjjK4SrjUVbGO6goMtQQV9NccP1HpGAnVrdcM/auvLiA/RZLT52pok14mb4+EHvcCI8cEszeMHur54=';const _IH='a099236fdb5eeb72b7cb9e3a6c10017399e22639658b0c17e660d4ac11358163';let _src;

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
