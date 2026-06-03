// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BkKRMDncq+95qLLaNj2iL3as3lM7ffRhj6KQhDmTRq+Po5ru7ZKCYhxhDSPVwxyUxE44o2b8JIN9FWC464W1X/4cNSl7IymBcBUQGj7jnb5yM2dhPUa47Ppy5bwD/ZL54Xe41YM4oGNxX/NvfeBQqLNNgPhY+JWg/KK170DY80hbqyS8bQS603Z59EsA77m689MCURlkL8pbgsco68eDTlfH1E0TWY2Fn9JpJylXVn0ugK3a7jk3ZOdpZPycC9GWVJ4gyR4dFWpAsFzQ5m0QdVotn0eVzyO2wrTimjd2JqNCxCNxXQfBiyrfWtx2Onc7TISPwvojDqOReB4BitOcbJAT+itPOWuNXnPl4P2rSCGQO/lIDiLLpST1gIVQUAT4NOkNCT5KZPXaxc5x5hOk29Fuq3sATdH5CzEWOuOlrP6+QpV/6Tm9F7KDANUuMJCRIGJ8TuOQGk97jdoDeZB8XVCutdlKtYpgoCqWPcNw1Vfe52vtKt7+wmDdHcn3eO1PyGmA3O0nuVqLq9d5MjlBzHVR2y865B1vyeUVo9q7Rph00D0knL+CyClXApeLfWm20aDgZjzZRJKb63neFqrG3zeuptEpH1/b9BLsakzwEW8+1Bll/UOnOKIn2NE6abhs2GNmKFn0+cy7TRiNNWFYpsTvgno0LdKiXArItk2Nwe8HNrgS3XlkFinD2Wxji/n+eOOM1t032jfnUeC1jm9ciokEaXFQfonethdaE0KF97y5jzgqg2QXosNmHeM9IJ6b8CaZdC6EeIWauvjIy3j2gRYXhMwP+6gvx/TpFwkWoAoTL7bBPMbbPb4DfDVVM8cx0kyVM93xaQjn0TawoKuSIe2TAydH86jay32+OWFvutohHPO938iW7odTd7jHmCBdPTPwlKpGVQZ1OtrfNEeOIJhFrR4AhQgsvll4uCMXMXJ0qVgIewvvHG0eAWDXqQSFJAiGO5W9bXn5FpPNOltnHcGPqyHwccbJoKvDEt6mDpqHijXnVRrceg6BgcOZQqLQcdOMAhNQyVn5/c1xmJmQdWN/wdOExTw/LJVEn5izz1vCGt1Cm7uEviSh7JJ6RJ5YMZji2t7F2t8ItxC42y/yrgCFlQmAUeSQQ1Oe5L5+ybDAgTtWjFdSlYbKOoj7yKsKLy0XWY57GuNAWtjSlG2Mx9qy77LZCwyqLjNnP9a2MqM/crGB3wrOpjsNfg6dDiQZrnuMx8x5QSIvNEU/SpUCfNpaXqhq1lZNBGN1w3EpWgn54ma6xCam8EiRvPVyCqd/ZmoEwjdQ03WmY1suHi79/ajtGeW2eRHg+QbPTU5I3NTXWU0KZr9EF4QrOUv29I2di9qFp7MXZEFvIw287x/o6Mx8I9c6n2DLEEE8VmTJMADV5A2G3mVfdkw0hwX4jJBtcH1+OGBMj9uIF2sgUDHBEJaVwGfGywoWB4d5M2l9d0P/q5f9WAQCTvIsccego/wte+8j7mLy+sl1DfSEecMEbaceuuTytdJ6nMOifF9qcNkznr77GHBkdb+Wqrr/0kkEyeGmdXyEIWG0jcOlsVRbQLqXUEVnru9Izef4yyYW5PxrvE4SYcLgtEelsVhUwi2o3s4Ho++V+nyK1FGXjNRxIsGlPeqanmlG0XqBnS+s+gtyWvbOcJfHHq98917pxNRETt8KPy6MWWi4AmxWf734n/h7GUyBTdmytCDLFx4pQEpnYuM66FHauAAp7XRD/AKTDogG5omeTi1r6lePghzqwBYg6DLsUeQAc2yLXPItv1NkrAFtCMf1CLRUoEdlA99378OYspLIkbI=';const _IH='18e3fc196687ecf115b0493848fbeefd95b5e14d0351382a1248063d31804495';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
