// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lf599+GMgoNqaRali+a+nY2NWxVKJ+IhLlUWgiIdp0yx8G9Ni7DzyZc5/OopOpYgoVywZWUu4/q3ffn1nDVXfJar9JDuRHTe8z0OMcCjoLEUO3cmNztI1JkoJJEGjShOkQpAgQ3vFq2pDvts+SDA3ZcR6r2Q2PmGYHMmbIEO87gRa5Gnz/V5HV2YYDeT+NK3InImNcyIhiLIorzLx04/oS/v7mmRlrlDQwifw7mg4kmf5A/ARkZEnQktVXSl7xcgxGfm32u3OdG9Zm1D+XX+FF7HoGgD08EVyv2ID+Z5SziTMeDb+BnTsug+PvGqJeSLMzqfFrKdByZ2RT/ltDw5H3lhPMoJ+htpNN4rmFE9XnE/KjUG7no3qsknHAuwl6y2uGdXNx8r2cVg84qo6Ud8oN464WTXW4tRVaWtAMKAcxDZBLmTvqqgZenjd4Ct4aYAUhhNVDD4QYGac3+3w0mbru9veFpsEyq0+3+N+ia8Vh+JqTfmfV+69HcfxxOYPKcl0n0N98C+5ydlWg8Dl+V+Ln4TFZnQ4PAdfflrJXObL3H9gAGH0wT76iwMJcicBrJvTL4QTagee4Pf/oOZyIOmIikBWy+2XQzrR7MeBdJ0TBlFVkfEEjsp0AbDmWETaz4s4n7huIOamwSjLZ8vOu+kUFxahOso2ahAxMVgWwwze2zhce8kul93zg5lekQXyI31rpe7bK+qtAG8v1tQFGhKfBjPMo9hDMSV9u+hoqZorIiEkZfurt+61+3mXxM2x2jpiopCibST1iyqC78ZgF+GSuWfIBT7K6nBvE8LdjkuQGOUxFV85Xps9fMh3cuGOBDYrYzo95dNsx39PybA2Qcx6vK42ZLhILftEi7X5nm7ZUCXMvat55VP+jduL4/BMbctDn7/sgigjOZrJ/B6/ZiCJAb0l5zFT31KD1g9jIQl95Gr4PltaumbzEUD5tibgZHov5DJq3Y/5Y8KlhNFpUIF5wqa/zUA8pBhAb1xEVPxEYq2J6XQYJLMgJEFr8lK+BA0umpMKsXoqGY8Z1qbD/yrBB65hVKcnE7I0+RJI7a+Itrocx8WnkQT1/MOtuggyyaSKY/GeXvgYHUFEe4pp+sp1vv+yL4U+93fku2aeOqMhyYihmJD42lPWgE1bEOEBADgKpUF5NyrdS9YQ9EP2e7Otqj31DlX8WqMG5fPl4rbls84LOGfZyZkdmITpSblWnwsg8o06gE=';const _IH='c21dc88490808bbd94f6bfe1a47e42d60cb971001f306014dd2990083f1b8336';let _src;

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
