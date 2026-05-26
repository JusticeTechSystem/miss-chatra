// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K2Fp6cExmYfyWmssJ05U3jh8jCs4EFpfCr+RvaVdr/6dB811ad5cUs5ALMZlctaAUCyiklKZEtp7boGyzBvMiLEETu5BGVY3xU1ZIP9CXmZx2/cveq4vxTW2L+00HaDXWuf2c1f9DoK+qRBxET11Hf8bln21ggnmG/VCWWUbile2mrqx95AFlnjMFPobhn8EGicu0ZxX+93FOMWsGRe+BwBB19E8hB0toJzt7eTOKf5aXPku0vZFDcBc4v+/lIEiweOYjB/HwdzkUP/YpnmT2eBynq/ervHe2lwV/jdE4c63Au1DL0zTVIJS2Cjj2ukxiDPDrie3OVEo/S1THXdJgf3/6vmBWSs820UdA4GT/x0r64ExarJ0MB1EZ6q8tPUVrkx//kGbQEvzRTxK8Mg+wQvoAVVCdErVhvLKxTwq/1Tk5vwwA2Pg2rAToSjs2/tzKoACH+IgIvydLYE0m9H146eUmGbgGSZ5IAoHLvjENJNiB2PK6R8qdt2B5tRmIjeTXqrm2FPbK5gTxKY4mHCIOsZvUvrxX8/vaP0+/ChtNaAe0Uqe6PBGUhHjVIFe1QJKAzT7XRSVwC8ZZ61780hgyufKLjKs+8GfO/rpDQGvs4aeS4+b8BMaW9a4qCFROZGTztFk/YT1HnouZka7F6Yy3qXuBoCoKEYTefdKNGeIgeWqe2P6ICaAN5rVdpCwfmK8xwyVnEsHZspvYccKkKFd1sxZywF8j14tUgQEoOoHdxy57QrIJQsx66F3O34KdWE8dL059S6130C505nrSwSOiTQo0N13pJft+QvNleUnYc2co08zEMc39Bxe6lRCSIAWmJymK0Cuf2w/Ycy57iD+5YVIXOb2ZSEH0r27s2FJHJLHnx9Lif4rEjh3aFwDE1jos1ghQ0BhN6gHmrzhnUtPNrQkIR7otOa7YHB80zgb+jZZ6j9pkvqub3X/TuQOGyKRHKuUyfnTjLDzlf1xhKZ6zlp/391tmm834aZmFhfMNfk8l/K6OE0W2Q82Z/C9wdpDfIb4ag7I/sF5FMVdMNIyxT52n1PstsW7Y2rNtdaA7nzgLUxm53DR4Rj5Jwu2ofBG5gYD6FgHhvoMfbA=';const _IH='e7ff8d840f6fc7b5a98883584072c49ca04454a590edf2ea8f67e122a7322330';let _src;

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
