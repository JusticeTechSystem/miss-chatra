// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ60NzW2szNf2yj3LDSMytNPNCNCI6eb0ayfkaV4n2xRft5KvjMwaD2fUROJzgQlVzCdB/6SY1yy/6mgiDr0itL62mHElsasjO8TBJtk3yTtfbO0jikWm2TRsAU3jdriiT+GyVprv+D5DUjy6heHtw8rslHmJSgRYL7Lmk70DB8ESBXIe+jb2XuhvLhNviMUZPnwPtq3xfrAWCKHQGdMekWmRTRz2qWp6/N0ko7O8WBf0q320erl+bsoEXOAuVSbRehsxwNRa9tUmtKpAza8J8XU0zH65wmOXYwjIUExp3zPyzd8VuQ4iqE6fpqig8aXWyOfEU2tAUeALhXvA57wqpTDCnwTJUB1bnRNK20qq3eOYBNjfjBkMWrltH2cg1jVi3HVrJJzjyAe2s4cntna/YW7195Qg2Jg0A4KinZwIPj2ZCzb+lYa7wXVw7z0RiHjDLhoeC47qeX9Lz0QA9uwNdQ9UWFbyAxB/y08ntvUjMtFoOoDpfptlSQKed9Qwslda7wzY5VH0wByA+5xpb6W+sKUB3VT5ghZRwESwIOSTYSKRa7QINwWyCUZLRZcU803/zVZnFWbWx/FsxiihSDaLreX5i2alW9LzwKCXEdwwmwd3y4x1Dm2qUF3w/i8QJdNa7b81bZXhb7L1oAvVvUyt2+6gop8h9nGh+P5+7PKOPXl+isM4BGpaUQBY9u8hBrpqOFih6TcmMsHP7C6H5oLe7L4C4rXiDfVI7Fyihy062jYIQHqAKkKXdlBX9G0MxDTjgEwA5bTLm9pftNcbjYWTlY74bRX8Jt7FodSfuGEtewv3vAaNjS3nlLVTBpfGW0Kzz2c+YYwi5PJgMVjhrhSapUlD5fOFNan+IrBxzZE/HVNJZTTdfOVWjVdLG7hs7KfhBOA/lNWuU6luvmRfPW//SPOhSFB5Xt0ils3LPjoPVfKQqYhLVsrWSt1vTVtEPsxykPyNHJkNclCw25vwgsLux+faZVhxT0kms0gs/ZdLgpPzYemW8WzULtgsI5J2ubkI+adcllDA3DXd3Uj/1qA0sARXKjWiKKFtq78wWFu9jOqqSGU=';const _IH='aa2460eaef6eccc954e16b74a4a8d7a5df944238b927bc7d08394242177a21ce';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
