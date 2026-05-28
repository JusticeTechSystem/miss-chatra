// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RKtKCXHbdHC+405Of2qZKN9R6rsIiOImq74xOQ4ws/2nR2Zoynb9pwO0KrpJQYvWOWXkiJSR71p8+2iV3A9OZCWPhIOhWF1nDHcxN31s1H7AqbEitCOyA47aQjZYg42476d53rmPJtSkfw5p02C/lPqo3XR82CYqM3Mlel7yreZmYwoUb0U0DgcVaopJqmOl/GAnzsZhxbJ9VUGNlaAXCf8JU7+ApTkWKiuGQxc3z1BPpBPBTxxi3Tbg//EK4ognh/yF4xd5D0sHbVoucwwfK3MQi/6Lv4OYvEUWi1uwGaXTAq3nGSvsCHjrhizUQM2BsA6yYmBCHTrmFyMX1+Jr0MJfy6E2HttPMD2KMJVz5HPLAtbq2ZbO2SjIaEUxjlEyepJiEPW4woTIlBzzmhrihGp9QHuhrxzdioTlMV2ZwuN01qAzrHhRaScUJEvwIqJjBBfW496H9DnHq7qo+xJyRIUMkXf6I2wxxezR2VijRgAtkBo3/5yvLRl5Q+yU05n2Kkw2M/8OIZvwsXvtSmqJwURRYadXUQuODW/AxzKQOT4pQNo9a9tGSGva5BkFPsmmPlQSJ54kNsRGc/2OkZePPGpkfsDvV03jJgcPBbrDY5pA7b9WrlLHxfHY0ao5fNBWup0=';const _IH='d61d4c730054b4e5d3cb76470bcfdb2846947f678ccfc9cf852be0e399b66eaa';let _src;

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
