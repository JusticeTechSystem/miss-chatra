// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zdwhP8/iuHKZTQcYrDOKSlp9fuETkeOTuzQtuIrS29xuVoNLr4umNOyxP512bZnkI8L/2Bw96vDATekl91jvJyiZ1F/gDHssCnhvkcSZ/JkRuuPdCFcgbHGtDNJTQe9ukh5MSAy2EovmWEgE/xMQgTIeenw3vj2MddwGx7TW7ow/0hPqzcJ3nq9XuzS9wj75bEiFSuG6DO4tOOHLbYyVzf8UwgxhGd9uVj6E1fhpKsKawgzhzAOBO+oV3azVoI/7U4TaDWwwKWtbFP3iScx/6n586snGJrzERDa8Qe8cWVK5NFJA8Khuy26KJjcAW5j7u0/T0I6dpj8kkd/x507fbHLo+qMepB6ZlU4z1i3eqOFO6K/TEZhadVl62ENYvXvuEXiXCwlBjdT5Mzt4w0/FOURrXXDY3Wmj81UeQPAhjsTY0FvIr5vEr9E99tkS2jEvvTaY7mK2FseLCW6jCUAbAHme06J9uT5p70hkVHEm2ijqKbOXITR6unZM/oMttZvbXz4uunLPhjb/hlgFKDgCxr2rULYtHGMtVXREgmSLMKmYct5hsVMC9w/pA50hCJ3LgBXlKc++8Ovt6MKEXaBpxaBlyQUq081WPwTiK8qg/CL3BYSJpkqWXNh+iX0sMgApAK4qwzbIAndQEL+HFPPrVxTGWWG5uPWjSTU/TlVJ/ZwMkc30s2LsNGJM4rkn6ewZhRkxjv4Kvu18YQGCcDpf';const _IH='3bf4a96c5a8b069142fd3bdc3f4c92c434af9d0565e36a762171efd96ad5cc50';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
