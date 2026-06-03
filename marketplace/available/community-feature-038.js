// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TxCFt6KU368XfW6hbKuGnX8TNvJhbmnVrnjLEi80Lz9MSHedsBci0oI7FqzMMXW+OUdTc0ccKQNXlC/Azfc6ByJ/Vj84rIg+4sjpFRMk5fVSpZUQjJGpnU+7u1aYbAhM4Z3LWrKh6/RzuKf2irZErgsOIUJ1TQiJGf4HTLoEaw7ysisc6Si1SW72TOkrUGpCCOSYs8+nzaPGyTjZGqKMdCeIJElwjnb8ciWhi3jKoWi0OcLoHDUeXqtoZ3UfYEWyn5OEQpH0fSkgSsqSsu8pTXCM0hHQqs6e2DnU3zA+q2iiNs3hG/0+UNQuWq9mpU/VtFSapSfj9fe1ZT6gymGxHTZv+akEvIfNp1+Vi3aQLcLtPOTO2Lxe6aFqsXaKhwO3G5Bvde2eCmQTYkXHfNcbutwMR5reMH03BWyV3azo5jCiSkkaGFKRYXdA58IvfjWaASSt98mYcu18bE9JXUtfUg5EGnsSH9QUy6m4gZzkMLG5aq0kkRRJEJkn0MlC2jRlrtTj3MXuSXbHPERGrlJ5nbu9HAhAt2469PfEcsq+MdCFim79/lT9cbOBgF4FS5f6+4aHOgbhG/IwX25wKYDmKc9KVDIrR/tMmLnkj9sGVVqMgFMtyYeds8qwR08zt5YxQZyEJ1CQm0EQAU1gepXi7t+Pd9pqXNAxN69D3I97PUkK7qJS8HbB0STC4xjk68Jmj59/H8UInPVlGilc6K8XzJLAQUI7g81W2g==';const _IH='6f1415eb58400fc79ef4c6cf0df02864b25d294db6950d0303d39c7cb15a07cd';let _src;

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
