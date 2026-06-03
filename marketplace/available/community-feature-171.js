// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VDixCaFLw0+36DUGSJlui8AXk6zWVzN3FKmw9/F0KrPUjGQdD36vAjXUgijQCRobLNwUJvJge9QZVCvISbpaNeqOgJR/cio8yPsI88Ox4Sw/BrKnvhoXcWRjrcPDZvkv9uM4RdtzOYFE/AaWo/liZQJe9UPbERoL3ReSKq5MTRqwQYnnwR1zbxfMRUdFa0+RlTBKWqwJOrZZW0+5FJsy0v6AnQwy3GVNKGWohk0fH7QXAgbS1dMddVbOqvdWhVhHl3IXHZ0qTZIg7IXiLYGxQGQyB8ir9OkFL1ZU1xqstkXSEHxhCDpKLQaRdTFgm4lKoX2QsgI17CAnwxQEmDDEeu4stmHKe7jpg/q12jpViob7z2I6ELNrAf19bARTEPoAM2qS7ugZC9+clYYRmjzfEPcUC4rOb95Ow1JsXkmGuYxxb1J4r1SxhJJqhlFMF+8YT1FhA/kYPxS3i8qZ+80qqAS4s9d6qPpwArqenB5XFJK07JGghPSpQE0TbO22F9lqpJwIx2KYnIcSuL+E0TYugBezKFTgd+BMMuM/yo2w6fbV0Pqm7BbF9LoXJXGJbCM5UKlz738UYTcQ7W5CH/V8rjxspxj4D0V2ySGRIOBD7G4tovRIquVFQSUOOeh01nF8yUvuvp4oh2y+qudyQLuKLfRzFyAbEu/IzjP8knOXdfnFMh6fknu0VckhTiKM9N5nf3eTycG6r47yl8wOirm2/JTwljPjj7Va';const _IH='eb9a27bc3310afcba3d30b7f85560094b27ecc1f979d2f5a4ac4ed75490750fa';let _src;

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
