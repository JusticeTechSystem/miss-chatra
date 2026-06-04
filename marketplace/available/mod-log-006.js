// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oB/LAM0zNeHtc0pf9rAAqrUjwSCSIBI8J+t0y2A81fSqaK2D/i2AKF8K8/ErN88tVDorMfkpAkaARI0AltxqL8OxdNMg5oxeUb781DZ1Yg6GFX4OMq9QJhoe1pLSrLIcIzkxPq4TtWXLGjuZqnQL4aPbEZZxfGRVS1HZm2Z04w4yOMWOqT6KBVuB5ZOuhF8t+8qjqArlQirbzHeYNGA4ZVStZvpfPsm8U0xLRrjEVCQ5y9GPQiDhVx+aIknbA3qbLQdHTc9/JOOW8zZ8gZyWpQYoMOYoj/qe3+J4JEwVM2KMTFGqCvzPo/ZJ3CBU6AkBjD+OCZbqZNqk3hDDirV+piK7iDebLN8xqY81sEq9KsGjZshPPOeuFJ/RI5D6CeSXdAgG8hLcwrdrXDMaCtGb4jhhF5MTy7YqfBDvG572V+KulWBuoCQ8S6IXOqjo+UCVT6COFRNF6jGMKw9cDibRuzri84/4hepn1CLgGivV3yFiwPWqZHGHfnYaHGh6EQNV3xJ2YEgbbXIJxpAxLmoAt+NhbXdaVdlQi1F2MAihEBdBUNfYvN8u1Ya1Q5itru68GNiYxmHOe0J58XsUcFrP0HvwmUK6KpDcvM4Zz9x+npZ5XiY5Izhux2IkL2jsYe1xRqjIZkMEXooAOqHhBZPfDkiHpP18ukaAWlOlJfL8OnVsXJwqOwqIegaHtFCzc+6yUt6k11H68MD5stbfmy2E0YiWF1W22KPf8OdrssOteO6bb8Rd5cnj00fOBoQslDfDgxdosDVU66q1t0qgj0qe3JXnvvrh61dyKvw9u+JkUl2ou0KWtEh2GXfT69Mo5+nejbXDYItam1UfmLGIeXflVcQCZeGnPQNrum4RYPAqk6kzrCbEGionHjt00fOI48tAjW793z0tcbMpmPr5WXXXf7N73CkdkoENByIYJ+OaCywELmfa/KJjf5Nh39waWLz3GZ6dtyB5C6XhK58Lt51GaAnfaLbd4LwWXFlV82pO7rpjP313Iun/ByYAJUHgxEH/rr4C3IGEJ2GMvUk7tg35DlVfzAilUit6KpDAHKm4JwkThBNnQ1aF3AlwrbC3bR8S68oAvJwwE8l959m/4Cq7lUcHRrl17K2OsJB936Gen0wbkcOL9+OdnTQxYPuv+8Sxm75PGu6h3UBNx1i6gVhS4AoJUJ33B75/vbxIgyI7EhOvV/Nk2EPThbFASXeaga8bqGMzDJs8yCpUpzVqBUfIDR/Ga5NESsk+6T1jmmcfU9GDximPVSuF9SQBFli1TaOpRevEivE/2Um8xTEZQE7Nks6u7bP/Et9xeOk/bvgm7Mf205GsCEbezhz1VrxqxinD';const _IH='d27e3493592cc0a44b3c4d5c8e2d20ab4d8fda4b8949f07438920a30c6657753';let _src;

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
