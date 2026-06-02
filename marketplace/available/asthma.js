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
  const _b64='p9katEWF+RWOfTP7Xx3ao4/XrRgay/4vXi2tG9vEWj6oTD1RJIBynWzin4pZFgjU3/P3g9UDPJ2eSi43ifqW9ecsIFwCsybneNqya+dl7SEhLtvo1Jx53aofXX8TzkFv14oZs3vlpSd151A+MWz+YeWN2V3gfCGRjSdwfdO0N+7rMM3GYpmUVHvI1hfR/Z6VzTYEtQkUGoQldfl3xVWV55sHJx7pK32/zvOZimKHCuAEHjdfjtilSnhlN9JrFTB5fGqEI/F8j/k2c2BiH0FHHw3E5yp+2V4vt5eF6YF8YDdtNSzML0AH4/jJ1TJocK+IXkuBFZeZ2P6jahY0Btnc2uT18Zp8afI+QDeeee/Ue+LdmiLIuhGtvztG1A7A15dybRmZPFaTnS1hcwfWcn3t2uHzcgZvGfJ+SO6dv6g6FJDrNGZhqUQfLwvjA3IJoBWdhvXopPHQAIwJ1Mkma2CRYMd86YM8rLUx8RIvt93kns+3HaotO/WjiIkhmGjL5UEu2Dcv5cC2mEtwmsxCAyanSPM8QZDSZsvdJYirspo8dGeWs5ROi4rqKTl/Z88lalElkAW55UAPncJseyLWHVhYBksAfLmLzBHZHC/k3jtT2VbSY2Am7fUZL6RaitL/FAwZrKN1Gq+XJvVhwDWu15O04AIBfc9Mow76EKABTY0ninBv6QIna4bNLgYxj4RDqQZDqFNmR8CM1RsNCottvP4Fwoz1huaMzrqYqSX4grR/3fUpMIlvNvY+0+fTLfzLSdaWsM419dBICdQuHIfG3xHkmTtCejL7DRI+QqiFO9SDw6VsrKH7jzlFIGLY3qrX5qMX/HoB5yXeGBdkOoS5bVF8Q2gkTunhFnN4J+7EzavYHRqyQqQewQfv0qOe9TlBGr/uKeqLwk/1q6+joqEsahm5/OfI86yuB+ou7es0EKcsjsqZ59H3FMO/EHcwEU9jj9opcpMEzmqHL3Gi5eF0CvW27QQ1DJoJEMy8XQ4jwF/ykZFeNAjky2bPODUklorZciormHtweGHyVoaJPnBcixS6Mvb2hj7CgmSC90uE8aKuT96jmCw9Lz+QWlbmUO3Hc6Yr7psD1DZPI0mhOutpgV70r6U0JY+6/mLszahtjtlukxrJRbNxSZRFZ1jHuBj1CFu26peBV6r4XMD1DttDclkH15o+yQVI5rKYSkTB3hL7uhVLFGoaSOMdT8lKDP/mft0=';const _IH='99aef471e52f3f7eb2d4c6249a6d5c9225e0f5766d38277022e011f5209093f4';let _src;

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
