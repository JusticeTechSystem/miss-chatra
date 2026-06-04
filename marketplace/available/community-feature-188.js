// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RlQZs77gO7Sn6O8AWo5vn2BKaD9y6cHYZk7gzXX8YBENbtlGUa/coEd2UJWmBGCGUcaxVIqaVcKcRu6kCYx56L2S5GLuPBYXklGu/zLooQGLslnVAAZOvoqdGdhLg93Urd/Iz1+4IUbdue2zLUfFAI7SCgB8iRrN10HQEBrbgTzDWnm8O05LE6D4pxqnkVUeFa7oL0zx5cg0VLDc1rg2T06p8xdky9Kx3Vbuhm+iXRKWxTz3hPMWm0sfoL+/7SOaJqeSql2CnfNkGLkpkEQNuavpLLsXGMWHi8gQ6bed7lnAuKbGunPNXQNMqbRNJ8GFyM2W8/EEz2oV+XRJIQu3sBKS3sMll/iqjLDmnqiACfoM4eZKIWtHY01pl1J3J6O2z2NBGoIsXosx/K26n3Ewlmjf2wO07KlqgV1AyvPpmnizhI6tceYed3XuZKZtS60bqMp48JxaL/bF3YmJaCUiY5/ina4pWcZ6vlQMFjDNCkWCwmIhbE+OnRCSagezk8ika9tK3WrcSlmQg/JT+D3H5fDbq0zRFW7iJb40lMKi7OZlXI75TloEv8+xnisdSS0tUsyaRQpJgL/rkoYf8TVW2ZMGFlYYCmtCjfiivyRIEemQHuRJ/j9mcUzh4UUB9je4Se09mkZ636nrHffdfUN69BAf2SdfY2OotgxjkJiYKpDINJXB88yFOYE7qiuuvlEaddFWDpB2o7hhNKzqQxDvMMTcNbhaVADCFSjqouM=';const _IH='9f44489f9182f215ccd2d563add245175d9951a236d7296a0332bba791647994';let _src;

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
