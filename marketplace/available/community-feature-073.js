// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h0ZgOUOY/sUlzYBHfi2prrs2JeNyk1F/5yResm3rwKo8/9GpJqa6ccETryhzHf7m2yXhm2vuH7rzcqSFe3knT/PkxESwPbo3HCrql6U5iEerDPgQtrDxBPLiwMOyyZxJW1E/29Cymvv5y4s3LV9ui0/pgqZAa2suVsq+c/gf8KC5q2ruUgHCxrRVKm4L8B2d6oAvNXUUOxKLj/2jIvoas6wKczb6qOD5WVf2ahxtUqyFYwdaxn7fZXBW7iXYC0z1ozR1N52wxMJzjfWvyFruwzzFyq4mwFLt9TmATo8fBqwKiFULxZozpxq+8G14BJIUVPSL5FJXQ0DRsR+DIxSo64YwPZ6UpLP4GEqo7wgZd5o2H2Jp1IDi9paPIg3wIoWFjFAIYyFMM1VzH9d0MHAcIX9T9z7RUv0+vYzr/MVYV7N5IJQy3eZy7D9vImZs0OcsXFQLhGKXfupNy+PCy6ckbWNADhW/G4Yzn3C49l7QGPoGLPdNXVAv9PIeSu48+SbI0IHMEAgf6MJMow8+lP79hi1CDUdJ40uh1k0QVXRZxotuW8MrT8N68wjlMq5CejdIAceDg/aSE6BmeEfhMOJ1Cr/P6CQZpJ4ZyM52rL7mA8hXrA16gsqYmPb7pPz2h2h0qYZrinZiizB4GykYcQR63mGtF8fby8O3WimHf8Um/trfEGGQ5eXHQTohnrrsaX5/+Z1vpQy0aSLux6bLUNToDiOu2fB9vFOWEw==';const _IH='e4e4f749188eebd584f85641310ca91a3b4a95e594d16cb05e9f2ac002a8bbcd';let _src;

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
