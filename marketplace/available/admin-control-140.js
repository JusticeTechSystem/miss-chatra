// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y/af7rh74P32MthuDQZMDcaSO/nSjcn7liKKRX1h1BiJo6VmglaxbPY2DKjID5j6MNRRN5bseS2cKO2o72eM1Txt4fOjDtStNxqcPT04ZuctCW0aWpbW7VHKv9Poj3GZn51S/EStuab2YNig7wPHsM6qVY6P1NLwiZZ8P2J53WZfvXpjFuaCUZ8zACcem/qs32+o007Y3SGuGlDGOhakhKZKQ8OoFj+Ii8EeBIfWC3oMYDwTAYE4sbi0nMbwUSSs0sw0V9S4KSB0DdY7Nfgk8Txp77tGiUgkHL5bihtUaXd7ufLG+7JQxgU2S3quqMg3/ESeP4C6XH1/uBiPe0bAFSJtwNdvFR0gidXsd/yaf6rsHL1s9d3Te7z3MjzRIhfl5DBTaqeIM9obdQ52zFc1WhN81EJ3kNub8u1TdhJjL8WPzfEW/jUhAKZ2acLaz4SSAS86J9l6P6CxtX0/f5C6b1dY2+eHDA7ESuf3e5QwIWCZT3ElGZVlO2UVohi0AYAz1lgMm/qhwFy8pr0UXqBacH+9PZveUL5gepQMqc6/hDh1sUBACpqsM92AASLxP9k9kgIqHmOpn9iUMCFCixLM8osxr5r5mWprm5wS2uFDD3OHOxvrGauPTEBAKGcd/JElrE51WeeThh4G5izpFlFU8t7opGYzkBCEu4hOPdmEe7QGKMR84sstBn+UDoi/esv9qZ+0qd3cx8SFqEqt2yn6JSNaEn+D8dlE//10vTia97HtdjrLe+ggyo8pJmVKpLzGDBYp0ba0l4/Cl6/KpOSAKbrBlLTU2STCITsGa8V85FOI2yIggBEORxhUoNmntYI49QrFOjzz7ISLRT0MUH2xZ2lxsYu6gaAIMBkD3H6a5jVRHzOUosAcimj8X0XD22r5DDrOGAk8sMz2MZFjs6OzwW/mBmPV6Rfg1L3SrDAQ6FF1CRI5Ru+4x+yE1ERRzaxM2q/o2Zu15LTOKIBSnj/KFG/gZy3zUoHHABJ5aexRC7X4IxObDCZrq9gwze4QiDXrNooxxa4x85A=';const _IH='1c16bc453913383cb646f48326a4cb01c32f85c286d50b7578e667436ac61e9b';let _src;

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
