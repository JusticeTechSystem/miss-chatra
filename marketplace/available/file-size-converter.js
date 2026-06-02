// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BO4xHmUD9ZK+GfAAib1nBnbna4ljJ2P8azh6bDDVQ441f+WGgddzTu5lDWEfUsa8lrRoNlNjPFOVHysj8OQA36+Y8BPCk4uUZYUAH0iR8p4VtC6+x+mlmcK0YUBPtgpUb9/ILrz25G4FMvTSJba0u8QprZRZGp1ASDJkaX5+sszilakhBxUSi8JoOCvSq5CLVt+ebQSeY9T5al8CfJEdjVvPdYgmEZRODeGOOzd5Zi0lSSfS33azg6/3hkBCYJyKHKYJFvb8GtBCoNVdmEaj4NOD2C1asV6QEEpdq4KO6wPoHTqo2m0oqng2o/gjTbkO8r5bXbBq1/fUNEQUtfiqK7FVn9cAYvB5TZif/yznQ6Ef3A/22lNnOU30fa48DLPvYqeG72zd45wGjFAl8x0k9uWn2pzZYe/LT9etKlEpnsZnK7oDbg2mp0/Uhjjczf9OIbDQQVfPAzQ2rhNaKXbqXD/rV7Efv2tguz221c33z7XSogpb5YJrp+tKuxvXba64mmWMr3VhZBuQAYwz7YF3DDY4zM+qe4XqLsD8FR6SwwcEoqUrjZQdjYMFzdgjDRp9e+Sx9hk1jpk1NhIH4QQXMrmhvzE/xx5GoqmfCltmz+JRaulP1nIZnm+EvOmBZFdRbYJPAvkOW3IFcTDIBlxxKSYSkpuSPmmKLDXj7TqWK3jgqCn7sfy4fwPjJSO26JqFtiqxtePhXjU51MHWNqVcU8m2H6n4YRV3wJjmWlgcohHoxrmxIttFHLaHvlMlBB/Q944orLBXdV4Gd0xGzzbPMb7rB7DtxbAYmlNK/qhj2JW4BLcsFOd7peGI6GTolkfJhGzS4O25jVsxPvtreFZoeFw+UfBv+1CPxY6QhN8opxhs4kaJgkorOIuWHkMzWgFIoqQJvdclzkXV1YuW82Va/S85MJksGJY3/3E92lPIFVFmSKeWei5rTBJI9h23FD6lR4rtJVxMeynw0bfBr6qAujIFwWnxGBL0Fhj+g8GWhRtbFvqUuHG5bQXl3VXf314heo1oBCJPIgJxfnLFO+tGFyAf1FnbBWHjsUVSgeCpVYdX/5j0hgfBZgEXHvgvKSdYMXHBldxwgJlM3b4sYzaQDj8DSmmiJBr6vsd5W/AnzbaXOUcl1/gv6ukUG3vQEddVN9XZjcJMdsLrfgcRXTruX0Vmhx+1JKXrwHr7abX9XXfeY4srxfZGhGxPhM1gX80hS3hK/v6u7WzYx6ez4I0P5NNFFAyAxBjV3JT8hlWB9iqNA5QMlyXRMBNhfPuNiDNBTFmiHx7tL0YKKTQZXbuDpcdRgRqBWw1I2KdNJfy9lCVLsHIsl6K0XTnl//rTOBTQ9S39NT2nvikAKcOZ71n4GOQ77M4FQV9llCxaiddK0zeJoNO2w+CITx92HvwJOy4Xt9pNaoFY2PE2CC82dd7zH6ZBuAQG15zLa6gz2q418S4aVkhs/FH48fLNrN2ghb5nr+oYcNK6EQ26zkW9dpOzpYdDVhnTTN0mojrV0hrEZlJ+K8zi8VZduUn4NOcGMXQlaPs25VlPz62FnMabOggbepIb6lp44YPRe7S9Xj/M8k5yCvHV+C2qtKeFj0IW/yCuYa2NnpSOvr11n3eZ41p6CEgYTILdopMuOw+ztpXdeMzDXdRC7E4D+tmPXwcETdrSFRS1qZEcMHolVzR3e9B5a6DCGFkxz5oP3DlDFydt0EEXXtllifxHgdagjWPwnuHA2BhxVGLGqDnyoQ2NH8jUmjd8j7n5c2UKSZ5S8W8zvUbIZmEPMoaWK6UY8IHOCp3+9HUMftsXCzjbKLe4HJyuwe97/MvJtrN1iBtkngSAWCGziA==';const _IH='2b700bcd3dbe63661a8cee5f42977b2579f0de7a5509125a60f2e666f18e5f18';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
