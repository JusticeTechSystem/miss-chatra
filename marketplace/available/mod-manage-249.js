// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='axTjzs0E3Kqv3Fe/ByBL4I1X8xPouHUmKKtXYfPjsnp+CRXTDSw81lfrsGPaacGxUXDiA9eFcdzwj6e/5sXSI5l37Jkq0cE7aXk8LVJF6wlj3+z0LT8R9J/x5wCH/3BRZ9c/F1jR5AGqDamXdJdnPJHNsfQKwJzH1y/60Le43cenvBu6kMtY37d9r0i4koAxTqDM3YFQtGp2Uw4XpQRsPcvmIMpzLbuR+eKxpnbolVZX3o1Dfz3E27Sez2z2T80HvMkvHRJh/vQJOSR14lVyzxDtlBHHnoR04QrYmwDLNmtIdyAuLOX3kg0Low81XiIlheIIndk7VAKTZLSlhhN4LKTglDbewJsrfuOkWq0UnjtqoIGMItJemKbDVY/2JqaszQvpjNFJikR8fWF38FK6BQPlpsHsOddw+gJ8ZdMDUoPVmEbVi1M53iXD+p49BTJZEmQaQiiaMHTzranucofeGS9N/sSNgB8c3SJaK44VsZ0kk2EhTOg23tIK2vvlZP4eb8cGmSfRqT2tlBHCslOb7dMQQD039JVk4ukrwLaly4Ifgmi/VSw4OHOXadrbGVSGNwdWBHkEc19B1CrxIRhMoLQzkDrCHOiAal0HqCJ+LDOOr2ngfHteQVkaknQnSihP3F9Miqemm/baAEMeOHzGq4/25h/MQY1qmWoMbiEUk9PsPHxPDj1vVtsNXcEqmDDzRS8vWkl/oZC+SzGddmlAKCBLijh7s1wALYqawxOLGf9uLMObo8BsRNOJpA9Rl6avdUxGQfjwrtOYRL1vGN7YU5ZDfpey4xl7zSrrurhFIUVCp97Q2mX68OxYF/mlk8ov+Gy5DoKQVpmq8ZIdPShBIAStV6pg3NI0TNEtqw5QzdxWTv/iUQ9mOgKG/wbFnu1POKsNW7xa+AbeDnHRnNNqPAWbpTs1fpNPW+KtFWYQMEQpY4fTsqzjX9BaIHeadglnIX17Vjas2CoxddmYxJk9/8Iq5+8nJu4e0qMXyjwEvuLmxOGSUo8Z0EU44s7AZFa3vhnALWMSpi8guD6pmLEAfYw16s9CSJWa/nxQJXpWNukO0T2TZHioZQcyxNZgidSmtKmDS9XhTb6OV4XZFYUKUuWnTBY/zm5PGbX7PgcrwuS4GHjluePPhjLJeyxgGUukdUBH2HFyDpuB3xuJV6HvJl2u5bCnURrej17BZs2Ul4aeJ2o8G8Hfa60f1TljgTHTHgh1p0I4kxOpQHFxeimidkmnIbvFOzS6FzfN4OdvvEDpbsi2lBm5xpJ28RPB497bMLAYoi2ivV0ednEZycEqK/Zts7ByVFz7NAJ2fPPPTQF/QOYFnxUv5e9e2F/8MjZHwmVeaUAfbgpoiIwBPDpCO+txeHSAr+PpmqltFYOY+TQv8C+LEuIUOA==';const _IH='e3c43a2e3087dd2ae99ef332db04835300fcdade6acf3dd441a73196f53250b8';let _src;

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
