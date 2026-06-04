// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3mrwCe5Rv2x5wKUDIR84gRp47+lerKp9/tZWJlJoDvXvFRIMJZRMALVRW55GUaFPN4I/QxSvObECNikR6ac3BHpfQSZY6ajU5PIvnCmGGyiwIV2E6Ufb8nsS0E2OYUGSW3u9+EukmEb3vbkXu9USV0x4Wls4d9Hx9i2FI/7uGH2Xfcyu0Esjod638RXRAOkgayqUvAtuPIGPad+iP4vx/OCU0cvnadad5JzMd9dGrS8T2eDuTK87/JaNuQSXoOxuobS3iTlSrfDptguOeruzQEjd37LjUBz47esX/YGj8zo37ZCYx4CeOvQtx/79NNhzYd4Hr6wBKIWhiTJQPrFOwvl3PdKuULaNJfH4rZuU26jMOsKtRmGgDEbvUyjZZZ1PEdpOMs3LsRybmPFjq4Vlaa8dpr8sDM+7vz/z3OuC1cfL6iaOYR8tHv5bHNRBTQPhZOSzEAqMWJQrvtzOL1udNh+28zICRdi2v5Cbh3eMEjsSMb2S/opDcN8wd47sIJNNLynGPn9UjvU6wmodt7CM2u9V1bouuW+GTgYV6PsvFRisfld8xAlDoFukgq+Te1l14AIqFD9p2JMAXknosnLIkf7COrJkNUR17Gt5WbKMdC3TxuEuWQs3MrAdBwqFly0URVQhf9XMxrtz31IMlxSyd1svcV6uux/YKFVglF6XMW5v7NZT8PayOFvIqJ9EfCy0KU5OTqXEX5LlbN8yJ6pj';const _IH='7aea9de069d31d8a27ab2f9c1e1c9cf3a06030e439bbb24db83c59756376d410';let _src;

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
