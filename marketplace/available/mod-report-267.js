// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U2SV3/Mh+iHjBuy5GIfd/iT0vForuwo9wMTnYGnSp7M7isSr5rtDybvNLWZy/sfwdzcfbFXdVVLFDQ7ZXNvXWAzY1ExfmdF3n7SZPKzY3bfxwiTQWhGdYhZ3JCG5aesOj3bB/+RbH+2z7/wpkWBd1kexwpg72zdX+aUl0xdb2qWws0TpTRF8DFe3Ql5r+rKSwAZIkW8G4Zl4svS+41XvkbR7y10TyqgVpFcygocdESqq3odaQC7KuOeIDX0K0vzjgd0ePQPMLGe4DGgHzP6IRddp/4qJsSoiBlT3zLfjfdSoQa2CrPiSxCu1z7fsLANl1+ZPLvtneKcTJzU70ndAcX3znfmpS94APXsDnTFF2xE7/Xo3BWFdfeD+BAacaGhi7MiswNE4Udve0K2CqP1w4KOzTkLvDl72hE21gI7e6k3/h4dYKivdyc7QcnPylUm6SX0+0jggPunGpoWrmLy/Ue7Qp0Dn/2uDgMyXXd3Kp5b7Yffuw+iVWJ4RSb3ZHTMsUyYwJSPjvxE91Ie5CAh6sSGwsUTFWqmpTu4UwX4bJ/8vlwzFznPn4GMIbZxd2IZ9FFzTIDUW5JgIUHB/hxik71bUrcVv85n75YKXTCVRW3DJSSJEE+KUGDcaVH/mG6JDUgbGc6JZ6pg8MUHLh41havVbMO5dkkz0r0UzCAuqAF/ylULoMX7L1s8A7M+wWhQfZ+wquIdnozyaauHNnoPifInZTxsTPaHMGobI/acVSXBBRdnpMi9WSwJfy5eAdEbyAfKUmcDwh4PDQvT0x+ssckUAMpkhBIVAQ0PKlQk2d8RI/ZoRZyd1f0JNVUrAPf3xJ7wIdEv6/vvo52L9IGwzB5x8VwAPu2FMsZRZT2abPP4r0y8AIko+hF5LaEmiF5iuRTbdM81/JQaGgNTWGRv1hpcjkhwgMKYoAmc4drV+2EfJ6I7Zi5IgNsvIBgR3InPDtu5lyrXZ3/GI2F2bZasg4ISRDC84K+bQcTAc6x/ycyJKt1RfY6MV5DTa9kx25DjidjQw7vLoF7u1+pPutEjMra/beP95JCggK1WCuPW0PADB9RUYyA0qUr24ay7egZ14k95si5vCzLgUWNWorIrXo3LXj5rV0AhWMf37Z0gVul2tCsaIQXd5fIJg4gS1MrYXp2UjvZJChRvTWwK2KljWMq1GO5qEr2kzn7nVo0dF7e+N77HWTZcII4N1agoNYOdqmWZ4L0fnQsCMY7nPEG5+5tbgfOkYXD6ieZURRf5Hvuc8ASy2w5m4ZXC7nusHX8APL31Um+42wG3sq4Yt8DgRhQyYiHbzerBTAG/9p0lPy15WlWg2hOX1ka97EQ4ZcD7WgNtpnrLCy9psUnWiHlW6WWOEMKyPWeqv2hTKn8+Rxum5RCYeS4oYDA==';const _IH='7423c99bd25e3d48f7e442faee7e76835425244c6aa501dde440c752a083c318';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
