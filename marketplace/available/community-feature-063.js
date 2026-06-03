// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FhY/GKNNLP3Dcf7o/x8Wl3KKFXOmo+xlpJHBwl1lf2VjqI9i1ThgcxXj4erWofGZGx/W4sbrMTi6G0q12b+fXhj+mUnXV7+IKXrHckaJlZRuLLDR/j1gi3Kh2rzdCf/ShE7iwzPX65pA6lzkHzEAVYNaK4gKcRenv9H7IuIEFvmfVjleZe3x+wOMj/Z4aMhzhA/Hxulbs2AmYshsygZkbqZCS6QxX5FscuPdfbA3+kFA09fnkxT2mKMD5m691KEARV0dSZmX1t5Q8DF9LPzGnvHvQVJ996vOTC5r7/Qjt5ccNiMRRY2Zfjc4t2dfT5Q979d4mVFw4sJZu8rEmjfaKqcO8A8YsDa8zY5MJWUWMoZ6M4c25V4XA/Cv07QFFrEJOUKUX41B0M5hnRO/wd6+EzgX52AHCNg+tVb8VMBkMZxAu12LRDoHSDAbiGOdi1SFOnEn32c5Kd8ex+qJG/3QF9Ng1hGVVUHIHenfanN3epLP9temEYbEdxgurRoUK5gUMC+IVb9mqiBm4JpyCu6FFKZZyCS/FcUpvPwC6909WIf8lSeXjFa2tONGVM7Vdin/mSzl1oMEZkd5ZeI0Q37QMB9T3nj+853aXKqkIszBPsEvZcCJTzU38W+kqTn5xAyJDMGB+kT5vJr4KZYotoabVbQVQO20FJy+PryF9cPmbxeUlQ3Wcz1TVbYTSkNROavVNF4Jhf+8OQ3FRLnej4324sVeXdzqYw1a8A==';const _IH='ec7896f28b0da0bc0238ea39a64159bde3f45a48edcb2fccb8a1553ff2647928';let _src;

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
