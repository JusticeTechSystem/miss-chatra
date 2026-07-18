// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxR6m9KYKKEQ928TVFXkiSHR77kU/vKeVyuvd6xYl28GzM5qPksJK/SPZbeqbo7LNPKiJswywcwdpfffjRP/RUeswnYzSqfzCVLR9oOjql/Bqg9RWLrSlrYx3PCPHO4VPN23kc5MQF3symFiZ4/ZeFf9FcTXh2zk8at37rca0PiYTfVJn3DkoFBQEN/kS/HMwf6avqPSrlTl2FuOlGmb1iZoLz8q/rIuuKhnFRhLqAicDyX+n5YGpFnNBeA0/hlfmHTBoi+LLp9xqYOuoMmrmlNUwL/VEpILeGgFqprGYQTtSBsxNUui+oS2MKdPADQbHrY7x76s4sqAKWqqepONUgxBhvxfRwOigNGvq40tFXHDpGZYZ6jNvjK4w4U76SBiMMRcEcudVIf8NoXowNvzk28X4ANKsGcLJ/nMPSx5TnyoWXAv0MXZnKEBcv6AmciKifJ8eW2dRvgLhEFJ9gxM38qXG2E/SXmQ==';const _IH='ca26fa284bef7259f1cac0d8d48f76981dadaf0e80331923d6d2a37aa86378c4';let _src;

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
