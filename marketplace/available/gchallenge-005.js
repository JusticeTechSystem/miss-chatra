// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9IRsNYbx0/hmZYDRl+Qtz4sVP+zbxmBwaU4lqA780HjXBRw5EUnFIW97DBAv5rmQOQhj4K3dZW8RHTGtGT9jcqPy4wc9ybjGMOLcEJlkZ3YpU/ZMnz0yUcXWvYEcnfUtg99Tmy/mY6d6wXYCagEBBoM3vLOw8SWiBVkF/R2m8Y40y6pCrRJlKlNPiJxqDyMViJmFRzk+yGrI/Z2f7fb5CEX+64B7XbVWKWVvmBYOywASmGnzLr/9iBjBNsIhz6tAONvK/r2yX0o8fNwZTSd0GDoxPDMnS4ee2B9kv4HLlW55WAeQBJzoI0gWMIKBBhyepLBbhBQ2iZxPkMhYKwK/miRtzKrmd4KpNsZsZXGfbBLYtMk0/HWRXoEkiy5FkuuZFsMjHG7GYISyzhsihrtmcsCUbxPLUdY5XlGJMITthGOsJ8+LBOYPsv3tgF+MxHldG03CrW2SxQMxN34wb9Z+K21MjPwPxzi7gnItSw15S6zmWgla4nWk2qgxTMGWHQmtS+vtIoL01hRD9V1ZpVf6s5ksHSb52SZVywBz2ZDON9Gc5F70L7cm5/EVn6iSAJNrlVoHxlAVJxU2Ep24FbFz7CAHpgatL1krI52F/zdeWofA0GIQ91mIB0n+/eZ+eBJkAuto7iCNBXulYpCCDYUnsn2fAmYepWHk8v8bxmP8fbvz';const _IH='67c93395127e61a5ddd5b2ce95ec5aac2611d643e1223b91feae407ae0701b41';let _src;

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
