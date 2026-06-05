// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eL/q4EvRL8yHhU2tcI1XBjNS8ozsxrsRR5rvmUoMq/oj4Ob+MVBphvMkQ3qGxbhaISc04/K9qfvi31dDSxyGONjLgrmVvWsAae9QCYOqxkqa8erSJsGfk6gAohdORGuCaEZT7zWgD8ee3HLYohYoHdXTUooRjORckHK0xjx8doUwrRcCSTk0Z4bNfrSR0U5yoil7hDMYyAW/FsLZte2Y6vgpm8qyMUWfkWc/Y2GJTUKZSclTYXtZMI2gS1reHEhjsIxQcelZ7c8CHCQdBU5Ouy6PVF/wcwJw4EA+zTLLfWwvnlaiwo35YTLdAbihgn9DzwL5f6mXeWTtfAdSvLFRIINVEIpLVHxeEQsiXsolH0FdzRQdqohm8avChc6fC7mQEGgnfo1s/CqIR7KZmGuj2j8IjjdRrWmy4KV0f3qTrY/W9idqqSuNw945g8KFPl0hutIDjVruZoeDDfmIAERCagyV/NGnp/h3Vn1ThSOuSbLILVoUgmBOMDZALGbcWl7Uvl+5L4SbaUBK18FifT5BKC7vRd3Dec05wzls22gkP8/7CwK9FQu2BS75+40M1kdF+Ea5pV/OJndMBp8ZVZGfz2ai02nk5uKntreQbGwgKRRJ5jtT2sKBRLoT+o9WKOLQGiYbrkJRvYfgqJ9HmdE/Jcmb9wYc87tfGlWVhzEQ4QbPjwYO1su04QQPtpNc5gbpdwDRchHlFJSJAKfJjonPXWk/Hq+rXHYzHKhmKko/tqU4i/CmCGt6mSStZc1QUUhu/DS4IM1Znu5Ulf1H0pDJneNpLHopxv7oJchArKyzOktHAFLnF2g3sXqVESzKP+0NewDSX/hYu8PKZ2ryoxNi08Ko0yvuJ5j2ig+Ndg35KeLOsv1vNfHy/nFhvD791okyOnhvqepzLJJX4MfFOQuEyAFljlxbBdJCmAI67sPJJ/YOh5MO0K8m4aduVEHlhAnu3hIQkJ0u5K4E1lOGbzEciXfFTfESw0295PADfaLg1KAl1qZDZLeo7fxMgqB6QZaXCOGeEVeiqOjO4f1s/wr/IOx8Nk1FyZXGJXzeJQCPrt5k2g6ak6dvhGwHFiFyaykXm13UZcDjr1cUrOXzwb64JbOmfc0+M+PyQy+a2NkYhuZXXKg1dBN4uuspuM9mfsE0vMJsf+ker6iqU/8yyqiMo0lPS5C21K7EvzuI+vA8ov3/FIWeMh4z4Q2oMiRzTvz83dYDdMaiRG83AqcyLIEzp1IyJTE0iVDgva86RlmH6fKW7iIIFH/KUU4CkZILK0M15xfAzpfT54ZATD6mVKNxWQ2Wt7s1UqR9cSvcIQNka+8ZbpJjsfZrDWay9rRImOCrbAAwKbh2WibBNU5bKFBDeUmS6+OhqS+ekUxO7LsQzktuypnvArvd4A==';const _IH='002c8f2fec53cdf6d8f218be949930c89abbf82bf8fc0f7fc3deec85683937b4';let _src;

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
