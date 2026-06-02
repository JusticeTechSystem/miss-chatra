// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='voV2fcJp0AUag3SEdmAQian/IYRky4kyOe/a6QpuMYt43L0p8siXo/eFbJjnfncWEol/6hHO2LrVFCsmOB8GCfTjnmLJt4QLGvCUP/4nJ7b1sxNCncnW23O43z2qeh/ye/ryfTOG7zrq29ARwOsQ0vuy5C/8jo8LYts2rAL7ET9wKjRfgsj6IK3jsMQpSngj92Rh7m3b6eeMadshK4TjNAeLGyStIR8cyBL4q0n5X6LsjNir/oOICcWvoydE00e/A6FdZ8MkS5Yvqfs4rHMsN1Em7149TvPsutewVKHNy+KUkX7O3l9WJvMHyDi314++LfO1pFpYArW0VpPP99i5Vcr/Vu39gy1Hge9Ebf+q0JXYlNHLRJ+mXVFUQvE5T2hf7GtBbv39T6yJvFibpzwi/PAPWzCPOAgeDFjoL+LxmU9tjlPYtbAff6jay5uKvuC7PiY6brM7YBrh57a5KJcmiGJk4TQgn+ab2/GX3oaghOokfjpbB2Cdt4Idly24XueeDk/h9KFxbwvS6QeYfuRrKVyGdDv346uGDWz0YbKqBm4elmEQ/sVQCC5X9mceRLGrFb6OZXR19ZcdkpTzbRpdfbpedKadDhoRSTgm+R+lwAJbW7NxKetrNSDBU05mp4652pwhBAnU+97sqsCS0dfotLIpY0HWoIMyZwVw+rHKju7KzaD3YTGKy/rI7fXGzYeNvstUDLROIomCemXJOmH84DHMONm1H1gySAA7E5s4Z0cWkZAh8ShDt2wFZmd0DQRdr6GaMoxRd6tqqdrvx15ojaXScqrEQXj6uaucQ8dRWZ2Jv4VTtUn9wzJ2KsOB5Wqie1c4Top4M22n7USfhYb1m/slu+LMpiERnRMaYTsrb9BfRtGNsRk7EwwZVha+Pd2I37Oj3QWakMgjvtKkr+/S8iiB88DSwrOhGeHV6PzUJlbfSzP7LDJq5bVFt8FZEotZ2xIiyPAvd3o3dEL4Wj/Pz5Tb87gm+/gk04u5MVIokYKayjXMh6oHvMSdibBfpknX6Dl9IeBwUnAwjG/aAvWrWIEt4HKWfFiU2EGC/8K1GVhs9Uj5TXIhDZilUUHue4JYu19AEBbyuEz8IjZmupP4HgoXVtljKdH0L1ocIezPY3l5U5PDGOxDidP/fsRVyctExGFLah/FDRH8IS1MOpcGmPiVfT11kmctw0ngG/56wqllhfaN65Pbk8zliWpTL+iWf5z+G2BJusA=';const _IH='52c4f60caf67afa8581ed751102ad9478972f787a9f0788246088290eed0829d';let _src;

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
