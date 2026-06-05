// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KVE1deF9jzE7NcrV/68nArH4sculd76f0AdoYqPNwCHe1+X1eIcCBblLDuhKq1SnnE0UHkei7dmSTVx3DOaXFM0aB5OK+1U1hcTh5C6/iRuoabmjesn94vrVNLIuE2ajO3lTPcuzoSD2u0tQRVKIXFq6OpR0zNQFZXq1ti2ktP/5SPgOIB5dvfLZDO1RO/j/j5qUtWWnCMPmc8LTOoXdRidmg/eH+iTN6pYUp0IQVrh2L/2TxenQBpCj+OoLssDEjp4fLCsnExJOqECBMru5xaZMitcWlEVR+r7V77vhcXxgqazvkH7NnsY6bXWyewWIF1unMznbOpaPOkhUkGkJFJfgC0FfHBh1ollYyXW95st80OY776AHn4gzx/79p6mYgew1tVgjLK6BWqrf0UvsousAzGoG//aOvsaNAaoZVfOyTd6pPOKj8QzANxA0cjkvGlxa7Muew44TdGxU0aNt8LblMIIVfK1NzEI3he8p4MgsJwOz8tJKr4bCayQJirUtqoRaFhm2+scCYQEmy8XdTc+RD4P/9j7gmrkdgnB78C6xTvbtlYIIimAo6TASKr+c0GvMIN0FrGBSyXqjVICA3WlIaq0rMZ5X3c4vASomyNdt6/V/z+ISpQ+DsHoxDwrGHCFnES5n7DtIMRxXi2BIOtBCv+/TVgqPZr1KZabXFKKAr+f+Sw8a7gGw9dh+FeAOo6KcS2WAmO3Dz1ovPGtcHj1MG8oe6FX8IPrTmpnGXXizhBryCNg8iEuqQogGDp7qVGDnRZ6HLcHgoDz7TyPRG9B7kApV85rPCm4r17/lItG5R64MYl1//rm3MNqQmCpg58zyGQocgJ8ZIuoDhfCgUpga73b2YYewnPpXw/HMLqpsLozgHAGnfQ7T9QUF01/W/WsYdWNCa8z5TgMT4AGiOeO9Hr7E5UAm3OCI8kQCzoj3Tep+ru20D5UOnrs2rMcJGmAzjsuvvf1Ga1S4YUf/eouSjMRgRnEFIujEsxzhQyDq7PAWPtBhL0c8hiA4/khgRXm1G4iHnOKARvxHU+ypKYOYaPYosSUtg7ANH4i3UBXm5A4Z79nCRCbPAUPcFEHxMiSXpNVW6BARLu/4RRipYNswxyvDX3nhTpnDNzpfd4uAsfMPDjunouRbjYwp1JpmqJQqjyWReTRhNTffSy95tIiEK5EPvYRB4z+l74IpiHjlcUJbhwd+GUlSocGWcefSfIXXQFJM+tGgdWqzHgONzCm6sNOoCUJShQtROqFZIfeZQbRBKHiGOeqAEYsaVW4R4e+oQy8r1kYarqxU5BEH3Y7IDt77mWSoKue3AIocxE9VihuS3lCdsZKctDiUfeHx0n8HEWKDG80LxjkMvWkjNQt4oFW2HrR40wz/NfXWyQoIQExSkzn/vMCJVpmHyxYooeFuTmreKTbSewLSsx3g3VcYVGsAknT0O+JoymfxchnzSvMb2krFc/03MTE4+DeNeMJi8qk2WPWQEzQ77A9m3rJDJ91a5/RgIIRj199hcZZNyCYF/0ORHP37UDSIz9XlQXqU0myGPVZN/4OLJYsLGQWXo57AL2X+mESfO/NcYE09rBgnGNxeyhPueSYLWEGZIP4MlarabsUm5KRl7r/aYQZaOJIQ5Qc3tWrQUNFgmRvhnsebAX03LrC+ZpAiVGex5FU0TtqKVEaGfBhsZzfhfyt55MwyoA6YZ7xmRExOr3Mx6cPAI9vuA7p8Jse/IqpLP1R1Tbrc63kZd4db09HEQsAz8YfWApQstzH4aJGRk3wYfoV7nPZU8Gjmq8vuzhHJn2He6+AKttJn5z3ZCIBowxkG3bHzRuaH8pTQzenv2w==';const _IH='f49fb92020e42da58a49135ea8a691468756206f169317943cedecc125908b3b';let _src;

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
