// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kW3lKvfKw748yPmjPSwgJlt0FhTsLkdZmE+fAl7RpF2fl6IdJ5LaDHKgmkpNCNvW+9l4A3TI4X4vbv+XqvxK1JQgmSfLlVR1O7qGKWBoAFnouBgWAHP/bLp4q0CM+CpQZXianA9UCe0vnQRarGY1NYrGbpUaOU9y1nVNqdRBY8+hSRQ67WILVaBiAc98GOIHQa5OZDh/5dhifcHiwJRm+tzXTqYw2P1JLHJVOVmXb7N78TzksE2f8Q3KZokib74dzfMTTSeSGQl+ptGb6clr9/VUWuRFoNNMDnTr75vZDG6Uf4aZVIgNcOUcEEmBzFkv4xrPFsLOKf3ySABv3/G7B5tQ9T3wR+yZwuzLX8G6on+boaWVd3OxxEud/tgNfFu1EOdRd9Zbu4+2sXhGfgKD4ABh+x76mfHcYwX48fbfKtkX3kuxASwrjRnrbJoVbb1Z3L9gOMV/uDkae2ooL4vIiGYg/xl71OD6FJm8tSnseo+SDp90HbnVy3pQlSFzCfWzHPHB55fK7mzPM2E0+/uVaVSYRmtLKeDQ6fntHEQZwZORKObCVdd8X2Y2Q85srDguG2wnLbmqWgFmxph5QraZORNPeFhB1nJzIbdRAh1NbaMc8F8cVHrSZa8+qM6z0aLvbyBGPErW6N41bzHF8bJUU/Fy/Ebwxrmmd/kYvYMTIA4jpZbklehmdKSZWSoUUPIWoYZnxTR4X0mX7TVS+jhtCDX+p6e7lD8x/Tyz67C2gEoh8aMBAMIWWhngOWZu54WceeaPJYmeix0f3wu8qdnPwHpujUl2eLFhBH1trxZdaMyNtb9tewdwKCo078b4nDd7fNFeZmFsZUgRvGRMfKn2AHRz5nZ5r7fLjJeUWbj+4MkPi4heVN8edeFeyjmlpflKmURmr4dahWQlVIlC+uCSJz2s8i4fu5ryewQIa0VeM/klKnLfrvHKUluqpQJgDp67fvEPW/oU8M/sARrY77Jvxb/+KhLEJRTHcZAi5bfttn3vTG2r+TeTeOIc0Yx1Mwa75iYt/BzqBVOUj9VdMbXxYriGtxwo9E5iOCcjN8wNQEesng==';const _IH='7a91595e57f96bf1cb2ff26991034a289d332512bb6cff1cd4b2f6dd51210b40';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
