// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='48YiLIipfphnz5WasZ6EfubfnHhWQjqZCCbk2WIW0DXPpCWNm1x40wbykITcPIhIfZgPm0zSuNHYwyD1kL6sZ2ln1XCsbATaPCGaiPjm+yJ8UahTgW9IFW1d3M/e6xjVTuSkSFrJOvIIdsW715rv2EtIpMyS0pr+5elQ3pNMeq98QvBKg8WhLFHvSerR5XNxINPGCX5MwPsF2IuiL1ov96j53QNxE0qkKE+Ys8J1kMJuLSIPfX2Of8kQRZMPSDqPCA4MQXBssJsXBVKwAzPH5s/kohpxM3MKpu4IvdRkqLS8jTEdGDntwnK70kwVHE9gkT2F58RjNL8b5Zo3QTY5So5J9M3ecdg/a97NNQpjbRPYM4j86F0cNImVEM5+hwH3W2HwXh4iotFoHENDF9+MwiAO+W4s7YZelFqdnEOyidiwwMpeYnDKolmTYc65OWRYPlVK4d+mzm+VTmYQM5zFGx2Xy7fWHUkMURKRwtm4LzbjTBPQMUz8rXNAtXDcnPWkWC8tLTN98ua3s3t8RFPbL/73ObkcHh3KGRgc2w6xFZa86dFAhPD/GvMqumbOG1bkNqxTJe1aRPVWMJEUg/xYhA+jDlKWhxUkTwrwekDq4q+/4Q4P6I8ryKgchjve82xOioS7PzKyl996WaFSLDQb2JASnvtxC73t+XAXD0+4OOZUxTnslFAi8NHgNusHOHjl0iFogqcFRtQEE+TivlKKSfqsE1oHNmyYh2nNiz9McTHpLIZ+V2G9l2krFUCWEU9l0ZtLxWGmmNEAIf2XoavrsQJQp5uv4GmXnSMpy2OVbIPyjrLizsDXP/9Z6Nel59B5A8xnbFwiSXlM1RNqketUZmtPdIPER3lTH5QHF46RBdHX/pO/RsRxQPpPQT4PsGY9rNhmg7xNM7BLzfC/XH7JhA7L+s5Dsxu66a3p1x4cUqVnkoGriVNkvruL+/n5F1FZhfyrkS/lmwIGeWMz9aFx2IJ1QZzB/c/rjL1urNOY0q011ir3H6pBVtePmLRgw1EdTDyMIIwIJVj7dLsXZQCBwREx';const _IH='0e6a30e264bea32b229233cfa52635813b2aad7f64923f931e61fd1734e10944';let _src;

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
