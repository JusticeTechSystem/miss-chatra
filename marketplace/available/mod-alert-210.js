// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS35SSStxREEzSscxyyVSJghR8TRpOjSchHGbGHT4v2N/dMnCsj7ALqsS0SWbRJ/hHhsRd7GA2h3wDy3Buml1/wGll/O6WUh2Y9iIX+pni01RxafqnJnca5iCAKy7bjlyWAgox65zKcnFAPWtKB4HqoTijdoI8iWdcwkba5r66B1ZriZ0AmsUCIs0te8FgbT0yjJanEgApeu8j9wRBkpp0kVOgGVq3FnBjiEcwtAe7s/ogzZVQXsGjMYQAIN80voYjYiZXufHHrgcPAhc36BvG2W8ptsiwjfWKX7A/adq2vD49xZqqQMSFfuvkP5JrlFqkS+dzOqMFUFf0iBbzutmtgokFIQs3vy04vpogW9kHUbz482LEmjSZMNw+k1bFXznLd8e2nh0gp++SQa7CTLOZSlQu428XuomtnMEb2ZWgf/9bUVEfKw0JemI2lF+xHp8AVfgqxzloKxxlq0q1AL727sgMHUcm5X+QFCYHFMmrA1dy0XEEuAoJqCTNuNmGrmsCRPLbxv8PogXZlo8tgKkPGst1HA0h1ehtWdWxAfRNh/08w+6c49r6trEq5Kp8lWFyZGgaMrVhy9+e2iEA/uQTkK63xcb1xgpk9ZpYBVmmUSZUSqbIyoAVihacfy9VaRbtSp4fquTdQsAQZxD86ETijUAjy0nnMOp+RbKI3Oe4iG2VPU49GSW2DKXzNyoBYWRjU4hxlsui9w8JG6GRdKtcMFFqmF5Tmim6hoOi2dS8JS9BcFcnqsD7qUIMBdKrtle6F2fKbhHf2T+cZh0N+2YYy1rTKZVQX7Sv21lBUS3kV72mHNOyjkZYj0rW6b3rBQVCr5oey1Ks1bb1bNIE3deEzUquZBkXdHroX1TYPBiEQH2nMR+eYnIncGT/ivz4KDdkmLNaDK2LtSdKjcDgOU/uJ5cT8Slykefv1m0Lcue2mHRNR1f+3o4dL4V8ox7a0YXumk9MyTiObFD7P5m7Xve43qz+cp9+muPkgDf81TmOLNXMWsHdezZq/O8YW0hLsicAaVCjj327IKhRHhN1bSu73VpQdY7Tm07+ecg/9LYXqepawaWrSURx9hnNsTlbWpLiRoK+myUWdaWbjruNVrZRGmiQZzTaMQPhxeTwpXZ7fDJs8otH2VxRB2anXM06+r4mlJydb81S5k1SOsqnGtkFT2LYy2Ccb4D7A+AbcCGIX3GvOf8szWY9ING3X7OL44GBXvzrKiPwlJZlKZZ9+gOt1kL76uUFeJQWDLNMuvPfoKmxcgykMy1cwrJ5tAgKkWnkS+moN6cmCxHrM8qHkVZqh1aGuuPMNJ6TfJWI+3LelBB6GtGGm/3rvnNB0FXcGgDsjaSxn8KtJjaovwnlCU6bRItamtQ4N9rLD+5EZwc0=';const _IH='e871ddfbf95dfb8f49c0a4889bfad8d1736f42a7132340bb9ef541793cd57f2d';let _src;

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
