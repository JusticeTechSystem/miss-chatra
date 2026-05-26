// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SHuWkGdFec8T5BwirekSEhmC34lNu1qOsepR8e9D6ha/o96hA9/gDGmcRLVjgbrjNk+mrURB6mc2ciaVxapATDgH4VgrtSR0c9leoCb4raUPaiJvDHWb+W8mMd8dhQEA9utvNkjJVXquTeEfYpAad+yArW6pcw5VuDEm+Clj0ioFawXYLVq4c/WLY8ZtcENl2WpOW9MYuN9X83UqQriByComZO3agbhOXkeKpgUZcWVItbbnF8zJtfv5EIAipOpgpMgjBwS3QqgWAcQCOF/Yd0R/fahPg/5DssKt67mOJKXkon0SKJVbku05+PrtgQNW4mDBw8KuBd2+rURWJkyxnGteqLSLDYUyO+KIpC+WyvPpjv4xJ1wX6hF7aH2/5i5FQPs7F3sBGi6kDPzrkYpD0OvaZJwNr5QTMB/Qcbzv47DptPcKY+sh0Uf9Zi/7GzLFRALKByoMMHnpokYmlSbN+2Y5f0jsnrf+PtHPiYPkVZka5VvgItjZ7Z/4jWrLX/878uIMfUiTBWERqxgG8Ol5ckAEwnqiiVWlIf5EciUgd9QSNt86kpQUjzyVABkv709EW2J/RSczpDmJroE8DAxZrWCTCeC5BQVEiun3BTFHTPK20txeOFt2CZ+1IOtBDLD4vA/vGm2TrwdShWlKLwlwJdbxHVpAJNinipOjYCImLW5sXnh4zPNq5hDDkXKwH8WvHHWrQF9iaXHEOFbX9A32JwI+GJQAUgvC1+eO38qfWXuhtBEdB1wdBiE8BekMFMwRvTIbwGhThQpzMvqZf4cT+AkpVdoDxlZFjl2rfPniT7hkirMvkHWNQHJZlJmXPZLWBp4U3RVSXthntkXqpmUw78w0cQ3BoBD/CCWxX9oAEruC9qW0OUvCfvBDnHurbTg0KUuzemToNaz0J8uEzi2XV0IzjgFHtXe/9mYDCf3bWBviWyYLs5MY972kcdD25SvRRICNofBdmfPSqvV1hDpcIBmuCnt0t0SoFeXBZMKelyI3S5fwsa9wFD12';const _IH='b12b7f769f4f657ff5fbb0fcc2a6869989e02b7acde2e948988b06a339ac1065';let _src;

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
