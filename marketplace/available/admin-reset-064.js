// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8S43p65A201KwpAr2TmCluORn166HlvbrFXWm5rohD76caMM0jLXycjdFG1OGvDpFkAkV47Lct1OOD7F9XhVSXdrE2QaRTnGjP7adutZ3hKJgPUmT3x5e/7HI/CT/egg9QLZ0NL4WCpUeZModyAXFsw4Ms31Btn62M8gS8cDlxeo+xhB8Ls4giidVmaMapaGNd+2K8vB7v8R2fEYG+oFmWsmYp3VmrduwmSJ4iYD+B5RDS2DD6wd2lqnR/fdqivFUY2+xgdmR9dQl8UVz6Tbic4xCCU22hezw5kisFFJTsCTUeTAJSLnuacUaAC3axp7VuZrKnwvvfX1KVwpW5vE2w4BbMlq4P/sb2sdXowS38bsLlo6jh9NTBbudmnVN3oSCATY03rTGxe/RT/49VzjzUIL31pmm7j0cDoSNaMd0YpI9uQdMGEFDJvgw6OV91GWgY6cVlbbzB4LnxGLE4kPzhbw9AEReML2vHnlscYmoHEnxWoRMViLC7HDUouyRIdGaYUattZ7LhItdzQeZKxqq5arQpLPw2xPtwzaXT/IxCpV/zsG1btth3xyTPG0kxJzvnZUDwkBE17QrgDf+G20oA/fAYKU15biwWeVJrIFTGPwDI9rrDgEPpV2jNFJeSBL61NipbnJgYA5cZQUJQh689qKHGPXh0THO4+h44djJ+B2xukV3rnfQ30r/N8J2HMvRr3kmYUxgEAs1BtFg/BCeFPecdUWiVeU0fDU5L9LQwYWVjc4Y2v6yDUY7uA+8yfOETBNJ2F8gv2hQ6ge2/0IdPlbNBKtW4tas1qTxYav/0hkh4j5eqcUyG7Cpo3cL2IZs+QzkgRTmTrcO/CDjZvgWev8WBdIIIBPMn3s++29jZ6q9fXNdGtBKKMMmPSF5zD0oo4ajD+Kgsz+kKYzJlKiXJSxk0jTaKsNmt3Rurw3bI+2xoXFIPZIeeHsnerhL+mnjLUmiaQfb9LxOHxoBgEQCMzvCUdV1/XcaMt0+aw+o3EHjnlE=';const _IH='06e116fef9941ab8b86a6d7d2d605428d3293737b79a6367220002b4b95abcc1';let _src;

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
