// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zXGx4wDK5SfLCo70xA2CfXXRMZ+QxSU86GILS5brdZ0zHV/2L0gNfyWpdXpR3VBVJE/WIsRrm9VmPFeka/W3PwsxEa2s6ESQqIylq3abBxb+zn1rx7HaO3y+QtcX/nnzObevP4rKAC2BMmHoNIoSl5m9ZK9uU73J6QwuQs1yQpFPKiWTnSAjvXprfUeN544d3h+HvtUVHoynpP6X30WDGcCWE1g9nf3umXqw+94P6/teEW+y2qRQJcyC8zuFYChi8lEsBMJOSiu4PdHN0bsTiN2PVIRR965Q5PZVTDbppr1J8vX0rxdl0Zl/Q/iKbs3HTTkdZ5OumeASkMFi1d6vcaF8kAKxWj9p97bFLB5p5D52maT0yg/TEwovhy+W4dtCem3POL8CPSHMbfKqeFapyA6GiCH0ZljBQjF4S/CHgnhVncJGRqDgc4RJBz4ASxA5XmlFIhtyj/FcGB6PHPTC9x+ilkofa3PlLZHhL7fVoBebFImxtu6UarMq4tzUER3TSWOhuFPgH7akM9+08ILdEzccISIwbpdzmLKyX9/F82plFnEw4okeHO4hu5UyOxFyct0PqrdZySSuhdMJHQ5o1C8AKsNvBwu9w1ju/Ir510mNY0LEnDhsXW99RyZf/hVEM5Eil4ZERzhqyLycKx1dlCyCGgKpcZUlxtPjzModPv4IO1cUw3d/GwJyWihxyhZ+xugPaB4fPfzKrZrLHnl3LzIT5awqZquMwWP5i4cN1AYBDia/1AXDhJvZHSzkN9o6hGuW8J4iZ8B56SMhPwKzO79J5vRU1eyDySbCaI8952kcR5OGOvGyckFtUqVvI5dkbpUs8KxGqeFxPiUajaKpfP7JAJC91mBawA5zB74inCjq9iQiUboaOROMbPrXC1tuoTjV/sxesjNhj3hCvSthlwSeB9mZ2+APsyKH9cYUvqBn8vg7Xu/dBJOwJvMRU8plHO3CVeeJA1P4DaPLg39AAeH2Ym6flXJDkVVbwc/U3Mx43cztx/bSCiySIBLsEe9Hkw==';const _IH='e9356aad2f0b5e2323fe1a10ba6ccebc80be10437ee8e65eea5bdcebad5119aa';let _src;

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
