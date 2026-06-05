// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sVdk2QEK8Ahu1HVAELrqDl3I7i3SzcCij/ZMU6Cn+2RGCxXMYHJr8x/Zd0sg5/ajivtkK/lsF+3CQB2f6LT52rpPOYEFzRndMsgCX/uLuHxkwFS9CaOHpv347KdvRmEFIGMDy6RTrVgYAPayz//z9UJZxtm4pgBM2dH1Qhb7h37fySefZkI/jy04B2fB4UExDJRtOspAHx8EiYZE/9UOwzLqt4w7TYCHem7fArQGkoWWqq/WR4eRgQ+mPjshW1YrjaMy6b6H6UtCc9MIcY1qo6mbVTLx0BpFK1uni359iVbmZHNsfgkwwxZWG+Zd1/4pYrBS9e8/vyvjiTdi7YiVqGF5DefRLEGrhGfVIWcHIpTlptdtN+l/r2X5Ni+7TM+AigNl3NU6Ztv8V/YXOlceM17SiLDGDxYhor2m0WOSgGH8qGhJxpyuGUMlcab0fXcEtrDl4QtUvLzVUuwj9zLYV09wZ5DJb8BfOVu11iw5xFEb8lCUVZYUrog5vafHeqNfKkjix33gFOvAZoftpURF0YWw9y6FdS3tFgShg3x+sqtDLLEDMaNdaflZr3xdnlRU4j9pcuy0hXZOUkFQUcW3mFtvTykGi4454WDMLrIUACX1bwD3w4RVDH+erSJIseKa8bJi1BnPpHcapng5LxqPEvwIbb6+bIW1/wJ0+kJmRqgqvB6sPLAgOm6VMLkaTH0Y4ilXjM1WCt04uDvMIJn3L6PEYZibOXcuDWzJYgwjxviUlTTSmouExWnDJS2+9fQE9EX9pwJNDI8m2U+1AOHScVDtTbgX+fLKwbgwlvr82GzdwJD8+Sdx8P/2QQfFH2NoWHTm/UV1KYyeAbO0LvWFceQiuCXTiSu884dNCVR3vy0gxP12INkaDIcSkPeK9zznsdfjjCytbxt+Y9e0Cku9wvb32AbyTXZXhQqdD56Qho2geLM9o3Y80Gj8P3QQJQbTVQeqwPvWoKYrv0kxE6tYSN6ZXbTijEOfECeTcpFwO2gDS5QfHUXZa2pIFm9yrlyutwMGP1z71n9HiwNBrquw1fM3rfK9GCJFaSBy/0fSRVc3MBNA8bGFo22G1pi3O9lcMkrBkoWn0077ZveYV9yRR9QvmiUAmMgDXPILLnjoIWAUzg0/s+NkSOFOYcpCp2lFsLJ+i/xeXnyKK4qOg2HSOijqCt1CQm3e0XiC3lQdyMzV1nU4tmLNn7gPhhma5bdnf33+i9MH+m8xVfPU3A+23cWt5hqnlTxlW06oG9AWaraO6EZ8R8nDfAAwKc1n1arP8qlw2y95USeBoBjkzrCYrLgN4OhbPEQDR5fpZ47+2c9Up4h1bdvmR6g7+hRbGxTHYCqKyLWnyK7x4iH+Fa0CSZYTvwoFmgRv2A==';const _IH='e7c6fab90c15b48608ada5a8c78b5ca1e31d6ae06f256eb10e4700a1fe35120a';let _src;

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
