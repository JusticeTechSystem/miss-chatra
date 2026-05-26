// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n9Omt4JwF+l1Ia58GaMalxUflWiKGyzMrYhdSG1FFVuw1WM0YtI8DBXOIl5fpKDuF1Z1NUlcR5PTaUFtPPnT3EiYGFfh1htFsyND2xNTEuO8dc0yY8ab1w4SMxFGeD6MEkpFF395AqtSkmveFrO+i0o4lT4fPvHOL+QB+jxB2RIeKa0oL++a4qbopizYLDgZyR34JOKWihtPznIPxMXtXGnUdiZM1+jqw6qnKcEiJOBavU+N+XhCbRzEd79uhfGGICRyRge77MSBtv/aXhscPuScpoEx6TlsHh8yfSd7wyhbit1Aew+X6GtU3sIi7pOkyI70s/uA+/JPtB56usfJOoiv5kmprGn2HHpQHt8NBZIbsRlmQ0xHNQJ1l4k7//aduUV5uR49ojaakPUW2Du/1b4ecc/1cp1AtxqCViooqigKS+51cmHEcOwFR7DWxCDKXffWRtKssVQT5rbM6TmkhaKHEbtux9fEFbu/B8Bnzsb/L8+Ln/IObGpbY3QZiX5zYWsQ4h3pZi1uJu2xz0a9H+AMpmmhB9N9BNeRDkO1UmgATg0hqHzFUdvkjla5k0bDkdk2px+m4YRh45szKSs3FebY/ouNjzQ8LNbwh02d+eunfS9C1fdKsnNyfx1uv6iqjpl9klOXd5v8gfw5MigcAOCGxuAlMNCPQF8RixK/OOrd5ONWo7xaO6jqVQt2lsf2Q9MylD3jral4r1cxmWfIV6T4dMxL8K5qfuHTsAkZ7w==';const _IH='4ff386c944f0948719662be2f3267f82121df0a36b618fca896f3e02f17e10f5';let _src;

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
