// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/0+knjWjO2KyXtCRI6zNJupJ01d5Qv7TbbC0F7EvhLFW5MJqrTcHBGBAcRM0U2gk7tqkWD69B73O4t11hUYOS3pnR5pxn8UKJ1M35eMxmQuEkqoWNMoDhu6/WAwtAnl2vACv7CUnurmI68nP6Ve/C5FyLtSE5Dw67HY3IBQO7XiO0z3HirgR2zpOefVLChbZ3FWmoiBWrrGoGSSDTWOBKxsFT4Oh6pA75AKoDHhTr1hnylj/fWTKMp6fcc8Wi/YUs1/iNfzG7finB1Eb32pDA4+92PjUBG5mnWtWdD7c2Vu565nSAWu15HCBHaqEWkI3CtYwVBxpGkZ4uC412jpErc3SW2EiAZAF6LpRzYi88eYTwAEofKgq6JTDZlel+o5VRAbU/mlEHheJssvOst5TfsnU7gTfB2V9j6f/s1UpALUMIDUeM0EFMVOWy5/2msvNl467hGESd1WLcCCby2hUghVkQKc/RC5D4gaWAgzIub8crfyEn4YS0FdX1H8jzI9yiiofyI0t4g1ujRZQMTDlXLMMqkvYzMED2BHKK4G28JKiAWoR5PQQhhm4kPAaCmZhZoaYThisSIUToJSG0M9QxAguwE3uHN6nSXuaswDRuRNCi/VBRalU6A/M7jB1JR6toge1WZf8dd9WR2BrcMUgRz6uw6/LIXq+pYr2pJLOINsW3iGmkFqq0Yg4j4CWG2Spk5gdeX9OJ+Kyr8OVtCsmhJQT50Y+77zETVEfmpnl9vhjblc1JmJtNsCckCd9BqCtWknyNHew44UEBgZZnNLPVowcK70IgkWQr6wuvGtgDngb/wP5I0baQVfUjmhyK5j+dekycJMl6w+nuIMyD/mV2kqZW0JQv5jIzY6Z5gsQWivfMTwaPZaZYvHxB/OySEhi7EUDO5EjwNv09OQiX1veLdB9qZ66rLQvSFpSRqwRWitLFVE9K3BPABoBBNuQlABBi3lb/UPb81HBf2jlRueOj7d1/CsW0NrI64a047IAI9a0ElWBRShGjG7CvYq62Qbu7TG4hFnXOAgPYWeqWR5e/iOWi/b5zke2o5VED6zrM8y8HkslqQwHpUVzHi/3c4bL1TsWewi7RGbgAJ4OrmvOGdBmLJ8e8GFdgFkEBuX9ka2VTMGf/OUSAKnX3hW2Kjo0PtDgIIVSuHKDXrra91blhVjabxbgEQDVpzkUdKcd/EJlegmmyGjsUsJnkyGcqQ2SRh7cMMwOO4nV5q/nhwizNdf5NvPs9+1lm8EkC4enhG4BJwo3uiYOqboWNcaZ5gj2APNEYDaScyMw0/xJQoB+91IgasDMcdrTCdglwiyOViMoy8hPJUSXE3x4bbFnHFeOi/eCgyucMkKU51ihY5WPmUKGrUDr21tCmt+oUd4W';const _IH='c9cebfa6033740e6713c964f8bb60989a417c5099783ee5f72b36c36403e2d20';let _src;

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
