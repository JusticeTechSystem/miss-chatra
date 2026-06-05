// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cY+jF+PLszBT34IKyIjr1+ofNBp9RjVx/9C1B2Wxtc9kv2YSnJu5SUkM++VYHjGG5H0i1ztO41KyRs61szT07spP03PXCB/Av9Zp26mt5AAkAOJQhxE67nspKtfBGXOPf4oscVhUKmDtXlcRXSGG6ib8u4v5a0eVmHStmSvimLqJCYSacARhOiZQ6D3wiaLq2vvIIIuNf1AR0jOfvdjY0diaNi54KxNo2ssD7NxA570zHD4aCJT8X048C5ElXD5ZZR80sCfx8n6L8wLisaUCIx5YXhwnjzBf0GcwxzxM7sT7KcGerSJTYWnLNUykqSTzd366AkaRiCAFI3qpEIT7n9PSVWBUNB4kzWvWKkmANlMaXFI0crsikYktbT1mUkDRNT5DH86uRplEcaKrHN4NO+vGQPlVrEcaTILuHqegkb0YwoHsZ/huWyF5W6lfEUsszcD4sM1SqMBr3IR1UDlt13OGiHTZy7awaAnNtAaq3Bjv4WL5rNVeGALtI50QK5/nvE+f/MrHDMfR3VfMn7wBXRyzeQCh/vbDD0m/5++8RCkcLvehc+TyoUieYvGaE2hlwHR1fLGNRE7C8Sx/HAEsFHeLRPu1XJtvC1JR9SSo6iBW5iMK5zs3fPc/uisXoD5KPVtb/uMwP+a95D1bm1PHhqExZODR/ncwYbxmERovtYyi4uzCKg8BQ7Gp1DlqGywdHLhRS/8UeDn/ARgmzkY03crlfGlUu4V0lq1/F10c9S+JOvSul+llqpGnP8ZueroEMscbu1bWxfZLctBz98GAOsmDcoLNdUc/4YjVFWDHyDEg3sU+LeJLBGdMgu0MONL9n5P2PvhL9s2xiY0FAsw30GTGAoRZDteC0v4sYrLio3BeTmd+VLcWhhIK3vpLoPbsxo8yOGE8qqyQ9l2KxTs0ar9nDFSXR7BoxpoWrkoOKGE24a+GkIHhJlC8RXjJsEU1YZAK2Bl3wKuhpYnouy9wEJ57bRXWZ5R/9lQ7hHbmGKOEToVjuqwtB8r8PHyBZDl2XFwXiPwwBDDLHmEVsZe3EyzYo1rGgPhkap2JK/F9OnZ1RIFLsKdDQU0zjAtqVwmUgWGG7aRTH+carw5KR8r2oOwhg9sy1KDP921WCFLAAm3vQBduMfzmy5JRrXOOpXsuchWETB0tvu+IG0oWLbdrvDb9ENvVidSSv+NYmAY+FQMLgojzyYKqnvToeyIujXWioN6B0EiV5W2nqkOfCPv/GIufkiylPhTrUPEw+eWoyIjkSc2gxKE5ysZkn/QDpc/5qHW280bzoApBiQLQQHlF6rWzCtXJou9pxcwLe0x9XwMkOXnXIgYqggcE1zdwWXkp7kB9vujiv6acitK3aX4ocmyfET/kFTiieIVv6bKrURVwj1VY8N/lJg==';const _IH='993f04b846881f58e0f0b16a8fbf60a89e121690646d4bb9c437367a30b8df06';let _src;

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
