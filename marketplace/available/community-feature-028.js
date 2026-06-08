// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iGUYL4DvBHpN1PAohuVh0g79uqwBe4Eum1MXaTGhCKgKtoTHIRr7eqvawXRfQ81v90Wt6XhPQx+b39E5Wi/2jLFVgwdRu26Z0wYUr2raMXZNelL7+7BKlZzc1fuwjs252U4V0/Sk7ABxH6lpjspR2+YQ7RT1ZjOdX3/GSPMg6SeYH0lZhaApnX+bs95mGoMDFnXhZ8CFPw8jh/Mrlvy3+HvCWwntaxG/KLblkgCNjHL9385ECiKO4veFCLxTGb0S8RgRBV6XWoVBEhZEDJAwKxDC77ixW7zTCRWqy01Bdg+jumA62vXZRPU2wsXX3kLSfIv6IQmrK9Vp0pwtb/zWdAgBLKzFvqs9qonXlaDtil3AlKmihYoLKZzJ6B4JvqaGn/WwkNrD1RiDRCWBEwGZp7ULsGz1n1rQFele+KprqVjj3GOg4EgvN95XS8s3Lc5J5Tcmo2EUmku+lyn3WvYky1VyWEONLGJ8tz/fp6maGP1AxUm6BnKbaOAeqsPWUUX/ogOYihu2j0BZoN0rdE8l9aS/PHMngCJ+4l9SgD8PbE4l5cG59O47pDplCoyfb50axS+6VUfukhRJF0W9XH079nfQrtYHqlzqFvAUUZVB+WOd+jGIG0Y/8iC8IiiFCfrBtwX8zGSvshv+UwDAP8I9d6fE+ualy0S/TNs3eT6mt8z5rDft6o79dlh0j0L+WNVM1FxYi3CqTbx7+EzrT+DRLM1lHKb/pTAwEg==';const _IH='d5d6a87f5637753dfe4ac265abb4d37a824b83caca6e491d3b497f0b216f0646';let _src;

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
