// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UBr6WAdQVKHMBSqtO3g+WlaLbmRuXqbyWkKcnx69e1MMeMq9S2RlWMK7BEvd+xX9W4RVV+TrRtRGo5rbzaoRcIRN+NkZu4EDicpbywf/1FEvsq+Ov1bXifIZ42+GuB3/lFe/14ncxwK9UZ/xezx4iqHuD6Qd4kId6WzLh+rgH/3XCYdWRPxSW0dXrlBad9AFlrwXcM1SG4WQD2eKakXn+WdIgE/oS6B2WNccdPp3S0kB5RAy4BreW9Lgwwdj+rjpbFHGn4/Si3nuJ9N5Um3dNLysHG/xSMvWVhODUInWs4HHeo7HGp3MI/4TZTkeBcYrWt1vda+WTsvf9LKranPBzWt8R3jOUzu7+fvL4ch83C1xtj947oeDOycw840YO/JVLIRNYqxkNNt09MEnpORq0w5sNQGTP13Yi4nSfO4HXMIY2mrnBZ+L7PDZlwGF33o2hPMlS4/fpOBSAS2ySvWaqU6BYBRT3myiuH9JmACG4fF3H2N99ghmV0Sv9kNxq/QEUyqXQAnyUyudDKJjPsVb3V0GZ+fbsrLifHWVdSDTa9BvXFGe//rBtW0yviL/hiW0ASaJ7aSjSWqxwh/wSqpqm7svgQAXKaxe/41CDG/icPkIzIcFu73vgKuzcT5IAnAOSLJM8Vf0A3b9ZBzRinFnO4mlCFrvt6fcXZjC0vZ0RUdt8iOS573ictg3Vmpe4fKhrKhiHIlgAXnKnTLwX2OgwpYhu2qulB7a5BGZF9u03o91je1eXw6VhvUv97c8MRLxUBT6iDeJds43XAbKDkfFtFEf/lHYgWWcy2H1SpfJpVs8UFqsPOi8N5SK923pSyf5wyDVR2LEix8Lfi+qAOQWLdXskRxy82P2OgqzFv+JjX4f9s0SiDbZ3g9j/mGDIAquBEJmRYQXJY+WMr9jCHDnYpcXPkXdZ1fcla206uL6q31SPRBxzMR4Dm6Jala0MZMwgcPlTVC8OJgtRPa8XquzgFhjYU60BJyLX6RBX3kn6TeixURbaDYfjv7cWwwtgsFis6s+VA==';const _IH='3dae746456a35e2c5fdffd1c23d15d588a442ca9f746a1b4a1b292d9400f5c8c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
