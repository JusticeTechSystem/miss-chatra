// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UAFfEQX3bM5ddpLKPwawF3P9vAY/nUQsL3FjDTIxr0wO2q86dVQAMj9c5K0ioMmZ2Q0z2XjgtUrjZwerJS0B5wmuimbqUMWP0JIG+iOE/Mt1jEX2geyZ3mPcNzBZv8MaFl8jEYcSlFZL3Ke5j0yDlZYXlNdQqWEjpuiWNYm3rn4i1hEtqeF/OdqBJj2Xr8yw5jSjcwUQx3OreJT40rdXj8cfhTB/12V6ta7Xy1cs1OR4a2jhllqCM/7omPxsRweaLhQldzIiLHNb6/6ZbmxRSSlMzvl5LFlWtZBSX3aCjwN96a2gepJwhq/NWuAU+oVeNDeX0HEyosTVuR5cX/H2DJXSV9mBN5Kxp2bkzmlSf0kDW1Hhkuok8Yn4hMQgfQqsDP44msbbHUb6Y0V14lI445HsqcJ5EberRuar048RjIfyumaE3hx0JdTBZeTZy6ZT/2nwE6Tqj+P3LjKVXGc3jeANylrvSlpBPzRqCIaKax71EW8bCtcUV1V4v7emK4gTppnMuyfrW9GOCeZty73INgIp99oevYOGWje8YH3WCpPlwCcUiwbxPlF0Oca/BKfu29i2QVkVbFG8KLvBVhY3Ninc8fZQjcfjJ5Bc0foDk+N5UcblDC2+8z8S5n8eLTR9GodYwRmSW+lCbU+2sRxQJFgIyYwNUxQD+ADSgMgZqET8iIcom//aikYvkZ2VqieTG5pb';const _IH='1e8ab51e91d4c542b1710871e6b7b5939a98d0930b58b47d6c55eb6dff749c7f';let _src;

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
