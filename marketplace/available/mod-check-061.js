// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKAqG1qOXkjKBWSmu+me/bLI5BUCcY+XMQGdkvcVgthPhR+A7gA9jMfE+sIfKTx0DMV7x0dPazd3PEOkSvFYjWGTVXgsSqPI1H4rBNmJ0RO/zLiUoTera3B2fxbfkxsJxCOD88LcYHKx4Vc90TN2f+G5W0jtQBstPiVOAjHV/yBx7c2z0y6Z0YCM0hLIcxI9iFXU5tCWuu631HZiFMTP7iJOXVevUKGrjhZUdLa8TB1994FXohD9CHrWsC/y6pDeHZ5saEeKigRtBoqvGSEYPVgH8YQsn+S34mVCWgNElxHRvXI1UgNByffC5cmnkolSks6v/DKbdIh2VZFl0ZRm/ODwsXq8ail7mdIMdr/aoiBExs/ei9fMxFKKwrea8YJmEOgotuA7UXEAhEtvaiAG5pjWMDufD1jpFW8BtaiBhnjxqMkwxCBbwY8IA8QjhfEuKYz23s7JH9TzEQCphHrEEfddkdq+BpPIe2EJcPImIaraMNZSeWrCTAEwz0OlXWJxzdY49iU/YBtnhzXKc1W1+lvpc2fr+1B1Oaqb9aaHnjsXedq2vJ7qt5UgNzb1UJ0e4f1p9Gn2GzV2hnEA24L8C4ZjcRaGodQ+OWkftHAt25CD4Qz2wnrjzvfo0NSEa+RE8/h6yfGAuKWS8fxGCavYFUbyn3btD9uQt7mNYc/qt53DU+h4WGLkQCgxjYJDZlDvvzywec0+oBoJptwUyqOeYn8Z09mXkkaBViG0/vrJrmHWktvwkHEQ6uNe8WLi+YcJgyw79L7UunqJgxxxGkMyAlQ+aNlxqC5nPvGsFtkNcbIvukPmdl2VneOw2T874nNvKnmgcOXhs7XLgn3XF6NceNEd9HLn6U4YTXP3CpCKV3fqBupCS5mnKq38UjjnScUXYDwzROqOF4I8fxNx425PVEVHHLd1MPCGiSGOb1Ot/CQdMPnqcslKUxoLjokIm5pZcPgqusUHyGHcA2ka/npXhXMxRt5cpEGg/tgRZe3gk8qP+tf8g87VGPVmM2WmpYX2gKujrzSwyT0a0KuJPoFK5yRPtcEjJPzyWYFgE+nZRVCq/aiaNnOcr11ZiZRSy7pNieL6JfWaeD22IkKNyJWw9Yy2vcLxuQiKDOq9lDtvo5N1P4KiLNt6zPKww54OHIdOjYbCSLw1EtCwJGffjuB2p82oFFa2OpdYfqNtxlvXqMvD9NVsZ77npPfL5RUzt/cwdsurl+gRvypF1mfahaH0wY0iqyEJ+WavwY1dmCfh9U9JEvNkCRqTBpv4VVKFhVNfDq53ZcwD2gVLcDLm79S531rulhfsrs+DphbkPE6bjGBL9sQ3K/58l7zPNEKQq++coC0llfRkHcaGQ1FuA73dB7amIpI3dAgLCR';const _IH='3a13e0a57bce879b2c534a1f7fb346b1184d41e0f1b237f22fa1eee59187df5a';let _src;

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
