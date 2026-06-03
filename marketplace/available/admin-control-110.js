// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nyyDgQerMa5vztBS54D7T6WYqBQJ9tgIaPR71xMWRS9vb2fysnWFityGbYak6dWfSwYF4zz77A8jHOb2l2kFgK6BhhxQykXLaS6thdiec/KGoul6eMqGulUSlzOiRPyusj9hbN3vbSL//tMhXM0K5vn/elLvsie9zbP6O7qffivtnq9Qdxkv7INkmvNN4sjGzGL89zP/x0Ju41IQzP4cmwF1uhsbXXWxm4p0mYNcn9JB/OuGzooqidk7vM4Mjg3m6mWk2VP9CAiQNzR6UhuyLsyJPvEQYjUj6m+EWVqX1cn5C5xgKsKaJRp2cyYTXdLil4XML8vhemeBSF8yShMQSpgsI+xLAupeZ1w7LhwzGeO9QCVFN1NoXVReexNMGVTSe/zAwj43lBkQTjqSxH/QbVgtz/b41nQ2BGK3lW5zVHdQl4QEA/l1mIURM1lgaBtMMePdETZs6bqy73Ooqzw0rTPjJbUpLM0bhz3zm2aPLSnFm4l9fxLvTxaAXzMsB3jYNjFVbl70zKPuEY+3txeL91HIqairaRK344HN2VREQMxbnJuFxPj5zCbUzH2xUWQQitvf3CG8/iGMAxC2lYjJhwzoV5oDwwtJ4u/h/aFRtIMOEXQ5cA49iY5d390TBb6vRNzHV8jP5fk58VmQl6oCPcC4uCQjjOHsaINAqsV9N1GQ8KSeq2d3dAVfqTns66C+k+yZxK0M22ulmfChPRmDWWdTlyEn2QvqueW93hZdwooqpKvcjtPTULqyh/dcNj1Y2F/riEx+0yJN5L5Q0KJZxnHxmtbxv1HLFKqTz9zNo9YOo63oa6NKWerTaiXt9SeNIDthh7AAa8YKKDgxc8kuMJVLuP/IGfb/cDN9TzdRqjJkjseUuL550C4dY8g8gSdR/3BaKG8QjkZDasg8vBGeVdldTOyJL+hfYqi7G1MIYShOoYRA8uLziF3bsQ/2YlWfkvwP98lK3SiYHTR9eE0w2D6BlCRhUhBoEaLE2GzbOkp/WFuzFTED37QV6K9Oj4nUwiMw3U3xgyg=';const _IH='61b8c92e9c98967c3fb85e3516399f036b5c610c2b41a22516e66f6dfab74568';let _src;

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
