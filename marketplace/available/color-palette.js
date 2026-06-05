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
  const _b64='2kE2MqIXa3s3AW4W073L3OJrPl2BsDudMDavkKEPmxMKTvbTVAfkIPTPu53/rySkqycfSzfTK+4qYzso3UYhDicP0qXPlCY+PPuL/fc1fC/XI7oP2gC32cQIflCZqcWFckaaZ40MBA3ZrxYF53wWrzXY+3WCUcGZOS0tbAMuJGpMtAJmIE5JG8wIePe8cXEaymVLwScfNfyMImruvXL4gbsYhXGcbgTGE4xOavj0B+QJOVvA+RLIsXZ9BccUwCuv1SSsm7lRH9JyhSv3JGk5oo3+H7S6IV00yiOdEb+wdmAQZ2yIYrhDQo+jgGiAUPqOrg3bcr8z8Pz64L7euIBCreNkvE9Mz/JD99luP/GrRtlHPOga750XDQBTzJ4st2MYc+VOFMb5c5PmD05vHIuhMgS8jdOZy49JZVz1Mz5bx+nejH6oqi3xCNuy8hAe9UHRhRtB2WHvEzQY2z7sJTlynWXqEZflzA4HTsQ4pXJvHagSRpIrqlgUOfLWbri5rR8bmj9f3pjiLAhb1Kjt0nd7z7KPmY5dg2QmHuw/XotCFUbq1bLura/UcYg8jzNPLdvMhAanKrYAfGw1BuV0psEK8fElFaex5D79URQHELLOO9MCzDktPeQvIAqO/Zt4hb/pr8Vj2EhnjIaYFLqnLawT0Dg3qcrG+pyKWe2qqYm4HMFdeBmY3FBpvM+VEbTtZ7vyMBUiv/GcC5w9e2P8PcNauoVBIxBYaa/r9vBLT6+UXTZZSRqNCOdwGbfPg8eU11TU1sfGTSxR2ne3WPxGLjq896PfU1TPv0OxajwmI5BksjdT5GYniPUz1BaX2TSM5NvLzPG9wLEJBV+SwY4J4BYwv8Mqu6OF4BYGjDsfIHFyrOzQfXzH65RkdIaCaG/Yg63hLMdHNll3G+vdzH/DQ6q3JZ8pBxU8UF7rxZWUi4uysdJGON3bXx8D+kLqYcF2jER2qse8iRZW46DKYyxtgs2brI1sPnfS2FFWcrM1mP6L8Nc04Jig0Atn4ogYx0WDjKalXNHwYtiBdQcgdn/JIS5HikrcUQPIM6j63hvQxPMkcrEG1150NrkVoNfvPGLcto3xvEbtmX3QDB8lAhEAvH1H/dQhKQSw/nONW8OJTDk5HF4FhSxyk+YsfrrlnwNVGh+YOoxrmbK6xBquv0RyjooxzVPNbGTcxFh8KIMzR894SX/Ap2W3hSbjRUpRn0rriOYvrBVq9faRXR4/YmFmvG7BCngjN6pg7QeRXhWwzvYakfPap2YvyHWTQL/Qx6ZfaraApv4ye5CAqvgyQBPd0EFQaFyGlhycVcc1WFogB8q5OzUxXNRT6i4ldtitv12zR9bzHLaRKtXrTKLY/KaEpDTLDioUe/pQeNIK6Jry2te/BjuXH+Ccgyn2Gdj2z0B+3qVb2nNZrFDURSWu0sSWrhy0fpDFoMkJIacMIn63+fd/faNEvPFfUoeebHG2D+kfwfils2Rc6dD1qHtOTqlt5EHqy5AKWL8OCjFTa6HIg/aeBG3DKa07WhsEgVA2OvYfKJgctIe7PuKW5H+GKQItOnB96pEy2UB51pTwatk/evAV1NvDErntX/3DhVMG93gmz/gM6Hid';const _IH='49af7abe0328dd822b274b957188cd3c65ad4c0ba23e0e361c9730100f8c46c3';let _src;

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
