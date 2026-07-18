// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyhPuVT15uCuTkh9mh172e9kvDCjI1/9pgzvrcWPp+q8iXIIM/B20mQLM2N36tCSkGgIxcPyrj9IDW3E45HUWh0IH+ozwbSbzWFb2FCRWbscPV/vG3w15JbiPsvXELFy/M/wVuIIcMqtZm04bjvDxqxupcuZWFNmP7kdRFaSHCPRYSOhjzpUfGkwx1ZNh5dYJ/wcyy4WiLUH+jmcoMcqVINLRsVlZN/ACZIDJlZ6GbLPm29eYdT1ZgCiASYMXKdINNzZzngV9X36T0Jbo6Etsn3FrKyi/1fLV/hmQ4p3iaZOY/lcTCbSwdqVQRSwQ+m8FfhWR7kSVuwue1OwijB9ZBfW7JqNjCjdHyhoCDup3O2k5ls34wijwK77VGR8ef/LMHzh9HG+hbJaP3z8Wb0IVLMMK9JremR2aGrPXw3umIYRqUmx/IYZBHsyOPpgSCL33IBTzfzmqVoqzJsIxiC1KHL4Yv+Wyix9b1nkhLAzNNUHUJw9YNuHGLgTzO+A91zFT6glBTV5KULWQnWk7cvWMXGAcsd6Nj/asM4CMycLGaHlg988XriTCmcEISCUj5LbC84MdIwXxHTy+6NYIt1vkeekVXgf7bnCv3/L6eZwk13H+3NyXRTP/RfbGizzjvJ5dwpc423ISzkFpO/R3dySzqDKJv7/D9nJc+jAFAMJUJYWn8+5rA84dpuWmKpuwyGMAdY4ovOH2d8J/w3Rssjctud25nXMjA0lBy8zKsJ8yP9JvRavGbeb2WB/9bYND6lfNpnHj+RAZuotrJwGAuO6O8chTe6eYxY7ZqcaItCHkPem5YMjlR/7UR3qZhkNiWxmp3z/AIbph5eTUs9+hyVI5Jd2QKjxS/4gK4e7QUGp7ks5Y2hI5lQ1tX1ubM+6i6baOQUsETlGRFBKnOcwecm6Soc7bmtTeZvp+JfGQzHss+qPc5/+WtcXb0';const _IH='1bff1057f0b0bdb6357ef308b833ebb2a8fd64c814d3ab1c6720ca870c336fc1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
