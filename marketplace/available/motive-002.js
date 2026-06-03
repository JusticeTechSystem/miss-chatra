// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4K6ltqHoWQUpEhf201XlHFNrZmg8moPW81UNxwpuXLWKRROeJbk0rfR2ocm/25OlmV9hP0VjBvJSyLdGeH2ZXAvfVE/BnOSX7++HA/NEP+E5tuF6/u0drQSMlCYB6L0mkDVAox4e/DJKgjbDGee5IUOJRwzeTiTZuxjkAU+LU/s04xc91u1CvlKQtVqIKubhdMTh7EPz2I7FSJPDHLyKwDfnBiSwtMNkbaCzNgxlsre7u08MwtJufvXGydHnA5yKSD1uGwN/jmQZkjc5FDcS84AW4A5PyPcdl8d4AbLXrFYngqPX++KasQT/+3icn4I0vZPquAaR7aTq2Vo+acNz4jENARSJRgsx3wo76/CaA0gt44KM4ivItDNZTIz3zIxc04WbKV8fnqbLNQ8HWViDqTtiwJqlU0D4DlTbdH5tDoWwohhYyEC2kNkhzIL86O42pf7uR2nizpHcQZBmw0pa9rY8348Yzip0naK26BWC9JNrhXK3EmsmU9N5S93vjPY35NrA868qTFHe1374pWh3Gmuki0DD7NMlqnPT1uru4xgepiRWFnHDqtH5HNsGdjdCPhmPbpa6boXBmgoRfoP/JBTnmclSlvkBQORca0Nk4neD2O27KLw+AVE5ItSgKNGn4G+jzs51SeVBM0WJ9Cf0TFBee5GLtymdRcn/wt58wrmHNx2mmKYpdQ8d9FqQDy5YbvAlrf1YYG3HBFaogCcMdc2vAzc/IvYwZNSW6TBLUcDJSjpxumiJUhG6h6H+SZ48u1M0l/6rosxzgzxVQSjksnBI2i7qaAefZo2d+z1ZgsOLhpVnUxECv4kvUvA5wrXsxNQokEOiCkP9mKFoFa965SWoCpGEI9ovA4Rf1SmTNM7AjvcYxfovTPAsBGOoBLC9nEizkfTrkMLeTl0ZhZrMJn6Z0FkSqA57wx6OkOJ1nUVtWkREyny1HPQ3FcPZjcHCc/UzoqRCRFnuAZXFx++YTupmtZmcU3Zs+qg9IE5IE0sR8WCF7TWuJ4MBh/OlSzJwodid1PtQrXGQEHUIi/M=';const _IH='6edd88e7fd799279b51c7ea9af77324aa155d4d4dd2fef64c21ab439431060bf';let _src;

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
