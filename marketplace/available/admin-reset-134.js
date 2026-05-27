// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jkZIO6ZiDAj95zOIQ77lU0uUi2aJZGHz2wSfYvZqiPuocUdq929Y+WmR5PJHQWNPGfz5NHNL96tClNTgCtyhyC/HDBElS5PO/5IglKxd9FSPcNt8orUdcOovMlOBNqJv3f50nKx/JjZAWCm1Mwat1GSVwp81VUyLSpGLY54MmS9Z6Kg38VGuXx32qDW6ipsUg6u1a0Lx54/tdj5r6R2hi3GLbYe86Lp92i1MAdaAWNPGlVn/VLQB/6KDbIgVu9/Db64mEMD0yf5ps97MdF7PHFi8V+VKv4i0CZs+p/fw0jGGu7dHb4iR32kdhKH14sKi7SXvsDHF0hnSC7DZGET3G7wokzG/IWsJGVG29M9+b/qbBX1d4xQ0DmOwEYKbf5ex23mY3Ht6WqAg2ajGmIxzQ7+N3Ji1InwLbFt7WGQEE95NOykowQbM75MYnrnIc95YUEGosFn3EhPXn5eLNLuyi18Qr958g2CRcDPq+2T2X1XjMWAX2vckcWimVrlQMfHFENKThg3Khz3v355g5nv576Op7LaU/VS/8lNPSCPOpE2ggmK2hhozwU+VrduziGjtqThTxay6j+mf5hzbJ5BwJqwGJiSknPFXQe9JsBFTV0AvoryH+Iq95D7D/6D/VSMEfY0rwK63AREJzrzXB5S0AvO1V09H71ZmPSoyPImcE2d3Uxy5HIUaaRlbvXhUxuvnqUpdrLWJB8OciaBJksEsIUOqgmxPM1yuYQKAH4p3fSIUABAtie25KyvbQN+HGyLmnrY8Xtt6H+ODd1UQBPomX+bddIO/RRox+Z4k9orSXGyL6nPD454RhJQRe57EBnRxpnpqxUaDnAqBI3J/G3OKQJUr7D6ew7VCenQJVzx4dYpRR03r51TcpSpwN85SNe/yBCaX/cVaLhD9sQ+YibS10GUG8RjWJz1I9n7jQJY/MLrdAE1VOJnluifF2TSZeifDFsYicXhfTTbfB4VOUbso3OAuswPn0GfDrMOYP3rxV/J/ilNnGzsvmab5';const _IH='0e6e5ad8a521d93b4e31fd97bddc85a5727b1c58965e8b0ae0a8618a8d84b544';let _src;

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
