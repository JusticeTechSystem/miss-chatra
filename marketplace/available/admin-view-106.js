// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9v9uy0W4VXFM8hGLVuK075HL104AfCgxX+X2bqCMwV3LAl7Qc34X7sOp2utg3u+z4MV3YqRgswYL4C0GoV8qiCqcUVBdBRkx7zWa8j5V1AAQaBj469IUtjP3JTYlkUAi8Er33ePzBNEM2KTjHWFcZtJNVAqSC1iLlY6Bl+EdsRs/1lMyyMHk22WDfH/0699iuvAqPOAiP2q/ZDfnUAdOH15tf+iqYzWV8JVrUgYCHkOWZE+/NpwsCT1gDO2qHmHjrfmNjk3Ai7UWG5SvObuF7gxlq7N15GNhFqlM2FkV1T+AmpXBEv90UBj+mE/TjrbzgXf2eAZNpU81QYj0qoRa+OiCUYM8GngkMFiMCq4nQ1qebzWQc8Odh+l94Isd3AMrhARpLyhisoouz6phGwrDioc5O5Tr9hTKeMSCSEjQrBXNivRMJp+x8W27pj8o8luPhCSkbugUGZdAMfTCumUulILgPKy3QY2cqk8c0W3Q/Ntnkp6AoK09gjoWb3N2mV3ExZlvo5jRjyKZMFc7nQNEr2kERbSBj1sq5djHwI38N1qaMYnFHSToBv0RlD04yT9WchNQhjPpgNa9i757t2hIJpeunDUYpsSBEAd5QAKUBdJwdCgzhGtZUYmSMNDVuDKbGGllMLuzUelKE0xc9o8F4h4R7MG4hJrtTsrXDnrpCmjUDY4ThEmfgESqzg9OE2Ypl7viH3ziPyFuIp+uCjIleDuXrrmXAfSPFYi4nhtxQn20ghb6qlzxtfoxCNLDN+s5nM4VhCy4jdym1Uw/sOvVQuP6IpltZPInTc0fyLNwR/l2EO2BVy/v6inZxBeWmFcLz2zYqwmAtXWhMDzpeRA+zzSHHrjagOHSoJ3c6OBXrDi6pg4HfefZA+PuLna7LjMTICbq6+Nim9VQ6elxa9c06W6Y10vQHwhi24sGPSPdGUr3zVxi2+8z5L7q1OykaVHk0uKuO+5Aa+31XVYFEb+SXuIrd6zyGeI1xPzWW71tNEtoUIw=';const _IH='74886f5fa9506fa3106ca42d67d5fef906469962e41ddba3be79826eac445312';let _src;

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
