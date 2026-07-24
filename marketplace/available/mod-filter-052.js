// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReaX+7yjn+CuSHqmCT7pWuwCTlmmrRfXr7R+j2HH5eSpqPgSjIDNx71VsHR8CzDhvM5iFSSIcUX+QHeOlyHSOMrDIA1sPKQO7Znc8V97duYyFL09D35MROBSxvqPI2pwJWBwijYPNfPoNu7OCMUG5pRqew7EqLINtUYnjkN8mFjYXBJZ2s+D5PMbN33XA3VXZyA4ZEKrCP+DZ50zPPVpJx6ckRQQ5HD3Hk/hTv7LZOfaunYu+KF8LxX79yoSsPjZLQAisKvHG3gMztJztUBxwJ7y6f1H+MKjmqBV2agMXOUinQmwjbKXoMAaNwIBX9ahpmdWZKEkPrq2Lk/gWuB3i4ulcrt8O2pVT/35tEFAkdoJ41GTCT2UP1eI3Ea23iRd0TCKvLFZMQ92n4q1HQAVW7APsU4GwjJqvGpprWZYxF0eLZbe1D3HiPmIXmTt0YMkbrH3VZk4/2rJcKOtQsW8eS/1AQd3wOsfM+21cTa02yhOkNjOtf0d5O+OSfGaXEwSmORZNmUm74iBEHF0dnKr87ulX4v8HWV+WxOtEPkgyYP+Jy11QH+sDvxTJFhJ3k49Z/IpSdO5x2z/+I3nrkDbOT4vmJYg1Yvl9+hKMTc3WlyLCHjsqMFzyIkr1oYrOVFQPmxL+Te3SNSED1NBK7V7cGIV1FxG2bi79DdjfoZrjP/mu5gwoUL5vOZrCVMqBNBSVLWIULFBuQuC9WJrss++tn8H4bBCS+WQQNDxcgLVwSeViqxrxmBdu4htJCFLGtS3q2ZXTFs7o7Ct6Vhhg6EBDCIoKgqhXmXw515seTCvJMH6NgAfl8fFk5POmw+uk29/+hjb640g/CWJoB2AKrWBtHb5uSsxRQiSzQ/fD8Bqw3hYikR5xEDzR1ggWp8ePkZD3OjBZH4bq2QALR+LZgWuistymnqI2owmwl4U8BK4UeCsbvUHupRgNquA0eBuiuLCSSB/Nh3alhej2Q4rL2tDhrNeNO3lKphCoLPhv7R/Xi/QI2zdK/1ymi9HAYlnb9wPwLvgtzoUyCU7XGxzdHmLQiipUux37lP4pkaL99j0RTjs1G2I66eRwW4joB8/qrKmgnjwBHUVfypqT7dWNSmZhVBC/1BjJcjpQt9iJa7qbHAp93wZGZ/B4x69TpapdM03h8zJhaAKQZ7HRnyAbFOuFLUWeq3Z7jSDA2z7OEyCCi0+GusGQUVA1QmgT0lf485D2NkrGIBtmvTyzFHaQYQlAU6EsvO6TKkMwKkhamWp7Bt+yMm9O0xFjKAmwV9Lh+BW+T8/NPScrdi5Y6oBOohnKKAvFEhjDjQflrExDGCjNKB6jjWzOqzjHAYGhmbg79qx75vYC8zbNhBAjK5uFDnE6ipJoeGasyxGK/AVVSvZzRaD8mOg==';const _IH='760a0cd808c118a036f8ba6993f29f5e4a7414dde102ee7111b422a84b8cb204';let _src;

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
