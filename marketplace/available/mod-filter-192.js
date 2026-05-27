// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SHJlnNwweplQegOAKpah/yBgwJvVCCGImhNsEyvjOhdSK1R/wv0c27KaxmPTf2Xg+jsOyMxQ1ZyJHDgN34rW/XzJOM/J/7WSTd+YJHNW2CKO6KJAtQELaaa8arpF9XirgN5HMNNm5hPpqfwxCp9bqXzc6z7LRVUlAkFU4E9fI2F8zS0S46cSDL94w0XPlJZbr2+9+mjKpNCRSQ3ZxfgoiSaJGNHWbExbwhYI5cZeovSX2j3HpSWLa4nEH+0suZO2ATOoe3fThUQcnPqFsIKNnW2DFPDS4S6fxKe4bo+WNFc3GBP5rPLxhhVBOlL82mYLw/P8/vBTR7ZBXO+XY9kIZLTYN+t6VvnXcEemEb8Q35yxvNg9UHKxMqNw43qkZfl4RXJQUdSnAgS29qeiXmJhaa4kpFeJGWVEZXPdG3rjkpqJMnGP1wN3xNNIan9jGF+aTUPJX7lFMev3bEkeysSlVCPENponn/Yq8p54N/qVxthMdR0GH+7V7w3+BqUvZ47ypEVY8otAidYP3ipyIfnV9uK2K4GEOcH95/RJxo3PeRPby37iUsBTBg9481QjMUtqcLu1i/937zuX2rkt+QjkUbm66Fgt3zF2FfzoOzHVnsIbyVk488JvLgcn8SIemy1vyKjPSnbcBz6uQ2RrK+W5x1DJ68I7m8//zGUrurb4BarWj68j/CJsZS016SOy5fHEtLDYsE5G37eIw73XXG1AWz3kN3B+7+sN/PZPYFoqqEW4038+jic9TRshXPCtyG3m3uvI35lDil4BNzCvGEwtIKfIttl+1e9cge4yJOipdwECqUHBpzxaMurcqH2tuF415Qhdj1Z8qxwxPGieYT8zDyrBtgkep4haRQgjkinAPfNBTPioR39Mw5puk2Ikf4vsSdHEcEsWRIDNInifk/l11IGO0tRs8rNBXq3jsDI/FBUOrchoK/Vp6+0rI9atAUtKn6xM1lF0Jerex+r/MutCcouibdNxFBkI5upMsuyAaaalo9wJ62D4haZOQ2AuZ61H2h4yTDwmtAAARmWuAGweHg91uqqIVrtQ7bAnLd9599znB499ZD6sP2Js1bYlbPpQ+aLfNEfp2aJbHPmQlGkdEUlvF9PrR4ER4xaAmHqz2Unoveyk8jDP8D/UTA7xgF38d2WiKG659MblvC+zEtC5N71tylOeREkPWxJQfeffVIMdS2SgIWVzeqFguVM1fVxQdZX7O+KVszgvdjVnhI67SAlvAeZYoAvBqsC2HEDEFM+mEbXzhD3lbpahn5W2AKpHXu8Wo5o+bfsSZkqGz4AtIGVJny7rlxeBfX8KJ1puXZr/RINkUPP8BZoTWtmJWflPxnyJNqXebMLHwDHRvAohyncTmzQdbi784GqINXliu74fTrmwyqaUrA==';const _IH='4d6ba951d32caa4cd556df40fad20f99bd317377fdf29543328ec923d6f4c6d2';let _src;

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
