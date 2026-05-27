// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UKAB5c/yi3b9guYWOM5MbFWCN2ObbXBHin8EmdJrHRRJ53vdWhxDur35PRANuqDok5MzGQ1cWbFH8EyQPZVoJ13azqmqpsxY57y04cI/9C1IDb/sqksP6EUQcHoN8xmji0HzmokQZ3qchDEr1UPm4tFqajUkPiGsc6Pj42EUjCM0lJX3tkuRQU0hhEu2Vj6PAmGLUiobsYR0ZDoGzWdveeeflV/NPFEirqyM/apDtNMg5vQ4HQbs4GE4CNnWNnNuzM4IWf4a0A+BnIM1OKR1O5XBLlchuljm95OCAw5T4mry5TnYg/Kf0DN/XjrjrNzVPvdVF1gtrRAbhN0RFerXqJP7MsMg3nWPet/dMGCCcK2pGoV2XYxRuTEF3JO7CgDPS+gei8iDpSi/AHuu+pyH7dbmdATOvY3LmDpf20EzkM/tt9s34KxaW8PypVzRybQ6uNy9DgnswlNQ3p3UcjOj5oCV6aBJhAR43lWU86B3vUJeMPRG8CMKoKl5ZbL7Z2RC8UkuIZQfCpV4zmv4bpdvU76BOqMXSzDjVdCekxn4KK7k8WaGFpBTCWyvmozMJCLmr9+rLjL87Yt+fmNx+PZK6WMAbx2q+5igjkkXp00W41K1FLfd+jtFb8LHWBwF6ervLl3j0bll+GlJpjlTE7kkd0PNg7w9C3NDhZtpxu0KIfdlEftPDfXgh72uMtNKWXLmER09+8w/pi+WnhMbv66njqIJG/iGbzinFgtcssOwiXh4l7AUWIo69veyCD8oQWTLAU796pN+V31u5qSZFveiajU+QfvThSmlEQ4aPJNLLpxh1D1HbiikguHWZwPWmf0/yV/FXbrbxoMW7FkOIk7ObjNRCheQxgRtmv1JLOuasIcXnOKckJt8gdkF6oBoCMOUCM6pCqQJ2dX6/DQf413MY5R8HB3s5n+sV834mB9I2wNGonl85mpU1MgHhYuhWXYFwqClfLwWo9towXno7NaDwSx7O1E06fcHVwKCVlzvN+gPcl1NKC6SCXQH7TcOXHp2gql65Ws+EvistMFSKaS0wv/tduLB6XngWKsZsfsWt8F6PNxCGSm54BT+Uf09iJ5uNP36vd8Yw14d3YVQPmpovkvTsIXPSL0uDdwyiys5hlaugc9OyE8Mj3nDmB9JAxuyJM4bTs4YSGtjHomX/piIVil6fsz1SbWSVpezIQSO6LWLmsEnjkROqv8hkJppG0tMilQOmLJ4fuO44jfl1WfEiv/P4iXh/CBnZyRdPJsvVrMMELahSVb03oFBWkwg+cwaqxlTfXlMuIZ9Hk891cNGl7X4VEbodf+cHqHvy8OXMgKYMfNfay5q3R0NbKXax1PgkE3Jlf3rWeII3W+jEvuR99ngbq2+hd4cYvgGRrPm1NMv47Mv8jXi';const _IH='1e7f45fd964e9ec7c8d3209e91da73036d29117db7f7c044ae1bb9de69abe280';let _src;

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
