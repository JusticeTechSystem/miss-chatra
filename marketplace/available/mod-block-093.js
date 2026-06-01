// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwjT2jqczffRrSChAXslucnsmKwTuZf2l0c41oXBqonpUH7ozQhmFq3AX87nWGnOyPl6FHy1cH32+VAhl+FiAhd6EbLto8RiX0Ko/+/a26hQseLypAopi04HVVKVWqo83c/yEOREbqvvLREetoJc1sNvAmA9q/yVe8NWZq90oMtdUI3k2ey2WOoXLVZbGdoGlGu4ChkN+RpDNDMIyCeqqngYszlqOPiG2yxIpX8qTddF5Ql28nJS7+xFJUTDTwAPFWDKgPxj1KS9i1yfxzeU+sd8+qA8pZLOaNEuUvSO6hgBrIkvb5H8d+sZt6JGC7OIJs1ZhXYv1adSreX8H2SlrZ7eDbdO+rEdDY4+VFWd3Dh/hsQVwPdq0LZ+caTUwKrBLnIzOAYDKQo2J0t4BuFTqxQnHfhAxbR+skIYXZnIcPzYY7VpG7aqeOKqZlhU1Y7gmdFMOEdXEQbGxZy50pRsQsfUPRmzgT0oq17TxrCrlVysirDFQduuRScPPcjXF8OfQ5NIOhofhCoyrC2QLJuQK7/l5R7v/TwajX2SQ1keA9z4HmsHS3npKUQv7GJMQMV0xgqh1mCk2au58S23ROzTaAv6ujFN4fTyhWCBeJnwMmQUw5v47WATPzW5k2AAMzmLAPe2nkoUa7mAkTWODgTvLHLX3M8nCPOeLchYj7v/bo7JZ7yeRyRZO8CnSiAYtEFVd+g0EIFUIF2OMXqM2mJobjhPKj1iv3ZgmTufcfbj59VXWvQTJKHVp0I5/qmMik65yvVwjz1IifB5WHi1Ll6PF4QqWx0Mc/kVhFVrgUsMnzO2v21iZ7FgX4PXB817PCtgteLn1NRLsuXvDKSdqfNCz5gI5NSb9a78pksub7yJg7OZEthw4QmoAqvt4YPpfP1eYzST+gYyzoGzjFIjRCAx779nTOLEFS1wdaSD7raZ/HUENufKRXVYSV5GzgeN3IqVjNUUenc2R+TdED6a2x24ioOeS51B4586itbCmgrDeF1ld9+yGTi3LT7GHD4pd6rIadwWcz0kVndLmn1C8IN6LyMRmaJjvtclkO+JtAaCMJrjigqLpGFNnz0arqbTWG3QKcJz+fWoKDepgHKIjZ0qpdz5d44eZtmWR3ZiHFlKL04g2XAiZwP2AN0wKMHcZ1rqx41ug90TeyTfhdLkmT1SVsYopC997xm+nl8RNCsttNoFwP3oJik6iwnTPYoQPvuO3bd50AnRshAHJtl/ps+OQBJ/TI3vJm6DqnucYZkogvtGZx74eai3/EH0px2E6UE4o86P0k1yOvojLPKuWTvQltWCNyHcyLnSlTm/Bpm3XCNxVwo8BcWIZE/QbVGUoBnIp/pSThaEqjIUpsNIWAPISf/wSqoFtMdPBZg=';const _IH='2cfb132cdc1035268d70266a39c990791e54d4e56950bb3c1a2c6e5f75da7ced';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
