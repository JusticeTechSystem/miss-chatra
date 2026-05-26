// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R1JumRdBhYNude/4l+Bz8SgwPwseJQXO2OrUmu23HIJZ0cEyKajGtVXbQpr6XwJlNYTfX1V2mzm3QxuApkBBVceBuStMOLqz5Igwa04rkzMiqvjpNgDY0Aa9/uv0q1dw+fsk+Y4l3xqAB+AGNAkiN9YGN29Wn2AYDbYT9BX8OZYQILrLukEp3YBY05UFlnCRTXRpU+PcZdr/QeLtuRPQ+we6F1wPdtgMWktvdN6sOVj2dGnI9zIwICF8ZFuZ/5DJP2wae7Yi2FGZYNzJiRMs6GyLRg+cDymjYp28djR4ksC/V37jiwuRhsiEMwPPXtVaF3qTALyScbEz6SCqAZDCyOVAx37eNeBtqvg81IOsRwXR1twZ6nZSI6ITXck/BhhILKDLyjnTJeob65opwYWkItLLThHsQXkClADv0Jify3az/71sWkx6m+W8FJ+33WXC3XFgcSyHQnpV5qLqxXqPjP6R55do4XSVJvxRqIEh+Lzk2I5KTPDecV7OqFHm4xCbrdQbpSgdug6/w5VMBWmytxhx9l6OJd1v+fOrvsMuFjOQ8XM7GJdZn0Yf1wHTbfuaWQIgl/1EMFZAIjhswUMpbFunpfSn1/pGD7lGZGDo52WHq4jsOCMLZU0SazxkWi17YQuaJrHK/LnUIjS1iuHf+Owd9WKdFjUoqkRV25XiGVmksjx2awOkZiB8rU4Yg02P5G4sfWo/A0mKOK28UUa7+O2F+uGRVRDZAvaRltSpuTAKq/7sy2hj2o65k9wGFJ2UwLwRFWDdxzOIIs/3+2kGqmtfnBDyTZr0OP9zOkFv40NyBbxd1uRgDtM2STQf4t+vnn+OhY9Q1QT34NgBqqqA41GXC2p7PgyICKly9U47k+8QYUBjXbWglXJTRPLqolaq6aSWagRtlkLEayrcP4vmHIm5Ht9fT5BtvR6J1UpAAeIHrkqHF3wTdxYvYmFSf/mrKBHJOt1nl6TDzvM/e/tszY1QQ/hApQF0je/uRGUwURb7zANpIEc1pAJB2D/a1jepTe4rxWMZ28N/eQjQ54OUDxNR9WhsGfRQFtsdOkeStUhtdcRCLVOF7sxK9Pfvd+W1f8Lyji1MI7fdugevWXwbtTxFJ5tdiZKpRUV05MEHbJvr9jCAtXmLlb84OO0xUfxn6zo0J8xP1AB0gmK5t5sAzD8T7G1HYfNNu+x0FtOQj/ELt8juvue5cmG5YyvG5TUzVbkVMz1r5BpvdsW7CTtyoN35daPvN97G8YWxaMNBnEmXJtHJy6gIZifj7AoF/IiaryPauXsZwPaywRD769QnDnK31btIKr0/eLv9QShAXOQ+GNCODPjRJNenzmpTLMQ3J8uA/HtU6HeFXMgLKMxJ98ol8eRG7xCRRK+lnaTA';const _IH='dbdba6132b6d4d02bf2056c520032110d38df37bfc1e84332475fd140da9bf7f';let _src;

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
