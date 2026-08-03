// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYb1dOYes5aa72z/IOcsxRm/IGkOV5Nt9a2GvSKVHSIWEaRMjpwqD/pRhDuz94U6kLj686P013On+saxcYdVFJF3tlGzTzet2xEc/6W7Np4aMpky9nZDrsDAQbur1EC7olZMG3I45EwGBYCSfNGE+jzuXTJfCmbrZDCSx1RxPdsHRAOsDkDFMIJOHVyCC7H48pWqBPeTAFEf4scgz4sCBwzMmYwVFUmh4fpXjkzQQaElbAl/dFRepexXWndp+Ai62oPZMBz3a2woeoLfsUO+NGR9Oa21pe+l8rRVzvoaffHsKm9Ze12c9xQQtKkRrp2J5H5oBKGt2WCwLpx9mNSrrN9XTLHB7ZBC7W/uyYAlkooLbegB+3rdyzxGrJJa/7Vq6w6Lab7FrbjzyLot2RnhOldUvpKUqZJT3k2wVVgqNbAe2zuwenGgMi/uIlIg9yozJdh6OFNq+N6Iud30MhOF8UF+Arn2UpgJ+n0unPpuJfzSFkU0+TQw0oaAP06fB1e1PHwffVb9sOoTC3TVc8KfF4+M1+FCkdgdi/qdqBzRUVnjJ3b/PPdGfWMIF85hUkeRD92UC6rByXky0gmhZkijsh936OucalQe3+V6JdjZ1E44mnUjBRL88e5zYNtgt7DLd8bYXzzIBHF7gy0brjV5z46Eye4yTxnqGKMra9XajK8yr16AkwG0K7SQoKwVQjWJrA38A967Ph5Ust+AohWO3IADchvSEG8/c2N5cyI8fTHGaaYEzb8LjpJx8lG7RNGLr0Sx8ztQaT4zhMf/0ozj4Dst99caXnauVtM4U/pfy4wfSnEQeouWyJ5Q05B0UlDLKae8JBCU4IH7giipEC5jXjzv602/KaNjAgIJxtmhgT6QJrq5Io7KDIPf/fUB22sIR2JOwJIBsQHhdbOaV2lNIw/zr9xssoE9jsew4Elnlc69dBpcHWJHJoj1KOYfnd/7lpZGLZw7LpDcXMJzmv1/CU8gXu7O/x0tXnObeIkmJ0E7eL1AaU42SGeKN0wSk7+jOHqDrOMQcwj4ontFVssc1G9cKQtWsYcJf0Ry7NquUdpvFU/rSmnQJ6gunhW0LF7BywaCE0B6Kb0TOyu3XYxzEuL9Obo/vehRazLw5JKvwYwqGlYqK90LuZwC0I9Xr9Tzvb21iCyBX80hBbMpt41iYgVgDfGc/+a7yb7X89yoNJnmBtQRKAY0IfjuM1c53jxX9QKK8ncovXIvClSifXZQft0raYvMb2efaQp9aoPUBXg9Z43KxOxG1Oh9cLgSSNiST+bhQfWbFom4oG0AdmR8dr30+lEoU6FNFe50oAVSy8hQfINkzZ1ZVSt7yECed25Vod9Lw2Oh+6ZRfbCVOz5ooYz3QDAdsRaWgf18tBC5fT/qyQz6/Ql8kSTps=';const _IH='6882d87d1ec4dcdb7d6982dc8c294ce5d82534d0245f96bfaf1d5b01484bda80';let _src;

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
