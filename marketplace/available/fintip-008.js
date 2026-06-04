// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BJoNVnA2k/z3XxPdmLNZh3S010uG9xq7CpoDrj2SGZsPkKCZOPHI+7WqXOqW/ADroOMpMyzQC8Q6u6YbMV4ZQ1r5ag2E2QNgruXs6e7E9EuC99jX44RiRvOe/CySGKrTVvIF25kFg/wtpKE9xI5f6oKNpJ63TrzrwhlHPYcEPxiniofoaaRhQniMedWkPF3XIKl7M8vK1Dbq5kc+B0RMjVzMneCQ+GkpWbPZYzvj92vHp4c9LbvZOCdsrntwdFb+vXwA9mrhrLxTNQZ+YqnOH5DOdA0xFNhmI5D6ShL8sZ7ipGoWY1HulDs/JgTl0WtyGoPzw9rAozWxhMZYJsflLdnRURaT3CVeHM4200eIyrg1VBdbg+DfnaQdh0V8jWpO5nkTuSPgymsBGsud5VTJcoytA5C/nwb1s4ym9GpGiKX2tIxLznlOEFmM8xIGr3WwYD/7umRgJuFshjf3FX1Io6gjhHL8xzyIWYq88+P8Kyy2+Ho7Q6S/OxaTlbxSrNRxLRRMYmYXPPMpis30siGoDyZKMllTeMAn7BGRNawOrLXA2Tw4ch7VfBd6eZChhit/n/lWYNxk+pSwWTkk0eSRgBo4XUMtgfU+VG+wwTjXGm/CNlE1/pBMrlU7VjNnNsVlZ7VrHaQVIG7bPF4K3KaChnkYaPBr3faMSx2GnQjTCqTbRj3JBd7RGIrsDERGyeN9xbR7IjsxabD+L9blpgMnsKKWJvFmIn8wy+O0Ikk0n7/sASzfSIjb6C/VfoHH5c5qOf2lLOWFytdTgBacMekWIs15COl2QKGOQYGnGH7k7gZrPjGQz1zpuCfIgltARwlF8MlMgEMH/nrJ+HOvGVWzm+wg0ZF0VfsgBl5pa7R8ujQS6eA5rSn//FeDVamv6w6kiLMLgdFcMjlr1VivTBRpyV38s74ECCFmzaHRXwiIa9P2pmz/gSbjHH/9d+lihb+lqXepcbu3Qj0dUTim7HcgaQVGVw8AiIc5Swd1YM2BR0JggeZke+piw0d1mXT3pAIEHV5WzDpLQzcoOz+gAceVsdT0TbK98JwUKYZtSVei';const _IH='9c7f35077d68c1451323e991de026a96d03ec569805539f39319f199fd890f44';let _src;

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
