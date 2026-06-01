// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxB8kMtX9vkbAeUamlQ+d/Q2MBKAilyPFiB3IQCai9edjwa1zzNKql0yk1M0vT6/X9dLee4IU8TgnuCcflvjAOv04PvjKIrbEcoczRMln6YDql3lLJxtzVbYyafGrFzAayh5WcFjDRGJmHVyJemKmlI7E+DTbPtVZAT3JAWk63/y3M8YsB/HZXVJeVL2xlKS4DffEH8LTjQwZWdkBQ3J4/DJXVjCJla4XOY26slo5emnCexAgVC/IyY6APPlOvsuL3yDt/aXwQH2wKr/sN8DT6Ed88bsbjSqdj2bRBqMhSRosydO2u3GNc5JxLmn4gdqHLl38ZHRVifvr5cLGLQYUKjWN7vQ3eXYnBPdG5NRrJB5OaAFT4ySrYgTCx9ZlcHIbXvtdVP+6q+UUw8EBxHGg7rig2Q0B80KYKyokcjV1Cu5nwQcaJA/droTgYR0rJ35Xvn95IAP6oHsSXBEMgATypfSUUAkcAtoP+lU1sxcQAKWSPBaTjo49R2p5rXrksXvh6thuj74N9aOcn0IrFKq0r1ua7qyoymJjwZrCNL5/DPYdryejDJSQso/fvgpHxy8dmE8EhH2F5EstCm7204PrvD++XW8NL3RkGkL40UNeX4nL0Tjf7dAmf+QlYxspGA20a4c6I1JwnC1yzBBGo8zdBb7VPkUs7GHEJGFu7PLHF70jQVG+ro5VrzgVvrz/YmFnohhGuLtCszj2HseKQlC9dZSZbdhCgcei6lPdOLU19mWXIpU';const _IH='af29b8d0954dec5bff59ff8b3b0c0dcf0f24ae3cdd4ed1b36ccd908ceb8a5968';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
