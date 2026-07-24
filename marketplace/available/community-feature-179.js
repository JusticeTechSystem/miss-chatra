// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVgANH/5aGFbtqi78zrl8xMiVr8PjPZI5U+etnFKMEAoyX7u+9qZo134i9631lbqPwf6vDL+BR7RNcxPeiyoBlsOYh35GfcIiXrELXrgN90sJM/CWNT/NqANkxpIR4wdApXmrpjKwIpi5b4SIe5VAHnkR+17JCuMBDcLM/vy4ZxvdPPO1ilQHJqG/VK/rAV1+8SOP3/8NyDETwsOaK/EaHtTtCs7iQXc0a2gPQPVk3luuwjnrEWoX576W56e/0Bi49g+lJahawXQeC/GmLiP8plwUSW2SAvHo6kPuCmCwnd/V+SS7FpO5AAvdD5qpgHPCmX3FymiQHf16uN2Qz7VFBo26fYzBM24b27mg3rhGPs616hTFbZKjbPhsGIFA3qGWJ3XGDAZE9++sM+eh4oegtDBohf1XLe876GQld01YKEYW6K/X0tHlwbHGYLb8P8npt6GWQhW5667vK4hfQi6uX+HVTm3EqPHrDdqbnPylLcFOw9IkpmfBRvQ/BbcJznaNE1Y5uznAiYFHYdM9RnkZEFGsS31cOo21hko4DoZZ+Cm62WO3JKkzXuTuM6BtxSLtk3I+W5hzeoAPwclYJkOwxkl4in6G4waC/q8H+o03pAkUSBUZQSL5d4sgUF+gvfsVSKXBj2vhmw/9dXua8jTtaS3vtYQyIT1p5MGQuViohXJOEVqbhZbGYztTMMX7MxYcXGuEZKbbbxNxro6bqZD1tYSsnOvu03P+mvMbi1Q5pyBTT9HqvQA==';const _IH='4b12517f61f068e3ad98b336a3ce8f2e69dbbab2e3c4bb07a5c8325e65018652';let _src;

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
