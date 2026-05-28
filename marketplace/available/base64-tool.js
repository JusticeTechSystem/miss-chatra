// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MUWQ55r341rVNR9SibedwCSCgqPi5e3thI3bLRUezXs090nBxrtUC61HLfIBNpdZ7bKIJcdXr3jIdFgf8Sa3si8q+Z+kHaTDeuo0Kg7TclaUff17X+54yaCo0SX7Cr3EC9AHBAXrwHbfanQEt8JOVMXDRwCieFPwuaKLhdHx+1pF8Y5fN9AWYPHi+W/KxQsVjKfV3mYIkD1ZaZxql7KeIZffOzNBVO6HhjiLmweB1kyOvTXJEMbEcvqegv6dn/JLFNIXc5XaqW8sdFpEDThBmy9iS8PCR7MxFYrT9UIKVEyBGlvckyv5EtytbmtMzBrAk+JY0FbGS1e4/mOWG6gdttYtd2Hxhf0jcwZ0Dkbb59nQ/yPna2RI6nHZCCFPZv3h4SGBStL1Rk0+sntTM9sVtiLfoegB+AXpJEViEtDT1JRmJCv2EDrf//pOMUu1ucKS6HWTMDTerMkGxipegKILutzBGmZ5yc5uHU7XZyrF1to69VKXlwRoGHe5K1ZFBXYQwIBEI4n5ORUNzUADmN4DbLOtQnEoRBzSup9xIN8rEG8MAyrLC3r3LXmK07bajgOyjOuwz8CANK4XlzBVpdbWc7JlwdHAOOBgteE8pnfHwTa715D5qYcLqaHX5ESZb/HtaplxwLoGgPlOMox+WetIvCs3XJYauIYDWDzzDI6uDEgxoWrC9DyYSZOUiNtLGncQ44VqnPLF41u4Uvf2+9i3UkGyivZnCas7BnRPMCIc5S3TJSWVr/7TG4y6Vh1fFiGNSoR59CGLWp4vN7L5bEXNvgJt9Tai0Z+r0UuKTz7nS1KfcJUp9BegW3HOxNz23hs9DcKxsldG5M1yW3zYc0sepZRjTKnIWZCgiTCgN9cIQxx+VluKDFOh9fqxg+JEuBMQBbFqdqjtfvPqVX+GUdBRNe+YzjS6mZy6gve+B771S5Woy176POQ2ErMPnN5SZMhQ1x4CYDB1B3QL4NG9Ww2fuWmGvHWbjNrQ7nZ91hXFOyrZy6i0v/OmSqXHbOCGhLPZu05C3o6SAR3GCfgVVisjb2DF3c469lymVFrf86mYM6k1p+RE1qIROdobC7psk3tUQDBDVF2wkFqnyeTpqweNobxDCY0XsqfV17mqVpEa3bQsP9XSlUUa/HpE2LoSsQFZkjQGmzxc/24Ah2Ogx0oMo8NYV4WVfoWFlsstdTK8R4uEODoCVDrfFEXjduktCQ3CQrh4jvwfyTc3VndvkQUm0WyN/N9l5Qc1HTaPK8pE24n8Qb7u54618RL0tniwBPJuC8Wt6eQkkc0lU+AYoKMPoqnqAklkxsfPr7RdQJgIqC1ZDm36VOVi5BTbcwraMumng8igkaRJW9spKpjpVxYJxVQFAaSBWR98uHbxoMjgy2JFQFvesS6XXZ5VITkrZPRmWcVeKoXME+fFtqIPRPVro3c79cxcxf87viINOCx1m4U8m1UiNbZ6FCdhs4eRK8i1ybTHYVlhEtCEqSGXGzXC5Lhj3XMDAK1SHo3grPHrcygo/rhCr2iFTUVikoNA9PeVfWfkLPEhvaOSPPUMPiPxruTpJlUBUcuLkqceIA==';const _IH='32cf2b48b57863309b9d0d4fc0960afa200aee69c34ddaaa591c1b87679ff6fd';let _src;

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
