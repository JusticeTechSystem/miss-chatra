// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyacU2D0waWm242z1LQIzoi9RTFZupcUlQUaigQuOJCsFuMzfSKxDO90J+Fk63yLtIug5Ha5GM7hmBcPnPLs+7pPiwjXSsidE5KdDSR+xt89X2wBqDnG4uxSpP8a9dmxr/9OqwTjDR421Py1+aKhtMOVbsnLOiv5NfRNt3TyZ5q+jGvpxzlAUc6lbUkgJU6Sf1MDk8bRO7rVryK1zXTFa5bHqA4AUsYlcqny65omxkNpFJIWki3UG00NbFKaac6qE0sV7MklUKyZscMRRFpmy8fPVX9rJZo8rOkKwR3DvxHVzV0K3swEKw6HLgFcQksmSgF7ERKAR29/dKmEb8wKbZx014UlTgQ4HaW59FIY6WURV3jf3IzDjCF5rSBiq6Zs9hNe9jyMCL0260/lyILh2oyJ3xcqE3WPCAhRP/unFUSBSY5WU/RRNl1AAbaxxJsyJscNvHrtz27sxHOFU3tMr8IHfZtKcNSfVz4EFbVqp7AZDUvcrL6yNdlFLilsgRIJHE9blJJ2IPG7f1zmKDfLxKNvx05w8RmB0wd9sgGeF/G7NAJfuLRbyu5m6yhSTB+uCR6P4949OXOM49rZcLkEmPYYImqAgHxYPcpXE9aK37MBB5dHb42Ntjb2Ap0e2SU4PIqGPNISdNjwOWOLuRMEvabLOL8WMKMQnIw+BPsJaMSzjeEvz1e/9QPdy8wBdOeTZ6IpGCd/xB07+hqtyZJZpXi5e1+08ywe03+YVAMjxLABKAw=';const _IH='4bed0817c2420580f876d3cb03cffbe25ff304e7e08c7757ffc44dd4627f3f3d';let _src;

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
