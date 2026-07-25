// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQITcSxTKXynFulLZXtLAjzv9G1lSVe7qSMepPuMDy1i1kKCL/AViVQAI/feZmYpJcab664CdmarYyuoAiGoW4bknflqbLtDirGjb/sPaXIj7b9PkQVql9WCUiFhd2ylHfkbVR0borugZGuMzq6rzyPBTI2Fl+Eqhm/kgNMiGiIcQk5B/pP7KlGUsQEZmV+WfikkC7pfFlgsroNOJTfFDJ6yqv2RbQCULys0+8YsTJO94/p7FdXDvQslXpE/uWfKNJzuWIeqAYu2UmP4E20gT/1YNW+7q7yMzFdmluPTd9d0IrpDkZZORKv5c4gDcejfcJ4409VF5dDnQaP7fjlTTmkaeWxyiTHbRhwpmLwmNJFZ13/1DK3DK4n7CqkCtJlAZwSsQ6kTzavEET6wXhyU8SOjhQxdQudqRI+AdSmJNuwbodANEGZRTGXFa2MnW7Ft7binmhGTS2Bk5Klu1lpudOvlJQVtittCr7PLhpk2UTy55VjW525Ly7YXOo0MFirSy+hFGvFbZCdWetJZXV9pM+p3LyBYp0EnmMK/Kktj/tD7xi3kEiQywol/Ea4HmL8mLbtDhQ1kwB/MxB5+FsKOUaUfZEPRXCrSeoLqcgV1myDvqrJPf00nFyvS9yWA5aDQDq9cU76G8S54ET1TqcMIZOvxEYM3pnKCMNhE+Z45CSojpYIztu+ZrK7izsh8Pg6jdvl+BCSNK+Yi3+O7UHGPFJLuwaCA4SmjGq64qgDrJFJR3gR5f2Klg==';const _IH='38bcb3655e156956485aafc614a0de38a3825ae08883127c1ac3179747e3bcc1';let _src;

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
