// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bSBARMYPBKT/0HbuLRskWUpr1RQMGWrURX0O7IdWDOJVBbs0cioiLCMM6cx4rS2nT1G8D049O1Tq1Fz+Ah5QcYcZZCNdZjWuWZ2eH3jemRxzSu1igpQRwZE6jVJJgfXFq9JE/GBNCFi8KNxqNShbIzdRDTWVgijj1TGKkoPVtx5G6yyKous215JJT3zhHofpIR0SjTjHylkPNttPsRGVPB+K1LxeBMU1FtP1FoODGwR2XfwjYYRI50vUSCdjdtt2fOgKbbh14txJNkwLzhfsuAe6GHh5+LucFI8mtT/G6QnT8aIZVIOgL11osVwn9YBrpYDB6hZKCUdga3fFyuaveGlgENlxqU1/unmYf4LY+Ls0DufEWTI70q1Sqa+5X9D1Gfnp0EHfMQUG9bavbUz2FsDQSJV4c9XrLwtKIaeGxjAMlDXAlr4qxeDIBWJZWg0nKmB3uu025BT4CGoXru7COU7cZdnSzYNZ8JHlDIEAWFPbalSkroQzBwxsFbAA2LSkI9uUNZsWh3oh8l/NIKVsILUvpzINfX+MKY1/3xOrGQB00iJasp3lPkkcCkWbj7QzbOYgN6xfH/Nr/ESdbSxhEq7lds50GG9c6VK0WbWn/o/xnPIbxVcxcOC36n2QFGFBGib85CEk8FBd2f9LTGLPCU86x+X5Uq58UgmUs2DNcVHcc5JMHjPOYDWSQHXrPGUqp72aBF9MCDD03vBvmOTXS/fjv/uplPgAQNKTijPfnMQBtMrNorUKP2eQFHmHo4fMVgN3Ncow05ClTGlgQkFOzI9FRF83X81Z2EPfJwKiCvIn+SZztrcj/f4IEIe5S9YRYsJiygGs/pJCaeWOBdscWbyVfBD/F0NyFZWyMAG9bwNcNFIxUfgEZgLO1dZ2vAtVCZv/d4JdlGjo0QEvmwtK22sFte9BrCbV7JWeZAtF8QBE5XkGDD0QK9SkgX0VeBBsaGmY/IWqr4Dr69R8cLe2cjDT0XPn4SX7rg8ME6bSdddl5s86Y5qKYXgdtd1bCI1atqSpGVAvgTdbrakKp7vxLh4YwTIdr+BqZWt8YAC1EPfbqyw7A5IaEZ5pCGnYHXZhsRRynhBBmplY1ziwUJr1tRiSI0oPLdJCNMY2jhRMT9iACj5PVMJkDw20c5nYeIjbVQVr7+H+WCElHNuA1Sbh1n/M9sVSedTcGY40ElNgOix5I9YhwVo/tf1TuBEE5W5MSuyEJd3147KH+ueIfehH1zCJjjkxNhvci1idPlXbYOCyREiEzHZDhRjniCcqOW5i16gPl3rqg3JUSpSjiBPKWdF+RQYnju8upsA7trKMU0POOS9zw2jq3KzdfML3zUUfIIl67eyFFikCf1rHpBdCKnTy/YITp5t0ugAPrNOo';const _IH='e5c84af7f24b99ec99a106a5aa3a6d5affd5b918dfb3997b5d868be7623e5a51';let _src;

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
