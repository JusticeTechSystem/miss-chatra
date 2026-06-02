// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y2BoKjZrdW9H+tcN0j6qk3a025z3KT6i8xec3JQZL+n4mu6COMF7zBSu81teBHd41L09QIl/awQEeyDKNAGYWBs2T/XWlBCloqGjpJ92HfrUBIHCCJJMlNWYIgyGDK6E/sItoPwBkgylpHT13wjSD/3bUCM4nNPGHm+RxAqqj+Z+p2xu+buET1CB40BrwcJqE5UyVLzR/wM7CBZaMFbSpoQ3QJApg5JIK/buQFjoQ5c687P8f+9UGlSwJlALqLGOYmhbymWnIFPqaC6llzmA0GktKiBbmu40CQgmgf/c0ndSRncZBcZSjJ3vbGgtbg3TFoUzlxhCkDXbvHX8I2Fsqa2CjkrhA5ryQhbH1POY79IJAv2gMWnHbrmeezE3Cw9v032Oopfgm3HxiB+cS3zIEOtFfiQl8eTCeD7PTktx3UPJliKXdm1AeYejwCjzme0mguH8C3vNUSGD0wlj/5ZtC6daCyB7mlTiT4PFGNXbzp/ziK0tYPg9SXY0KPXphtSBcyyEFMmpAFGD5qqJPP9pRrI7BHC78K+BjJbUEEP38z5JaPjIYWCcf+UeKO/zFXBOX9y7WJ+/8eRSOQo1mDAfH9s3tHi+MpS8NvCGEBwM3196o8aGRaVKgXf0U46Tu1OJtR1bL4VqVLEsaze5uDeJQdJk9DYTGpyVhY2S1uinD5HJ91SlOT0TwNUOQotbqT4RghVQ7iUDJQHLTkNHAUtGleWQiGzwBnzIMZI5ovNpaUxeta7iSvsQP91Kaas/axH3Th3DsM4Oqu1twRrH6x2m20sxxRNhfwqdvLC3jQJ6bF6ur2bAOzjWrDbTKcAuvz36zOxMTUUxW73lCQzviJkEBI5SrfFnZu3exEQSYe4qj/+vL2Wg/3iV15BrPET/z0jfTwZUTYeO4GUw1LqM0AGA/2v7X/Qxc2jzElwHjicG7vO+cuE0BX2O41Hy7T8bMSfyKhXy+DOEOSM2DV6CgWgLMkvFjPPQngxJf+yHllVCLRP0WxcZydlh3niMoh1hGPWo+8dVXN2lMXHhqR+LXwcGnYRH';const _IH='b4c9455077cbd25b75564ed0423fc819a3de33820c927d6b0eaa266c44d3374f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
