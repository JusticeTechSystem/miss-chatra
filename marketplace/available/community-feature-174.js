// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3HHzREAGbAgw4v93E3ID2U7Tid6qSHwuZ0K5dBrgJGDA3L0v4VvBskksHnXfWHqgx+nYJb1qCDaKReFZ9fHpWTU6rP3wfYLj7X5lI8ZqFm64IZ35M0tQY1DhqQXsFyBMXeVe5OmeF1HWw+F1TX2eKCkDDDdCbIAsv8Hhe2xz0c6zglZvWepSbApad51ZTaAH73FQ2eu09TsRoo1E5BCJWkyyB0zu/oxlg4ZNwnnQp3nI/bukFVDCBn9GrDHTFcvokTokruAay5eW4i+sRTT+VXpdn3kGsmln+D2UxCgvx67GYbdzaq7iwvQfkpNvlvkHTk9EfCIWqoQbRQOELZD5fT90Nm+mG1EHOApEjeze09S/5ma8NQhMbQF49js+qKIasDxqwFy53RdvM62cPxIjfl0ME3dvbG3bZsGw4aV/dbftFv5Z16Emw9LMKLwChwuXwdSwoeUngmZcRQvwhcKUgz+dCCDWG0oPbJnh1zffuoxoPou9Gc1SJRo0KU5Ps0AuF6wee01wUxNCzg9S60o5CvOfB/KRIgT6MX7sB8D3pWdOnaLPd7dw6fi9MI/EaSgc65DgA+5UlMh3OyB7daFP/K7wO8xbsN9DxChubqrmrWe+rkwG9je+gJqnhcXTYPJFZ6+pSWXeDIae/q1+jbWlDqYC43n0ye+RRWxCGgSrJJKGAmkZivNytQbGiFpaNMWvJFxOkOhgreqC/w68vcYkicDqk0r8E8H/jL/hyxZECc9NNQjEELg==';const _IH='46b0ac6051bbcc0d89c8384ddf15391b537120b2df0788b8a3fee2c41516ef27';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
