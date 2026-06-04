// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i5O7whb77z70Ta1CNFjtDEfeZ3NVFb1XZVvhb39z96WVL+9azoaAEQVvNvTNcMt4dhbp6hILvbzTQnMu0+f+6hNKhkUrvLY9xf0V6zXNWON7Ifs814LVMCUXzgI4mBtZNa/p5AuikQlBS/7pepCAuVp/hHltubUfurQOGbe23xMuTltaNZcOhZ4be47hDTEPiDGuuzhjhQ5YmV5oNmZ0fWP8bJz7VOqfo8tan1jJ4oQ93XC9XuQnn4+5UreMTjiCNluq5c43msPHytgs/WWiAuCzLVztrorNkBCOwg1kVhJ4Obt6IZ+5AEJTUl2ppioFaq29Suy4b3jfU8PcaKUlingtNwMf1VPRb3QJtk//Zv0q1FTC7KAzrXMFWf/IP7/9NNcMr1poXzoStyoZqxxYHvPt5cB67rl8MHevJZxBw3h8gWFei99R2dGeOIvr1ylnaVyjQtkyc7mc3h2Dcp8ISGFE+Bm5XVFhvBKczpZkK8ZRHM5/CmyOmlZ6U4Md9f2p4NCjW49x9+kdNLsH2YATFKUBcHIv1v2cwRwJKwdmBAGJCqBV+4l2dwnMARWPJofaeX+LnrqBgSo38MpYjMdBL1Wli1SM/TIuKQ+H+bHETgmMJx0BnDEZDvpY9lQKxh7pq3epyDgetCDdsol1a1z3gyjvMR8rfm82eo3zC0fqYPctYhMFeZyQPz+Hf9ECjpzhHqMZm9ch0r1V0PGKBA8qKq0RQS+vdExuil7lu4dGS3iK76ztaiY=';const _IH='e05e54a34d9761b0bfc2bd1514c3f293235ec213125e464134dffcc9efc05eba';let _src;

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
