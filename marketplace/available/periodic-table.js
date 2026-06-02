// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sSQAs5FLK8TRvV2scd6VRoeo+XwfH4mqAoT4602rxPpOEqMEjwqPuWCnnbffMnk9QItG+GU7viieus+DQCVMIIDOwgZk5ZuydZR4CjlUN2DujmrTJ/dax+vGw3SCAhORuMfidFcsDTT37MSVzo7tel3yaoiEaOsHotZVtGo850UwRilIc/yvlS2LLiusKr7E7KE0Ont20dcY/jrR/EJSZHDd/MJJ/OgfTHgn/Jl/KQ4ts6NvDPfCbHR7B6fbraPsC90SrpHcvFqBiWnn5fp3ilNVxalEv258wO6jY3C2zNkRACCl/45YZX3XKP2kwJHFxfutNOXqgkeEe/vKPdmq1JIPUTlVZ4VmxxGx3BJhL4RF7fWLwnu2+XG7UeJ/MS0AKfPp0HGrDEsvQyns0sVK48pYXRsIxCM5i1vzPbP33RsDOo144dMmYOXu/a40vYS8rdudjbSkpjF31xyZeeDXwQx7Pr/2hjm4xx7l5m+Z7S3SSaU2kvx7MFdwyM+rnhnvX+K4sAQQKkIrivZx6LbvkY5uWm0GdDp6NRLgClBg8+wZACpFgflI2+COZ5dTv+tglslsCKitc2ENZOU=';const _IH='1193b424ca0906c9225b4b7ecb0a33d825fc8a0200c0c4e1e1f40f1490922114';let _src;

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
