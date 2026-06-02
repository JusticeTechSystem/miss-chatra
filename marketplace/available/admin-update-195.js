// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UNxCNWkBC5fOP/OL8VJzfuPV1t6tnLryanjwEzdE3oz+MEbIyvHdBtE2S2Q58kjrBzs7rmlRfPMrdR4iUqomCoXPzVjOYy1HW3culcnXpkTcxAr2zT3M7j15/7adXqmFpOk+VMkLB4v1WxrKz0wmHB0EYaMWi+8Ot55iEk4ctoXSBhqOaQuTv1rqXrr8wxoUK79FXMtROwVlBY/RsrTuHbCIA2zKViO8cpUxvyncCbamryKXbSrBhzTGTXyx79EGNzGE0Wm0NJ7LfzLARaefsaNlESAGAurW/vYMjlpUD27NGeknAlYi6YmKt3V0otqifsWgv/1RaH3h9RtQwEIpJm7uYjEZ80lWeAlnwjex0jHRatw2Yi4zqacL1K5VsNrQQwaQ1iUofErQslbZKZ62W6UlsUJIKg4hg5eAgSPFkGcVWYVarNJNzDMBUw7ATUv1H9Ac6/NovQWow10nVZGAhcmRivhQUHG/PpZ9z9ufk0p+W1G9j5nLrdeFod8FXJZ5QArMmdXlbe+STm6qFS5IeUYvRchzFX9N5ah732A40wEIXaNB1t+Uxnl7IwSkW8TqufWJWsH3Gw58vhiPgRLSsFV/3MbdEzVh9ILYR8PS/5nqkYh7r4hqFdofiWl9jZXNMueR9/CpAGV6chB+/YFf9eDZtooUsCT0xee10CHVqT1fXGy7Ur9xa1A/kkvNQdIp0fBYZRVqUt0wIgd5LblR0sd4FcES7iez0n04/v1P7/7V54hfjDs69nTokBlau/63O27/spRQ7D/xVOYGV46hBPVG5b1V1vrIZJu+yx5gJgDKgHxlMxtVUHiS8jY2y4XlmxwfIoGDt8IKhShiae2gt6bBZzcuFJCQZ/j8wMrtgjEK5aob5sL2NzNQWYjcP2wHwrr/UJRe82G9iB3MxKrW5EQ5nArKSARfK1h4ztgnz5KR682QdQiD4W6mhyU89GkTfwphCdYaVV6PijLWoDJup+eBCfZtmRTBek4MH1rUKoLbuk8hRa/i5Xo0OjLmrnFnUg==';const _IH='2cc0f37427d70cf36b4457ec093d3445c1112066ad4dce20f7cce3eb77b2b109';let _src;

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
