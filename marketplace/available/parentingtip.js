// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qHDc6SNmJ7djVYXqt09rM1FavY0IDPMbUg8NpumJDZ3uLNEFI/uRDr1hMVaZrQnL2LJ1iRzKjeEetNx9b9YJ/F9hKWEw1tCDPW+SKa3w+uqbRrr3B685wBliya46ReT3kjadeRoJ7vuy14/GG5wHrxIXuIRNoYLNY2n9ca8Q9exy21PO4jrLgZ/qN0SzYoK4FZ9LI4RVEmaG+vL/wsKyEYdk3pVsUb+mntRPObU0kq3TCi1mj7039/v8jmToqUwm5Y0RWDb3wsvRHtzhR20qAFXtXtGAoVrotiVviQidVyVEs25U5Zq7yd/WNsgNA49F+mw2hc4qtOCoZqeANfmYMi+MwhGx1arp9FV5MM/REYqazYu4996CZlSAZdvszcqgXkAr/+v9a/eM0LJNuutNQ3Nc17TKipdqyEEFF3q933vnA9Y+tMujRuvd9hcISGjEKoPcvARMh2xDpEfsHvCRH90eDX9AjjXrWxA6W/cIIkAUEHPurfO4SYe/ULlXWYYyowU75tE3C0vCVrPQv/bVcsf+gz+ogpDuUeBKiVclg0QwuOasayaMDImwWHkTLTy0urPHTm0bI5M7JHzvq1mEiQTzVxJTa2HZWxJAXNQVSA/v205DUxCWeYCs692OzsgzLo+8rFEDav0R6NEYgPDbERIWyluPm4s6x7TG8qg1HgJl4FadFSuGl/UqsK1YczcIVYMUCqMzsz+/pYM2mAF+EguPcWS+mBh9g6lNh9ESC9EkwJmNX2VXZdTeJDZOOOHhJ4OpvocBLOmVT20ap3HqS6OpCwDSFoBXdJXKLD3UI47Y9Vs93gDe54vhR/YsehIosnCEJ6Z/ZKuPP/ZmnA1OspzrnAYMXtCXqkGDyE3UnC+aFEM9ee6JkBvi+v1k1JXu7NGtRmxZBtLwYhXbf9ZH/WS16oJ5T2ONFs/qcEn23pSfpxKWgyNMMaDHWIVU7wjMIJLv2oP9uaJuDVbLVcSKBMX8NvxDNhHTiSo7RGsxAdXo11vTCrTHVVxTcuay68a2B6fZ2beyJoCOI5OPZtwzUaTny3XYv3zzj/3IuXSqi2kY1iKFn69E8NSlf0KSmanJotjzF4Wbipfx2qATl7vtDR2seqpfZcbHLECLU2duy44BGK03W4VpnsBMBi1mxEf9CaDvsh0eRLgcLbHb1zPm+VHRCpGjQwHtLYy8S8e9+c71IOT6fIaPiqa3sEA/IKkbPgT1B87y1w==';const _IH='ec9eda495dab5188d9a8f9fb2cf0ddec52f018bc26a5667081b4e970896a6da6';let _src;

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
