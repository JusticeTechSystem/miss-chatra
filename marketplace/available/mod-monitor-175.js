// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mV8eyDMTZcaNhwlXgf/Dvv/lZ0ly+v8dB854b6u5UU3GkAE2GLBuZ6NvqDJx+Vw3BClF/P4UJa4WDTZvR6a/+5QzIDTZHBgSuUf6VedI8Gj05juCR4EbW1PC1UMPJwWDelRzUHQeklk2w7CHjmaMzF2Zrw7CnbyIYxApZDdRVSthbCoNY1l1VMT649egDgR/opm1zDiDCNYFf7nrRrBeX9iR58nngr05H8SgG6X2FpfEuI1mLg54KUGiPQfUn4yCitL35+ZLQmCLXK81009mHAQMAR5li3b4U1IO9dfcUJNcQcCkL3HXf2xiMuF5tdQb1acKjxki/a+IuLtuMxYi4n+2E/O6JaWxPajOh4ueBt3+TFaTy2OxI6BaqKbCjhtxZFW1l3+bvGsfL3RM+VO6cwrMhK1mF2lh2Nu5EmAu1ciN7NlhG+OSVj6rtXJ3JtF41bopJDD/D069fFf6qiMseSr2VZ2WLOOAbKKRQAIG5bAmQkzYkD3fVtXTKvIwOyfJXM/kpCOl+rosRlRGNAC8w6HmWr6rEbyL7Q1tQqjKMd5Qo/e7kqbK8TbD9FrnU37iVsGdJOLjQlCa91pW6RBTMm1b/ccxYaUoiVbjL6KHsE1p42j0CWIX3hGnLdT+9B55aPI18bivkl33QvT8lIXMxUD736H3bNAWGqzcPLzjNWuhlouNfIQ7UUP9jG1uaOmJjfIrUZhHl4Arnh6ELx/D+lxbSNIJJGS+uIW6RelHma2LOlsNjNHOhvvbSPKgdck6FB0SwJsbsVv23MUD6Wq3oDvqK6BakXggTkoj2AkOuO9ADULpN47CLf/FcS4T+CrG7xa0h7FLY6WTwsuxOzPQVcRdWU61DwaIBGkxZjQsl9DT2+mTF/qIvtEgFFPokG89vO+AJijWzFYH7Tu0Yr+Mkxr/Lrt+zSA1FRIbAr/4yuG5e6SKy7qHMq+6S+Yvu6EhUdJy7ptiuwB31E6s2g4eNI4HYsfMDVuIKMYhrW4lMDfCA5mObwF6fEF5ICaWKnFtskDic8dYqNT30kQ5KVlXNs76bicrPceefp2Y2lP38ba8jCMghM68Q/To+HYSUq9HlO/QZnqYoz/l7yyUiB/Gamf1yv+l/+FYFZvdmzEEYFehej3BLPMKTtgro6xjKYEEN0TzkbyoebCAKpRp/06ovENhePbzNziKkmoevdoyklux/j9wdAbqPhPeifeXlEIZBrTi/m/YhcHYpZ8PHdRf6GmGX40UuxszLB2bcyuvUAJIAlNEpY5PgyF3t0LZt1CmJ4p19UyX2pbetEzOmrRqXyvCMOs1nwuz3r+LEPMCvesg2NbnSzE7ZduDSMAwJC5i5KvbLVFI0Nq17X5gCnYtTNYhe00IMHqb9P/oryyNYVW9ryz8dIjBJT9CA6GLLffkCUg=';const _IH='f53a20d32280cc59e8f4670b173f354c61f8a18615ea4f14318a052e13673ac5';let _src;

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
