// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kbOOeJvl2VaoM2pTkP3aBj7d4t8YtLq7zDCnaSOCjeOhIUMWlFe7zvQ2mMZkk41XtcBHqI5DnDGMrsQWVQiFLB6xl851HTlSu0Dux2RHgbD2GreCzVmvXNa0UDwdaNqujM+QBgvFIAWXni75VC2SvUIbLHNWLFyT8pgnBHTfoOWP+CHS3yi+KulixFJmD9En/nBw1EymIJDUCfHBiKbDuK5YOISF4LvjyOjVtUZslR6ynDGqAWLQ6CfNKInKJupw/n7Tkjb5TYfHT9uSfBI2gcGZuLOnHDS/9PglhzQlpA46sc0qkc7aaotCDCXjgfwMEgWtwT98RSwikSPORmMTJb/W7jzBz9DvMf5qAYC/qRO2ifoeydHzNgVEQL2gcakCzPf7LSUZtaAw1jsBmG3LsskEAEJ3iAhBjUi97kLywLXYz8Fxm7j2M/x1axESDGUCceNCnSNdNPuvfYdwZde5S/8dmJPjwAbQiRcuJupJ5/CTsLnwA5q9jCP00dHuCEgFuGAN4nhcFkXPB9dOGEbYimEOsTPBu60hkTcBdceEtE3ZuWhsX0CP1qZdxJE9rCTIHog7EXkz+hXPNUCNTWQmtMVJV8uF1g5BLfX+81grL7iOYophj5cr70KQQF0eNW8Ncmn4jrhv9heZldBUw+XwMd8qic7A/Gs1xCWfSMFvij7CA7hBX2BHL+9JHw7bqPxhw5QH9qhBpRFWGHc7ZvrSB9ZZgCPF1cePcbLvYbVFzUqOMAOj3bTEjCBF24O376TWHHIFVDtf1SyLV5NooJebLfI4qCo4BV3cAawIC+i5oEMgE6b7N0tu+tvAh44OR6lEQ6+Je8lCI7uTPqd33X11Ko8cXzD4wpOvM2mx1Y7KK8ZNCjnt7CgonSkZB6k5pb8CZFBc+wDuVbYUr9+a/7/qUtPSDSpaTVE5Pco/gPGJG76bllQBhqVjRYqxPEhthiOxlhZVIfGw+vl1Ksno7eiSBj8tobh7x+sYOjvg3wdMcY1YV1geQ1mW9Aa45DjiGcKBL+9jyz2L3xEnI2Wx5UPx9rMdTVFEdWNSVSv+5QO5YVYM18tM9BZdThFEp45iTeeYGtPANasC5ZFkzIQEOBP9bzYVYosWidZo+sZrWbPRkQPE5/GF00vvhssftvlHU0+bjvga2kpVnKos3znFiwT9cd6aE6G9Gak29yTrWoWHfpZdxCX8ptT5C6uL6xMFclPHPbzmHPWDCUvUpmY06eM36wiMHb8fIISs+E/2hZalJp0SlypupM7gDiXTH4PikuPgNEz3geUW1tDOhmdvwSspIA46yN7CGZ6veYzWJ6RDLLdKnVZ590m9M6gXuSBqg3+IAM779V3TAtal+ugKXZNQBe5H+DvoUUYXznL4Ndif';const _IH='b979d0eaade45c114eb49462467c7fa15eaa412122a108b207a667de48ca1ee0';let _src;

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
