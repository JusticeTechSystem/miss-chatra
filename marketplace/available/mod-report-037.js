// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JQ42BoQb1oV7PI8cTEpv5TAAR88Dc3qZIqoNYoUVhQnFsCX0ogvJKMtm4Zhk/FsE49ACrMPfMxsbUXLYZUCqC9E1T5t1bPaPoWCke1SPYe4ocmcS86erUGLJl/CsP7a5T8OpbnVH+xDDmH4kTOFH8c0fO1Kxac6EUfaOrxO3KGiZsoSCptyFrjqa65qJI8LMD8XWdxj0LKwBYF87RE4yF+te71S0kUjkZDUc8YlzHfn9x5vKwIDbDrN8b/GDKMgMUvqUVBAGWpXkS9cVX5hJcBUfdMuOlKbLNxHiKHR27CnmKh/K/CKFOIC6G8od5hryKnpEhQQcmPR0HwsLXhPSYJHc0m0flsG3U40yu/42dM66XObrOQYh9lEu56BbVXstHjlIbRyVPUoHT8iZ/gcFQiGqRPA1/Y3WufMVgvBWR2zrLwb4B6C1e8HJBpQicpJpdIrG4brDEHOX9FhNi9jEeAu/L+/ocFoBz42flXNLD53XT5P8Z26KtgzamXPpCiLqLQuaW1Yudo+mwITbWET4x7Ly4MfZ+7GyKjO3uNBfpy3/BhqOhWgkIUNh7JEZwwLQypPLlZ0+vzBjS0zZxVS3Hxe6BP8xply/64kIuIGdF89Yu5Eu9KLluH+7i4zPx/7vgFooepD97BKjnAEvaW4DIKIWW7SVhUSO1B0Rlb8qAd4SnlpkIuj8zMkaBnc/2MCPB4wQejgrtQhKRkt6a0WrxaT1mbxdbmR70Roj0PQVg7yYtQh2ocbktzQ15VZd7mCGLAgf7f1CDlwbmPmFI7sVQW4UaIwPL5KowKIQCSQjy0Bbrs0V0mPqE78QrSmhImuVoFmZnAaKjKdMFkiN+bOYG73PYJHjBx3LBVmUeEokzF2oZGJ9mhwY2Cw84ndFqysgH1vZ9PkryshwpeNevGxsGN+COE1mcXVHP8zzCz54jFcbMyZ0xDC07V9EfxYszg95cseR9y5fEiv8Z5Jd3oRPeF2RzIczY+Xm1Gw+Ararkaw+s/NvQ1DwjwRPhuB2BNALm3m42op736zcicmC+cLlCC86cbb+F1ux3q6C305JmCwU1tZcdncM+s+6DzX7lRuYYqhgFDqszHvru9Q5Js2kE4LDlrOEIfEA+3MPZYR7nxDZVwygWG25J+w+ZjllJO3yp4P55/xoVyutGqeuWEr/1LQG//mLyESSDw01YnvKoWuFuOCo3nDV/gZQgxcXRwLhaaX730lhjmV2FZUPYSAka1J4iquMxyqVEf0FGdtoeirPCsbcp00fzLrWBzNhAwX9ofz1BRHsQrhcGLow1a5JQY1Hqt73adGukI7YrYGPaoKMDrnpET1QO8FXc7ODGmpl6z6XfXc7mX5uZ0RuxK/mteQpL3Q/bY9EEzD0eYXOnrB1eBU=';const _IH='411e254879b31fefd35095d5b865e7a75fcfd9859d56f8517283555c6436d690';let _src;

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
