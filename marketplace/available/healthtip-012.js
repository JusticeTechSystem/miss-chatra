// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jg/fOTyf8fguBkqwBDDK43o6VbsJWebT+a7CjZWqGV+BRPeIzH9zcTaX2uZmw47yycrJFNaktUZmq2K6c/WF1J4deVOsQieBIYh1p3+YTnlr8aw7fwJyx9SCWTsNqlOm69GeYXoxQIII2PgbQDc6YshXcgay/WvKFI7nIzSAUjZhr0jV8+KhrJpn9G/yKKRDvFJG53WCSCHY9cQxeqbNp1/D1FLR9OzHlCBiLPWmxyBedAKVeMpbMxys7l6VM1fLgLN9Y9d/yOhgcM3dbRD0HYCJmIq8hiP2iQeKKnko2xTvb7F+Sofe+Zafwtdwrj+w/MRKff8FrWVHrPHFoG6L03C9Lnncrae4scJ87PM/Ho+fq7shlILM9OubDWZlmqb4qlVZx1o7d6qIU7ChBVhEspR2jX6TEpjggutgASyHDNT1O2utTFlGJKLLEappNAMV5V6YQObc+CX7eYmFifEPaNiLR7/gNhHNB/491L2JInBgiiHYLL8tRs54Zuhz2taKXp+Knzfd+YBzKg0DiD4t7iacR8Dsq8+1MbuGDBpAkUA4Sp+NR6hav7BGqtbBcT5z3+HtqjRWpx+MDwh8h9/rLXU1BYRzB2/CkvC57i0o1WtFnigRW2pmZWFq3GTUUDovLXRf7ZNl3GKs4NBTc4kBhmkWf2hgUx6h7xyiXqrgQsyd8riPVUoWr7A2A9JojfDfWVxqG8tbi1LyR1xALzHG1Pvaonkq1MBQF4YmcyTUoPEVeq1VIiFdzqcxPJFoiuWtp8B4UbDs8Q2/Or0cGVc8fZsObyLY+dJ6ZchyTMKcxnuv+uc5NR9ZWw93fXqtFONkbXIvkTAKehTTUHhLg9KZo5Z2GzS70DSKzhuy7IUpIVf6YNA2XqrrKzSzBTjIWRsjSzQI2a8sAGrurEOMq7aRoEISXSGouFZIm74puoodG6FwjIZXNB4R8+VDEoY=';const _IH='ecfe2d6f4a52b5a8c27a5ad8f545fbd47e723c307b5daa2f428c26a4c50942db';let _src;

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
