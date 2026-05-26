// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9EFQgVtEUFVIBQOzxOiFVR0iEiuqAZzKToJMrHWoavCCBfz3OwJR7RR5YEw0gbEsN+3a2bzhcCpQ/EdPX0y4ge4LYg1xi0H1s0CF9srfc/Hgkdaag7YAC7SLMLgyuHwt0e0NFNK8n3l8jczQ14jGwH6lX9NbxKyOnDtx48VeweWDIZ6UdQx8sghYvKgcZ6ZSPjg7njksY5G0FvrVXuA1YIw0iP5CfLUOwZZAiOYIIQzB5FXNTNvWTflSeTWGwHIS22SYwUDMHgPYaO6FOOd6BoHx4XNoM7qkvyE7eOwexljkjHU+j6VR1lTVBl7RJ2sLyYWNSnezm/kPZQOmafIW5c0KvoSrtfJihuXCXxRV7fi8qXhuxyWx2AscCYTXnS1oTExhPMEEOga+BA7P7SG1vKaxXJNAjVj/u9SlLnKxN4AtaGsQQdssabBlzlNRNoKw+Is7njMDgiMZ2ssGSHo+q6uqD8pre+lqj12Dfo2aLqjEyLMsPb8qzaTJ3MSrmsNKlmWF0U+yVuj+AQ8/vRAKwr8BghJ0GhJIokXj/2HhbjsTCfP1uOBgqZYIcpxgXB5OIBfXcx8OjIc3abAaQOw4/mFRghxDadLUDMyw+0fajmvsBzqdnn4ZaQzmf1OyocYIib3BaVJw0uJBEzoz/3RIo8DlJJhOmWULmBOMzF7cTq5chHlCk+iQJzGNrD3MIhinwoz2wtZk1v1MpdSvqGTgpA06oKaO+u/V7JZjK6fMuQ==';const _IH='c0d8b540536f380052387b71e6f9195cb876b0052273ff9f356593622688e07f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
