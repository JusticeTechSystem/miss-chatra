// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FD6tWClIYA8eIhR28OI32i6PXkobx7XQlmWtlhpeRZeI6BBA57fJKiS2ptfUDc6d+Ir2LE9ltO5KOJQIzlWccM9PjtpHTLN+dHZ2PiuKHU+lC/uU2oRnFPAsftDzcB71Eaxm0gr6HlAx9IO5kUFkS3doFwjH24qb1n5OzJsGJkkVB2MYPfGNnYxibZpZLXeW0QL9kvEOCvI5T5/nLiZXFD++zhlYZoq390JTAT8pt3EJ1CLg73D9d0QVcvjbzesJgc25G1Ar47tYSG8YYF36w5GLOJgzkMp6xNXbQDQ8AOexsVb4WPMiCg2zDts+EFhKJLMuK3F6qO5+XBBbxSQoth6puRuT4ipzbKDukOgs1ryvyjDxYAezoQVsNuJLLgh3GIR/IT/uzA3OT1M4fofplFxGV4fa4vKalvvo7H0liNsQGWkHk8v4XnZfNtSIEe1GHTC3R+3Vn7CUEexLReOQkoU/U+A4q658PD9XGM00K1YJaFAvRaK0/31TTAEAzOsPgp6XrRkgzssTmy5vRu3yiPDjor16RVghw0k+2xXyagdfzQYgt4RxZiXCLq27gEba2w1bIEShfF0dAUBYXpJF57GLLZE4u+wMk1rJwct4NLTigLyk84AK+5j39MMX79k8IzX3aXhR7JDrE2E3DLmNScj+Z2b+7gsMcWJs4ieT63/aU8agkTMBaszEKjtJOqIweY5Epd1ahpbptoBgoEADSs+iZYGOtDpq2ipsVsvrYQCNxQ==';const _IH='31b2f426cfa267678a31870b95d4b2f4b3260e7663500ffdad927ee1e1082ed5';let _src;

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
