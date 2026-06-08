// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5WkZlDFdXExEj9Y4jNcuAPuU8InszqnbZXfFtRqPguuwdCpTkWrkFtNBq/p8l2kS6RUQSLCHqTU87uBSDn4e/bJ23Ad0FqxtSjrB66aSbG6mH+QzbAYt2BM3Y4LIWorGxBR7A/TKQdVhAutprAkc/1CqzYWF2Z6tZysrG7DHHqFkf3dOaMJJfTApHQH5H/ic6bY1XIPKTKc5cSovfZRLVxXq0Yyv9ruxuPE0pK2tqonujdpyoEzklA2Cw/PmR9WhR7gvUk0xraulFErpv5iNQZgkHP5x26kRenXZqTmJ59WtfsBtGbHQiFpyy7oWdGuqGOIOkCiVfNJ+3EyXfOrrr1/7b3yj/kF9LoBnFdzVfD9GFAvY/FY29nR6KmnDhoxa/VWGaeqinj96Q8v/pr7CPgr5jEurr4hWBJRpNbIFEJqnKc75tGrcCGXEifIZVJcpoGr5JeKz5crwx4YOwTDSBMEW1jZ/v7kNQ8jMnuDf8+CdoN8FjSxffH55E57MCugJN8XOLeTJsRxJHGhEPBxUge6jMTSeloQq6nitzXeUZcHreuGL1GA3z8mRp4eu+zxd/yRI074kGEKEiBMLTKTAf2lWVFpzFOFSDlaA8x2MdOUX2x6rWlF3boLb40x/m/jucbGRf6Qg4C+hZwNcNfsZ8Ee5k7FsxpIjcgXvwwJge5s0yrQi9LDBJdRFJc5X3D3totc1FyjkjUWLLumjRGS28YvHGnBUf9xeL8Q4J43+Ol1OOsr733IY1EmCbFrYUKM5X8W9YbxH12Ig2HO0Ebn1CvRcwqLFqB3B6B6WWud1pwfTrj6W+7cVpnWB1Hzzx6kkJOAv7mDIv3RLM68G8L8v6cRuqjSUFWxEhTxodEGxFueoJ1o8VOqsiVvt9YQUqer+x1xnPKg4Gs7E/MfkGzwHm9Dl+4B0KYzxvMi9dlJfMn0H2vhqxMx8+AllUQlLGZihc/y9qKv5G7qHuh2RwJfjJsL4bWVgBrNfBreCmXMGpaA8j71qKLwJyqftJVCpG7mh1CUaKg7pgnmL5cVdQkl/ey6mvniaxt8h++/0a50u';const _IH='8d23327d617278252cf87c86b6b6a5695f9454f5516c8f5c29c9a86943a2802c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
