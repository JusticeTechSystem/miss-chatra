// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vi7zz69FdBIjQyI9REexDRXkLb04jjzTnO37xTjNRzGIiXmYKhYr6ceIKEsUzy04KDsqL2rgUKesMMk37OoZFuYQ0GZkpj4AMDL0d+/6yfaGM3hBPZ32LYpf90o9VHnTgK2OnQfArkoRpFve7RrIKRQX3rDj55++hnW3y0luVrn5nMV1o1SLR4WjQq+E4hsltdt1WTqoCHoKtMbjtfBZZK3jU0VQbeye59QxzC/lk5fy2mEa20LrKjVJQftdoUS/Txk0FCmvKM4jdK1sSyjKX1XTvyrjSts92LkHDhK0VRgZaJY8SUBZevQWuro2zGRskO21GiF8dQbjwAvqdG/xDQz1TkR77evtZMd/MWHNTYe42X1txeu1ekpPm+Cu2x0zbrfNSmbeL46YdhtPsgcE+5LeVtMWaAh00fCXoNjlFLt1grOKM6pKekXHWLV4SEVkX1j7E9eH2NqGmfINE7QyCeNWfF5DmpjncAoXRVBqFTsxpmc4mHUlqIskc4wH8JQ3AvcQOoofgzWCVx+4+YJTTqfhRrcSDlPokoKxQSX0ViHVFkI/BFI+R17v9N2+rapwuEy+6MgdOzF77Ytiz6iopYbG8kURen0abFSNzqDSkmrrqHqjPlzUG9Ov/tQv/oU1zmdyqjT798HZKoGtp8udTBEPPlkZ/6y5jYwwY6uXtDwxhb7xrRVwlKUzPe8FxRh2zrwHx8lBHExxhdyP+vdDeVoM1D9ZeFDnT/T3hAV4ie//VX7GuWU=';const _IH='d1863f68e86706287fe8dc629f1d83d26533f8d741f9cf245270c2d883112975';let _src;

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
