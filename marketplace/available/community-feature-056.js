// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0jKr/dtcB+gd3jso7FZQ+5T5RNHc43wF2GwcX5HrE29pIqSm8/B4pMXSFnUY0jhEoiuOZESqXB399mfFcJLyOpGa/NVumSr2CyhqPguzfE/5qIZZM/2JOztggT4aK1fkUnTrtbJEwmX1rVyMj56q3EKrWNdwA3wPYoJvYutBiKLwNoWHTXjF2sNQXY2JFKxP7wRVAXfUy46Sph4EeVR5u7ZhMgLfv3CSaMpZDQlQE8Wmnd0TUnPP5JPPL3I7l89Xu+y5M4Tqb8/6qSVZZ0rdGK0mPBMS+4bPrySjDZTy0Mp+zt8CYTdjsM49e8OWHd65A4p0kWimc4DAGkx3SS+Bi2OSEJSmXd6lRTi3aYqSpKn8MFgvSc+hDfdoMPnVs+1GbPvD9iocEE3FhwPYjyuc3/1E8PkBQmx/keiAIFIXGD3LIABaU8lEvTteudGbiGTuAXAKj7Uo+wQKTV4lgjJkFT2nsEe4P9Wd3utj7RFom0CbQQTaWq0zoqHGX0FUIbG1ZcPV4N7VsJS/BzHHctnWFq6hrqekkVjGZCZoFC3JNQ2VdkM4wU1mMjXP0YKgtzqCGHgTeJWYNXJBx75WJn7AeSspG00Z905+zTIb4K22Mr7ieQSWcAFVWUb1sBlFBHm+LO+1UtiiKKzafAx5g9OOctiqkNX6k4QUwzJVuO8hBFSPuAOtTtK06moxo91pzMRIuz1y/V4vZj/bhQE7rZkSaGioWso=';const _IH='16aed9d701be0d5b987bed2ca2f8eb9c2c35e2cf680a4ce4e90171ba686d564a';let _src;

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
