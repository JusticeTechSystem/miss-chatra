// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9UeWFLr9LlTLZP316q4TP5K8DSmhWRQ6XKPSr9bISmYkjpXTdbZ9cXIu7Ah4SaSi/ovzaFb997Kjb1izvtBiSGWJx9Tj/NMKuAeIjYD6W8fe+UWwJBXW1Tmad6Qz+xtmBhBS7qA8B1BEkf7ZOa+wsvqmysvGWyd14eVL7O8QSPnp+q/batXGMi1rIVqTqBfluC31mn0K6jL6iW0tXEZ+1GLSazLn2rVmrGW+RfN4tDQnD+5XU28bhWTCYYeE23f62SLVYhrRRdPEMFNjX9wdaYqQWvJ9gy6kDUbHMdfDWtda4ha4TJ+uJb/4JmIPgTu2oTEE/7TVis89+Ra+oz2gGLVP6tSNOXfFcsWcc55af47bo6Bi6vWFKw+SswbOUiiInhsavQnX2W0eTNXgRVpo7z5Jvew83ou/Ms7nPIAvUem9wkDsaVT2uC/oj2BZBsLOCEZqqKX/zZqUCSiSPQyyf6+8lDDi2iWNj/VEkDhXSVQ8upExh8LhX+SeEyqF46PF1OYv/E0oBLrI3NbEo/RgF2+oQBSsVm6k8MkqYSOcZXZs74oiW+AfsMeISu8OZrBGJmKWjKY1CMf10IrKcUnN4sdJmAU/Xe33ARnAACE8qeXwWK1OvqFg9aJ2LN2oGUBnqKyhxhPjqN/UwS3Er4GKPJgtU4tCQMv+RMMvapgFuEZgFOaWUrPtE/XuPn02Z16EROuVGQWiLf9TECGU3FcHmwfNTTpW9o3AJbyhqkSMQW8qrh+hvfeyi5VT';const _IH='0c6cd8485732d70a69eff34eec56e218d14717d119c29ec5852c6c619015d6be';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
