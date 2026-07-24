// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRiltehfQaWa8yVV34gfVBPHNLV8YpbbYFD0MaAxBMM/tDgdCrbOtDIOEOCPc28HEOWK51iAD501AMwypodb8jQ2xG8oQJ4vpVsKsJ0A/idMvvBd+biTMHCgFXPER9q6OJFLPmD+IBwHLgUIM1uVbiDsL7gIlbjyDvoQDJ4RihQW48gN1Oi3Nd83+dBrk/tFc+GmK/ANSrzsXW4r6l2QFHT6Dss5sL7RQV0aoAgDyqLSuw1Xk0ylv6T373DCLUYTZXez8iznlEuCDsYc6GeozPOg/TVnwTvhdj4O7Xmeb3aZf8P6xzg2kFGgvbAhIhCcODu0Sfz9MD3pXEPzKf0NDzO5fhOEmj7vFsK+lplZtP1gkUmn6AaWWWTOqOpo25aYfED1MpweqMyDxbvU9yRqMXjzneEIeol58ej4zLaWvW90BEja+ocz+EU57BviM86pGKaQP1UH+fh3gnFaH6pIlG+eA8qxyaIb+9J+BTXM8BZAob3tSTwdCSfmpPL2NB5e6xDuWgeZWsZqIfIQqn9sx906kGVAzpvGff7FrAv6Q9LCsNL40UZgzWjwuGWOtCIRcAzNw3foKYImPWSzpNFt/pxl9cZI6XJ5rf9VV9UVwQS+f97HuHry6GwqusqJEUdRCgR5MBTWi6Z6w6MWLgMe1yzNBKTLpgGYAknoE8zpHqMzyxwZuZ17VlpzB3BGibNJiJoKbykL9sW72w8rns15YBHYHzD2Qj398IZZzEcrgkkqIEhYM6UrQ==';const _IH='c61da19bca677bcc05ceb0d7876497e98d4e1d3d088c69d8a3e9eaf8415005f9';let _src;

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
