// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M1BH/MivQM3qTUIVy556kP/vhpVQbfYjGlVikyFDFBm+urjZK2vK6jR4DyhmO0do8DG6luLGl+2A8Zs5LNNgBF/bnr6oASiWpCFvdIaCkhemULJF1w8Pbg1rUn63xGQELlq2JsENJOU8jMHXEjYA/GCMy1/H7QFXwVSB3YlS+rqc7oyJT/Xa3H+nRkZEBgaIj7nbVR4StIbg9GLYy2wZRM1Tumjkv9xAsscmZ/Vm/ISClpW+Lnu/m+AAaB/hyiFxAe8WCoMG1LX8AARIG6rfGBbiL0sBN+qf/H5g9ufn8r/xeZJYSRm4MAJSR0CPwZQCCI6Rh4W5phGyJdBKcUYZgy1YdCRj9hYtff8X5rZJ1Pb1wCxmloL3zkEBLTHrvzBj2DTfNNHaJ+P4obtXluSf/K5cOpLP6hMLRwDQ8zmmDRPFP7CDhkMcpqfjVeA6tKJvHyO7yRgSdVvf8QXn78Vv9iXWWHUfe+4MGL9iIqaNQWA07DlHzom1bHKyawX+sPJhrjHlrRpHv7QGd2tzFeO4MGRbue8WGG0ulR4UKUizr1VS9mHmXfowVnSaYO3wrD1TFIEx';const _IH='713c4886739ecbd1ab86e6e8e89ff5686670206564ddfcb2b601c60b1d4d78f3';let _src;

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
