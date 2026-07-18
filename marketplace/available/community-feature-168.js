// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBTDGNBuIMqWRh4PgrhHu/vzEltV5ZAvBd6OMYRijaCAnOj9lPRYOX++3uicQsGpQEXlvhuaorI4cVCM0ihTo//HtQkMj0zov5AoAQh8meE2bI+mUsc+XxgsYvqPSgSRMuQgxBp+tudmwMjN4AUVR8IkHkG7p59zbfLRIaUr4gikWsGjJjdQgxptDD7Dbc+h+1xN9M+Jptqgql7rM+3iVTvH/PbTmMkh4P3aWnA5DXZOwLi2zQPnPT4iMeJXiap7Tbnq7rHQCkLhFJLKs0LJibyFeNUysMOtbfM+IdWfaLUKmMOEMmYVEi0UkQRzryg1bTrpXjpODaHGY+TxrsmewTnqRNxVmuJsuwQ+akaIaTliBweNq1uWr0m5VbF/zFog64rNrkApswsE1FKj+qg4ncFFfFu3/1VzBAVQpZ4/FZCyHWjgj9p5Lpfdc3BGZMldGyy4U5m9LH0QXdk32OolVpdWIrXHISG18TaVWriQVpfvNnYl+IDTyaYl575QR/7XrlIXKupBC39YBQfCLbRXZqQagSYemqBGxLjtb/alQLmRJBWruXH1uV7lVaVX6ISLmEjhFOQLd8yDOG2BExj/w1AV9KQd6MFAiZVVUTsw17QalRp8pAZLFvL2GJo0x3CJL3uFQmnPkS9rBsttb7vxLH0zLZEWPTa2jpRHbHTOIY2LIR0rhmx1BnhpdFX+4zUmgFZsfHBLuOA74uSfp4JnRvtgIsGGK/wIc/QumeAA==';const _IH='84c7eed4afa49052ad1ef8d7691cdd1d9ff2c0b62da8965aa322e3921021888e';let _src;

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
