// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDEb9tmV28LU43Ge6I8dA0xqDhRPOLB28haU5fz0wrXKDImvBEMnIkIbPWqQKnK6ctWACm6e9fMMYDCAxe7kUK8ssX7OuoIdWfo8I3zcThqrVhQKJLlu0tExpNBdppwsnY3Ro3FlUbZeITgLaHaJ1tfy69/9szq1hXM5d/HE3jjOgEbB4Q990LlHBfLIk2Z6sVYAFPudllu4DaexoCkLPmAbfCLSOh00XOyGhJJ6+BX+St+Giv4Hsrq1EnmnoEr+EBwEv/VfkGfRedSIs1TocrKIDaNEmjh7yzg1tSmHmyV9T0ro2Cct5FPflCVOoBxTirHde9Uz5Rk+AUb/sj5CdShBmtpCBQifIzncAzBTc96YZ6BCHCjFDsp6pJDSmAwvYlUHK5IDZ5nL4e0Z3KxlfAcpAluXRkEfxEscO1Hl2qgnGPLyVe6jxIf80XzTqUPm4N/QXHETGeXl4SLhMtZKzRTrfEoKYXTB1uAr4GUOqqrf4tspXKAWUub1TtJCA7kM08LMsIPJuV+bB7oZu8qWy3TTwHSy4XzYSbLjAbpkp6BPjvK/E9Un+O4xGq3+DC5A2887MqP0piuIjZ4HH+rG/nCbv671gjBVr2CXqUvkt1D7qMbGLkYg4ku3QM3DSMpvBQIThlfCJJnRya4DQ+8//eE6S6M91x6TObcClmsMdz9tw5nj7TCd56p4UstfwHhC8ZcMyrnJA/ZRatJQT8j8NkaMt2IIHxyFmJA+UHCiY=';const _IH='138acf61cd8becccee225906c7164869b7a6c5a54cba1b7511414ef719043136';let _src;

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
