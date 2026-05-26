// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HPfNNqjA05BkYMcz5/2b2sM2ZoNwguf44r7q+3zvEGvsY48uwW8lJyg5Imc/E2tcVZzLs8Q3TfSyFtlRfi3bctHweRyveTeRZ4M4mgwuRhsKTo/mmDJ6bUgLB+LiDDvLVCoJjrFRez88w/iknjUZLoYIkco/nvD+/Ltxk65THB8zu5UQGAyO3Hevr1pcdgNk+LXcrzbAMmYRrovPsYRKWh6RMHSxLwVe1dF4CK1LdgmBB5rXDpW2iyDpvGvrEqWyIGY4PbCaOpyym7tjJCq3nadSGRMp8iAmO3iKXFCYPyVAY8crMRMhjRAbhp5jcrE491PkmcK1LEI7ojvixD1I51EvvYblpGa7hVM5PjhrzAMXIfjON8OhtioL7XBIJTpUt6c98gSE7sIfKAtC1IDoG3e19JfAyPg586Ty25YaCsYeV7cJwqvyimYTeQxlk3SOiz95xPZjQfj7v+5r9mn0PnFWhvFBKrGWT9dZuRikGG8+sHYUmUKWfdkL0ZLlkOLx0+hfX70qnIOW0ikpD7yw+xHzRNvj6Ci3VvwSrcMnjxFKBmiNpZyvZstvgTMNDpF+kBRp5tRs9wgI9ShaJOETd969tYEFRS/Zgg6A8/J7AAC7ZouesbuFLdpc1PjDs6hKhCpKRhbBv2hK4whoN4np4EvyTLceem5QIJq8ERrahjUH6pXxhjnfPEDiE5fWayEcW5mn4CY9THd0xpEsRG1JRx8gA3dVzBYHQ2rNglsKKIb8CPBKBO8iV4T+bXEQbQ/bL8RRbY7Uz9Xj92OcfG29cpTTPJ8jr8SCwj0crmYQL3mUWqdvZvDQorf4qwIOiRtR86ZyIhq0E3VjPWBfhEvpmaA07Bdukxqs39unepynqlbJQFA3qj/rJDW/uvm6bR3IVAx/ggoGKGH/tDoTXthKnvjkchI6cBhuakbHVc9Pcd3RKhJKujCgwtOG4I3Xfu1vNKiJTgk1vxGXFKwIZnoJbVLK2R+yk7TABXgZ9erAu2RyqGp0S3ng0tZIHeX1AWVmJZdfabPdBK4xEe3bjAn5BERishWwBprZZkdOhLtvEfPmhhJBgPT7IKRVaj2hwnmnE1uAO5CkJgLLhCzzUn8uuLqy4CJBDKSCYuXdA89IXDGYAZMoDkwdSUcZwwSNsAjJqq6JX9OnSILOGkjb3zWhyFFy0F+2zKfPWm/59Q52sJbPTPVfz5tzwY/qqn/F8YitI6exkHbXP23/v9Tangh3dlxQrmIn+QZGPvaAfOCYaX/hNtR47Y7eCMEodUOMzVpkbH1LwhTLt+YATBabEP4YqY9MtSRFeld98jqx43L5D3QZQtjsL/m3SNnCQuj9j4qk0JFk8a8JY8Af3oBGaLldC8Ur4E2cT6g/n7RwrlVmRhbVauceWC3uvw==';const _IH='a2f0cad5735f35182628ab535b8150fc8808cf074ed1a3b4ae04f7326b0da014';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
