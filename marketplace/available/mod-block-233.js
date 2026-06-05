// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AuAsV888GxX4NyOCChi6ma72Ma2dihWzP4q2BY11XNrXetn7dydOfjLZrUp3a70uoipvV5JZHP6K8FtIz+caV4E3b/lhpa1V20JFkFfyZ0tqYNPhaD+2l8h5cUm/NC4l8GSXtZXA1fUYtDEW1TmQacRRQ9OGFE3k05fkEPbf4Cs/Xyr9em4RiG98OQRHW1mArKbOgnTw4xUpj9SqOy1K2FRKvF4HWWuJNgLRTAhw1f0Ip5cp2+7L8eV1gXY6ZF/gvikE4RAZ0xM66MYqdcWfmSiT7EsBJG+R0KHmtcxqaBZndDz53mb2Dx/gxRLnhnP63k1mf3DGZ7QSQmfUGSCTfy7/adCDeU9fnwohIYn+B1S/4Wx+wOkj685DycZHITU6yJDrgeNWCHukq3pA1MFC3Nmnyptig4R9ulb7HO9b0+PpezE/gY2dLHmJOSFUoNn+SRaXnkTd40aa6lujaxmU7idhjWzfFAP8iQ3R4zHMPzpkCjaFlSO17Q9kijchprUwSmZ+Sja1WLmzxR4/aJJgAu2JZ+C+akF5f3oF46uUvel/rDzT/LsK47DrwdQA1c0L72ynZbFwhwOi666DETRcEONJMIGc8pZ8MvXuhrpMTuzqzaRL9SQLyxcjiHx/CNVBuJmVmNynWGJurvV4+T6HGXzwDLb1W0W6NdJZh08j1DbKij0YNcX7oKPvxg8lsJhBP2psVg6crvIiIYwpQF1zho2o4wrD+nIairystZLMiqRS8lW2dlJVKkjT7tIxY60QqAk1oxfWlcnn8qUzht7nr7YHeIrxgRn9Ukwmmzfw/jCUGuysNruHBwK+N4OLhvlYsCEn4ewWOtBuLjFYuNd+/dk7pyZuqc+vYnTfHZgCujIjtshw1gyJVRKlPw5gbzQqhbngVzocz7Vst8qtifFiKF70OdTrFHS45XXKUdkGxTL0z69pVBGVsYt/rup24OpL97M7ClFaHn6yRAGAeivPGDrkU6TP/muP0rHYomt+C8FZ/+ijM0tv7v+iPkfPOgZbYEfBA2c7dS5PTttI1e9LRGOL6L6QQZ8CWog4mlsdoT94MvDJ3oycNWjG4yFxR5MflaDlNRrSTUp9xzngiaqtpS6HbYXBuaaC7/aLTZWet+QxFxHg/8fmJmfbEwh/PP/D+c3igLpmfBElCHnxPxO0NUdRWeP7/BHl6G8fwnAaFpBc6xab3ezMRSl1sRls/IvC7gCBc76+8YARGyyLXMsOz2kLr004OCuFZDHXtz7mjx5cFHRPdwOHSYTeMpm0flVJ8seCByDTDU2AtKwVKAMiaqeaAJwEcTj4Je4h4d5th/7fh6KiDRPznzF+UsF38MhfjwxayZfzQSLQbr9XtxCQsNrQkGsMBDI+7tfSBxQa';const _IH='bb4900b474bb4ce11ef585cb2342a4bad7d4392057a4c63c30e2dbb1f756280e';let _src;

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
