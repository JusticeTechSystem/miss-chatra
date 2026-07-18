// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRG15zBhL54HpXIFbjVQOyJL0TMB8tNMjbv1PasMuU+PrIR0Xqx4D/+kO1VXCt9qj74dkWzXWxrjHRTgR71IfZRiY46WAjz3RBXArqn1kKMcodmnjibKW2UtNCXKD/djUB/sugzeg2kf/E+kIWGsdRKgHpqAWXmFXLnAUQWgTch5wHKs2ANafcKl/+aXrIqXq4H7QW2DU6KQ04s4X5vL4dnVjxp0bFuI+BNuGdd/0mvJSJMAE0bDx0V0pTuER3cE46gDJXzV6Ff/4O/TgiXbPQ0+sOfCuzk9KDrRjWaeQDM1004LpmN/gKofk6k6tAnF/r72cMfqAc85LEqttZ0AVDvHrOxI6LUa4y89uNkm+lwQ2E3uiIZcG6RVrBJ6zsP2Tmm+rlIaRgSPaWRoqbVgjq3Hp2plt2LnFkF5C4NTgZiTYfqXFfTRodrAZiOyZjR1StWdWM4wgb4Q7b1IGe4DVc7SnPHEN0xWtHPcAC3MhnV1mipvkH6noRqvpAEPEN+XvKQ7a+hWJayh2UxSkDdI/anzC33IKwfqt20ts7UvEHloQJ6k7tTsb6D4igx0bCzuJMb5Ri6mioKTCV4iklWCwnkTLwwsDl6TESXCrJGdtsa8JBG/jSOeCIPX1z/F4F0PnocAKlCQPAF+LWhtK3Ed1h1PpD8TclXlH0W0s2bN3kQ+QFR+bw9oKRKfgICjcEspgRaUXpQ/k76E9sIhcyrLyox9qf7dNdkwRzfuQaFSKN2dEMyozfLAnf2+9z4ZWq2WR/GRtt3PgRNmVmpJqHUpyC5bNxfmK1miZw3aKIhURhEasWcXKSUz4G5CBYg8ZeX7mOQZ3Do8Mn4pGl24P6c2C66otAB0XoPmkzdppNprOszitWtESAGCeC2BCMDoZAMd5vsJx0zBuMTCKXvD7UvLjf3dCXYEXFtDQPtdIQEi+yORWUtoFm2ylKgvD7YcavzCSrdXBxhSymNOuwNnqq02lodOJVNmiEMfFYQENPCzNev7795Eh50ICMow52JXZdwjc3KLi8r0LE85xzKGMboD0u5iDf0o0t9gYiT1cyP0tN7osvvwMoLMPAwJjp/cRsgwsn4rxuv2qYDI/0FTK1EbOGd/AKYCYyrK85tIoJImvZFJR5zaFERiu2zr7px+0Xe5lzckbPn6AG2xieHKbNFPeO4QEl3qij83xFiHsUWn4+PoUOKFSGuRyZMq6TjCqK7ovMAXa9RWGzAzJ8aK7A8EXU5Sl7kUU15aSBtmkIhKazfa0v5mWaS6yOnvwBSmkAkEqeUR2kYihh7IK5mu9+sHgOnvmzcOWjGXBdwUbTDDfxL+hSwFFy/WGwrUtJbR0LEpFolBf+mEJc8o0ksjJQ9XL+dNS+KnSlKa5TpUYEnFOO2CXVGL6r0mCCj';const _IH='66e020b261d2b02ea4ec60eca0760c757bfc0c5e116cee089b0c0e33289a86f1';let _src;

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
