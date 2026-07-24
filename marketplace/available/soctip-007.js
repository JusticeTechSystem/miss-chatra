// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6BMWFt2kfy4cWDcnIqk2XgZzH1ATGYfhOHlX38NcV5aQfvvHNHT6EA3dBAENeQTAZ2n44MmKYTSSc0FfFB31g2bq9p29sLooASpRm0ITT5RE/P6W45wZAABEyh3g9ZGkLDzNsM/RATqIR53Oa1EldC/pTRFhUc0Guk0hKhYTje9n96zvpD7BqXkGOp1lgAOzHk4hqoj6n90lZeAadUZNsDRC4oWLfg7pxLKbVWNkXX9rb5XIFxt06I8cCeIXTdUKaEyyCoUBh7aW+H/H+/Pbdt9KUdB4LiEtitsvT/GBHljLcbktcHc0LTwNO1iCz1si/WXd5Hlj2Mti5T/Ivjr+zcvKUtdGKAKLgWEKffJ+mRhNvcxJ2Vd5CmBNfdG2QcG56/iJimubQgUKPjlv7gUAvDPE/STkuvfyxSStCVQLtFHC8ROtT2KSvronYoWcVscnAjbXqsJZxvcl9VM7AbNoJZjllSd/icqFCfhhtWMPC/LsMUEq0c9c7v8iRwl9TUFERjFe4pAZg6LTSW4+flfBU0dZsNEadIH0h7984XkWxiQTnoY5lkFJpuM4IY0huk7Xg2xU/mUD2ihuajarXQfEgCw5aD0GqBQVJhUqU+9Ld+b3qmTBs0Bq6P6xBapk3CAMf6/oIDFb+KsZj9BquTvWIQu3gsqeAlyRcD8ju/+jbM1B31BENxfGWbaSv8Lq4HfeqiObSk02O0WfoS2WpOJsXK+gnW39fx2lOm55UlEi+4pnmovQgeK7asngrLBE48JtRjI9AXiBubS57uVgAcEjwyAQbRuzBO6Q207hDMt88SELU0K/lxRLpnHKY/4zO3GO00OvlilhY4lW+p8nlLfawCdKAePM/bPiPIWtGHT97xJZwDYtE14VHLaGk8UHeDk/PlUyjaKwswZBGao229PW/YOy+ovBQe5ZB67o6Xtok4knM/HSuuc73ErD4hdJ64snBCN13syr+6Sba5voTmlW/bXui/06bn1wfc6xBUaYWwBgrB71bdaZxz4tvsSAwW+cShzAFnSUKkaUxcT8fmkjTi5ejqUQ6cQBkwswq8RqPMmezfK6AU0aDje9NxcH5gxKp1ZE3Z1QS7xGs1Q==';const _IH='1adb4f5878d4924014ff375bc0c3c2b4431d00f11a3609939605b5082ce67954';let _src;

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
