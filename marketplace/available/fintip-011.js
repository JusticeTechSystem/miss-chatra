// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4wvs0Nak5b+6XAd8IN0lh/L9tBsu4xExLg5DGUKS8L4X5nATsw7SQzSxZJGlIAbzwpVuyTDKUMosGSzVvJ1VFZgm0K8wYfBGv22CXjB3P1k3AMNhQDiqbtCP0kDxaetJSK2RjvWZ+pzH4qsWPhVmG+End/+jEw/csQxbggMSsnlzkWvK/xRFWsVs/lhlAmkWWn/7eYn63G7YooAn1BE0IpfHWYbGz7/vKKHpZJQkpxlIZFaEg7dVRchBYXx+ZVMpMaOB+/Q4HOLzaxkLMTTiO3GE7fUH1/GaKgs88M7gTWQGTMKzPCH2U/h46a+x3HywKJraammag5SDeD+8eBYkVwPqO/BX4gRwvEImw76ZmF/tVJJZTtle91icxhWX8sULOKWRyFpCoS5zz4dPHsRkhJSgq39I5cUeJN7GpHTzD95sNXEEQ1rAl9+FKb1tikdGzWX8GNNA2wz/TuOGjoxW1cwoi2QqprJzmDE4D0fdl7kM/Dj80GyQRZ3gxFxodreJ1Kvx8O6DmBzaN4X3GgryM+bcgUjQWokH9OmkFPqF3B7K+W/b0E1LmXKpp9OgQ8f5W7DDmLpeco4XJOinTfXzeXepFog882hAsMyz5iY+z9HnY5t45vbgspNmaa49kkN5ZdfeJFdMcwBlYGtfA/A+4g0+4TpFO8aB7JlZzVtQD4tHzDARcHMhUuzh4bT79BEKwBK8F5JToYAepEa0jN173Lw+3B9EMQjabaHW44Z3C9rTS8+21xirT8xL4y+cSnaQicQV6L9NGp1uJ6G3Kf1WRemI0BiQwMJ5WXN7iNaYBDY9jp46PomPd2pIi9+RgLfO5f86W6UGyJiGbteWQ8y6X1ZGM7dWky8hYzoVTbJajh1OhhTV3yDSUyn24rOwE2oRIpEVEIPkv4wkVouJIuvTYjZ7+FchFYrwEMPmQF6PV9FHuqKKF7vnd2TUrxHPf1JgV4jqivzr0qckXZ5DS854j5tCJZSGTA2oDpng8gN6VK6pnbfJs4GGT3DCsZyAlklavHiMJa52luETUY5K+ofjs6hWnVrdAPRAIhW7y4mP5CGusQ==';const _IH='68f4d5f2213bc0b3ad38e67c657ea463510a968ed165a5226c1b02e62379ec43';let _src;

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
