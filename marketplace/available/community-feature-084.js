// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PGZuZrYhtRa3+ZHFhR2kSB8Nv3jLKmGljF7L9YJVBthxl63BMIT1UmtC1fP5No7gpCf2gjtGQGbGuebFl9+tGj4xbsEOBNvQFEB612c9ykv/EkNgQydiafWkkQmmnfQiKY/CML8ezeVwjrHMZzcWpQleVaHgrNypWlEDy2jqenNbN/Nrn9PAU/rL59bl968ftg9gr27ABZA9fpo7su4G4AgZo26kYd1u+qCLCtDOfLdWiVca6LmURrth8hHRIZ745k2jYRhlo5z5Cyb/wNmWD24Zfhpwi5e5LOA/9I67kFofcgWjQjjeDVFwST/DEHz7BlI6Lk+stCZAlHkIMZrkTIZp9l6tQ9ry3WT2O8KKPzXKhKtYKOHNtddjEyODC8JireiosgotbU2brOfeJkUA6DCTYz+QbAMrgIcR7e/I8nJIi+wQQlJBTLostRlhCLx3IhuRTvRLl9ww9jseycRoQlpgInMvgpVJDWIxZ5C8ChzzfEW4uM9uoOxd50i0Z3lc7NIXNFBoFsX9JxcVxirKaXT6THhScqw/z2uLQRAz+N5xhlOc1Xwg52YRNMc1tAtlhi+eYfigad42ws8oApxUXuOBAS3oIXqUK0YtuFEQIGmKOnBYI2dI2SaMkKG0g+ZdXGhFf/KV4tUa0ZYEm6S8bdykmCTehsjgsMcEWGQfp9aJAkp9NBUhqPoerG02eJVemRbcsbLL+1OSm60pI0iCQJzADJcI6WF+C+6fWZGOkMbtMA==';const _IH='8d15fca6291005fdd89447a2b02f09ca74c811e7f85d7978048a85ee2c8e8556';let _src;

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
