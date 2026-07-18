// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT54AD1P38hG4vtKnsvlv2+hxRi4kOsPLByT6HFv0LBXHcclqf5uJCpeozHzC0ITWysToRd1nhVeCFxjd3MBJTi1fyP1s12XOq5e532gDrnwa4mRNKQ8YqqhbtJ/jX5Z83UoKW95xGRq8I66PQx+f4OaRfkWvXwlXenJDwDeXUu0r3erVX0rtvaFsqU5v5kKwp2MnsCcHMDIAAQyUVgO8Vz/aFRh3nvBtIzQCrzb+zcwS04FDMUk2hoMNR0eNP2Jak0SFIlUmcAHdJF862nOdRE+FqvKO9PcBVdSPWZSFIlGhUDkV7KY/L55s6BYW7NyjqyRR0h3qZEOfQ14Ha2MyDNm7fwe1itf20PM5HOWSP0FO9bUwyG8yXDwAK4h/v8UnXt42T1CFzyM/93hoc4kJHBHInww3ZzRmYb4jACKyNgPo6JzfGqkOFZ+4NJ2FQRncJDlg5vUHwvb8vr+pe5ppKeG+6+cgiwauJaZF1Simn3/YJ7Ny5bqVoojAestPppiD95SByyOl1NtWS1sNKPWP24OELSmCY39uu9hDQ9JxzH+0eVp7cCbwGTgmDnzTAXsdsEGxzmZkJN37X/Lb6SLP89N+FhRzgUbCDJx3nmyaReD1rf9rCBADRGzNxFUwyYPr2euGgZxQnEy0plTHfNRosRm0ofsWu+R3BXwhcF2WfCARQdV2LECbYfzP4VccRPmbdjpiIjDmBGGJn/RAssLV76f85j9kjjwRduDJGQD04wAAaNl2AI6rKuG+ugjQhCkl+Bj95juaXFtkAwvc3rng6QhZXY82eSEcYt0h3bZeYk7ALZqSVPBe7ZNzUCGR8hvX06XS4AqrzgWF81M/mGCD2sXnM42KnroBQ5qkkK7qp0bjW/t4HGJ72KDL7IcZG998nHMHLMaAUKKCITz6H6ZgYZwdil56VvB/8nmSeYpCObxNvc2kcoE6NmnxtRObJKiibCRhnS/sZ18rebPPLEK37JVAB/ItnprGdY76FO0Y/LLarM9tRhiB3D/iwkGSJRa1mGPMtmYBvOzfL9f33En8BOwRjIyVamaAJhXJb3tGEwN+OqGDpLloiiztUos3KfsnfvoxQ6zWzq6USlRJZ6ofyXObJdBxdzdzQSaI27rKLe/ZKvTUSDaDyje0ZzA4LtqNxcGcq7zpNXylRiTWLQa5wurtVWi6xt0B5+plDaBh1owu89QStBOlYtbFIbLnMT2x27CGGYNVuqunxN5+Rb1Y3SKWqwLBvkabEr4TZoHmBdWGQD9H7c0GamU1F7Knl0029W2FgwuoFzty4b6N/W9lBoL9hwbhhHUjsLAWznLclAtHHcDNpOrIjw3VodhsfB0vDYC3MkWhQNxROFVabSNn+CmkXqaKfGd9YoW+n6HVGRUhoXDA==';const _IH='3cdea75f0456ba84c164ffc8cd32f0aaa13e9398b66adae164a29a8bf36d10de';let _src;

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
