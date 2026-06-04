// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C+DKRpu/yR9IUzMvFWxLbxnD5ah/uPwc7WQrKxDdmG1VCt9pXtJvcuehj8Br8zIFscpv1e97xFBTAldot7ezmPW1cwPeUywYf0S35PoElKKSFfJSUsjHLuj0xgSUC05dng0wf90esja+7QSLyWAjY+Mcs7Q8sXuC3kSxT2Od7GhdIXDEHBYtWsKl2k+oLjmNHxSDgB5YUaTeVypI3dpVP7W2DmU+FB31RPRAoBpS5kbnwPeaTtofIzfYYU6bFa3LcbCZm4SUgxsHMF4I1LMcsXQBYn3oi0wPOVXQ9AIFhErlzH2jsZL1l9ywGDLdy82rNiAmJ6PjC+L0i/hiG43bIb/wIXcfbKAWPct+GanGM6i9E7XaiMdZXfG6hluaGweuTT++rINKgl9RO9oE7wMyKkkRieMRtW3yNUPSPMMUagPnzWfP6Z6Wlk2TiKc1Uh5plbUixE1fZND1sZ+MwlTrquQWRLZoxyfKVjtPEVjImipxQfs5lR2yVeQ+kDJC4x4+swKkDS/aFO3YADItgHz/+y3CYLjex644T1ViBwHfSknOFkCcDmMwrgAPpFgNo4I6AXO5s9j0+jOOShaRQoXP0DS+nJq902RqKCw4rB3DA5fng91hq1kI7iSPCN8KaMGp4tBt6/lHO1B8bSbattT/8KjyH2KNnwi/CENxBlEWXPwf8k8xiviQClHtMViXdhRTcfloZ0SDVgnnCekbxcqU/MTULiyYv0iTOuJykUyuYj/w2x6SC1RSIWQzV1/7lqpj4YxKbi4bQckZWbK39dEf5PWJHSF9zf6n8Z7DSiSLSPfSJPGUvEGlTAvN2XM/Gvu6Q/uYt8YBVG8LDOuf9tTLzvvTJBcMFuuk0uyswzcRuGRd8LrltTpXhLvebKLYt2uMMrvg+CI2grCF4N0LrZgwbc42RP36iA9DGXoksn73HmdLFqTcsXcp7x25xvvJgUPM35glH6k8XStvfIk53sMOenE8YwFAO9E35tbg5O0PSHu7mdKXVVH+E5SSdudE0vsJua3NwO6J/SLofC1rRCOKQsXFGOyZtOi3hWw14UQODky1e8AHNtVBB/SLC6YWpR7D7Z4uL0RRraeR8GXZVSxFsITRoaUPnHWeX7FwBickfIsEy6cfeG/JwrDLexOxxWUPnSkZKUr96oGsqUfoo7mwaqayANZzZ/hz/kJfrmTxz6OMwC+Az27BWCfzHXo75RNrYMOSKSQ2vKfXPkGwsyqlw+4qEpbr20XTj9gynN0LJmlLXA7iLsZH7J5s/fo2twcIQtTCXSPexovAd5XL26Hrd8I9WSBkaXgIdrpTU9AoxW7TWTkHS1B1reEAUEG/lFuN';const _IH='0eac649ad80a7b910b6e31e0b8ac809201ee2a0a2c175c59ae00b3ae147f5a40';let _src;

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
