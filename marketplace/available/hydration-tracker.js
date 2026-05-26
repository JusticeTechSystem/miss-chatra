// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pF+QoGDepaivqbMRHbzFv6Nz4L07zfpFGF9DqF3GHQ/d95AKQoBBVUiOJsNi8ng+o9yUrnP8igc7JPLlFpvmtXUrI9ppEDFUb0eXY+XY7MFc7HhfLGCp1wfup17alh037QpD2ul+MvJaN0u9LutoDARTdUqRsBsVGV13A37Wn7D4uz8Yw+MP9iONbZ6SocBIlq21dObD2Ax4Xu8EwwGQFhiFwHWifenXlSoWrzanL9Jinevt1mlLL6IJVeWE2YPmmJ4QJITX/NP2DBHlqf68MUDYbSzjlQLYBdr55yd3+RkwdGsjveyDNX3MYcPSUnnuQocNXlUNkIveAmempbwdM0f32LEngaAKZT8KETJgAtuT3XUg3e0mzZ/Ac53pbhq9X+8BiCwT3F0UghfOlfknEw1VEwbLr+wqEs8Bguj6uC5BfDb3o88xMOh3zq9HOSVrU40+oKkk0M5NYsLoSqBxVS/2Zft5yvErZoLg6hKSBjf6ncbUJhWbe+z1/mHHOIgvM+agJn3V1Pk4g8NW3Bx0ucg7oyYE+d1o/UaMDj+MaffYNEUkAaJsvDfsl4iczzqVD0gQAJ6Gu7wXBrPcCMvwAL3w08KZxbXvdcawBFf9r+pEYOpA31QFaV0VEPNnGyuts3SCeMd67YMKBrTPSJTwCF9p+VlKHDcGjLud3UiTonQiVI0HBdqyTZNX0JevmOcbu9oC42Mh65AypV5zVpD3PjzmSB24pdji+WM6bm6Ww0D3ZirAlHHSY8nLZnxyTWCBB5o5B52bvg+c5b3t5+ZDdmmGDQHfdrQXZt0KkNalkoivjxe8tWkFwrO2X0dsY5hGNLefLrRS9hI17MFKE6sEqarY/oPvEMbLejQpzoDjJRdE6GhxJTtCiHojWha0sx2WU9Hwa9TVdsJfMiZC32KbQu8iHcMJpN1e25Y4gM+bMCc6scVM0FY625J5iEBHGbogrDP3u6/tFgL++3GThMl2uUN0jkMrHXcs1Vqgtadg+rf8m4biiZie0nJkkzlcxUISu2oofv6/eY57OwSbK21qf+eXvBHaNs4lcr8u/2qwxJF9WJCuwL9fCnn6RAxxYhg3hDtUrgfaJZnCss0xSUxKZ+eb4voQH2I+QYxIb/bjeDoInQ+uAkMybIe+GcBniEzXTLIdwBPP026MgpMGWXzduOfUZpf6f2xhON6vVAXm+RDRSr6k0zQOlTtX6b6GRLbeegw6RRajxidDN3RPIoeS+jvw+86VuRMQqfqRlKgtbcmCyGaZRAfweZGhmeF+S7v4AwCS/jPYm/O3+3A2vc4ra6MrYp2iZBz+B7KNRuIeh4PnJTwzdcfoPzho7ie+YQxV4xf0SepvrQSgyJ3YPj38kXwfltDvIHk2nUsjZSVJKUQYD2+IxwKoh/AAG/PyuZA4z0E4s23RiVTUDVUM19bJSXyepX1t91Cmh/aHZr399P0N0yga8ETHq92G14xJlKtr91hYNTJOd7KINnOE1tixHE2IjVT0aBrX2sJAEeImDkQxvfnnFOKufXOcmfpRFCJgcvk0j2CUtdA3FBoyK5OpnyUvkoirAYwUOKMFLtixCxyeJr8b4jEMzD3KWWh6j6W3d+iCgFWmGaK2HGTJ1u6Fj7zVQZxlZyYR/3BHpRsO5KCOkwM52CYNYyG0iP5/cUTW3cdrUpnz54myF0Ppk3eEWUEtJXHl4gzqeAjQAsT3UPvwLWE=';const _IH='7251bdbdcd94f03e7f7de08591bd436961be879c92545f9c367108cae3eb33ce';let _src;

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
