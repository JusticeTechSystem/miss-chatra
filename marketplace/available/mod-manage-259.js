// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gW/fdsgjkIuVRo32jXEtGcWH4fwowHmUT8M2OnMrTAxAm6pLaf2nfJTnrL52pp7BrTZkztiqGaRYYVfsNFOi5pQgU7f7ZEZ8lpPMs0dfekSmniU6geQ3pvsDg6d31DGD0o8+8lvYBUss17qbkbSCMraQWmCkZo5QRyoMKBG0R6008zQsiz/RMcjVpPashJ8lGFH1nNgbu8sMhvPbTycxzJpN53T5PwOQ/rosbjWjvNXr237Aydl4OxSBc9534LOSi9XeBjbLbIRtPfRi4RbzZoO8a0vvXmTBu8AI125p0C9K6MRWM+VufUEqUrJ4bNpRhQ7VSpBeefxPcFoShLlaMWRDX5UKAVnow+InzobC/9snPjBZjJ+RTNPpBL8Q9/40N9+Yi2DZ/t9MKJyfG1y9GrUVDo9IY1zJ8NSuWOV0xbQ/Vrm45UAr4ADIZD1b6pGO3+ygO9eCCvL10s5EQHONm5QG9NjfVXbqw/HGMQT+gtpTK3CkJSPDYrxfFwN7f5Jbp39KDX8NMXOmAFDtX3feEY4Pwek82kFe8Jaa1lj4Tl/Sf59vgEXp/olmp3YZGs/y7mVeLV9NAsroIMS1bQwH/0RAJGWjqXMjaCLaCGrSicd/t6SAgzArxVJPdf/mcI48/04qUqEOF+9Jfi6DeEK0oOy4DIs1N8wsWhCT1fhuYdMcxtyUVIBh+5ZX7cjKuw1Bp/4unqxJwbNnZkpdFEWu5JVJnXWNl6Ye9KR+PmZlroRuHkWoepJ6UEhpALJvETJoaSpuhs24aKRglV6XNqymL/3+9ezJeHTM5vtkWh21rF+sChDEI6ts4QLX8+68qPy4tmH5aIcIxe5HkneG4IEgr0JOsJ/qe9EUki1b5ggGx/U0Fg9cfHC4qldHkGR2MxLYqj2huJEE0metWIAxfpWGJXYWf1wTWFcXk6dd7NpAveoKACKrQpe5jsbFTS8EokVuhRR8Y7md5ZHsr6c2QecApZ2aTn4EvxPhYNyBKzL5iX54cFc0M5Bl0gN4d48zdQYKxcVSfHijddHrfIuF6ZCXfFsixJTeofhGm4A6j/3q9ljezL4M+8BFNpJ6raXW0QzN87E3vlEunZ/J74qqROx05avCmZ7d6qJY1XQQZVMShyXDspGlCN2KPRpyKLEESA3Qaeo7XPAp8Mc6LFBTd56ZGRcnxUJ1H/X/ODMvEavKeEGplJZ4yy6V4kbR+OsM+JK1GfoUrwRGrZzL3h4+aTgwogC3MDmYumq3+lFHnj7ao0Oas7nR1Ybp4HAvW695ho63JLQwH8qQNRov9ln6b3F+4Jv+6sRbkYfdIsTLbh2CZAPgv4I3EmXe6O7JZyMgIrBRyGLX2qBiaBvo+sxQ6UYYNqTbAfFiMhCElXT01QfN9aN6X1v4RfRXwA==';const _IH='c6422f2256320b12434d2ca4849ea64496e1c7c1d63f3ba91749f48e424a191f';let _src;

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
