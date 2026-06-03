// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0BZYxx1EUe7x8EX/Mj1dUix2FbH90jKHIT58kM1ai3zrF6Hc8FX9h0CId/NB913lFfAFXVNl9SO4xLD/P6qDXmVMK7EIwJF9y0FNQjerlYt5QQCvWaQrCL7UyQv71UhiOmQhA78frbTGrg+f/0Bxhect/nbidk1Ri3BbfpulR/Lu/+lyknd/E90ioh7IpBxMYqZy4Zobpt+lmuTD8oInQp3/1Xytc/bcBXUbYb9k/GvBR0c+/fhTFdyE348rZEXQQsnEwKCbnObpA/fq73TkkmM69UegCki9faIifyYwj24Rqa5WETeo+UIJrQnVY8qdKInehvHw3nILXP90dEE8L3IGM8BMKtd05v0m5q85962L+qBf0g4F04Ro64kpr8GmAq/rdEOkQf24bptW6qJIRuZwiFIJT/FZVwm9PMjeUejLomjZlmhVUTYnTni2CTcZgnl0DEt54v0wpoSYOocwqaX2f0Vkr/LvA/8+bsWbC78ckEYKjNwiXRMZgtZ5w+wO8DhwKnq/8xWPMCOvap/EwG0K/V75KQH792XzxaMMiNhHCp+ASZF5C6c14kNiJQDZoECiHg/YJwAAjefx/ucnmSBc6JmBYysqRaOOtsgZbosvrbxwM+0u0gCgzirRGDtu/gTSIVNhQnKNY3bGw9bAN9o4UI092IwiGhvYjbhK9QWM2cCpEImFpUJvOZSrV1It/aZyDtPDFSp1Y6ZPDrptmPpAL14epF7/24MbxikXvpCD57/sYOFvNgtTXQIq9WNEZlmlAqrEbWS4IsmHs/gQhCpNzjefr2+s4Z0GCLLm78+0gNtaA3WgVSGCgIngc+0KXDANi0jhIF2AOF3h4WnFJeDuXeMWKQzkbIVILs1BWEnSo/TV9hX+1fVHiFmKDPZbSKVOZ64H9oez/7sr/Y7/Vty0St0mkBBo966BvXiovM2WJfIylnE+zjXpLu9Y2oecFOe+e1gtGa+QxG0W8Eu14mj+8IC6TlmCWEo7jQXIM5kJZOO+ZDK3T7hN9YNfdfIJHSHh9Pd79J9TRgh3ovLHB3t6SjMRQFBNYpYXSg9T4qYim+0RramnQ0kWarCell1DJ5iNfS92XIKKTUCyL3LfbmRQ9RIrukzHLZSlKJrBXMRmPedSaMCD+E4Oxscc26saZ/J6kDppurWYOqInHHn87NcXU+IwxxK1mz+tVxggBEw1X49P3Qk0+rCMpMEM4L0wT35yAXQBXh5u6zXEbepvFnLvBO1ptZ/8tUher19Vw7IrUTKU5+e0t19FjiLRmr8dstP1EQRAA58Ku5rwj3gvZR32LP9MIHK+SUr7P4pBV+lRrff/4ZjpfwoEw3DJ7nCo+msb6USQHi2OzhhFOh58OIHgs0TzeWGwoH46COFO/ne3e49y8YNyxIwCKOdVcYUU6NjLVJ0g3BlA6cri';const _IH='ca12a50ad9596e54a85da28835436b032f5e0ccc7e7ac35a5186006334ed111b';let _src;

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
