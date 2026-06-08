// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Phg7cFmjZx0LrPLiPNSw7WN/fO7kq55AXYDA8pt2TKXVFw9UlqWd1x/Vdq7IpsGTyDEfl+/R2O+TFOjloNmbB314f2ljDoSxL3QhQuT3ymQ7izyehT/+V/59ncwDC9yx6txdUh4RFxtlJFvVGBHYlRrBiG0SGu2BoVvdYMD2ZPKYu943GeQ9NtBD9K9D0HgqeL6JrisrHID3JqZxuoYPOEeg8SQBH0hWt6g2/RTr0AyjYBH6UffUlDrNXbF1TGZzgqs/5JGytoFwcZnsFbIIACHYvq6cuU50K2RckDVtvT8arbI8kSVi/XT4b68a96Ztit1jsZdvdBZxzXF14hUZnmTBgCV8VdoFJhT3cJ+D7BuU/4VKvn89h8PN7ZYe3ngV+PiNj3VkTq6QCKQuqYAdPbaHa8nBb5NFe1VvJK9mEVcnUH0r9nbCd5cLGZxJdw6zSU6E+xucbhA1Ha8G8Zr82XqAcbmqTrMzGaPIQeSFH9MP0znLoC/XC0kNLQB9h1NDQdz8yjNm1+9I+0CmkAewM9dYTCRuHU+UPruErzWEVGIypHSIWKrTq6QA6u5GXTsgEV4lHK0og/z0iLHp82fbwCBYjvIh0yxCjCZH9xspEHlDIhW4fUVPvzhL/UY8B8i7A7jTBlIBDw4elMmeNNfl6Z+AXeEGO5c4A1pS7xquIHQgPQnvD1USmJ/wvzU5YQwagcLT';const _IH='e72ac27e561e0ee959a7925bfa0f39b0dfdb0d4c0f9b88b54acba8da2b8dc338';let _src;

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
