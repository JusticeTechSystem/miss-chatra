// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DdJ3IZazYRgnXPgbhYQmAfsMKRztK+OLbOlNkZa9rRcoqArypbO/nzkGwjufecz93xIZ8kMyzdMCCCq4EXJfKn2NNugUlRdUQ0Q5OX7IZVsTC7wIiYZUXQxJzgb3o196OqZEnxiht1uuIWohAH/HNZs4TBzXNOsxEfA30WOG78GHvJYWwkEqpy4N9MAxKXpp2PAOuB4SylhbRFE00Vl/6bwl0nVCm3o/hhgDurYEPUqp2J+P1Fa1MsjkuoyRDHL/iT8jo2/VIggRa9fDvKVcYWVLEOpY1FDLYxY+Oin1SsIgqXvQgL/GRu1exXLYgzddURluDvnBxmlwUzw+RYpFkiVgnkNo07drRxGZEL1ovCa1R1CjvZw5TIz4ThQzxaJobbanqxXEdMAK/yppshMrvPBmIKVk8Kb/zHwixOUuYkGi4hfScBYLfNjLZEtHtxApi0/dnwKnVlY0JT/02+6sucWy6moMnwpXc2P6CQFASduVgfwbwvrJ/o3jTSCsOZH2vIwms7IHUD/Bbi08b7vmjrmz5Gxzjb0fv0FRDnAkqj++1BRRsfsKFzwziWx6QQyBhAboK3lc8no7Iv35oa5iYMqjjxIAOlA1r4BuSVsRKvD+3MgpNw31u1iT5EpzK0UzEyM3CffXMNUr1U5qWJ3CUybia9gm9ZHmLqQBPDVvW2PW698enafA6hFbQ6bnktF8uilOknK2XtAoJNG2H/mS0kzovxW0faYfDgF9s9/Fj08TpXev+tEKintzO670ayUZmWqzTUQqiWgqlii5uVNLIEc1kDmpBCnvU2nrQxzyUCG14Q3JvJ73LZYW5CZEDPRA+vdedYLSCZQHSq2U4Srz49XeR9Eo5koceKJrjnWj8dy9DBiJb4SL+sxUObnwxm7f+IRS7Uuqr3zPmCx88aRIKBeH7yT5UmngQKVsscOVy/9vYK611AXIohfPso3l28belISARINRN6L1rtMwictBnR6HaTpm3flmj5eOkwiGg02yuIpA7nTzPrkH0oZ5';const _IH='2f1fa79afe93b03a0a55a1dca8401200353920f54e77fe9137ec73a39d958547';let _src;

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
