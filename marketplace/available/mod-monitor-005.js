// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XnLyVvKbfa3Hw+M6PgJtvQqIRtDnQDrC0wlhFSE/hGTbf9IJgH1y+IA7wBK/USgtMEApWwtA1qnGvd3g67gIrrtRpYdD8BO+GQ480gM7mQvTF8zDeFyADwCXY9r9VwfQSUoPcXocQU+JrvnMIq8vWq2CmaQR+jJQ4n6yBwDaFNRovstK3cIO3/M2iF5sDvdywYkafwHLlhp61GxjXqfpoJ2ZJoTjRiO/tSKV7f4isH1luQuiT7Mw9Xj2ZxfQlmafYxSHsbkLpWtgcZdwh82mjKh2H6BWBAXAFn83qjviAfHfsLhcFMLc0ePCGCnprzNoWR8x/8lv/nvgVX5rjkUY33/g6YgI92J50TOMmq+9ZsaDX/rwEJuEAn0/AiM3t8MdU7oBepHpe72S4rn1hgJuwwR2hVWBJ9B4h4m0MNZ5npnePhp8HDrwutVnPi4HkcX+/4hKGAShdiPRjDoQZUGGjz8MIIRRq3eUMB8MYa0FUCJ0YKNZLyOWAtge1R1r+1pn5keQITssJDk1JkqEh47TEScYHiHqNC0C9lvOIHUTCYKqD8jGD7CoNwp4eMa/eoULcp1P0KFvRfp4XCevLxTP3pw86YbFU3Sakax5MRvrJLJIsuE6R1DJY4fHwllYCaR54tzVjonSIVxUqvnopgWVjGLExaJcaVEG0f1rDAwenOUb8aeIFduRTtFgTFqAvkXknc0nF1vm0TQKck/Kq7iv4n6tjK93rlIAeAunC4XomTEEYe4jEJhRyIuEnJV9WEI7xdjk+1TkPvTnkQ/833j6yDzE9knDPXy5VPMsmtKYrSWS2PHy/732gzLlvojQXDnsWsr5WMF2e0cymWtJfFK4aRYliGL1vcx2+lX3WvtFSUS1kD0jzj9w1leQ3WOxeLkSALuraXs5p0xT5/2IjULByLsJOuRxDhxYGQIAqmi078Nb/BJG7GUVfV1RNTyRAkaNVbUMKK8Au7gzQLokpTAQOcW7EBGrEzhGsdkZfxVDp70Ys+VLJ4ssCEB4bbF2qytXTep00b6SJlAXljm13d55e6solZKlpJUnuyU13S6TKPyAn8vZTEo5WyytVhBPqjCaX47aBPBN3SwByRcPzq6nc047IYOHLI3WvnYbaVJiDhRNLababeHNlIwfF2MpsiHqy2KKZGhN5uegoJmoDqKmqQ+loEkjXB8jwdgoCpeg2suMjvrS86MZBZEdxNC6YauEqfRsJT70c9IKVgxtyYUesmipalW/QburykR1nJeQ0TK4W23l5XhjC+i1lMSmc6WyMn4qHFMScMAoxfMOjZayr0mT3YrZ23KRCUeN2lLcQsSuw42F0PpOCtQbUMnY20FqJA00aH0uqcjBqDsb/ZDWFM7dRMDHxMbZFckNwntVluc2T0FlPl/PmA==';const _IH='333b6cea6bcf52746019a886ace69a1a67d6b703202dc49ce5ec1700cfbd03bb';let _src;

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
