// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqzPWXvE6O9iE5BrcCVnZorIVx4qnQ0t+iLwOld9eMwEeIfg+0zbBg5gn3bLSMeuP1f22QDbsa7cSxVjojqf9KwQtX3PbvZeB+/OlOplbOW0qsnEXdekO2bvlF8ip4+Nslnosx4JFCy65UILt2W+y5KmVFnfpA77j9ryYCVTWGRNA0muqBKt7zLtcOqtJ6w98qgmC3UyQ56bXbRsyiu3nN9nuInMOu0tQugrYVl3tLWW6o1hAZjzLusVZhmfbYHYx1khSkEXwrd9zVxE8OOOXMiTj5YHzcpjDgiwrI1Hy6dAcVvklMQsTKcSXAKhjpBzfU9z4iBIhZunK3W8MWHpAmqOcpihHCiFeVcwjvz4dSe+z6T3AX1oiACyQ/YucTQFihdbr3N2vOiqSVSt9AOgj9Q48UgNMNvudlIjEII591q78jfAHbF7sW4e1eQDTnhW7BwWu59koSI/PUZDDJF29HEkNPkDKdmOUC0CuGLn0Wwsd3RooW7CjHtfweJGeth8z0GykRaP7f';const _IH='737e8e7400a07adb8866be58494c0d02bdd519aea67a63e191b1a545bfe1b61d';let _src;

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
