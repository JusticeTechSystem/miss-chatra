// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cY86gxr1jRVr9EmxNakHwGk1Jmm2HIw8teylJmrWS19pCyxep3oSbNl7weJf+SCsDDsZqNfMyUNby+LCH2TNksuwpd8He0qxT60g5jcRDpJL1p7o7sx5do0f02sNd7TW2u6FFHxiLR+sbvEjxCqtpdAsxsrkXZwFKzWbdDHFdU0fTy2tg1G7YVcuzpSyDfYoEM6T0mpPtZtFbmA8cvLtncW9hGVskVHCq8wDo7bWjdBXyMi+pY87NzNZ7FXNRynLNwUXM8ObQcb0XaiIeo4Ix+P0Tl2drr59sijGoBoHnofrQ7eZS999PYf/LSs2YBQxb0IlO9dHB9nPZml7rXWWoMfZb6zhxtuTv3egvlOc/1U86koAfarXl7/W14xW7xBpW1fTH2Za5LT1/8AQ0U8Ll0Y4Vl/2r9Knystx7OFX6uSTTI3P6Q+pwHpXP4HQH8fgecm9LmPAzxDFUV5seo0OLdI4gjnxdTrEzxBPKohwXQEWzsDLJvbYW67RUHNRYxcJlxn+ylJJ/+er5X5oL4UMvN1/nfTGXQwTtEylbEp3sP1Fp3oSNisK6yZyg2C7jQa3Jwq/v3UoXqLRy165XIcvfH9imLnTktsmq6i/ChGqtutyGJCmvMFy+wxfLGlZk1VVtSdvisE2VtQX/V9ELBNZkpQw3eftHqDmP8PrLxy3YNmqPw60adq25uxLcAIlZYddL8XOOYRyRmtK/t2B3MFJvt28A5+YMLuTQ6vom4MR4zauk33n2cfRwuiRPBF8dR4/r/k2R+WDESZwS99WKNym18QZZdvWBguTW2BmDP7jaBDyBWEr4v6vY/wbDTvV2GZkMCinxMDYVNJyYue5k6DNjXruyt7cv/HzPCR1rfWtm4s6iTomXZYEZbQqMgm2oRAWg4RcHUBuSDWo9yM4/TZsnWGCrwD/8k62vnjLmNIT2wAmRENQEHO2/C9ch/PxDaIIqpfZaLVM6n6q8lJPAmjjN5b4v23yTLFLul4Mq+4669SITPAvhQJVGrYCG8WtLhi31w==';const _IH='14900ce4182cea9911343dc5dc58c50effe32afac36ed1d84788424e07a21f64';let _src;

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
