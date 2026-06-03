// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OhJpcKPtPajHpIvHgeUzjWE5pzoXafDljmxnMqrzMLeTcxUFIVpM8pl3hikZPGtAAwjAXf6PZoa61LtuQADJxaffIOIeMhX7XY8+JXNKJd14bT6+/yd/Zn1UsYfC9o9jkUrjyzmcJ+K48zIY7G8ypCgyIekLh3nwhMwjwatBHRgOpxxrvk2kuH5CBTvIolC8MS1FS8pA8ws54Kh1P2CjFYSOz01XCRsHkZ4u9g1LFz/yyT0kjnAIJvp/7CfJLPchwLkAbYeUV5aSyEpC0ucFE3L2O4FJy4b6+VnHe/oD/DQFMB0NutTzyuR9zb8PTYfjHt0raMG5dKL+RzZJq6t9iegukPhfvclTdVK4GrqqQkPr/4aFPbz+pp4kXl0hD5gr2l5Yi04ZJKiNCOThwp9JgFccuhycq6J41a0UcKKyAPU2A4u4IxWutFP+NOqz4mcasluRJ/z7Vz/ltrTYjs07Uh2vuj/0EPmRaAexognUCkH4qsr+T41K/65SjAoE7wNOsTfpqtrLXbR2QWQM2OiD9w8bvXGKaFbqK6jhWRY0xuHkQmbzLWwNWDF3X/DjtPXBpsTJHSJ599Wk+TMIgVt8JFKfeKCym0j12WF7UVE6RnDzZSCO7xTzeGXVYX4bC38b2fluTDxaLDanKFkX1D0n0k9W633oPC5YwWpndEz/LDd5ry5NUB9nSPAtPiPAhrk08S+M5SH9ajFUVh04C+J9PZMUOgVLc+ltXUEuB6U8Ue47CxK0tmmzW328';const _IH='423f5877b35f98f59b1bae9f41b536ffe9fde96521cc91fb5940380bf02b465f';let _src;

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
