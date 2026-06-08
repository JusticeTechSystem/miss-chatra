// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mAF7YA8QESo/Ock4dksOhm23mE3Jv8c4o84HnXQIvvFQsy6Sl4L1lUGHfVR1Rt+mVN8SmkSPdLMqNy2oKNnTWRZN3Mx6b/CpTm8Ao3Jwn+XfEHBEwaTTxVJWbXHEcpJX7fTSs6Q8SQfDCCFRCC2rpFhR+EyvjJjPVEFASAIyUTU/jPruucVpYE2k4nffdNjvq1I/oxz2hDXd3qO58gVoXeOStkSNX82MhD3OlixNGF2fOOVRDQnpBg0gNxbPIR4XUmADnJfOyAqgGC6NhR7pVybLPUwtUmCaPgZrAq9FDpVVn65UKT5RhH8LIalWs61FLQlRXHiDQWRtskM+xXnh8X6KYCfUCf2EoepAKwIMyxiKkSekVPcmAkh6w1d1ZQpQ74CAIhdi/pKZNHpzpQLDwcZxIUax4eBtoKe3kx/HR2UscHLA/5v9H6jxGqf05Iwc6wY3jir3MoBaVSILxjHeBoiwKxa5SM3aNHAxz63vFXLvDZp8vXMhRnqNuaB3cW0uDxgM3cnDe0eE3hHc6oLhSfHz++tTGgCsAWh+BdTAROKHbfUspeObHUZtLUIcS71Tb8a2hu2ou3NSstQho8xVY4vIOjWHTu1/j27vA2ZwMye3RwpUlC4wqo/9oQOmaVc6yf6imoqV3muWdfpkrjIMtApRJI7ThQUdTGfDnULTW4xXIfwSDStdzM+eGuHNGBGVnk6Iqgon3zkyiPt7vhVjELC5nq44ShiI0ZFqwuhQu5h5SuzdHzmralHKHhZEFKgocSdWQAXwKXneUhyiPDIcZ9lFyGaeLNJ6obStky0vWT7iLngvC4s5b8qqjtzEs+AK/HW+0qFrr4p7RUhubqZMbF/hmqufBd5mIBCZauvCk8slsibS9cUOUXsfkvOZDrcgbcCBShA2xtA6CUJ4Lv+Oqt26Dkp5VYgQv8X4V2/5fp6qA6GlDL+IPyUJZfJpjpEwHvb9HVYvM5VKs0QGEigTISqo+GGfr3MoNpUwMgViNYA6cYrkIM6+9d1yvcDuPImLyMUpIZQ85LmTV3piWKyreTtsbH3PaF2tuOb2rFbJcZbVvQGvJyp+W7f+et8K0XuWx8Vv/yPqsZJ1E1CeP5GFIDo4hLw7a5tQfbTT8/WgcpcdLwumtFwdWZOYHWM8frwV1DB2PJPYv4WZuNsIcbZJWwm9cyisHxPosllYnlu0afQIVpeylVbhwMq5A5Jn6NEHrvSOJNUQgDpjJ2TqqDP1FdAyRpKW9FuJ74l/iWiGc0NB/BNkpBXI23xqW0GazlOCI9DFmZ9DQG5QiLwh9pnswjW91fbvmhb2m9YOKQiOlOSOCVSbZP0nDzehzVjStpQtK1K7edGdG8mEaXZyBWgOY6ZatRLslCKAX4RkpzGO';const _IH='84541a42b5ca9d6ea460f759a4b1b486dda89f674ef9bb3a0fb3a53bed963ea6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
