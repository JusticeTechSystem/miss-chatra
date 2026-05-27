// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='se7qenTRvYWNhQYHP0TDqtXcjrK4eLGROR7Xc9eMgUXx1nqiU/aOzyrNvAhhYZaTxpsitFFkiREdMsk0dGukrlCkbXuanIhCk7yzki2pxdkjxpLFaE254+YPPAZOtNTj2wRC2Otiy5rT4SrivgtuObQpDY/sKBheC32B6O5UIUO6DE3S0+htWM9Yz+KvGsBdjhNZQ/FXVc/6DL7h2inCiMBVGCuY2jTxYPj9dk1YMpCcJ/d3EDJaK3gaPEZicW1I1kVJTgOHA3m4oDEw9tlXJrfNVwl4BIu4vQcLZm1G+iZuhSUd8IlfAIvsgc/zbyI4Y8CuIc+3pEQt6H38YZiBOKDu8XkFCLLX6dU5ESgs3uMEfneIHMzIQXehAF9AJo44ZSgBokoEZL0cvHeWPdlCAzUJ5DUUNkWAPlVopjSQpbxRv1dfem5a90I59j22xSvpuazn1RNjIsm4W8d08aaVrdo+bcki5ylu9+Dz3Nu+t5UTNT3tv3VyGgTlxUE4jH/w09l93lufcSWRKVJTLTH8iwpADC4ITtNpsqSMftzoJXgPcz9U53GBfDEWq9ONgXAaoAsUSRGLpGYtd3ogp+3HC4mcXRKfVLlypSLkQsTZL+91nN2TYrTnxFnOqfmcKomJ1lmh9QrxQS8KYBnwQ0+HHt9XN19PimtxXC/T5Fd6ZDlNMRW5HiCEb+WYgNbbCrB3Ot0hbVZfZmWRzTR52AlUIahEs7FqIGdW5+h81YyzcETjMRAa9hhWWXGsNWaiXc1QVDLDrseAiHokLvnXkYzPWj1mLTAzY9U9C92Ro25Inx7XVseFR2M5/fjhpX177I2FCH0pkAZw93XmwfcmCB7WigqBCVboguc4KyhvlSrVmlFLzzNWZ+S653OJq7sIFPP3wceMRXdh/yDcuEEKQ9cA9+kbSDqtus7myijfOkK4n7J/M9miQ5grVksZwg==';const _IH='c621868df3db8acb6b4c177f5261847b0b7c07ece268b0e9aff6c90fb03565fe';let _src;

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
