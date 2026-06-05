// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='20RWlKnf/3DsAbj08YaWjGovqhG0SwqeGxm6VOkzr7jYpARM0FhYkwuy+4QgSDpASiGcVxZykCJTvzo7hEUKYxumc9etBjZ1iDRXJRoX8S70mEdoOW3Oem3rAsEdzem25rcVcUEALo8cxDpf4ZTPEnTw9mJJ7hQt3+Y4/tBAplnAuSVvXcc9VdaeBmzeK5JAb+yoNfCR42pmL8k17w41uSr8jGQHEw0rq3yEOZdacaHj7KnVL7gyS/l6axx+tB/061WEkU6vNfrou43HWrQZF/RytUbzrgay+XcLsTYpu6g9f13EsJLAkjOq0b/tFL2bK16rfKRPU1WDb3VyMMahVy7sOZX8lSThcFa9YMi7RAw0oa4hr2aatjnJKVwov2CgBqj6a/ofRIJUELL17mwTPpVDt8X7sWUt5tJPsuXenQhUH/NH2FAUNe8MHKwX9v7jJlp+XJmo8EfNYaN9bHHYWi1scMY4J7zGN+67P4xogzsg+4TJ6BSmsh88qkWhcmfsQlwdnByANt/2SMIfv5UwqqQGRX9vcWiEs/G3o1qAnFVExQRAQil02iYEuy9ifAwmB7M02CNrMdFafWjo0SCGCD/jNubGGRdgv0ZmOTYigrAMSv/PNEhzYJC0WonwM6r5JA782cjfQ1nQTgLW5LkPB10lW5d/5SDrv5g+/pZxKacfNo8PHr4TSC5Giw/j0sDnvMxfKZtjzPi3t5bD7XTtrHxc43dnHYPk3U04OkQus9OY6X2Nzd3Vs5Ao+rRolXpkQ7A7eez33chLR5aVfqDfxl12XykbB+pvf30s9CiU6Fc5LH+1gONqrQc8rjIkt/RZgbTf2Xph+DHVS8gciszP6srGZ6LqWfLHf4LY1YvQO6KPWIcsyeSV4lXDmCF/O22W67+2YMzHOe4+Z6EsSBMBlGrP7nHY/MBdffAKXbXda+z6sPTKMmxtpl4Z+zrphH3LtwYRxnboXeVawxptvVHvhW5Mgv3CUzDM8eqY4kT/gz1zfxCzM/6jkT1cTIHev3e0HOMCSw==';const _IH='5a06b421944ae0bfce90307c169925b54e6ca4d984e76aaa8d7e1e7f2ab5deb4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
