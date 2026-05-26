// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hYWMGqVc38U2S5QXK4W5fBWjcWlRk3cxCgjqDKcCAoDDwKyXVXMpkWbDJBk6tGFl/EoZd009sRLWSNZ61J2cYZD7FDS9ZfoB7lsR2Un3IwVXlabnY7PIqry9LdxlrPbVF2KppBC+cqP+8UkubeH4Ueo2xH8FfQOCKJYtEPNDlqxTwYSVp3JOS4VLvTV74m5Yrbr7DUJNmaWJI4Kdxmu9RRjOcagBiPHA5QICbBGrLd5euyU//oP5jJDJSIJXsD+Ccu6mBGWRiOND+aSdHYzw1YY9sSHwQbvWi5fj+WgmpjgxvIZDNjRTNlabrkix5geEgKX12PGEhXT5DQz+m+heiFrqUdbLtQuS9YmiOPv/NzmThM5qr0qdYmI45fmbj6eHdFuIBAuwqvYLrSLQS/J4JPz3fa9G5Cm1MW441wTesppncMme3bPmeyCvndomKmZUBoDuV/T1Rk9uImkDFuIp1/h7jPTYy1qONMa8FaNywHjYDG1FGCjsNY7UW5/yLuKgy7efpVFitNIl7zjtXfdeQNLi2KWFDlb0P1c0WtVyBIkq0ylaxdzvfaqNvngSwZNpn7lx3sWDD8xaRXnx5a5tGJ7K7St8MsETOPD+5KQnEQ0dVnzxhUX7D0y7cBF17JsFjvDqzSMISBZnkAx0okMqSUZpPSmKYg19ISkSEIkKWgnZu9wueSxYIY0FMhywR2e/F5G9ysiywirXTPJvfwIHeBenyoStWLGTcyCEwbCc0TRTPXxTa/AkCtdAVtW7+KbYKvie1HYv5Bg4/yTmxdgUhbsIkGRyBmc0GhnVJpgZpJ9DRtxImOgPCD7KufTurde828+Bh+OW9p9vWA+yaUX9ZlNZexBJqJDtGJIleWV2AnfnVwRVqj4FVPTixRLqcRWUEuPYnqtDNWkYCQGu7cewGfqzhUa07x85VCzlLAddTEz6MDntfjkrPG4eEow=';const _IH='6ec153e49bcf42309d9c742e0d632c2650b3b6e89a11c9281e79ef80160c6e6c';let _src;

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
