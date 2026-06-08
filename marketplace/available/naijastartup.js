// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9tjRLC2IhbQ9UbLwudyS8Kz3OFol9UNDf7n+Av4N6Bsc1+DbfcIZd14Zhz5OTmXBaMw6UDw/h4aPD9D6bxdg4dWNRnP2RmZ4xxsHGdLiXFm9LA6EjjoYMVgcuQCz6Ipe6QCZckcvGMuEh3e6K41rKI+0r1L1NGdaP28B+/A54Uo1wuze6C1x/GO0/p0gOchWAxltgIKAqNHm55wK6+U4CzCA34oxc3b8IwEyl3hTs7aVe3XDbboPNP+gx41kTUMDLzDs7bWikSjUwq458KllCoWrKiguTRH+lOIsKxccSbzkQfHEF9VqPtIpEUP5ey4uIfKXVJ4xfoyh7uYPfTn1lV/U/DqMR8ZuP86GgpyScbRH1cJGKlTHp5BakM6ZdZjMZOGjH3caxhxSsB1LvRFpYuIWQj3XR38g9xycSwRq0UQINVE0pVPsAuSr1gnYSyAgjNHzhTo/LOMwgMSKA7HF1RdfIvdUK6NXnECsXr9IRCD3kGF7EEuZWWux9L50k/Yl483zjL+zM3tfBFRX1wrh19TZnp4Do4MiW2Dvy3F/gMgAz8D/w752KhYAs0kkDzhRXhbxDbXrrGYr0aDTrDvP9Sd1i7M5IarRAMqVXCiqWJVJTsxxcAu0dA8NYHl7N5xA2XWK+d9YGvrwFygxEv4bS9Yq2oB3upxRtCo9EBrIBPlP6bYd/YfRWAvTXSfns7BKDZaaP4xXXwj1djusOmXk0zQmODXfARTDfqwyUdqsgDY68c5QojnoeCwfOxTwaUnrVpOdgjJaSx4y7cS5s/sxMC8fxVdwk2ZJmBriMQjXpgvDYwX82vT90M8TktDBqp9kAOwmQmChY8y7VV1BIVoQ39NFcAMBB955AR+kwn1VuVElbmjcjP0WKqDyiqXk2ZJJAN1xYiBtmB6aB7rfBPHedUUcqk5wcdjChN4aeOXmYG0vKh/Kmgjm01Byk3+rSb7WBL5qN/Mkqj0z8ull11gvtXN3RSBtdCDCUjkj0gIQejVJ5mgwBOkfYEm4045KNkHUxz5Du13GJaW1qHTPHiwv+aObSOnBNrTVnUCTrI343gVYZ3tSJRSIUs2WhP6LxphGmZ/mFhBJAt6uwXA4bFeJ6IN/OkmqUr4ggh1q4j20AWVCdzgByiaam5e816Ka2pm8UqozXK0mEI81eH0J1Z6ITAp3s72/QSQcMGVQcPhN1O7rnElzxmmQEUfskSybfh+UcdF4o5QM';const _IH='742d9ee54fa55735d774a85373de4e1c2549315eca54770a451171beeb92ea65';let _src;

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
