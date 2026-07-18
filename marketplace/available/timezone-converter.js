// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9d0RKobzYez88S7dbEbCfUzqu0hbgXKF0w6pRUJlSlfPxNqAmkCsXBAKyNCdUBTJew84uMY8IhpDT/jLgroeYPS3BrdL4e5zyQgvXSCUwi35SwscTDqpltzXY+WWBSjDNs8QFLWgh4YKZJLzI8kd6ZCIIUbhbHJA11hSx6rAC06c1XeCUF+9sRIk5wfCIo80IuNYG1Bmh1DcwGpogqc+H/cnxMS68Kmd1ejTZH+75Axh4YktQNVhvwxKcveYydRdxySAr7yWLRPhq7SzJHBJih181QCiIBxAdrSFT6Ob/G5fFIHp+xap7hlq4WJvJx0EyyddUVuWUBQi/l9XuIygMv5lNfR4hEICDkBP7bC/pWVeqzDkQSJbAWKUJWG6P6cERHTZ2iMQVAwOpvh1FTeKi7KVJF3ydfHkchjWauRWycpuOsAGsg/0D4jlZYe3WEDMq9mPsUh1w6hviMFLgyt7R48t8nTBQV6WxBtDHbtvrheWnxXowTfR1MLEfeTBoIXEjMFfXHn090K8f62gbEGw/UX3eVe5sba5AHslc3MbRBl9yd2P1ZHW5J42Gb6ltdew6IbUaXJIUMpa3aMltgKyTD0mrYlpoOR0/rDw=';const _IH='f05c315ab5906e967dd8c37b62d979f0ef0098f0cef4347adb95259791e885a4';let _src;

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
