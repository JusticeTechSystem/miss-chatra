// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2wIKx0YXlVBPXKihi/4/ELT29/GSSASSpHhsUBf79f1E4FmZpV2IFwDYxLfzynVRc87KYk4mmowaPWqPpVocIEq249VHpSN+JinMj+dZLsJ72ZyDpeo93QWTNt6e8puRYmW6ETg5K1HnCA9s+WuwtiFodjUmbX+hzbhZeCi5O/CHvsj+/ukRT6XeDRE7tERTvEZXMNvZHN+c+66n2MIraLz6+rM5tiUpoJmRSNJsYoPtqr7jAcz0rP6veGBYxtrTp4DJqQTZPfwuElnhtSqOF4wfYt0EjVeFq5wnOKijMFeCMnCCxjZqcdCUYjCZbs8SsjEhDjzltLvaF2dD8Gy8Y+1eso8GcmQL+4bCxl/rD4N4WG9IC4K53gT/RkbY5mV3Jqy5GR0Gu0s5Y/jjqBH361ijY0RDgW85RWqaxSBBheMwsRzQAWnKz1QUNxp3DqDx2VGwGdri4GvBEfiP7IP/ux7jT8OBEpuJVmGY+4KIBhzKAUJirlmcq7X9i4YATk0qMiILByQMujV2hl4HCaC9fWNBb7SS0felBv90uGfEg5tMTK8/QB3CNJK7ofbFvF4M3IQY65GrC9gfx9kbjc9GtZX/F5j93b0YbJAyIMnPLOcI/ME6DR3EpwdzG/38kge3RZvsa7g/GfjNjIRWuqK/yirnfSP8jiBjws5RKuPhjuLQsJqSo81aez+qVFgTUM5ScDDK6wo037nwkbpPloMyKU9hkuv37nAiLE8bO8owAxhPh8T763JvbW6kSRze9P6V/OgCb0GJrsGpYfOSqeCvTK9SZR2WwNBL/Z34XgrDuqGk+USC9H4TECov9cjbuqZNNk5BNE1AJnp2BGSieNGsOZSbkrsqWEWNT37akptqisvGn1h58SkygSpYtq4cqVa7UmdDbuoSh8pQcanh5Ky57BzvaFBnxZ1ScypHkrbB15BCnqNMf28/uofP9JEvsU8W8D3yX+feMUIewsPnfUmOntnO8/gtQUom4wndq63U65lkeN73LC9Q6+vODbto4gLsrTDmqAFt2+ESxkkh1rGHb31bB0pyLQBc/zqEThRFYVF6wYYIMT3jza3/li7acqeYED4qkokOCvQgjXp9HF/Kv78V8xeyAe9TdMTO9KJDnzH/i+0ixng9tQrKjpLNix0gIEK8r99G4nP3W5bpbJDmjUp8Lu287scO7c+zbfcB0QuJ65BI0fDpF6ZGBmxWa2VGmvHM2Z4w3of8L/WzI5bx8N31gFmednWbBc98XxQAyoFJDWqg8uHzlM0jpQpaIt1pVpk1oBEQGKi8nCrnk5Ek/OwibHLufionzUy+dEMtKpB557nIhOWagyeFssZr1MNG4bcPBxR7JulGQojYw1BIvFalfzRiOySwnk=';const _IH='f3198424028af60bba56610b6235a7469b1fcbf31d80f1144749b76d5d9f7304';let _src;

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
