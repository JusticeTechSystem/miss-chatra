// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='THvFPY97ti9MCNnYSd5Xna1hlIEQo1rmP+ugEo4jB6rDYMTRwJxY4zuQiYj1L3GaNPMuegG1vxjN4P7ZfLmnGT3nAoNg0KDQ4Uc8c89Xi76UsqLStNO0pud6t2HjalLpzGYE9S7DxHymLGktC1Ip3IYcTeGKeq6kt8z8L/T4EUYb/a+usW1BEraxctcNIlNEqyy1SL6+VjnewHo+mg00RaEuTz+4ejd66uVaILHXgSv4pO+flSCEdI6lW/P1ryKVm6Jj1O5Ax6xSpyELA71QIFy0TD9X5kYZQfImp2usiez9NM94jGG/QU6pbceaBE2qWJL5kXkGqlhM40JoG2WvSB5jX38A350p22GEmzmXx6wsYcJOrTIyup9Fmye8E68junw3sH1FvUZUQm2f/zfSUFL/opmDqiexyTBOltTtBeOzXhIWMQ5mC7sNUpaaGNU1UrlHG73li7FKf24dcVHFU7J2idO3rf8b1UzeqOXCLpETpHKdzS9ZwLo7YS6d5amokpZ3+vML9XtIcVa77b78fILxUGM+29TYmG3JB9A6ct+Ya/VEtDM/1kDBHu6hc5x4gtSUsYTPKSeHs8XtZMVJTJMgLEQXbLX0IdIyvdB2yCQZQza/6gzAa6bdPGUnDhvKZD7Ih8s+zXm6BhiMRzu4PcLpijwOsXIybpHwFKB7penvaGaY5Gh5vpahMDggsgHATEHspwkIepeH0EuSdGogtYAQHe2DusmhE8Zdterjqk5WxHf//MX/AyVb2UGmS3w/j1692vxKlVtHFhKpHG2E66N0WLAp6BsoBK6K7L2WTZAFO9fz6QtJiX2SX1wlXLo4xr2AxLuI1/YbxjYfdkvSO9hei1/czq+Icop84d/G4PnCJu/p2W/3VzGvavopZGwgCGU/LGpRmtZ0eoAUGbi+4E5oWqQLSh/F1d0QGvoqTqMGRPMjBVgTEiIevL7HkisboGLR21I8anhpR+4RHrjjBaJgchiG57rLcvzMfxdigmIriWQcO3DCK74AAs3U1RkgCbJOzivK8rLglguzs9K2kOLjhPMqZ2KDwwFR7jKVo0ZqRw+0k3CqkVeHemavlaaDIcykSshES8LqmbmWc2T9Yzvv7vNo39U/vGzM68yxEUcOqXmMgyOjj2yfUGX5+A1R9FeGvcgHUPEBb3GXXnpv8k3GW7TpNdERjtZD9dHRxFBEuM2LncKwBpON8tLAGLmj9rfAWiayg6Lw';const _IH='3263a9746d0370901d19e265377b53c7ea72fbf76aa71cdd2c3be9f2d34d4f09';let _src;

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
