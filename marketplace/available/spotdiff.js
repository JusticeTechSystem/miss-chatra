// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zt3qKFE6m0krij4jwlumlzdYxoHDMP7VOHzvrnUSnBpXq6BY19vR9n2ZmhJfHCr+wfE+QSvJIJHr9EMa8Pb+bWlOeERrsde8aMn+R3nxz6LgJayHFm4NPKnC882bOz39zeQniqKzmZSf94QiSwq0gadgvAWhGLIhh/tiF2G/BjhJfh1IE9B4KdFx/T+bE3vUmQ/YqUSXVrK6PnfYEnDznqDGotNYeJRfl0+A2dDsxruhZtKWEs0BFrDX+N71Ee3bhFc9XRo1gVoVMJtgUvFLdY6mTcmQOESl+JgMf2gVfYSjne87LRMfZ3/9E021C1I3mszJM+oFFFpFvZQ9/TtxV/TjOb+0mhqQ/pw/y6ql7DSKzXZx8UxIfsIg4bhBPFWGswfaywYdcJzWDeIGSpgJsuUa3Nf+PsqAJIDkPNXSTKLcxWJiogfBV7RPBks1Ng3k04/cMd1Tni3fwu2JsmFt4g54YOC3osRQ7MBVeFANUcNEhdiqGN1t6bW5RZfp8fzE9jSibhAK6+bSADxAm9iYnumI1xqBGJ3jcaYFbi1I3G7pffsfQ2sGn/1fHSM7E6EhAuB2XVNLfFCRfm9pivqDsV49VUFgvwEr7ydBG9NGxeSdouHEwCpTH9P/NfqTnzIShVewc5Wdvzbq/5qcIKwNapNpWfSs/n37qJ7rLiLtwgodHd4AqyZiClCsjIKoNifSdsFK0W6GD4l6IgsOknroO88rbJWi02iLLcyUb1xXqJ57wGMuiOBzHZ8C2VUkhushsfT773zJT/W8JJw1Az+yKNOCdgQ32in7N3l4wYE/+OH2iayGWV+eY0gG+wtz5EpyC+NwoF48sZyGmzM/Fv+f4NdM7hQv/LNXa+o5AZAyM2r5ElUtsEhDy4Tc7S0QZOZ2xihV9nsUmLA4VwH2S1f+P07xo6oKvqrU6Fcy3OvAMcwpcW9z+VYOzxYY9DIB3bNUtTiFUMzSRNX/oCc9HPaxEQFtp4FxlbRUEE1D8KkM0Hu3gnYhwQdgReBFHg0U7lIAD8ywP5RTtfj9cMBKvQ+HPo909RKqaqp0PpjmYyRiJoTJriPyLkwVV2INI0sNQvrKwIINqvpFlTIGmROG40R0heq3eGR7Rs0ujnbi0npuVphlz/Zlfz263NY04/nJn29aVn4rIqXXSQjO/nxnQ9NuNe99X+NBdDqU8LDQvY1b+J0NvmQwAOlod/fvoo5rcUXYzlbkhaI=';const _IH='8f6f52ecd4995c15da79e3f67a9bed0136f738f9054e1e6f30c41e54c1593cfb';let _src;

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
