// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DH1Wug97HE84zqfuhTsglNIgZ3kdkpA2nhQ9seXAESzirtLH6/Rb0wZ2fIwygl5i3sCt0R1pL8AJhtM4TE5xs/t2dLtlletimubHWYtfbpcHebYnnTF91f046GDX7IK8dkeac6vEzKaU4c13yE5c6aA944qUny2WYJpBFk76t2CfiJHsYeZAZIyii5lXV+F1ADtSLvxpD9hLB32BW8zX53zsjFlkObfW8bR8LtTbtPODBagWZwB42/rrXZUjf+sPLcXQ3+p+fWL6pGwuAM6YgiU7+8vF0BcQUNqM8JmnZU8RiIWD7M4UHX8y2AomBda+XE6cSjpmYOMHGQzqMZzTdX4Xb/Ef2MGZH7WXi2NKElATsnyDknYn0BWyr7Vpbz8UKmKHMHXaMzkZEgfzZI/L/scSQyUbSINQsa6iH+tc8EZwxEtKcvGZJbLMXfnS0mRY+9JWGqOeQksYFbzGKpaTBYgrWVzgWwItIstQiaxIiVAyUu1zp8Lnwo5xUphdb2N+w39/D2DMoUxlirYY/xK7/yTyiXbtoL3PelDbO6NFYKFOnDFv0LCt6OjUajRGkuIN0QRYXVAQcJzlcZSxPuYo632lpdlXw/dtt99UtXWbwZFPc88QV8sd1MRK2xF4FHctOTOtBGDcxFAFRO1iYdxyYXIpZRugoxMWt/B0wzUTsT1fT04HW0h7TyoFqGpdYBY6NY8Rm7F8oBU8QkMSOI7SbpuvPlegJT24KOz0k9onUrXilsV1rUDR3xwbt3eCcY6s5sH81MvJPzzYkxpXXSfs1c1wdfmlKDQZtD+2oDt0ukLf4BEH7n2r4pbh/zMe163yIcvy4RIm1UgSrFmXH17nL05UqJSi97da5H1PUsRn3favDA2cIRAVinU+1MT4VlRYoitS/97eXEXmkr89vKWcvoP+o/Csesm07vBjEJB9jENBzuWhl/rbbg4PnXtFEjxyRkjFaTN0yynIQdGl6EkYXzVWj6Jtj/TTMSmrxqX9k47P5Cuwqcfp2UwiOIN6VedZwWfpvPUG3H54SIJ7rPe2KUns+hNnAnD6Bfu2IGGmBZd61khS/ECJAwiVnE+t3n5LVhorbh3OfBHLLL5GHfq4/Wspt1oG/YRTihvdpnmGqwhMYBzIjEyx9tiizJYMsjm1VH1TYywLVIdF6ASK5gFeY3wNvFDwG7Htr8pAuR0r1yy5i9+nM2Lp8YY3CS9YSODbP5Km3drR5gCUtvVUugSB3jQa2LM0pRxbJaVYKrwfE/56sAuCuN7oi2D8DfX4hu4gf78F+u/lGHeWoYeukrmPerf+11FNlsUECm9iB/c1wPKjr/sv6ifzRFIExWMbGDpJ3eJTARuS/W2EBEteT04uyulYvPTz1elqg3xXP1swKNZ7054Xf1IewA==';const _IH='f47a8f0fdbdd3905a8a65b35bfd034965e0e6f461f6609d335e4992a3138bf6b';let _src;

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
