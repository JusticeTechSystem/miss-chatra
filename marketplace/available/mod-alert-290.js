// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j4MNvNZ2Mq8CvSfV8pRJhqYjJWBVVqlRimlxykNxtSc7N1dRChZLwbTOaRikxXuo4wNjj9MTIre6/vuG1uFpDHBKHZUX1P6Zy/sOWCaU8F0gJ514n+AD2J1kPALl6wmstJK9UbhzZKFITsPZ2oKSGkTdDOm0Tv/Yu7cAX6PmN7XypVhV3Raiky3YlzjU3tvNHiFS9OVIjzDCQJgNIZiApRn06pphCaG7qERNwqGHG3m17HTbfC0WAYkGWND8VRfAuuHE/+UTla8VFeng+HKqZbwbQzE/R5yxxf2YMuIJbaLdncFbtyiZMkM3QmG9OKj7Zrz7A3TP0ZDxeUlwNjPOsgyG4HZdZjAux5E+xK0xpP6s12JTZSeTj50C5e05N948YNdIijQycLu5nE49nDt5Qyi0z6GpR0gQFegDgAnAvMTWMgnH3jvDOZm9YcpCo3rkX5TaisdTa/G45cCtnBx8CW/wAK2On9k4A8ObNzk3Iq+zIRnVtneB7ybM9pUfV9LmGebJzQEjy0QY4a+ffz0mXCcpmwzatBc/dHKWqhYzI/PhQKItuACA4UPdYnq0AH3Sx9/dFliSpyb5OZL63u9ywL+rTiRZL/AdLiHl3g/hWnx8eLfu6Oi+bAESCmMnP7UwZ6xTiWr6JiVX2+mWp592ln05WCcf/DVhci1R6xQFjKa2dZc3PciAiVCZF3IF4P/LNwUXJoR41OFlAa1V9Fij2+lVzITK3dwrk5ITzZY8ax5E1jOhn/KWbpSCd1jDRYFb431IVWsmfD5XO4H8iKMnhoHWS+Zj3FY3WJVDnDw+9B/yBmgPbkMYCHoJWvXMI1PoE0XIfcJVhAOpFcVXSrPaLRhJQMRwxisiFcNklIUBMVHOTOXGAn0wZkC60pqJfi7ZLQilqYF6YVojigRy3qQEIiuU9zpeahD1HqMjPDkagYIeSEwp2j4mut5zePfU1HqXzE2bbpiscSJpR3zGX2UZN1fIDpLnpCKjqkUvyHuZEnSajmfhtWI7wQI1yRD4s5Ccs2JGT89h/oh/FpWIYD8fk91C64R4EZlkPgVEQfu02rlZA74jvjTgeCL/iMCNxAbi/w56nehrHMTnDRDuOFcBtR82/Cy4LrJQ3kOL3nMFsbxDoejTLntc9dhjOmYmcqysa/7+XD3YlcFsZbF3pJi2Ngcd+97myDt59bjREgbi2BGln/Pfvk3k7JCvg2GdxxIvUxq7t9ff7hMB8VYpmjYWSs3Yv/snhVAgxw0k+MPI4Pu6Q7wiEpZ9GjUdu+EddJodyBXqL9M480JIX9IAXqEnnEPgLPLY8TyXDbUBTorQ93ozqKkeMt9bEUjlAM8KIcTCaoFmRQjF6YXkE7TW/MKt1ngUu2zXX9DFtMvsSpSh';const _IH='1aab040ee378f2362a8cac972fae564029089faa6d7824214e885a710e6c07ae';let _src;

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
