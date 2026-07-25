// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVnj/qy+8AlyaV7Ke7exPVDOA6kVaxBEkgJl3wQrPsvcUIyO7rAGCacasDUNYnfStCT9fKxMp2mHNB5Usqu058kFuhFxGFFSzW6ufwO4uwk9YwwJs3MENDZQnLur/tYZ9ByHj10ikctpz+c3uNErQHsM1vbR2Uoeke7QhF5PfRAo6nkK0KpP13zGmZJbuj2rWAj4K2uMnYI/RBsmg7iVkkEHm3rECPXrotoP3522HD1gbd8nSdBC/64MNwcvkwOuc/12EZGWLjfvNVL6zORyXBtRQtczLsHjvLhnrn7jVaGSOtQUcTBFRkjhsM9Iu0M7eazdhtpNQdMicvP4mpSSkOCWhOEdXgvg0+PKE2+CRFSXc3U8hcM3LaRGmBIXRi/x5r/Muv1Xy1h/xxwvjwKxLhc8vTa5LuVB0LRyk/r69+MonGYCAyiS5T0nt8Cu4uXG8ABAwHI4wlivIf/FH9MJNBMFsBfgKW36Xr38YMCT5zTPFwuKgGeJv7thMwx+SwH9T6TkfCPv+ujFgzyTB6mhB0yXVK+7jTcsVziSlT2JsZqFTyYq5PrSmBtPPcXH4dL7VhtdynHMb7NykG0Z13t8ZE74KQ/4QeUQW8/m76WELpMadDDFz9VIgbbz4UsW/QMpK+adAaz1K6MqXlLUnkWQngemwRxHMTYn+/gDqfR4ssvLxZZwBY8nh2l1dNyg3SeK2iTQLq31PLp8Nt7Pg3kF6lBcnPE+xbvpCMD6hO7PsWJsCG8rqb2/qluY94AtYA5tPWdkVuR7/KCKj2weYdG+sN3jaKcwE/BtOwosTn6hnleQUBw1KF8vsFDND0yV5PlnloirkI0mlUoT0C1R/6oLJScYTwvPQWooVBjr0TcT13YXDoFIxlrkAQGy8f3SQc02rd6pNaJq7YupoNDJmmK16VMEEn5S63IdhKj4z9obq4GA4L+FpNYXJ1JQhvcqsa5u4XnccyDNmoxKl9fZVZ2ZqXLW3Zz/T7yIqddih1NrQPDahFOMjYf5R3QV+I383RJ7YfVCovisjSrPNQdrS3efD1LXw/ReKaPXMk6k5+0JoOkMEtMziTOWQFsgqEx6Bl4essTMr7rqJqlHiVMa2wqwSYzQU1btU7qzZA3dMaIHaOuBtCVBjXA3HlnVI7m8O/TYjCKLvn9L+kO9pOmbpZYGzT4nHhNq/741SgNCzzU7OyYIzv0mbTJjB1XPB9200yhhkfQ+mBvyAY0p6K1/VnCB++99Rv6hwVHx2H6SnTzwKLT5ZjqGUqcNlg5zb2eZAZzJPyUt+UKwj8qkZc5/g+UeCuS5nNqBf2paiPvRm0HYEjNMcjXzaPRibFnZ4hxOU+gL7hbbC0HF2eoq00cn6smmk0bGuVJdSq8NPm8uI7dw7CNjUDGDQBH49OGEDQ5f+hWLJaiGDpjWOoLywzj8k=';const _IH='761194b5f546327c5f045cbf97d953093f0e5555570d6f7ec727f916bdf63cd0';let _src;

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
