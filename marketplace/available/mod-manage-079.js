// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qnu7LX0AJgIykeoz4RKpJr6s0P/gJnhe/iCrrqVeHeaULUqnLZZTF93pYhKGHqG7wrf8GqOMEU0rryaZPwoGrRJImvZGnidoPjO+X2iwsG5B0b7PZ2ah/dhegSIrWYL1lb+QvT9MCgX7skPc5S3HI9AHc1pjDLrKVD537ogLZgscIsRSRbJzql28shPn3QVeHaQ6SXJYcjv9W0wXak/xD3qI3/9b4CfeSa/TwZlYMQl2qfQIRVPHTK7bxfibq9DfXwShguUUPPEEEVvibmE/wiZHkKP3ox5OKl1bpuFRHTMsbE6VBEHM6K6F/+TRHyq14baw2Kxl54tQeVrOcqATWsQokVnVKbZ/n846ip9rgdqKbtIleiZK7WCCuamoa9NVVfGlrm5FzDHPZH+Sxc68xJQRTvAlZHohZdpJ8UXnAh2mn4K0NGNVg2ilsorUUBnyzlYL/me/MYQ1KoEAH4OsA56j+anXmoy1OoC3OBLgSRg/WAMFDFKatQrVGqVS37rdCeig9QmDh/QIdS0kU3dGNieWsOYCyuSgIjMwdK65FBHLQyKvR2tO8j0i9VCc4ugHvTMHRLatPbNSrjJBChSScfGdER6bw3Uy/zsK9mI+da6qoRVrLi2W4PCwDm8gIqzAdvzpOt9aICdaj0Iunk5zdxQ1Zlkd3HFBkgLXWzOoHtjSVn+CcqaemD1D7Ud+AofnoMarR9YMnRT4GQSK5ogtJvoO1pfW1ygow20gysuVymjONyg6O55eT6/jqLMw++ZW+TdcqxOtPrZ03g0XchDasKCm+IZFFfFCa1V19dLJZiUu/M6WIDCznS64MYlJ56bQX8K9DGgurwFL8690rF5vFPDYUdK0kJDt0fJpllCOzbpiFulWj3/CoMnnftHCLoQxOX91QrwZ4x5T2wiU7Q7mal+h7U7d8xQy57kwNSUqNVv966FcL9O4Infr2NXCecBa9MQK6XSJuZJSBJ5zv+h5p5YA4tFdJ9DgfcdhCFfKk7IhfZkLmZbY6ICvcH8r9gZMWM7/v/ehsjqmTin3qiC+aIJLL77A/davz8XOM0EA/pa9zcCWYRqe+J5gwGH+YohL7GUquNm9HdCm0X64pTwODfsbNBdUJu/C+tDfibKbUfP0RikHYZL/ataa3dTm7Ri/8cJsHTx37wfbQi1rcBdWbZo/qLjBtYa96eNL7P5XPVUSd7rPStX+Dr/hJk7YEvT9HYd6KltQzNnNHXUpocTeH5PfMf8FxAcDHOZCZc28PY7QUTLGaCYd0LRSFz4cd5eeB77x+WskoZQkwMZxl2iyCkLFuwu1aNRFIKY4rTRXKaOCQvQDjidW4hKKjoTXg41W+blpQ2do64pkosMYWZC/AOx3KpTTnuDr/OPkBq8AMR36Ung=';const _IH='ff6c4c4fe3690d5b2ea4a52e209ac55e65224aa41609e601b09d4a8e4b5090a4';let _src;

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
