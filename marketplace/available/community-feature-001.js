// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tRCPan1CvAHsbCBXdkHXYYtAMh2mBtOyVz+kL9umErw7kewJIhaz9WQObOgmO+WL1WQtr7XEBBxrns9w/0M19Csyao57WIMpQYobplfklJ+PGRxeEMVZxWiYDZtw+n0uFhnAMIV78uVsea2HbGPFAX99mXHQ6P8iLcJEDG9xhST7p0L3C5dKPXFLcoZ+kM0k2zYEz6dtusdGBGTlnonRhaKXRyXSRBGk4L3VDoHVElsuBSufEXMm7t88yv17oCWpjVVUck70SZ3/cViStouMa2CpY2M+yveQ1vyXLxxvau7HRp5/dX5Jnpu//RUVc4K1IWAqlLdzMUiTUZIhmkJOd0tgRPWiE6f1VnzUSBrzRps3mIJbGWvD3mYlpFKX66g6hfnx4wf0eTRLsuvZ15tnv2FD/JrwmQ7aaCE9RtW/Rc75uaRtfWDD2sugPxDE1qwp6ULou8RTdk7ZwdmT2nxSe9HBarK7n7BvpsxIE3BbSMNnS7yD+rQ34PQuPlabFYBhN4q7Vzd9NnMm0LE46glu4ephiD1SoE4Ne+JE6VPrFgiCAgKR+ZWP9z5A8Q7S79uiEUM3yKSAkivBKXAd65zCSx8eWxJR6bE3Vtn+fJWqyaE/KjYedeMmEs11hZ9KuowrmZPtV8zwyzdNsrb685fO1BlGrc5HHwEnrg4WZvpqRQyvJKQqOdp/ooeySBDIlAtNIEGti3Si5Q6Lr3T885f+aw==';const _IH='1552807e352cac52848098b2d89c45aa12f84d7b9378e36601c6b8d362301c67';let _src;

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
