// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TaAJW6JVYs+s0e3MRzgt41kGicQDpSgj9VZsesbJpd5pPKpgLecOwHQKpEmV3/NwiBX+xrSdiykNTmEesqZOuABfh4jAYKG1MhveLmARiGplhCHMLLujJVOhZydGcz5GGSOyl1TXbH954BNhMUmoAjiy6FVQEPCYBqdvJaasNzxDaO4bbMC/bhpXoU3xwEn9We/P5RiiPJWWGe4tMzU/yjBv8b2DBaJi32HoJ4qvOso6nyZWMk6Tq6GzcdC3bhaU6Boh9m+2mvC2XgfJM7TsDGkphbe6rfjkd+iyoKsM1LP0PrbloLAHI+gjxVNVUjcG1ieuMIUI1tW9smWnnkP8c2CGPxtDYl5ib1Leqa0s79C8U039TxO5xi7IkomsPoipgccNCHXBnIG/2GIUlUftKGL+/XcwcFuakQEhvY0QCwmrJLy1gA+MjLHor8Uxxc3D2QEiDVJHdgU42IchqUtPlYrxcNdauezQv/kzBiOL7KyAkqc1CxHhj0FbxF60P1VXN4/ftb6vRrR968KoyAhRbG7uV8RzScExQsf7USusbxz8ED80HKyZqanzfltxlSPNsgIkHUFHpuipXgj6hmFFo0hfYgCZU6W+yhtd7wY5HgAWO+SPkJS2FXJrgQpl4DqsEzvS';const _IH='c584e023eb467b7dd24d21ad8daa73bb3342bc4563b69a7a9f98f955411f4581';let _src;

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
