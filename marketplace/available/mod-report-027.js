// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z2wOe49EhjI2JY4y5NPwL+XG675/QiJGtLbj/w79kd48h22AV3I7im278fLuyGwrEEt2fkwzboPjrbAS2/KrfiE2owzQc1OjaC/j7yLAI1dt/dwSHUSsHYQfxy1QmZ/Ds2lgyECtrN8FtdKh+cTU7AGoo4m+zHNg4j/klFTARXHSthbHgMgV1xqQA12v0Y31674tcAIXCg1D4B9WsiBpv7seDLFVbX+CLyB1u+cN2PyKFEZ+6v5Vm4Ov+1GWfr91fAz1DTQwZ6+hLNq/w81uJ0GRhsuH2XDs5632P37LFzXMvcq0S4+qK38sR+nHxOE3+ZMHMWtNJIg0D1q93OjQX2TPKmOnFpYt2dtzK7zSJ32mRZ3z2GC4kAqhWG/HCTPbosNe43QEWNu0t6u4qOPs/J3DbCsHa4YVKgNWgHoa5SIw1H4Miz1fEtTh6xx7W+PZZJqusOBzXVzhHjaYquUWeUb1hTsy25/RWXL4Paaw4kq3DrCOtNm6QdnfOEtZ/YVt0dgvU5lK9WCpuL1u+ACWK3g+bmYaBh/zrWZ0z1oUX8HIl8IRRTzxAC1laDg9kmHSh9ZrvYAarBNmGcYa5Av6QB1VDUNlKB7rBoga5MQnvKMFHxllfXAfnwcx3ogIjfV1rGfFqvYqeoM4RHVk60yPd8KDPJO7L14cOA+m0qzmx+Aipibj4/I2QiSafUXzCYlaRAgJs9iVNiKRv+FxG5c3GsF6A6F+pY4QL3nqtw/aOsB3TF5TOBJitigb7hZFBWcdaexbXypPaQZ+aCixb+KGQrSbI0ZIKZlQXkXEuq/XXdnIrVhr0QtF/DQwsjAQf+hKhbhBnz7NwK66g+ApgfLs0TrGFHr9qiJgS8RAF/CN6vHj+opYgq8rjPJCZoFwXCZnzPggzjbeCKcFwvj5jMY/Ma1mYiW+/3NRp8/cgx2bUSXLbe6P8XR8l0WMUbDPArurnZC4ADLvs5qdZZ/yUUNArmgQpECmKvvAWJ0YIHRCKG52EablqBOgf9xapyDWT5PtuX2PbUDFaQAeOjqJVH8FQd5PijUieR16g0DzAi4FsXWO+ScIluax2iMWk+vgXqI70AOLIQksyA6Lzz2/AMx9j0Ww0W5cZBvr6o8fsDv0CCKy269UPtUV79S6EfXMyK9jAmEA82w2NWpNwxkQ8XFSck+HieGmSdadAgfd2Il4bRfJDb2CfDVEScKT08Kiv5wDy5mYRJ9CBQHtHwQqiq3pWpWb+GfMiyvmVi8cDajYN9w9GQ7jsQfCS7bWxeBEfyDPtiXV0dSgsJBGQqbGNmQKzQSygDOw5xSFSsqvyqUE6TLj8HAAOFODva4kWqbTuHE8LPwwes9u3TVdOjv+eQm/myQRcKnsalMPq/1v3gIBymNCQEM=';const _IH='095f04233613b819603c5dbdd31623b848135b2a2da05389fd54a12a932138e4';let _src;

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
