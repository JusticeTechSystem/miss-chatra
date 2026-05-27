// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IBOVbG7dm5HC35HtQFtDy/1pA0MTwf0dS33AjARgXwJhcR9JX10mwhEDEUJVv8cFJS4Z/Ty4lWhNhWIwYfdVVpB28S59sBJDBQpD3lcwQ3kPDtrnwlHMNVp202jreO3t3zjTp6oWRETFBJFWSheTwZUr+qWqSSsSGa8IZyYl8eNlo1OqI1aPdXDwmU9OURV4G6g+0iqlYWDb1pRzJhakUYk5S+J9kNb/qtMaeyxrSzgKr+MjHnKIO/IorBoxOEHaW/CxRCcPyBAPajUe5RL1a1+L6NPnwMcM8DRclsD6KZ+q5RpOC1PFCf+DvpFkkrTwi8jeqGCSayW4Fd6iIvp0VsCs5jMhvKcC1US5j0wgDsBhzwycz3qHJayYmAPoTvtjaZwWMSEvBMEakin30swRiKkCn0GSMtvWa7rt/ZNRhOb5JYyCdAWlI40TcH5iOA4FcjZXb3GVfq+mlkx5kBuroZxyeCbfS+0LLjdsZHlDFyL3+gOKEPZliJycMo0SkkKWdU9VL9L9Mi5rZaIOl90nTdd2l+ZX5DXvtmfs2FJWCp+8eIbpj1RA3DFm1DKySYtr4+if7ApJqURKsFR8e7SHZbhoRjrb/Ey/u/YVTpqOXUMGUO3G0pBQ6TSKKRpKtEwm7CJ71vraPtRInI246R5C1wR3ONARghKJeYG1dzC5LZ8U+8CaOjQxHlj6oKt3OtIUuSuD3L6beDEd71XqftZvmFE1DA0S2smkDw==';const _IH='bc83222371d8699d3a41e852ce0f9e10821b29a0415028722feb4052f26d1528';let _src;

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
