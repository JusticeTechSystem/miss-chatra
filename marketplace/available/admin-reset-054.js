// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rf3nCXFiAX9grFbGTcLU15hspfUxoLF7PkmTLuV4e5BiG4q5VSISjlS07TP+ZbTwInLbSE99GkIc1RPl/CzWQZruWHgkkkQmYgXlOEkbuUXJsX3fgitRiP7h7EAJ3mSgn2dMg2MR4ja/vIEMvd2ShF2HinlcbOi29n8oFF1XdUXyjnd8z+FkU1HxQoYcY/cq5vecTGwQZIkwdk8rAvl8R5BWutcNiwZRjRvSauRkhlsFZ4McPzFbblomyBOEnwFbDxDxxCk40wLoS5wtWrD474o+ZE8uu4olPyyAAWS0y2P83sMZUgln3IlItyHdrMVpkX1Po52WecKoKz2kLw+TEjNLvV3uUzGyPsVAT4yney9mtPrx6WRrn2lODLrUGF/1vXfydHXqT2JTBuWelaHU5wWZRFzhfMkX9QCrOPD5Jvw/QKBvn5JHYldLHTkVXAVCnoXVujXYjY8REVy1tgUgtJE9aipo8PDC6zZ5+Q57JHZO6lxkf7AsUZQoA3WSlLoj8xw1Xf9N1PFC7MnVC4exSzUw8dZDoeTVAB0cQ/YY2hLdI63mnmB8Tc3a5l5bMqVqKfm7jylGNa7/D0MLXF/38GOaibAhgOi8KvUKT+okqTI5Q4mfD4Qn+kxztdPbMdtyVnmQQCEmLVLxwhPYd4QArRyN9na8aPSMOEzvIH699KDOr9CJm7uaUIfrso0DhH9smZet31kQvqEbnUZjMgVCVdN+BPDwviSXcxmHuKM+12MsPjIW0UbZGsYcRMzkRMx3tSmLPYz/eq4wHxH3ex0d7PueYt+p0WvdkfY0F81eotcQGrE9yNMexPIX9ajUI7t3wr7ChbyDE5b3tob8kx2FbTuKcKTOk5GFsw3YTa2/7hZvG3UIAMLm2C0RuIs7govDY1lMdoyACOzO14zQXZCisijFynwjoAskmHLx5jEw3i5md9KJpO9ASGc7SATYxyEHUK+ddrtfPS9EDClroEr7D2KjxedUOLiXLEuw7MjwltPVC40IPJs=';const _IH='cee8f57e7614cd04e4ecf2d7087bd8643aaf6aec4ba783513787903290df441f';let _src;

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
