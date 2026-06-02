// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rs+AGfONXEuwK8C3/mSDrXLCf9BScsAWfe+i7UsvAL+oGEXaR+9xLUgOufIlPvXssvImR/+mYWLKsuHYWSw2k5VZWK5Dnx/dN7w37wb8stB0bRoLkSAcIuWd5HkHF8ienNmh6KC6abedrxhR5SzyymNsUdcBNdKptmDQ4oZh3k1iOKjkYkdbwBFF5t1WtKFKB5c2w0gfMF3TXRnr805jR7SJlZRXgv7WIrTEA99nHuxGsIYwZaT4Wu982doGgzFWd5f8iAxA7aGbDBODSieGnkfqo0H6fJXoQF7PoBrhbtgv66ETVL7tnhKG7T+zdUO4WN8xuy2P4Fo94jfDoxPkZBGeHMzu2GuymQc372JeeHO9sYnH1+DL1/AY/BsL7rCPGJD/mRBvUZZ7FEmXHShhKxU8BRtTPgf0T1+AiLp8K0Ept0GeKKLCodOAeXqPieUI59kpNsW1ABkfc8RQTMRTp68gaAih/87Q15SQq5pF21aB5r4wYp4ne72H/yJl4Cd/5Z0yy0CTuBwnW8diFbE/veT2ftzTZTYUaB33IElYA5iS7ftzRyYApt6cz0rANy0xAzgLHIxTkGssEqqMjJ8sKydzqlLEylWNi7A5tO2lkJHuKpudCwiL31pJn1zRFKUe1q4ADTrJLRd0q5rj2YFXBSLqP4C3BXBxK+Oe3LE0a5STZBLCPLaGyxtgqfdnoMwoTHpoWh7JCdLLSWr4HYLJihA7oC2Cb2TZzhZqii1JIZrbmFQSvL9Y0bo6Nnqg4aJ0mzRbXGGoPdO9OffyEbsqbihJXWlimcMGm9moEoQ5Wi9l24XxdygitXRwlf//+UuGbS0qMdbzJ9tIuz09XEk/L/1uuetelPJrlEeGXs0ENyEK5OR9DnbCBmfjUJRkicsJje9gZM/VSiqTwzH+k2fTdLMo5r1VToTf3JjF6edgV6PF3Y2DfTA+1M5mCSQEzPK7jTR7SQKvt7Ngq0PBdFMSnXNRtidoGUVb9dJUssNUZGLi5dovFrUKD2fS/AO2Bij1xzOXGTvH1QA1apsNOT6FDcHx5n6hYYXOpyhak2QChvHY9l8F/8mSJeXmv0u++soC3KeMcmBCn3hxX7rTGGDIxVVoemn2UXf9hF+H7CTUmvG24VMl2LH/D+H71he7/VisgSTIrXOKPvtUuvI+d/OOwKnopgZ5mxdbM2wJ1Elfl1b0tCYHxg3m7deY8W48kN6cLh4=';const _IH='d87d2679c99f16cfd9ec2ffd6a6fb5b907f36de6f794ced311382def6db2025c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
