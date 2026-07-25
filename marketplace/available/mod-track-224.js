// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEbFNwk4TDrAfgKcsAAENgaGEy85nedZjeJY/3Iu1mbzj0C59garLpVWYAm1Kw34MhhtUh7MW8sHmkX+3PgHSJp86n0vKiYxSeqVpW7rLQXWRp4RUMSteIRaJuoDZUaAYC7l1xTE4R9wJfedrkTGAJOXphZDSMvqiMUpVks7rwXkHtOXytkHTg1wHArPnfCer2FNfUFHLjYQZjvfzSJQ7ClASPlvk77sDS8y76rzY90Jvg/eKUPVFSkhi/mG2noVzRuRe3fcds+xdW+HzxvJAUVCJ3dm7fhiLQp9dX43Ymt6TUCoVYjQWOwoXwzGBwd2uLp510wJ9bLP0rOIqvxpsKkgpzhnJ0HEWKiSbRn33rXSZl1eQv5vbLaWPjeFnHNvGn2aulFBDH9qVRwSNhOHVbC/PcpKBBUd9upisIcqJJZTr/KS5F2fApY7QR8gi0LhSm8YsnwNcSRb7SRJrt1eH2P0OswO0g7Ke0IfUNg+UbcphvQHRIyTMLI2EQPDEA61C7zVVabrni4pserIGW6fIvv+dEMs7U05SzvC8CN6mma02CRMJfAkWVeziR+BntuRRGOD+yU/imnmz/g63/2zN3A0MhkPAxeNt3BTqt597Qa7FTkaYFR03JEzcW2eKmw2mqsg+37eYX8DFDA3tnPaImE5NlX0TdJ7WRiep5ksxPmUbLyjrn2hmBFFZNeX8MPyzO+nCpigifKbNyoa5uG3CKrdyEd4y6WdeRhPXM/qFGXI3ZrNfu+1bEImomdg1oC/oydy8/jh9uRPFq4shsFFh5AgJMZXps2UwxpGCjaeCL6FjlWr2GTRMbEYEx1bSLBMhFwg/c5Vl40R97izxjBgzHUcP3z1PsR4mvGiGz8mo1ZiI3IIZvDe431t6hz3pIJ8TeU4iCzGkEcnplDMGbF4IAu4k9pL8YY0cVIE+qXlVS9TGSsYVR9XC2fVaPnDwxfSNYuvA6UnJkNaNlrBLuqXrZagNToD7WonLiqK0TQKMEP+WLxMb5Rt6SznvUuDcoaDCHaeNaR6uoILfPt9qTnNWGVIJhgnZjhzh73JSF8augvMzw2ey1DlxmIU+H3PfFYpbajbNO0CXO2770IMRdKGPHFp7hCT+DeQ0Pwx355oJz44mLSSF9Dca+98asuL31VK1mqwYlF0U1Ac869J+5lxnT8jszy1HeOlZvFxGhFj7iTmFHDv204QiKqAZkmDUOyigaLYmqzKnScthjrh/e4O5mAOZEVPFQpaQcEfjnahRlIaaInzxPbsAyfy449lU3BRI7Rxc/gzNfprKypf4Q/jNoup61HdrIM6e+R4uL3VN5nwdqdkl2plZc9Lvn+fE+hVAG151H1/P8ulRDBSWeT99UDpnVBjRi5G5HUvwNSVA=';const _IH='d7115d10415014d92ba4a0a6b6fd6e2fb03b9284fd4cf9c0a7469f518c58f0cc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
