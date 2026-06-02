// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QZAM8Vz5b5iPwQBArrsqQ7wHMpk7CeZsW32TSMac9KIgVhdsa8uv6FuR+GCh+7cPcBYMvE/4AJ3pwyFcImZRo+B0SUE89jDah4eKPoZneZGYFrhz1243jDxc7nu7HTUGpLNCs+DJCw5ek2QhX2AAAXfnBkS/DGPGIdGz3SvefVrJ00Od6JD/69cwe6pJCXizDlfLxSoO2gv9/AjD4o4Ia2bU6esCANQiwVWXKzMMnXjgxK1OiyDuyYh5/IJFIeOwy+j7lGaf9hkHAFr7x0wq7WWayacFtefqcA21A2G3S2gZvmSVNPHeQNqwRPQFIYk+lrCFGodpJ1hs7wNadloh69TYOF3RVXUbf13IPpJpcDPkJwPCzGMRM5qfXXVlpJAvFFhYJkxqVqgWHeo3tYzPi6YyiGM1OFMMIqxfk1KLky1VCQxcXTd5ng07HPL2NSpzjvkF3zY8Th9PApoXnU0swkx2C7au8i19CbB+VGJThus1PG/qn7CmBzp3OWw6ocXZgElXnll7XKmSTwUcjsMCQp8iKiVf/D+QNd+BIw+VAjJCaWMnTBj4szKRrdf1IrPYbVZmkhQDg/0GKaLeBaoC3AtiNrMy1h1Su1z4zh4eWoxStFI3hfEIl0K1SNrfmQ9tQ3VB1wD5ktdcwOEXF1GZeh2+mvnaNpegkFWKFE/7/Lm/IvcuuI7O28FObIIZiwEErHhUYvqXdwqzeo2zvPwLLL3DbRPfQF9J1lgNU2WXCbotxg==';const _IH='94e38d1cb797fe6e685f7ddd8951a42e82ef31baacfe6aa6331c9e4a752aea34';let _src;

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
