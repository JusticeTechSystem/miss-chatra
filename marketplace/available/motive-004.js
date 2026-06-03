// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mMomBoHyiKIGmEeBtxnj9RuRXVTFFDu8rI7+P0Sw3dyhpsS1qGCX0ghEOfTSrC/LPrmYXpdbT14T1wMahsqBua0CD1jxXpeK+kfagMLgIVpcdn1X1DxXcj+t3CbQM7vfJq0hlGcubcgOnaNGXRieGSwy8BKZIPTduDxLoPDD+YWqy+/oCjJSjRb8t9k+roXxeRpH3Ub4PcBB4QLv7kOgGlfdxTZdHI/N63ovohFvG6r5SKhCGcHMrp8otxYH+pDUUAmmVG/DQv0MM7PGxGbIbx3+wJ0IWcpfDnNfLvnjderJQWLC1g5BYqrLZoEISOICt1IFFPWUOXK5eqfqi6D0DLhIkWNPDMPpgSzPSRIf+YCheT3hAwOmpnm2eTjgpPGssiRWURDoP36eSN9Yx5y7Wg5pUO2rl2cDClX/ig3i2/tkZ473HCC4lD83PdCVOTeS0Blm1IjzbT6eMfuterSkjGDsUllhDvBM4Eae05saLJgpui//SRhu+M5MkygHCUxHDI/WQ9GGIrOkxtW50jD+Yv+o3QyUmBEuKSQ1ux4pH0AE8umqWrbj6g4x0oiVYzPuQhn1+MNVnmb8iHJt2JWPJdD8Ydi4TC4Bsgp7Oqfwd58q9XJVGfZI+9QvWxX71Kezdht6rjnjDB/GP0W+caT5BB70bXEZCJuNfoXnMlEuteZUpXDf9bqGv5M8veZMsIvKXuZGOtvVreLL0QlrRPg2KGUlWUUuihaxKIFsXeTPPP3yyItTijYNpvZrn2TtdUrpxiXTxYGnHJW4c1MPGjKtCTF8u0mTF4kIY7w3yIWcWiLU5OrLqGvUAzvsAXs/tgjzeObMfo5Ai7DIAtp9Izzq/jPBRoX+BhGdwN4t20dezm6yQmrkFWxzGIeRFXTMreAhxFrrOdtBLRY6IL5hY8MMJ1Ls1C34sdMnatPVGtMr9vXmB5RwGbFHZPWsvMdzekjbpV9A6xDKir78MtXWob7ugSB4xFWBOuJCSI7zRGLnRYnm3BtmJ8DSDtsZTMl8puxWRz0xbX9CYAMf3bcLjPE=';const _IH='3f00803713b5db6fdef08c163ea1023d3ef97c3bd71cb66b7e26777d4f849d07';let _src;

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
