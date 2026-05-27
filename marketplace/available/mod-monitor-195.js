// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JwIOGkjJWMaaafCtEgbOTlfSRrl3xMycORpbnDB3TAyoC0dSq8zb9lk9HCXBlYc500cgfp1ImikEz8I6maTaIXDYsR0GsLbGUi6ULTneCu7nGGxT4IUu+xzWse9H8qGDjnduHDfHlRSmXIVSWersgbcnAsxqZATOMvlH/sR8VoKZjyLQuz12A8tHbXq4WDpqcZB5UufNFfq2yvw7MksiXrav9BUnjBJzxwBfsWOCPGyX+ukRZM5bcjs2/bxgJFEBCfcpFcbV7YYEQ6LYFQKV643uw1K+eZHDgm9hGa/uX7Hz0TbpEETy3yaJPbqPgvWY3ZMzr2NrRHHSnLRMsUZjV6TiDXYoQacf3lH0P3ikTEAP1JMVxQIgGVQUH7HOgczLAKkQaxtOSVZ1SDjaPqYXDZcXyIFkLYDRDn4doV8VVMphF7zNDqF2XRExtjB8w4OSWBkRtmKr/O5gugjOaSj2r/QcYxnmDIIZEVQy2ecxnjKtbomPbn0t6iaCbt0oJ16g3kpVNmTxA0vO7FXdZ1AumG5CjqBJ/nIlUW6cTVaOKoKLAWQbx152MbKOgEENMafesQinnPXj/vGZbB+3IGMYCen92i810Fm1ZXWXGAPlicq+0gUa+MkiSlulZ6MPmsxGLae9tC39i868NlF4GZ17DtLkGJzgjAVr2fRW2idRMZjXmdel79YCpAV6c8snszgNeKQy5eRvnu06CyJJtv76TTcsmD3Hi2poC7W1p0R5W71Q/AOg3BlFLBWNcHRsJTEqnalqJG3gFd8dc2bCFxvMbLlfL6su1gY/zaacDjuYG3vxIdWCevXLbBD/v3zSBpDRkP1SWi6ZjTMbIIe0SYxhn6G728lFvPsPd8kD3RESR8M33SshM+ERjDHHu9YeiB2kJHBMTD8dmuWLAeeuSg1380cYYntx01vC6pbhm7OIon6CNAtVtLTXKM5iGhlx/55QKyhBv63K/BjqU9Iqmnuol1HHQ+X0VsjClHVG5m61Dqxj1rRhy2MU10SAB8lX0fDG7KnKDwmgQmjXvL+pvlL/Q0M87tuebnPTvEZpwLUpWFniAh73GPyQgpu/3kYTg2wqhruLMRS5m2m9GzhnV3d9mJJtl1IgmxzNZenCNaLgAxjB8/0hpTQz4bxx34lDhdIkL10UFYPrEgOvnGgW4wmlAcCOh/3geGknW1M4mWA6vITUr+VhKl+twSYxORoMWOsFLTPXXbZlD+o3Fai5fUqoonvSqB7cFk2fK9+XMqn6TlkO+xd6Tgqygk2Sg2iw+/A2k57JrUa3k+gI1pD+oecn8eXL3ZH1GQEO7KmAp5+BO579JyWPfKGOqSKyP95tZpyqTpkzqFotuB4OfIHf2l0KKj2aODY6/L7Pk+7yadjv3j9SDtHcvBJWg/k293K4lTWcGtI=';const _IH='bed6187ba7c61f419a654545bdc4cacf32b8c490bbd3069430f0e90718292852';let _src;

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
