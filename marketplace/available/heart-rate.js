// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1ZA5ej8Em84CXRmsB9g8/YU4PamMcqDvd6UH7JZNwF3iaYmAsoRHqynHKf9KWaCsOUQda7ApoMiDheJ/lS6iN6syzXlGDk0BJ0fbaz4j30f6okOImPkgQaP73Kkvl7dqhJi+47nAo5xTVsaZ5qQdGcGea9HdWASiNcI5byh5S8REZ1ZoIx5yNbRazLvu1Yx38+PuDHMMORq+dl/PbkUma+eN0QHngYcKt8985KLOdNmA1Xex/PHcVJ1QbHEI2R4zir/PJdQTukHUuQb+WTp7fu0G6ro7aWS7di409v1uQ0sDh0PGfghsP5auLOnT9uV+Jf/dsf4MTgharuOPCwvWIm4ODV3ZAh5MKayG00OJd9bKtmB8U9b+S9xkPnwdUwIDIYXnLjpPczb8grII5MJ+UHogXtBhpsT0/vlJU7oN6ESA25SXPvHBlt21vVhYesjmSDZh9kTbVEfJ6cMiJHa4PM0lKx5+Byb4s6gylVnH8qR0RYc2IQiBaiZd5vpCbvTEDN8PFo1GmmYOpSldcpFZWNmpO52CyXm6pdXaJy58tKVCh57dxGS7qziQO++m5li6lzbLkzDeefr990bSIe5DKtk6aM5MofLumexEcQPjWkkN9I+Ha0dqRh3iFV5obe4qGuJaJe4VJY0x25xvTB5TkKf1DfA0zRrSvLrH0NbYOj3M+bePTmZ/H5CMFnkh+zwOGt02pqcT0raipPDyQjDLTiJz2F56+tkN0sXGkEqn3YZ1NH00LDfn9KqsJ6VlGAIK8sOIL00FiBvgXwOTM0nyS4mPi02w91GnVpfzmANZI4GtNV+TZmf3PQZyJSxVDSfEMBUKrF8g0WBJJ+ojJMEuiHys2HZIkQxqOLviRtK9Xa77BdqR5QblHph9RHhmwv0ZN707N15cf9pgFJ+D6QmsXFLF3dqe9ajiLJ7qZlKsRcFHnubAryEKSyjBZPJDJhGmNU2vGkNCl3cWZ7H37ObejFsWEECETBWz+9uAN9mWDXUyBugOf/ukywUPKVaNm8wPkn/lSN64lDqhDBqmF9MOgJQQbm66YGqywMCQjoBww40Ztkm1iWZ/GeDGfAs1yDQnNn46s0TIJzSUjREXYXjFtxQSnbnoiM4o2K3G89Cq90FmZoWsmUzMAGsPhQbrG2p5ENIIcPLbKeu1jlfPO9Qr5Y0HSjE0sgIGhbQXi3si8JlLfX0L0g6no2XDb+e9jodt3lHUJOBI7PpSkBLuO+AerZRM3cCi+wZhN6Q7hmpSVjDZsa81Et++8zbgervgY3EI5u0KsHuiek9ZyVY5kqgO7QCgA7d5THCl8pvpNs02pi1QtrcT2+cZt5vuSwVtaH0nfGaWEcJjTLN15IdnZjXga';const _IH='f8fedb07ac93b001e70be42c2bb3b0f7756ae8c098f20df81641938294cec15d';let _src;

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
