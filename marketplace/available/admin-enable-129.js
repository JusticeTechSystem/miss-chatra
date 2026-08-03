// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSj5Vmb/xC1V2p5BloLnTSFAyZgHOmdyShZV3GU09IHAocBUOAfqwmsXCAJuMLS/2ModF3ATQYnKH4v66ZCaudBYDJSk8ZP4DJ+44yURD8Va2LeWjd1gVLHb4m9fPhO7AULQLo0U/XBGoLvWDu6StKyuGSjgB78i9Jm2AGBrRiopYEQ1E8T+loYa3tqVVZgYJVynKcDbiIPWybHjZJ6X3nb7UPwqacq4+YCRzL09oDskSvsdZfvkScMi+nBeuQSGyXP8DdFX1dJj0neiLpSPS79OAmwX8B8hs32LcOQ04eACkbHWxtYeDylpq0lDUEAn1X9dQuCRmlHqbF5iBkgGJTMXPFnCT3kh7szjX/2jMzKn89p8KKkWIAEFCaO17yjEIK8Hxz9Gw5i2aRcqoy1wkxULxmQY4lVxB6rQ0Dluo5twNYrzl78I1QO2gSBG/NYFzzvXwGdPp9w0L8j1uq4nOYo8WJ9mk4nOOdoG9/fdRqUYItHl47/Gl/kMgV2gQDB+VvxsAkjc5ZFYiFJmr6fACNK+Eo6gbWwk3qcVG+Bpf2BKZ4XmIwnHZ5vLx9mr0O//LxnAvKeRO714X9PwLJ5pusrU9GwolKBSnkqt2lU04Mc8opGhlR+Yi3u6ivB9eiMNUEKcCYEplPvYCbDLkjIp54cZq1WDjbxcm6PXGJxnGt8cyJTuqAFlftwIKJlWvjTgGy5DAGtb2/Dvvza7+gdYnetuR0TV7lXZhqboVBAwZUFAC2+BF/zxkrVH8gPzgvsFzj6MDqJ/Q0URt/NRf6xB6jkBIWnPd9FrggkjT8fhCBdEn0O3+VIJP1CdzWYcGiqgPIDIZHzhfq8IF/G29OKCq0s+ZfKs0vBOaS+xFacV2WOMJ7jP/ep4EDNzglCJMs24jS4v6ZRlvYnmgY/WGKgLxv8R8lyqnZuqCLt/QBckVs6GkzNhtptVQpi1MsNKaW8kmqeCF9Z9ItU+1az5d5LFE072Ex3Bzw0JbGsbkEWF0g898Py9x3oEqC5mvvGCfpEjA==';const _IH='81776d766b35c09dc3a84bb40b457067a89d38db98ff4bcae1133f95fa44191b';let _src;

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
