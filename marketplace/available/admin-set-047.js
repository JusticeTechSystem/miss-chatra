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
  const _b64='/FDnP1fYybLS/I2BCGTacjmrcPI32e4I4g8C1GOzEFAoWocv4Jsby/Lg6Uat1+1YjPBjv/7cq/qlcIc8Jw69JduJUoICTjub2vSK6x/I0Ung2P4wvgnGjYcSF9gBBwCGHAWanVBXON00j9R85q9HdHaay8xtepSOxF8Aw0olM3WFXmtfwwmvzxYvHBklwZaTRE4Jrh9vxwKWs+2mPbJ+qVJxSI+VyIZEYWqQoOa1SWoqKL7VuF479QahgHm4XLUlbLYycNuXYXBNMKTGvPVbMdSbC8pr8e8dQ9pUglxWJG7w+8tCCnQXx/l7L2iZrYo4Bc52QtjtwSvBPbjyZ829w7TYqoaR8pC58eNLXMTJ8o3laiLl1ua0PLLVXy8n0FoShAGFkHsUZaooj8PC8FE2t8PDNlgClO+2tmTRVPm6JGWo1gxx+xh5iDPCT4U5Lcn7SfqaWN1g4ic52AltwAG1AQuxN7KYzn3ymYCz0pZRIvAvDkka0AL441hLVVRTl2ljCEQti2aOzWkFB7cCSBFzLucBdhzhjf4YFmXjY0Y/e4fWhBi5L8sIy0c7JObvQSqdmHDUuXdQXMcJcoDFMQ1auMIT8qkMonboIBKrTCCK/7I9W2P6v4GOvpT3OajwzKOYj5UmJneASmVR1E4+Xey2Uf/AkRjwqlN3bQBVulrgagPmcDhQ+LC4866Xhn3WxAssgVEygpl2XcPi5fiI3sVk+az9H5vLcMvb7bOjtaNl3O3AVWKQKULjeqDs6NF+JYa72nylmwYC388uQ4VnUIGk77vrkHk+IzPw0B5SM6cuWfWvKz8TjhyaouTeR/+ZuvIjno2hq5c3fOdCMQqoiBYaWBVuNKrXGLmhO0XfOpqe0OFPR2MNDQbeoDb41GRUSQOI9+3oRNQGK9dYPDqc0iNM2NnvxAAmDrLnxd7SWA4znPqf92qZF0A0kNFWlr7rttQ0SDbg9cqrUMNSAQybkoa9yPUyATKXEzrm';const _IH='3f3a387c61c49fbda4c5f35ad9faf8a336471823702abda0f5ee14fae80ee833';let _src;

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
