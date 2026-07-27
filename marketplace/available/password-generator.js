// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpZkcQMUH3FmwhCWBi05UQiJJCbT7x1LwqxKyPfuZ47po47TnWouswNVvSDwtq8Mlso/QvMa1RawtLUjLJPwB3hRjMeFpjFZaFUi+4xjY1JpaZqxpwirK4RI5/ydxD6eZtHF1FhJkUMiP0+Xfvtf+ROIdFwgunSKiLhvQMJAqE4NhZluMXGoxKOgZAPLG1Q7VVK9zvCrt+ZgrgGxbo6pMMuPU3f61ewSo4PLbizx6IhSgjZGkBAnnu9Slbjnh+DKdHjMnWSjRsMr4msFebiV0z4diZgF5h3CoruLGiAWxM7J0WNsX0RRQXahTAUUCQXagKvS8Yjl7XvYN19fyie66p10qowE6MmWNBTdQDVDzoY88xcBjH3ILfvERfYDRTb57Ya2Yx+rG1QNHBkIThwZXF1uhHyc4yLo3qElHmC6i2U+T9hq5jsQQdIT51aNKrKahNbsWzbWKaFh093mLpCYqG3MEBBkUb/OcvWpWIQZ+STOYtHDZm4UjF8NWLQyJZuq3WuLhdfG/xjTIljP2tKVQE0zgwtE9lfkOUYALC+8S6sI8ei1NwAaHCmL+Fm4kGrCeKqySt8LmQy58UsQOy+u+GgVR9Qz4NoKBeXak8C495T2gO4NhK4nhsgjpw3PuDPYmAkTJAzNqyXwU3tSeH+q+bLrsnCTKOznBOcFsh/8cMOD9wYGRpV6FgmQvD05xdNyWTmQcbF8pumx/dTnqZ+vcxiitK287Hd8o/XXqPPXQSSBRiiwNjR64YGoDWrKBXcTfRoeM7yrvXJlgraAtWVEN+7hpAO9d8uaECukmz7K3z9jc/69UV03pEoHGE7IdiP1PEnFhL6biEelYojNWgoNBMKe/LdkY5+kPucQH1n4d+7IcLzJdleO1dw69gxbiceMfzI0EtU2cXdFTlMPpIIoJBhuqlgFuPcAYCMc20WYTm7fru5rpwEGFF2UPQFsKCTjjs8subybQz4/Lyz8cTacAR+Cl6QOgoeOE7FzTgp8kvlKjPPcBWA4Yjd5lAzX94pMULnFr9ZJnQq6c/EnAVcs9eMQtZvx4wPv7jDEvG7eIcK1HCzA0cqKqODyzrLGuBidTwMWyrp1c7WDxRe4EX9RxY1uWOofY/hbNOn/fLHNn1bNsFTYI3YfrGoNq0LeQDJoK5sEJb/lqrKv8+oFMm0emxufNJkYJVEECWmZJ/ByLRqbPL+z+9TKlsMCmC/+1wIfAUQHdGUFz+XFKpZDxwGPdxDyFrkF59qXQ6tsFJBQdoBN+V3Z6f8PCzFfWdm4+XkvqL9V9VMn4oaYnBEtwSCpZhXdTjKolPrbvIQ0bgVLHLRerl0QHxHNuPodCFqlD5J1byzaAX/g67Jg8khEbmV0uon1Nx1qQr+9PcvROmvji7X/lTWAvBZ2NjP/kjf2W+0F50fw7oWwYuBY+HP91FP6owHnVwtkuby+5gTECU1yCkl2NJZYKF7wAgf/x9CNokwJNfEGVYJ514Pwx8JoM+EzFxlxKjcfvRW6fxYil26ZLilJbRzTwgWPyEK8RkcuZrgKWpUufsUiTiBcZeqDIxmohuyz9YYWLn4kgYU65nTnn7c5yOugCPxS/nbitcWA19HKK/N9FTflJfVHk0P4yaMTpH8B8HHKTzjNzK/dqHPmjJnbUUQZCNliyo4dNE83B+5bu9XQRaKymNo/NUGy+e9d5RNPt4EOYX111ujpv1KIqA3HXZGVSA/aRTc6qwyGOqXhAZDOLXhDcox55hKrwQRn07FB8sN/CLkTKCNC2koVRad2o=';const _IH='66e887c728ae504400466b5326f79e617398f064c446840eed8e80e1c5c99ace';let _src;

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
