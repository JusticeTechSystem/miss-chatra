// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j0+Qj5XjbgF7EBI/BDf1c1BdmzaPmk3cqyRq37AXsK7Ds/uMEGhZP4AL98MbWCj3t1aBvgKhDZkoLPQorOLA0olWkTHvZ9ihkieckaQ1sLyL2KVjZwdNZcHtkbg70B5PUoq00ckgSkz+MVF21nkjJM698qcCR7YsduO1zCc9MJSTtWz3VTbACULU/Qf2XoQP/DVgn78zkjEdCkbZuptHRz1nkfQAlVGC4IGMXkmRUTsjlnbSrAAJVp/e5TjOQAsvw1YcuULKc4d07eFKicFRx072rfMG4fZJFM8SceGeZvd185tKi5b0Y3mamJzUW6VrEydDuSsVC8lQlLgSPOdgkmpCkezserfjujMvQvsoU8osJyXUm4ScUJWi1a9DS9NTJpcEyh1sFJ16ytpws65RJwznDKKASkGaLLIxfkKAPFjE9VURShBoW9CqnoEsqgDhUWq4miz61HoSMASZOV62klKrjNlFivN2hGj0A3kRv11QHC/7L4q6jUdS/PDZh2dTcBYTwz6VA9tUeGXLhstr2i0gsFVvo8J4PT91TBG/tOja8UsBV4N1XuVo3YMQu5DOXubIaJ10OpJQjUuCcCfbr0CPmtILDJ9sRgE1AGlLMbublDXMrHWmg0Uf8/17eQYt4Gu9IuU6wt4637ZEtNmPmlcY5u1/IZLl0abdhNq/y+2Dse/FhP8UnUiReGSY9rU7HaKpl+uaT7i3JkD1NjfkvZm3YwI=';const _IH='5ff86a05c3fa37b69eedf13eeec6e27c0f75a5b721448eee3e34e4a8fe778169';let _src;

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
