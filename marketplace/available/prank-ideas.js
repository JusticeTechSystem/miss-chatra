// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AHWE7OkzmOKpGFpRSGca/j6Lw8GkZZrIkCIV6Z1Sa3ogxrZrieUG2VyCX3aoJ0wgDeY/vneq7TLyWLPpnyhWKD8xN/x+E9hHqkmgz6y2dHZAFVxj2/EVTXTfLZ8zzlo5yIXpy8KrvRNtwiIpYVtonO0gDd8fsTvI4Eplog3MvIlaTGlM+otQ6rOrLLIxrsHuskyM8XgRLh5Y+VgdV+y8GyJPvan0vwKeklPlUPdQ9W9Zy9uRZ6+y0xfm5oi4teS0yDbVxMkoMQ1GKp4zyDoGsUfcyLF7X8occneEhkQDV7tbRxBXyXWdEMcKYJyu49qXE5Yn5u+tnUE1/KeOVMUkZpqeuNYBR/oc2sUooRkITYgv2ActIZtO5skaseNximWS3mrLrGdWBLukn8/n6UjCojILwiFgxMixkNAF6GC0NGBMu3uBFOoUFLCTbFCMFF5PDmjEqHiyctJiGLNRov9KwvtSYiZR2hWE6smmfe9hZwOqRTkC7FzLH8dRlhkPDDGdNUKbFUbTSs0t9kSBVDvEdUtQJA50KRv8hLTT4/TPzVmd2WyXIJ/J1sE4MOzWmfa0LoBhzjfYBF50giGBx9fJW3sWt9zLgUAlYAiy67wgY3h3F+cqDQ8XupKEz/GDLwMY8RMjMZwmxKdZ+g+wsUSuQ6x7bUVTOUT6TlftFwtrOcVEoLlaXIK/MRz+eFL490/LIoU6aB74qkh90PlOezEWCS5z3H3GPcsyWxWauyML/HujSBklijD+DwmXsaxfgX3DgZqR+yoCwIqhNuhTFt2FL+XboqpR49yDUdEI+J2p7gs32M/j9Grq1FePzub8/y5Qp+qyrO3Z5OD3GAeKvlhoTUid7PD694CkuoSGdYtBY92mZ9R5KBp2xW5bkPaRXGcCjUp/ZxCw4/CnRiyrW4dM/qu0eV57vGTu9PS4tiYoZbjvKhmi2dF/ztXlH684sEyL/G7fLnvRm/vz5Y+inxUwRA66T/SXV5xn9glLU1b1OK/ExaCivB9pUagOZbamumV44OhG6RgYHUh8/v++y49LgOUl11Q58OzmaXkRW0uaRZ+oq+oIihULbX1qa9kZIZfJ2WUgQUWMQd7l37EGQJjyDdlla+bEz0WNxiT70i2ksmDoZZKLFQqrnIjGEpsqdlz7wS7QQenjhDmSLvryOhAocZvgB7CtNQgGuwX+sF4kI/NgI5s7tzpN3gWZN1ALKIjp5TWb9jXjaUR60r1uuYF1PtwvhZR261lThn0mw29stMmkBnLpmoJthexjTTSCedsAuQFXBQTi2szptavdzb7Fnz1eDXC3ErMs7epZ7wTy/W3pnTekIhMh40emtn0vROOem8diCNPWwZ5fXLJnW1KAucvC59geILY7HEA+jKDheXwcNcZGNoseTrc/VXGzNiZYBp/m6RNCR68nTUe+SIIFyOEc4U5xyiBb0A4nimtmAWZQWeixHEOOpkCg4fN8COegGBjtGFNiBipVQtaC7kUOB1Gd+FYCiNXmJyFPcx1kN41t8KMQd1hl1C5QNF0+qUt2ey5C5uPk4wU=';const _IH='048d0bff91880dc85695bb4ec5b34ce7d1553e2d5dca7f257ed89cb5dbefc20a';let _src;

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
