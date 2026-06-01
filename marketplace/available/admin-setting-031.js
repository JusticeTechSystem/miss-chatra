// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9+xCgzo53DonJnnfNzvI6WMwwCBUkhyQCtuw+rBIXLCE9hjL/U6pojW62Sic7mxBqU+o+EoHe2FI5sDJO4TCY4fdF+lJtV5KgZX/ldzDEDCTqiKPLKuU0uxqF4G/Twt23iU/Q+9XGMM3Vpr/UB+trtdc/CxguYUb/E5pEHElVrR96pALowdytPE/or4Prq1mdoa1DEhuhtFpTWYtmGQECXfWug5A1UFoREy+7WceCIrmZhYMYviJPv4veYXlN8ea/griSFUXJFa0oka+mOvakle0O2aj+wdEJVD4XAh82tyWqQs4pdfGe2hJeyQ7acZxywopDMvlkrYzd6WE1erVmfFPed0KzS/bDLr95HF+H4tOKPTRpZs245Jj0+UcQv0wxzJz5Iu8hopstKtOekOmxCKPWjC3Nxgl1pJLXL3KQDm/vs2CFStBRcJQNxHLcMGN+2jCwUaqY3ub1rmvoD/J0+SZgP7+43owIvCBJjik75CqT4RK7nXfIlVuvuRoSxDjwCSY7itcI23u0csMIlZ5wtQtKKE00pkBZiGD85dcGwqtkA+0yx1U1NHr7PZe/pNx5rlYrKJDBTttx5eFo+O4OtD+OdvfXXcCfbEoXAdIi18iGJTJDtrd8F3fJt7VaZjXGxEF5Z7jr3jw61/fS4UW2S7nClgvaKG8jhOmjXdDU0y4pg6ew9C9fCtGkszwfaIaimEPOujB3yLJXdndXo8I8142WF4yGwC7nM88KCmmnoogy3scC53fYNuVjNCwSmDS0M0MBgQAlsDoHqKxFPWwq0PkZABGry443o3dYU4OJkXqvWU2PmbIjTrzjkZn2BqK8jcz6g+lvBLV4tEP4VZ/5f7sRlZ1Y/ZwIa0NRjVrpM0+r+pd5EHgAUYVaJH4us+wCgh2aYl7P4G/TtYSn4YWIwH2sL2Toex0clJJmdS9IpfqvdY4dnT/rK4dT/M//qzXSE0sObcAqsdFi4bWGiIawffsvc5pIhm50Ps5Hju/lJijyvcky5xpRq+Fs4JlM9961Vbk1E=';const _IH='500eed994b9aca1124f1740aa27ce975c843fe2fa67c71ff3c96d72743302085';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
