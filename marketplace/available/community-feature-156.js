// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ohhj+4O9QFPDLPyJ8ws2bh8kBuxopnOhVLiRfKyFid/NqXL7+ECkeRiVaaJBdU4FWZ3zPMAeuE+GY0NEmvta41L7gyIj+qnEuCQ5nqNgbEef0Fvyup91MNyVuYcMxVnFD+SOjY+z12tXcOIjtIQz4JNCzgk1bEZp7kgrPY1ITW2RR7cagWPhXJ3D8TZdtVrHdNplm8mP1y4D1upPGg36GKVSq+JAT4MbY1yle0/2VED9gMpw2Xo6+tz8ntKN0gDF4A6pdeyXwqWyYSr6Vu3emfUQVhcC2tGxi3rQjDBtuNDtGDM5/z5ytf/lvdNjCF08yQN1j93Bry7GY2sLjkadAF+jK0oyXsHyRzLMJEe6Gb8G3n25yEj7scWRP2Wj9occBGvJhboxTbjdH0+tRRzAWnwOLrV7cWqjjxG/wB/uix6w8UhQrq2IrxM9+J2HxYtuwn/bMPUF2ollyaBzUapHNgMUQmXzx/TZ0C6oz6Mko8HniI/TVCzsBDLr2TGyCc4UidARdoimgZypmEXGWH9MAdlW8bG3su0NDrHnPtqFXwNyUbYmzzVL2wJ3xwyVJ/jTRvppqIMt2x9gQsbo8oSwupGyf5ViVcsWgEE8PbRqXahQ8w19Z+ogkPCxNNNAGNpTa28JDLtCHtBHENOKxOhCtsC5+uFoOIbxLQtqPHYSAJp7rAPjwwQ4914/GCmLeA9EK+bgpK10R1CuDNUHqyW5cJuLCkbvvm1m';const _IH='2f09b18c615284d93339c6713a41246e0474c6925244eae56348f7c5de2c59a3';let _src;

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
