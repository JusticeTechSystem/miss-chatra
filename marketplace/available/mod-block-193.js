// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRX1Yukfl98+3cNfIimG5hMdopR3wkn4EuamK0QOTpOwDu517PQujl5D/TnUaTGVzvTjJzcgoLv2vkSi8UbdnueAHwtViaSKoHUiie+KevfXUR6emea6u2Vszuua+agJe4CPV+85hZm3zcNChDyGEJLCXqJLW6L8tthoYTJhAncZDXXaHh0ByEGtzkb2RVhloWg1xU8tF06WsdTxhc+GYcQXaBdmMrmgae/P+NcJNX2XljMJcCGmeOinD2ZL9oy0qY2ekygQFxMToDYWYS35I4rJDa+XIRC7gAJ5z8A3srJwpvmjkuWkMnROaU5/M/FaeTY8iX1yC/+u+rr1UB2P3vnEMYEjgn8Ym0Y0Eomkp7WX/wvULiIyPZWyad6uNcF1jMGavpBoxvzzcZC/4VeYUCieusj5WyD2VpPyXVw9SBW/E362pw2LiCE9l+5hZYrHXHZxhE3O/sjqijmbhcTCzRYrCzu4yOWdRmb1lMa3Gx+u4Exvok5phU+2vM7pLlHMrUsIbjhD6fxEJC0UHDez+IdKvjvM5PRozri9i59neBRXlI2Kr6nf0muAUflbh5xpqV44MvDVPQPCedbvpB1QgtVaS0k9AuXm+3XN3Kmmd9/3qi9NHXSmPktWuAKw0RUaYybRqFFkEBwGqVxDEEPh/wo0C+uU7u/s58iQYqnQe7RfwaCFikzzkN1MBi1B3BWZoeq/HggvowHQ0iUQC6bp4OBFk5idAnQjGNeV5V6CpvnDcwpqr4Gt9pqtkcuaOfVkVslpWPaqLp78uENOzcfbQCd/IgzNPzavJrlGdLMXNWhfaQLIzDc8weMloxYLUVv2ta0jnjVP3T1tu5n5JY9ENWn1UlldL+StloT3j339jBKtKsltP3Dh0waMhpk73xaB5jiWgpYE6A+3cMAqjmlNV+f2R7n2KhqgjndGjO2mSkJkl2II0yg9vzXLL6hOeebPd+3CWayT7HU4gut2quaxatorHTsexSzCxZlpU+FWQ6A/eMcf6HOfnpyNo1CDhJl88zEQqsFnMv2s+3E9nSPEts47rYKeCl78XsItJYIbo/U6m0d6g52cmKXV0QcwmCTT35td1oqutsqt4owNsP/4RMu7VnKopBrUtJ8/RTlCv61Sd7PMO2b2RA6JUb3Fjxc3Yh8HvJ3UgweCYoVzngHSlTy3gspswxiaWoCcH4gYSG8jBkHgYB19A7rYTBWaFqjOekdGJeGrBRszAt0r1icB7gmIdzeomNWD4D6BYcUru80rqJxRkIqYSfR8XgoZKxZm47Kox67jwrD0sF/tE7L+QceNo768tNUoUn7nh17kUrbFN+KTTuRjpOlzqZcM3+iQ229Jp/ocRaJHYIBV73wyc8yH4rlIZVgl9hPMfUwMBo=';const _IH='2d9482f7288060d8c4d76843c8f839cce2407af7c2bb482a441a81be4b551ae1';let _src;

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
