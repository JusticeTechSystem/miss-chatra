// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/R+r9YXZNVEVx9Fo0yDZSLQC4wjybWs8/8H05jX2l5iHErp3sGFlc4HGTPzW7/VeC3TFqkFOFKcdTk/VsyvkkNyRbJwt+PxUclm1Nubcvt34prDiDPVGUEMFa+kQ8wPSaD/dvHSDweRDCX0xXap2xkaRPc9jnPdyYpwRmB4eVkCWvV5UTsNW7VmQhsvnPsslbFp73kuZdGWtvNbYW+EnLFHOpGzI414PuE+fXkIjDYrj8LCLFsl0DOzbceiRxIax3pias1nvoZc+vpwWcj+oeL3CQXWR1ch1m/UiJIg7sZ3cN47vJoQZGFFB9qqZ+GQSZ7tv7kca0XjIhkm4n81nwoZ7yeFVZA6x9l/KfV3hEsEa6+syx2Uz0RFXMpR97msAp5ed6qci9Fssi27mycCzt6Wmdkkt1Ms4gQL2/0VE9J1EFqG4ib/fForPoe8VMVf6Us3DaCjShS/+/itwq8mkWigHz12sVlLxbFKlH/85ov8DFH26WwX+OoKWmkBT3sfYtbYfdLHNVj3oRYdUMvqxatf1yedvo3WhX+T7IEFEkyujlJ6jI8cfrOJHhzuA2c5ZYYKifD+uZuMgCY9LZAyX3TKpf6TwavIdSTCrmUQNzwt0QYTGcBUnrXw0Wjxy0bRKYPBbQqQcJGV1Fr3iN4GQG4ebfES3saYsmhtjNoaGrpIsC81GrQ==';const _IH='a6795217ecc10b1d2a6a09880335f3b1a5f0cc56827c5fe3063501ebda9247ff';let _src;

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
