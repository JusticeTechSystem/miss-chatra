// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQ5zpO+F19/Ue8vpc15Ba3nNt5pzcCIcNaM9p3Nk8qquEXKGxPjRRQzmTjzukQ36t7yRWpHjCgMkII24LaMytI7m7RxEfCtCoqf4OwNb3sVBqsM8cMyijhpMy9Q1SJCGbY0FdYIivLbel82yF6Gam0/p8pAGS8wMHDdf2krwtz9+AYQwMD+87/K9l+zFZnvD5BXiukPIR0wPXsG7+5PuTSYrcT4icgZAogsw/2eg2vzzlA2SqlU6iJ9nZ2IvYPhLYarTWrB0Ufxb8OZKF31ZSr/FOljMAOkaZAyiwR9LL7OVCd2U96Qk9n7AP0fzwc2n7fuJXx4XxwTJ5yW9Flw1DM9HuPU9ijyidtGjFbmY0xvEflltwP9NAs9CMiwU60krAmKYam6FGtIwZu3yvIvhxSsu/qKIud+ev5aBt5iG8XWow+LsnKThcwznIH64eY906fX/GAzPPSfCtiw8HeamOp744A39PwSUNih+9Te+LU8rb8PS04/hsCOmkD0K398JZdQxu1frxh8DuWUQjy9tUyssBUl50YivZWW60NOiKuXhrjUArTyVHrn7t7ZNbH5zUgfyMSX5INJrbmuXEXdqktPNzDqXAfApWbIvY3FgKaEcxnMsjWjEgsyzY6cbURj/1YCdBQMppfRt05M0uTBtdR1bMxayYGBEnCYbnm9NQPHakF1+J0Ws6ICAWoTCbj/EWoltgbMKBh9WB2QTwfpZkur6pNnE5GI1m/dT4=';const _IH='6ca962705da124f48096519e4042a339ed94867c29e7db20417f46f4c436b08e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
