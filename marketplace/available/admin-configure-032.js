// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBxuXY0Mih4tiHj8ol/RqZKgGiKLpICm1iiPmfDVLMrZQ2j6KW3yBCdRXmYTIwgWgch9Fh+mvUU8KB59qs9gZbWHSEBWd6n2esKtH2uV2gGwrWX84QM5vd00c29AHs/3SzFUutrxMLE59M4oEoTnCs6FRUCEckBT/iLxFfKGRzYVNkUVCW/Foey5UNY93K4YqO45xLahpR0X9lWKksWW/rPEz9/BtV5AY/37tqXD+IxtHs/Q3GGVyQphBn3wyhlN0gkWQumU0zZdIqw/ZFbaVw2bKy89CtijB8pB0G01cVTPzGAHAdogNpAUrtjg8G9AeB/l7mctN+MEACBcp1FHJZ1shACbuaV8TgV7TvQbP8b5FwbWEd1OrAQ+K81BmqoesYmvy3rmnVBWKwnkzD4AN302FXV/XJgqLlhNAD2mvZvfk5PAdt/HMSBPKaB/UU9pfeJcmnhhMKiQr6z8fKIuHMinhEugN51WO8l3WXrDTTPTnP4c4mYCbrHhhj9Il1Ex43zAsvOo3JNLelGTu1/ppVV6cQoF7ZdazdUpqiKsljDRhFklICw6+o74Hxf035ubR9gvLx2TAxrYnPJFt+1zLWDTC+CYSMfFNpEJcik1vbT5FF7gcJHqsxnUo/mYi6noP1GyytCoE9AaUA36Xm/VowYREfcmHtJ3qnptJVdEO0nbYVvkwtdwGUFmqKZwXPpKgNo1Ogqx3FMlf6BPqRYC3SEBeJoOiuTeY4iAIGgeLNJgjhh2QnHAOeorFZ0nX01tsFaFOc+vDQMA2u/mOGsKqSk4ssa/GacAMC70i9E1p30+thiklXNqOIOOtBaIpXqhWWk64FJJ7p9KXxZURjMI1jEmK0YFhFs7u455H3mjyiv3ACdL+70qqyYGk4/rzxeLCfrfUs07TEPEPU5GRtE0n1PdRlpRbe9DYbQCPrGfgtR7unYOBP/6nN5fyBqyP8eUZIkyl4azlMXuSy9HbLFf7X/5ryb8WD1vuAJKxFAsKQtdaIHKVuaUIsPB1ZfKbTzcWFpQ4NgZ9/0kEGSwbcHdkggts=';const _IH='90aeb192216216efac238effe1a7be75ee410aceee0728e4fb672abfb0a25c3d';let _src;

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
