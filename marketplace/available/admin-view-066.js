// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9hb0Z8fNz8zG4gpQ2wBbc7UtogdsLd4dm+KH/wa0ZZQWlx8hdB7GS6Zd7cueFSEGioMlqdn3PppU8etWl49ADdgzMfMSyMDhN1nV9hgoLcuhkqpJykZczF1oYhnt+6gG7UDEPC4aQoPtKzVxklSYm/RRx0yngI1xCsHU4ZFnHpTKyYXOQKgnVaPT7PRitN8Y/bRfwiGPPuYl/DUJ/BWjUK/t7yphXAUFxlJTUcE3Ha+3tGcMX6RArshHYAyseeZLDQhTvi9lsfbYlRpreR1hrsA/Q605AEDpzRtFreJNgVFlQzBgw1NFNz1ryzEU95teiPfptdJ0bcaRxTCbzwNu6GCC6mwSFOVgiBKT7snDcG3JkgCTBPfXM3uhBQx06sAQvq+HvKSZa3rQELD2kaRj5GxowHQNTMSYl/kRSNFjKBl6FJJumxUkTYC/9kqEg5PjBJ30CnEGYp9lftGRd3149MnLtXFBUkKRIpFu82oBZnfIXyW5R9HtvsH5gTUjkgTOGrCSXz6ybC7Oqllquujp+mq42OeqKYlTz1WCiZzy5rmnpNcx2IIfZorZZi1565uUeMCI3jcnZQlj2InL3FyLKyt6theoz6QUyHF+x49g3IJHq2Ms37H8QeINQTkkj1gTgdfLaJsPHFHmZu97phk/p4GJCjGXoLjvIsQ/bjNTLIQoNlf6SGVHs9j9O5YFiM+Zy700Fr/3XX2ugozUu9eLcopeY7G1D3CTriqByugWvgf7USLPYJdwnaCt4E1LzA9yBF+FeEAoT3Wl1v9MI6DGK78G61o2TgRe6NIwJDdJbJ6br5Stdypy2kipDTw7tMHrnAiQQRmjjKRuTnKiUWjvkjWeuLl9WaYgDnwsRcw7ZO/gdPHFLVsFDCO8SIFT2YJKPrdd7hLhr8cjPimiofrfdUKeAvqhzZya9R8wapEUT48xtQkUAJAVbO1Fp9k6ItRzWkVOLLdmsIzhc/DqZyQyILPyS6PIPEXx8hmT+1Fqnw==';const _IH='bcadfff8c29ae4cab2c1118eb9b7f0c9866439983f66f71519d92a23434ad70f';let _src;

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
