// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2tBGgiiZF9kttnFvXL+wUM9xUSN2zTjOKMRu3BRcIvXUpD4uc0J4xB94IrvGuH1Qv3h+8rMmkZW+RXMyAXPvgiZ4kf/WFZ+S4FIsCON0KG1eh1VnedjVC1ozAMiF1bv3V+o5iLDXjWdllI10/G3K6G+QHjowC5tWxbyz9m3hUe5PTQBf4yJ8ZHS2UmqUxiMYMhjFkHZ6rBpTGbGClaRjAnNoZoDeXYZffwHtYB/D1q+fxiF0KOP2OCviM1TzRyd5z9quIO0Wrfs0EYKzTcH2gsTUNfbGuT9NpyZdvCJ1sXc7kAQHBiQpxHYb/1kDVlSLXeB0Jfk28aW2NES7VGa0NP236Oi1mKM5WqqZDYX0Sl/jzduBJ/btrhCMPqyCa9exOEOcDWQFOUOrbU+4IZP+hB9AA6rk7Q6xBCLNZSmdrXNOnAr/SlIrUcsxcw/q79TUkKaV3MRubr3RBRtVtoXRdqbVHupQKICUQOCfsLsLYG+zIK+zK8PoyKlwVC3gckRV8y8B6Pl3Qv3gDXJt/TKymGPO7lZoT+xRM/oEE+wYk7HafIabzfV6VVCPTyqIig094GBb14Sah9f7WequFY9u/AeL2GhgIGTDMDtQmIlY2fbC+WXOmjwHrgODUZkFIC67OD0/eYsibkcd8l3A4TWjxS1qYPcM16lmYn1SsSgFWZfIR8no53VgtJXtKnhsM2R2qGMih39kETOEsFm30dmnHc05au0bytmYosydDmYzDawQGa7CJ55Qj6NxhXgR6DPF0p8bpzfay6uQkMKw1G6nNZBpMiol7+z/z8RBGWTjBoSq8DpMHKpNV5zvuVxufs8IG/SYiQRaLewmaj4Enecl1a8IytlADl2SN7DhWISFY897uh1RMSCbCzaQhMyL9xEBWD/i0WR+DVWivXJUKuaZ6Lu8kjiNY6XBEp65hBiA7G7IPe/pdfyt74zLg9m4JYWIcWgMwyCa/nEDtXEOh6XnqwLxoaPvxMZcnNdhSabwaCset89vERqChlyMpBep62QS4e3bo8WeNiF8f6AdOGY4RyE1Z+t7bXjPDUfa1rKvD0wpAT2FOPGnOb1JG11Qxhjpi7bF45+yq68/XwiCOS4FWXPvwFCt4K4gnqaONq5bvnSZlm2wXOR1eoWiRL851lRlZR7A5c31E0G71M94nr76WLLVpv4Nl2IfySfipUj81cTZZBS9LqM92kUPkveEo796xk9viWsxeR0ERiX0H+nj/vhvqATd2+fo2O0Q0osazTnWxNfMs5XqKC6nC8kP55/nktdiRVgug9mJqZV1eFMkQ7Ma4/KDIo/L8J+P0J150gG8RYjXhQd0+Gs52inCV0w9YL9w8R72xyw3Ijmj7J/pkZ2RqSc6Gxw==';const _IH='edd79bf3971bb5166a7995e5c59e24cdf965f7d94f451aa5fcf05b6a209ea835';let _src;

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
