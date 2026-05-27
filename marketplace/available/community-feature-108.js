// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DIZx+2+U5sElfQaWbsJzYTZbePxMmM1A3jkmOZZUBk+ZH7HVkv2SWOT+d5X6V1Tq/2XUp5wlXNqF04eHNc3hg1csmUdIVDHu4f1vzlKHDnKl6tQh+PFQEuWupwzPArd1K3tWDGMJrz3X9rkOk4+YffoiMHedsdUfh6Gjqz7xZR03QwDe7rsMfOZExOsSatXMErNbyFZhlhEt5u1gdN4B//knrFbDh4xwDrDbkXhPqQAT/69XDMGDzIcDVf0Q1BykeBCVtsW0uOCF2z+ytj+Lr1nfpILtBaHExDCv4JYKf2nqn/dAL5fZnYQQ6HWNMwZVyw8fFyu5MLPkn3fHdcvvM8rrtuOGyqa66xi4gaXTCjF1yY2fRjQypv0K3nREe8nocYhThWBZCCRF7mTNJlHHMSaKxmFIJgw+Wd8+J7AehRiqJZ8OLqd+bvjBlMpVOo+Ie+UPqkqnfUiPVm4bQZGc2xlrkKTvYAe8Tuz8jx89W8lNrfII7BQdX5eZ1rd+8YebuvtJjBgR4pClrotUzpTr72xlsrtMve+8pwvBVOxNPmWbOJCf4tv6Bs3nIhSbEyQVvqFGZevYmdglkwvApegGoTf48CM4QzDtFtnY/n/8KeSbCUCW/j1Aoq9GBze5X2/D+WPb9yGDFEQTkrCmI5TwD3aAuL4Ql9UYijlbPggiydZK4oVdL6/2nGk2X7x/jgF3JjBA9Yx2jqICUWDzQW8VbP5d35m3YKtxr1yZNXw=';const _IH='df71b285ad36f425a27920b546b59044f503b1e4d29826daff377b60a2642000';let _src;

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
