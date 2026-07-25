// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3+V5uUa/2rmkcc3IYtRuObmDEo4FZ9cmLpJ1JUVnfWPww2r2ntl1axf20kz+dqjhvewENTvIcXF82NGylUpi/t2eBUF52y86d7YGPGMInD9J51vRjlzYT5Fj0F62YQ+5urkkW2KguJnj7lCML906IU/ZkwtGve0LmqnPRtAcKKWjWBJjmhQr6RE8NZQeFWJvferuZ7V7P/EKu+MXlL+hMG44sTMKnvDsu5HbfM5ePqbYDXVDYTs0u7f6dfd8lBTnsfTnO2uK67ovGL7PRFYWsGvHPq+DZTHn/1nTee5gtCl9ovDkowLkTBs1CWQzaIDuJYzj6r7UTeRvfJf4D3c96tuBr3Ei1YOJEPtD4epa4zWVPbFcCkLhTF51OG1QsVeRO1iKx2CEzGw28LXS5+erQIJUaPVU+kJvZGp5dhdsC5vGGHvWGwBiLZzlRG38DKXxcO3tQjBuv74RH98LdGKeKbtEhuNt9hNONRqUwaod2Qb6IrNZB+kss+jVYls4K2RQRkB8HUaKe/OnHKgMvoG62zO4cMUY9Y2JFWOXz1smxv4iFRgFX8sLqRgSmqIt/TxD+ygHo+uMNFV+2N8JIatsbmYuoM8IjgoX2Rz955mAXsr6Z0Dh8mG9M9rj0GjjE5Mf9cGMsa7Wz59Dd0dIORxcJvZaKoH9ixLZZanv/6bdBMfCmlGNotqQTdGs3buhN3zUcEUTGGLDOKZ0ypnldz4WMlpe1OmlHuE45';const _IH='720926b5fc5036751b9ecabe6ef768a9d5d7e3f35eade88e4d366a4a0dcd925f';let _src;

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
