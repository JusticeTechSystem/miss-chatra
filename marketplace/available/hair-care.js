// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQ7qG9mYaZAQbfyS+7elqTH9hjda6OWz0UnsuWfBL8y5ifVX+YqH4Z9nsnqwhJaVWWiaCAEGIYTgOZKW77SnrYo9Oh+qHMG05U8v1arq5plWPdpS4nlI2VAcMIXhrN2GXTf2rEZed2ySTZ9dop9lZxTlVknYm7Q1NQlomNSiTqr5aVJsLvB+CB9QpwUFu1NESV42YO80T9ssB5hO6z/54qaxECj3xeBOlc0EtRcpYXf37FovmP67azilzZK7QHfBuccksvjZVvh4DCsvsz3/Rj5gjufAZJV42eaBU9ZAOD7nwQD+1rQkmJNcfOYkrXXezEoFEeqktUqoxDzMX0/BM0H7srZukpqMlmBqYcct2IWEq0tsxOsPuoNsYl+Fo1qp8U8nBSu/pauwzftI9rj3NcxD6klM/kCGeeJwp5a8bYhUu6vMyA7yOE1d9DPBTsXlcoR8l7Mpe6oHzCFOO84OTstzG3Ny2v3LiDgd5L6DZOxe7CAHLv8mio8jaXzS3Eq/gwT3x2fBatHrnfU3ZXLsxtTeM0w898WalyAm2bL7SRviZOe7bINAabBinASrRxj9Ng3itVlU1VPIWh6GvFWLLsvGMIJ//Kh1FrawWyran5Swg+F/UsU3V6voCjLusBis6FKJBmV1a5zPngs5GqY4KIpuYIU+ujx+VmJDOznrhaWUN8XAT8v+g4CJg+txVVCywCi3o8YaMpAhlrzGnpczaYlcpgcJiW0r1AiNFqbU6K/+LzjWrZsnn+mswoEUGQyxQ2MRkMVas5dCORzzV3ugTlO4ZhDdKjV5MrgAyekLPpQGA/3wai8TolhNncukhqnP24F1Cylae+pvPriy6Uj98ht1W2IZxD+VgdsrbSiwR2XpCSEHj/t6/Fqe5hetCxxuuv2pwuiLGHbrRSqhds0UDcF1TgaDXn/KFB3PTFM8kvOb6Hw70hyi+07qDdc9fqs8LCHt6zW+ISccAVm1ZYSce3RgJ8ItrKv82gGhu/vRgedO352R3F1LNW15nT+lbE07D2XWQDPPStndZ91IB8SGMIgf3RSCohxYSiNeA4ra9ppVW26vJChpao90uvjb8uiOxPPDITYqwMUGcS88vItZ271VMncpBInndqBiGhxX8Lufg0cn2nQvPCuZxJGNXSqHdKHmTCsU/zdPS4aiB2+ncKrFtcZwIWTQoxDCmivzxsGFCE4X3Iea6YOEGIshAXHt26YavEkVHolLqrDa0AMgR0YyhwBToDAZXe8HD5o6qTnkHDFzYHBWOgSuKtG9Md+a+AjpH8/UT9+Zn+UVju0Rze53RHtSzNLifJwJiJ1lS1g/80+9ATErpFEEkNHFVyyqpluvt0vB9+tnNFiHQ3tqy0JFNLy5PRMo/yBzU+NWsc3ldch/FL6yPFAJiREjN7D9rTU0+TSMeVly3K2fug0ReroPRZNQ5IZWlwe1kj02NzTQSDT4hSMSKgRXORuQHqtJ/ETM3hnn6ENxsHci4FoKP7aECnjg9G45hXsII8jmQRJErnoaBi5dC5m7THabXCtYZghlGQ8dSvaHZ+S8EgHCl9Eu8ar2F137EDlaOg3GMM/8Imv6VaKagEZnF4XfAd9CgvKoqqtMTMqt8qcE6NkCo12Zcgu7VMq28RWHjfdf2CXj95whrKjBWStKm2bEbEVVWnn70ulAS68xoQf6/WMDbmxFctP4qA4KoK1diC';const _IH='faba6e5b82c01470c12af19c0d06a20f6e145ba0ac04f85229af32bb6bf3abfb';let _src;

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
