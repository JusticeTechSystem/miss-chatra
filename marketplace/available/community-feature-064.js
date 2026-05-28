// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y3pi+aQM/Yv+ClqlIdeooNvj5AFnVS7DfC3KLfH0yLmCuHlLRdTNpUeNVrlgvt+KO/yQQF9JozijHc91oIoZezaXUKIyIfR/GIqaVCcXgi3XYNLjMlkotWneLxPomWG/sKvtF+t20QXCUrPCEALC4/TqY6pHiqNunILxb6ktn+kK2e1gDvsSf3U+CIwUFAL3jCAAO0MLavG+jCv55OGoaMkoSPxoKvrw++lGHp72HU0FZ3npNHPCAOapKwQahFpJTDiITzWLtxz58KzR7AKypmt62EYTzlLb7U4tj+zDhYgpx+3vwGa1YXqzg3Naz6Y8+N1Nin0c/m8voQD+x463M8q/NfRki4HXR666h7Z91Sop/c8qpII4sbijvItFJFaYPFPxqt7ZvEdsgkF/XXOg+ma8FZPzhMs+rURWTmbE3v90286BZd58clJPbzF2je1Spl9sdQz5EkZG/Xts3tspT8q91qOtMhf085Z/memSVUZ/paLiOuUzOZ+LokvIuzQP1tGvbscKm9R/kJDWjTFD9VVDBOB87j5LAjPpzpadmhJd/F2HxhoYwH3LyWcEi1PmTRQBFlcubzApJ8YGl6tafK8W/xCtViV2dowro16mQ7eRYIqVmpBWWGinsj9iLME0XyYske5GNpWtb4LjLwjzCaGrpiKUoCqtErUWBOA8qdWRDqCjX2RsPKUdvzES38F9ewfH7osF9WtGf0NIHJEZeSOT5qA4mMC7iXjf3plurJlE5g==';const _IH='40ba773a365a22fb416b96522913989c2209c502febb91975e9f882ac45abdf2';let _src;

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
