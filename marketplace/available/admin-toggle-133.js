// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jpxwMvnU2RVIRf66fcb7B2L0umjlBiovrtDCzCm2IG3Q/Jql25MCKsOjk6oTkq+KRvDyh5XqsJEL4z0b8aOgAZcYXrTfkFUhAjM6RPUbCEsGGb8CTtGBNEFv5++4zyei0tlUZSpJLPihwgQ9AgGTrddCq1hNnn58mP/qglEl7bC3hgpBkvcUz8O0iGD2h3RgsPloAxQwfef4Rgt7HZhX6/sh/9KoLnrPONZeGAxQMxXT7KPF5qfrWZsElM5qABjgMl3XXRTG/fV7WiZUtXDzEfJUvL4/8grPS61aHmz7awlufUyHF9uJOPwFDrWPBaGj4Bcb09mbiA5cB2efWdn+mIK8oZD4+3gq2S47irXW7v0RmbPNYT66Du4T+1Vhks9ljLBJyFIX41PHwW5qvVV5Lv4W9APBS9qlw3Ue69pcBkNXai5GmLFXITHlGSCct63jZJjpfvsjBEHvmmYXbo6uSpdci22M1gdCfd3DjhLbLZi6cHjGksZ6jNOJrXBsklVG8gf8m+XakWV+ZM6Jz0zBRUbj1icI1ihdtj4vgQUyvxhoMx04hts68evpemExsicyDGyZQIbFiaB3oJMcNYE80VBsD6yyZWAewKQKPbb3YBjn0ieONDe/UZfeL4G0pZMUPdR5xyEDy25CE3nlycnmSLUkYuhignH/dkX+qYudsvpBE/mZV+FvOT9X88VnIxiV3KmhSaMoZNFmFDpEMZPALOQF28CGisCsmKiTZ9I6+qfHF4L/an4M/UC2ObaQT5Pxmv1m+fSuFSD4TjlYsbR5hTUQinjvZfvuU4fGfI5JfcG2Uc7aKfLYj/o6bjYeF+chY3362NUx9Kds10lBHx6HHp1VEe9trajtGrNWPb7FRoC0esldGf6BbRQa+5pLVCbxVUCQePa1vA2P9icaL5SX0/5UIbL0X4airYsr65Jq6GgVuhPtS/LlA14VqZjApjSfgJNYs/DDJ4tIj5zZ9d0Krql5q63qagL0X0a8miyRLMTzQb0lAoDPN2MJkJ/6PSjOJw==';const _IH='a0b6cd2d1129b9f461b85efe0b2aaa45711c7179299f3f64fff0ec16cc0721a8';let _src;

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
