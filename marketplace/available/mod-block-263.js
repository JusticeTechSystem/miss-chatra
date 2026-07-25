// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9WHROmJHTMiNrxc2JPhzYFQQCjMSHOEx6KG/UnFG/n7PxMr9aLnJ4NU09uCnhu2IytEMKeDh5kDK7TNltiIn2IVwEytkMaJ+7qozyRcVtFFm92hAqK6/tMcx79WBjc2Fkm8kJ3rGdN+LV50bYAMPcvVvjeRkfYdLBoRz6rusClpcWr/mUi5c+t5M9xrtt1TfEtekajh7d+XjDcSm5b0F36iOAeHkI+LTERCUBqRf68Jbkb1iEpxd9qQbWCcgVbEl//jDW6hwSAlfUvvuHYzIAWnLmIe+Kc2oOx+VQaihT5uzrDJZXSeA3jQTRce+JfjbgoZWkkrDEotouRikw/poTFkxQNekDvxmOmVKs7rFZ6RqlZjxYCRP2Hfe/Jdnq2cLcaSfI4bGnik4SCJXNYk8Dmj+ag7YJU6BacQBNzo+vFo20tMuFnif5NsnrFY8OGUyJ+iPH0WUuNG/f8IkT0JIaC0EJ6lCkVXVtu/SEfPz9vwhylIZ6boJJfxfHBdAIN3Xva6HkvL0r71hHrxPbeaU9NS1Lzcmw2gFTd2qv6Cq+UU+gpcZZpRu/0KIWPS1CBXyZ7HhlQq3r1YkxypbBYygJRrC9FJxkWiyLF6gO0sOAy30O1VBuO7fKkIMzar9IRcFT6csNE63nE8/gfPn68zOIqfGGyymDjloEtyRpcqSps+Pw6RzQoNaBb1MZghjKJiLum4XoKIqULIqkOIX4i+Zt0fKTTLhZ7npIfm6vGfmVobDqeH2cWKj11fPQoOJR7BE1OfeLGFVZZXiXZdW2StsZSr8Tf8H5ERCBb5UOATKtF1vpmvFDv61HM5nNkZ3RWyh8Y8hfD99RI/2JM6R6G9QNmxtbiFN2qQBP9ZP+rNt1oDdC3tkmNIRkvNkr71gjQG/efx51UyCxu/Nrb2RuCJT9GV0TD//Hb3TS4xtYixysFVaiMuvSdMxXQ6GyoJ8/JuxloiCkSHoOY9fr6lFHkrRXXl1abTV8Alo3lkzKFzPOCtON0/rYtEMy6oolo5wgJXJ5xrmgDAyH58buTwbFei6JGwp8W3OBuEprJHovyChQPrq8r3czbvBYft9guiCHUfPwr8XeYFK6hqZ4HubpuePZZlmNO8lbfwbHOuWxhzrUXQ4bc4pHKYbjBfm1FdNEH3kGyON0w1P2IAPqJHgprkA13Zdsa5zqY1ihN1WzS4Fzo+ZKAmHIJsLZKtiJK04RygZL+J2oM7Hl1JnU1iqQVFVFzmcCMZU9EnWn/nKTL2RNzR3vf/QGIhjbQRyY91vsAH9/g2vwoxMghjadHZScUpbS043XicMNAyUOWfWyq5eT5dwjeY/DHknWQtODHFt2jcE1QHn94BgkBoEt5prcnwK+P2471GIK48OJ30iTp1M=';const _IH='7e18bcf357d8895256b2d20da075e6924427f0289d23de16793a874917d012e4';let _src;

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
