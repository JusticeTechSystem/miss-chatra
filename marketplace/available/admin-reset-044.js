// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ykI9JjdoiSxtfwE6Pwbwpxzkelg+LaH0YVbkbTQsOOcQvuqxGo/r1gt/NM+JWNBMzH6to+dzZX5xB90zbD5oWPs0+e4lRtIwmvjwgKcvt6JVW7rf2OtmirjAPjQ2w0+cV5ukbPwLltbQTWDiP2eoYuW7GDk7VnQ2bs/9kvLdFJgFE6Knu+bB83NgUSQEvRi2rKMB63LEKQ1/KP3EiFBrMR6ig2keBPsJYy6Mr+qZ/lHZr7R61IELju8OpGpTJDPYCHVg3CFRLmz4Hsg4YsE5Wccd4GLfBmKnMM3bb3gcF2BHah9IDU0pMXaR1dw/pTM6hd9UUDvHULb0jq2FL1wDmCYQUV/s6aL9+Nnc/Sx3WxJrtYdOxnZYUbVOZJz2xttwggyC0UI/zQ97VK09muvb4CHmtWvPTNwHnEY604JucSUgx2YSYa4kVwTRuEcYASrCPyJEi4vm9yuS2HVYji/IfKCjCn+H/7s8RdSpQTgr8tNTLKWrqMdr7WhHrPYteYQujRDAhenVj6NERNmUxiP7fvNBeSDFdsNhA3IXPBjvDRFsfbjWNqBPw2VAFNHRur+XnNb1I8nBsp2ScN3/m/+NSi2iKrz9726R/dGgeHQOELySbRe9/7vvgJykHcY0wOl2cTYrxX/fGjiKZkYY6W+M/36AWG+PD7kz5gcihxaGPUhaxK6d2XIu8kJypF+MfhlVPEjffRtb7JlTrtWbs0GNuSgPKrbb4khc5LedJnOkGB9MLwgYk8Xua+1jO7jvSg5Tys9qgTlVyHuggVs9V3A9SereFopaN516FnzQptFByzUf0ABr6nB66mqz6tohvIDt+E2e7RbhQyzfQzSKL28Fu1hyOnE0uyeUg+gQ1XJorzUvO3klbqwGHB1dVrMIIPdhgModfdC6R3iSVLFaTizeHFrAtGwv0wWX1gApg2XaV/FkX5Shk8wcB4H6m/EfT1r7HUIIUPWt/y46xQC1/Tc0lCFYPTyEGVFj73PMxkqfMEh1Ykx9nFI=';const _IH='cf4b8692cc3a12b04d154626a96570641a743b37e3680bd1f047ca5268587a62';let _src;

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
