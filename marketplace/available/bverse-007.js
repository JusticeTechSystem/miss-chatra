// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8CNZiRHcAKOHV+OY9iHGLoWsBrxSoWWEd0kYrehimaMKTw38AqmxSdTmBaXPN2yu7LpIL68NRrJIGr1DawhGOYk25xaXym7QSRdsG7H1NCvKbdFTaquk4VzQ80G50OM1kDJnD8y2zEaGvUJXL5vK7IFns/KzUi8qjK9YVviBfUHOS2GIMKiRSkjV45rs4l20wUuwoVVydZYnzeQEVMsGP/S/yuACxAnAqd4Ny0fazAMC1P9Mo/StjTX4XhT4hj07AjBNDSJoK61ox20eMWqWoEUI6Jg8Hgzmeq7K7l4P3XmOFOFMcrCYgxWYot4RkLTYbJIVK6wBwmwKHeKG6eOVMX7AMnvfhvYNmgkQLfaR+8K3CnRhXXLBpr0inNqF61lfAHInmfJ6wHwRZsRYx6ALS0O9ALGrFRHuwseUrM7EjjLj0CclLLDtFcWzhn1x8INwusYyhAOFhKygz2m3ARMhe42jtvEcmtIITZz/rmDwzj+YixxyM0mKHwsk2Vjep8j/YZO4G5ETEtr3f3aQEcrfRPPKEJmbTXXe5jhfAcKO3DrKUO262wIyv5s8s9IYXQqVybpZQaubYqO5w+TeNTgtu7cH0fA/1RjDKOqGSEnunKBi3FsnBl48vVsypJpkcvlCPPYdL/cGET48rgjs72pfzTvqbQLOil/S';const _IH='2be9c9f228b0859ab5e2688764847f690c6a402213e90fe5912c34fecb1f755a';let _src;

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
