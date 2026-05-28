// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7T49G/8Mn8vGa8wBwT0ITr+9MA8nOpR6MWlg/UVsb5XNYaGWC+vBM+jpeH7DS4WKVtwi0uD65AQMqmUVgOP12YLKX0m0TK9d+ODOqfleAb2doohjyh7E+AzWj6weg9ZEFlDBdB8tlnpz19GBFd6/9ejiUx5NozLIG3vo5NdNmc2SN3CV2/CgVt/fx421x5i5vos7YhCcFVhL0DQFMAq3VPb8etpjiB8vI4B7fXEtpPN64y4dR+Cx+m3gMxaOAOU4RsSr6dtSCBhwemnF12frQB/X3ZVI6zdWJmxN9IY2cL3akpQ2M0w3RlHhjTU7DdL+UOiYdHF0FVTUbBRl9CtjUiHg8tzkUskmt8w/REVIdre1jpuE/o1+dNm+tGDiFGnMzH9/h4jg8EbsqK1MWuCW7MmHb577UQGIaYy3YpWY6lyxTtFyoJIXdup/x0wjXNpWm09ssjbbIMeDikksCnzoq1+2VGFxKqePFTPFrvusaGyQcgYxrrQzLn8aoXEpmVgkNKRcG/8cu9XPOMTJc3R3tkWcOp6TUOiDT0etjJOxpOuLaV3dm5Q4fTynDm/qxGSu8dOaosrLUznw+WG//AaL1abKdLHljYKqsV13hNdhWAgdV7J8J1fDD8ERbyM4nJEXUejYYkQ8MC6uDLygIsixkLSk42kaHc/et0nCr+9baHBnxk2s0dxZwg3KrdDNe7ASQ8U7n573RSuvU2f7HzCgCk0K4yo7FOXSY6Vk7jXGt0v8cpBb8wVIbOsH/yIRO621aspm7IPwdsqSQSpNTLuOepws0ozv19YlWgV+bUQBaLuHHxa+LwqO39mnjrsW6gNhUrkbD2XZQsSjitUKv56MbsynwWTr2s44+4QaliwTVemRAeG+2juNUuI8n4aMZEw+qVgSdSdu6SQfvJeEJmC6bIRmFxHqm6yFLeFnunv+Mg/PFRr52t1Q4052l9734fS4w5gIC7egdysuI1QFD1cFBfs/GIjbSWNvmLvpaHLgFfACe8U=';const _IH='db45fe079ca8c5763156272a489a77186eca103df2802ade1956f2025a85accf';let _src;

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
