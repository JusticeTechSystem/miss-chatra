// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Trtcd/teqiA9f2ZvNIpZt+G1ejNkBzUspHdCldK5/+jEmcSnwopcOMK1qaMZx72yDoYCYvn9pGdLJtIBChkBhu1WMfrLdsMjlTj2LKOwcwIYHGvIJTa7Yc41n50xDUsRAsdep2HDB1xDw0H0UjwdNKNVXwJxfSLquSW6zvXFJRiGKYRA2bSU/QFnlL4S5SsBo/YK3VMc/zidnOwt8d5DwVHD32sp2V4CEN1a3o2YWtQ1Z7KkWa5gFdj/W6eiqViNSPekrmkpYKf/TlhRmz2qItGWPvSMtL6VBVfN22M7g/cRftUgum4pkCPrAiobSU/6VUIIXx7bkydBmpbU6HcouHm2i7vKYVxsklRTz4kxYdBLOXHChOw8BN/idMuPUYw1dooW6EBEX2GsoHASqzYWfKqPjl3EcLaAXTYFmapJzNPgEvY8p1zhzZA69SbZrG0KIelSNy3F2gg4o8jr2xWEmhGqzq5F5NTBMjs7ngi7a5scxlEzjEuYDnJiGyOkn8c4h6Pw5ojmIB6FsojvamiSrCWl13lnwZf6VGFAkYaRidnote5mEnDw5sBwnkT4MLNbpgG6DQHVhDDfy+ref5Yg3/O+IRNrfOvq8qVvPmWPlwGK7KRFeW/vsobeY0Gh0UsgwgFOdfpJnZtVbNUt+/Fim6igTxMrfH+93PxdyOMqf8p3n3lKIgq8NgpxkPvtrTAM8b2yTi0kzp2fMb9/3Rl72elyHBw=';const _IH='16d7c36ffae9cdeeaaee7d902a6dc36691bde226865f9ce1b294d150a414f282';let _src;

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
