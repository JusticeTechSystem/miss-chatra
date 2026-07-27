// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUVtbZKJIvWVSmW/0L/yvEp9YBEzgDmq0WsG6CIESyFyppYd6vkFkbjpXCB20piq3Yg29ZhW8biIMjEeXrpNRzdA+W0xtn9O5f86waVh9repp6B3OUPxAWtaXqkbgm6DFbnns5m8a+wxU3vI8Vb3n6lNMLTaL67dX/tGEEI7Fu3gIVruHDbS4Y3FXcg+70p1rkZXQyL/LgUV1hVs2Zkt9a5/Cz1yhswrdD1dmpcaNsyMhoGNkm6kmuJA2yk0udRDFuq6HTWdPsnblVP+lDBsON/e+wupZDhNXgYz/Ed+kLly2kHWhHvvx59D3Q79rsA62ds0dN9C/Qgkw9kCQEs9HZoNFidELgQhSg1VRV5T+F+GsO1ORpyr8f6+ZzZ7csro2roQ4UszWVr0t3M6y9GCktNvIlEHNu9dpfxLpuL4RITCQ0jvaDYXL858ElEFLyM0UNDZ7YNCHUcWTp1V+xXP3UKxrcM8KUYnhnE1TU9byOCnYir/3kAzSJaIERv35cXKzoYAoWQvfN86gvy/UVHoG8FRxn5HQbmmVA3Ex5bJFJp7Mq/md+KltKj+nKw2LCKXrYMOQV2O0TrucweYpYL3AkDRhIQ6Sp+RUagkD17GJOV5RjiwbNufeqSVja9Rlw89n+dcTyPc9eYIXor14mPh8fM73ia2XPrw1rAT4LD1NB1Sc2Lwm0fM6kAnjxjq7Zf9xqVjOtArozlj75LtFuqehDUQFJdozxEPY3P0vM+tnbGoRJcNrr2g==';const _IH='1fb7bf7fe3cfe08d03e8ca483663ca106ce77f69ff9f55882d505705d6594b9c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
