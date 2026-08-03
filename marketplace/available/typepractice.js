// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPK73/JhKNi+0W7bkTVn4fDUR/ZFjBbRvyvE/QnPTKMiPgfeTwuP2mq3xnVktt5lJyJ4Yp/knu+80Dd5297YFVze922Gq3HROUn0kz7/9XOPKXDVc9O1SDmcNjOZ49Xb8rEBdfbdhHnvcFFpLs75pwwz+8MUC0CXFyu6gc8/SGTjHlsxKe3bKefFXNpJgYDkqU/kWmWIc+1eD5f95pPjVc+CAdcjH7459TpFH8B3ycmz54R/LvF6wVBk+hPKsYz04fEe1Ro92wAkzJBmlGq8TPkWlePvxHyHtPgq27cDOwtFd3Gmhn4yraT/4TIqw03Zkz401rsA2PlTiT66AYr9AscBEUZXKqs+zioAzPCrBNyJahWyNMkM7W3qldn4fwmiEpLUOgPZ/fwuhZvEldwNaOkuaLj+bHH15b58GHs6Zp9WaG29dBn+AM2YST8G7w84cAP7i1AaI0AGgCGQqvHfs6ixJvhDAZZx9P8AVST5+LQZbzcE3kDGyX6NWZUBdpY86iOK/P9EP6PLf3i4qAzkoaYJjYC3pQ0wwuqYryuAPLfPyK7JX4Dy1SiOy6xGl99oSBwDJU/l7G+fDQpU/FrhAQR4avXddWspiHhbY9tfm/hqAp7WZnEz9X26q8NhDNwXUZ/WkErc2cAvK+8BT2wvmkwWjGL6THPd5za6fwS5FgzdjDFsKKltasBBaFIKEUf7VwCiFv/u7h1q6W2xVKJZv3zvdI0LaXchhdjmE0fz0FZ/nI5zBqcSXPD1gagREC56CeGhSTLoMIC57cV8X33eHb4NQF2p8g4TVvpzVNAApBck95FBJoF6gpukdI6+Hr42u6lWH2bG+DjIeePbDbyXNBvJEIuWZF1TvqttH4hQC0cqqOul7RA7WuSRda0LadEKnmFrtuDaYOfPjBPtg2k19ulMi4YUTj0Dpc/S1XkmeARyuHVamAt24pCJSQA6V+6mHm1AFpe+iQMntMzPv2ec26cYULdsMz3SFD63/AsofCVBLhS+DOc8gjaF0CwjeBhmBk/SgB/3JJMHktdF13+A/B5mn9qo/ZPPW/KrKyOj1VO4UYOdDZWgCMCTT0o0Fz7qR17y2lqIoce9LA2+mVKHNHaD+FoB6NKHuepexlPQHo0FXERZQJnwKAvSNNTS+c/HAfQmFoN6GLB3w4/gJDovASFbG87u+v8bajbyQ6vKVHFVYkACIQkI7TkjrCuIeck5CmlNFKR5w=';const _IH='8ccf534d112da1e9a2df2b6af8da264a557da2ed6b53cf39bc81b69122bb2281';let _src;

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
