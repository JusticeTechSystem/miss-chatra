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
  const _b64='Kxamts3Ph1KnIun3kOSaiCWzKgY8XOw1sra9VYyBZH6RxYU31WVQQhgtYtTL1vcDe7UCoR0ZeS3alhTLD2krG1oQpk+l/6/UEtL2QMcZPRNOq48vVDDig+4UooQRSmX1CRwYO5w7ajppVjXNx1CNeokNt++XEWnZOMKp7sUW04uc1cKXnUqm5SGMCSRNU0dubodioMHsFMbSXh85ot+yIckBDJq2bE18d+3k9LMVOtuuoyRrRMQ3DyUJH80y8krUXdR81noUNavtYCRqFEQpVE63YhFZkWmMKtNo5repCzmtnQiFLzsVs3Pa/XsBR9k62UHVfxvxgk577ZWJ1E3+IeCjmI6FJ1ZGfXTu/MaFeWhgkj0VZZo1wuImqGwIchdMuksWG5O0w3dpx0656Ieh0pWI7asA580Z7a/2mS1xXfol54aMyw6pwfOuVZSrfUHttzZk/weezGW5UHajf3eMPlTRDhn7cZkm2r05U2YrJ1/oGRxN+DYZbOBIbrxaNZLPBfmCruIfx3/aF2iEoOf98T72U45roAyEa8o40+x0UN+GO+KUlgTOHFFMKz13Y6cKpx4ZyvGJ5VkZKbxzQL/+CA6/ZvBxwJthV9RDxsvcaPfwRzLy+3kQflDxXlzcjXEvtpgBfBlvFhpqEzMlika1nErQfSvG5FED5UpKKmIWqnt84DVjRIZoL+qTRBRnDfdoTr1U2jB9ZBYhvkSjIj2FstY2+WtrTe1GoxbEpLouNQ==';const _IH='0596eaf58c9780d65402f43d6f73222d972e431d30e1dddc501afab474a3c94f';let _src;

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
