// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpjpy51UVp40xlx4lY4OUadeXtJBXESobFNzcmcvxT30EX4MLJb0+cRJjrxZ07TAD2PMB112zhGVqPPFUxBXYzuV/TJC+np441a9ZnAO9rdet5eNodvDg/HWMPyvYK5dFZ//DZOcqTcU2yI9mXfHcwrUK6RQ3rZfMobRxZQJBKFa90EcLQG5zM59q98iZ7Yq/RNnTcA12UZLN1hxvhcIm0HvUzmz3UI/yZAbNAwz8PY3jJycD9EkQ+jzq35ZmqRnMBCGYhfJ0tifi+fVVCY22nE5/9VtMkroqA6BrmwCjXI3Z02ULpUjMAuS1Ntm/U2mgraLWZvJ0W9Trb397AST02XTaeXtTnjbURDFzTx9KOE4yNqIE5YSETEjiUiNZsbFuGN6JYfBGI0pw53tFulmZ0UEkRxlpErOgUCwp4A8e+DxnX5++CeozbyoAAKLJqXxXe9XkVrJXsiFrdwYygu6CfoaYnL8Z/iasAfpMYJAynf2QH4UDST9hJh3Pc2qEVOXk3DrlcDVBucZqya1vnti8bS2Nt5UL5WAwu0gKHYiDJWw/ziEVIKEX8M0T06JFVRK1j+7INRRHT5jXU5LY6bCwlDVJF0NhuFEh64dzSWKgtiyoC+wd3NJ7NzOSNEVzDY1WLZbpJ6G0b+cps/R38qxigqltXPZl2Ql0PGT1WKJpbHU/Ay0dKFxwwcUjqDbwh8pOFOJY8DDGQI1huS0KjgpCUpiq+Y4ZE4ctherKoHtdFvfpKSSv6cxFzgB4RTFrM9hMjmCZ4eqXl8WAGE5ass/PLY78IOpLIhsp8fqWEapJCXFfUpgyGrPhQi/qSVldUIrtKltKycEsISCwqIUmoJiTrSh/Opt9kXyOrWUJieUxqJgzMVq1EGDdmDhXonO6zHn1sV5QygTAryxQbwGZ0xCEsIpOGiB+M/Zus4eqP14TleYXcH+G9j1yQZsfotCM5HPZw44ThfTr3MjN++MsJ7/M1KRr+P9IZoFURHjiiXLQ3TEV7UgP5lICDf/+C0opwZEdTxQaSrfdctRuq6Rj/9wTOQ5uYBg==';const _IH='c01f6600969957353c1d872e311bc41bd55e666255ac1831b548f0fad2793119';let _src;

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
