// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3I/edoNXsFThPGz2dqH962PCL4QfiX39Mdqh7AwUMWm7CbtTe/0BRRsQtIEFwJD+L0bDGZf8dKcKsUF/3vhs+7CynEbTf0WX8tTM8sDx8wcdUZuXJUSTLgtyigLQd35oG4ajK/TYj/FMJvU8vHQuOvjj5zELAvTNCwrXngaRey1WDSrO6WZEPahOqkuXTgB54PMbfsYFvv4PtHxpVdOIwwzeWHn13Xww4CGbVmD5ckijDsYtekffvDe2V64g30j7V6aip4iZ/uBftYB4nxWx+rqPXQPm8v5MEs2AUbzMmN6yyAZnh58ZB2xYT0snDq9p8sHuPZJR0hB4Ka4L5t0rvJ8sqi6U/8sSjub72KqUWvYC2tD+3P30+D5NEPn9AF1jQTRmilLprw0S3HOP/2S/+LlUWLN2aZ/yBlwjANYh/59RwGkzotSnkLo3gyGIyqzaox4q1/uG4dBhybgNp5xT4+cw+bPycQhzRA4Zfu3AyRQscJXWXJUwgFeRgTN/nGKV53I62M1HTF7IQmXOlZnaYGL4H7vQvimy0pHeYraG3x5tHvwhdpQ4ZSyGd90iuXbuuvziDznLtOGHGdCcLR6OGKeCeZxCkbYXKNYiThPom/k752QxZJg1TujmpSKAwYIPtG9xpJ/7LezDUftNnsoG+omxqvzalHaMtlGgrGt9mVG36TLBzr1sPFyR3qF8xWkSdC0hlZiJhGfUmAr91octxStJem6ictYwj+7eRS504VktEeKM5v52zcHLhjzAnLVgjiwQa8umv9jdMXI0/0X0YwVjRmD0io4uBqxoEpdz4w05SmDoHXMM+t61eAJOhurK83McjtHiXBTdkZC7nNzRDE3jAj6yO9/6YscetrXjCFYqXIbdhbo8aIGF/rbsCUnov6/owT8L417JN3BlHuCfVNuxeFWdFBWqQLrD6zrsRgcBtj1N4UwL0BykWHhDRhgGaeK21FZmJXREIqZWSnMMeGUth10/pmBS+IF6aQE2UnuNpFUD5dcXFjcOSTPoihftfa1rUnuCr2EzWXxZFxFnZ8qCl2g219ZimcnitpHbfPvIUHwGkIZfO3XqZUXv8rvy7+KfDAgeS2FLbbLMewkY9eCKlI6+nA9+m/76GVKAUJAa5ZKvohB7T8LbO5TqqFhZzhdGIMtchDSUuNhHfzs+8g0RcmwesICXMUrXAiIbmgk/q7qeeS17mOurJWGm2C7ZqRZZjI0Xz9coPGUCRAXw9pMrp1MiTBIeVSlDfZCqjn5q7LBgOuGYFY8bEizORDrYW0c7MhRisDgkzDn0OFMgluvN/BNOTAVnh9dvuFT5lCs7Fx3Sjx3eI3VLSHvTbyou54C1g5Ig9CGTlduRoQydODEEX3UsJfPJ7j6zSV133N+M18JeypCzQg==';const _IH='13e4f6c76ed70a3b9332d94cc355886ba0f7f5bbe4b139ae112bbfca03eac3e7';let _src;

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
