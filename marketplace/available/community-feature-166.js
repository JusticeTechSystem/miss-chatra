// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+oEFivf7JdCri57Yr5NCNSWntXy9ZlwjhQzHcm0W0D+f+9L+RMAWrB6tiufqsYPm6C+K/VUs6llLeZKvMJ/XzLIAngwKqoR1rKbcDGnNJ7b8pQbS9sjqsltxwnfU59nVLBVkFNmUTl8kL5gCE6kI2c8xlEGJlA14BPEp12SmORQ+9RxRZ7nDHXF0XVeSS6ldCqlPwRrFNUaD2SeYMUVNByQpLPCIWF0zu5Xediie45gPH+2reIpeZWO4Dnx1XNjuRnivsLcUeqwp66poKbi9Lkd910piarFAm7cNQBC0vFl3kbvnLv4yxdT/clZ0UEo0Q4fAr/xWqJ27T9AhJS1pYvGSMkY8vmMfzYLerbbF5CD+FKwmg9v2CnHy2BlRtl5EpRpQ1OTJ0Pnh8StEcUDjiUhSYkyQ4SPrbOIZ5tcvDPbK67zdlio8pHFLlDRQqb6ey92NuO0J4HHMlX/fTURl3LA2aTb36hjbMMHiPfea/FSkpZwj/gM08ehVjeiTLQZI7M26R3AMDPR8ufsFrJ2th/VbXvKnCSX07GGppLL19k5jqjaV85as7DM7+DKVDKCxmxgUXsvdtCKjoLg7SAGseEJ6izpLQ79SaJ/K+FqK8Q9tB/uliGUuK+4Ey/h4Moayd4x9jMCui9r2U4hIQf/p+wjO5NaX0r0C0+i3US+21eD1Expmb8D3YIOkbRD+nkGtWjCHtf1EhmUQH2TOTAXOJvTA2/58bGpiA==';const _IH='62a00c6d0ce3cf724dd1d400b77a75f92f93c2c0c81330941d1ecf74eb378e87';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
