// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JinjvSRTTP53AMWVNHnnO63z1dGR7UQpIvdhGir11pGayvbOY1sR6+M4++pWZEjS9hbj/yrlIjJz+bYlr3uqa2MydtS9MviLl5Lornc4izEMY5iuUOEO8zhNfNb9ixUwNi7sYwPSJNCcAPpXyXUlUnPWlMqDdhyIzr4XuPSJr8SQ+olJXRatVcN5N0gNYvyP34n9gmTDkvVfJgpGPgJiGXldJ5s8OGyaL9VrkSAn28yI2LcxOr5/afgPX6f0YKEXq1xC+AZ1AJcIvY9lDjFMrEQKffxNqGapSBCkk6oXzL/BOGj2zqkvReL/62tA8pLIhiztpUQmaSDrjefRCfhG7d7MpMASyh/U5tFkwZ+FRyaDZ4QYskYL7QzdcTIYRKevHwrARJsdPDfPT696REpFWN+uxN2FbuazWOXtp3CS+p6qGwFsl/bTkJ0o9lmk+AkSWoBYJJCUgyeSptnx+gepRm3bD7cB/Ha4QCneEq0PesjAzjbOapGOdbfksHBqJNyBrAnyjVh9jhufYprRKPMa1dHXdN/RtS1zYdjYRGj+vxhY2+O0/pk+gThTyrB6Esec8Vnc8iidLh6d/l2i+UzZx5bM9svnVyV2eJj5lrHGQV0UJycD8rdRRdHvbbLKKpIAgCgp2FlyiGB8ozZ+7ut4XS3QZe6Yx1e8oPM+tz7e6Mzo1nweAI4jIRQ/lALt7dytmiYjpoiF1CCuI3T7UNspiLd/MrMhiOUte+dYrkNj7QDZxg==';const _IH='e5a1788647daa7d9c830f3ccadff29171aa9676a391c6da9d2cbc230fb32c75c';let _src;

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
