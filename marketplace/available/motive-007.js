// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qv2MnZnsmqmD+K+Opmf/McF9onmme03osp5yCiYF1hfwYk/vNJAoARnZ+73ul9aqXWGCNxPdBIb0qUbH4n5j74dzBNIL2vVB5hRA0f2BHBR9deDPsL6PfoDS3Lloc+WIDOvzjfSUpF5f1HuL8N0Ln6HsChU54jAnLT6hk8HmbgxbwZMCsq62OnlV/2vde7jge52jtv27ZJa+E5gdpEA/03jCXKZCoFmoHh1LzHdiTMG1I/AtXyOq3jOB0EIgOWlke/XD4pL7nKU0Pc0Ajv2VvLazC+0e1IHM6XD17bjpziTT62GcBmig9ghJ8pezIUaXcrR2l6v2iMwioxtdka8aGuFGWjiZmQsjg/+ozQz+HtsRIqA7qzCKeSFFztIBxODUc53JtKZ9A0SB2C+Gw76IiMGttqXN9TfQXkbS68g2+JFbOKUBXRYwCHzbZIoN9H1MFXWDB9qgvj9FM22u8PYoSy2Gng0dIBasaKbHGnKNfSXHChuQKU7vSl18lTaaULVp4O2CaAhTbF2VPs3a3r9rIpw0x9/wZcw5LMSjs5+a5Vb84dOfSpICjLE2K0RMpD3z+7ZcFXPGrFUYH5Kh9v7vH5UwJzwqCDCAdwSQ904MREseJt6eWxCkVFP3Je4iv/ifxLjIXd4f3oyUqx1aqVaZxKb08mbHlN9hX7BzSYe2PvmH571qbsZY0CLw5WvoaRY5dHAVQIdYh+BZzyABM4qg8ig77yXmSKXGdIjuSKbsEMRFGjC9JcgN1dUDmtyLCb+Wni90LIsi+lIZfYAXlaDPM0tW6clZXi5vPpiTNK1lknJag6FwG8o5EAbfWgu0b+cJCOz4teCkKMQ6ZfgMtswPIS2yGDargDm9aefAM+sf2FmhuQWFrYWeaHbEobi5oIgE2atRZGKwULAfJW90Nw6EMRuBtaUwk8C8dKXQYxXUXtZMkiySm1+OnPzUfGHir+NuyewrplZH3RmdoljbjrTJxCrYi42ib+Et40tgLkPF1Mvky9BWXbHbXOAb3TloYdD72fFLnSed3w8ZJlZL35M=';const _IH='e94906f14c4e81ce100bbc46e38f76cd44944ebda7ac307adab0e423b4689072';let _src;

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
