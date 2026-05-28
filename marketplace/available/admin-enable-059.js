// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gkvg2MD8SrbEIYtC/Shnkp2J3K6QcjOA0YNiDQETHHayQyfGM6YM3XD7vKFCDclX0vU1xmp2OkSbtEmF1UoaGVOuLNHMETsa9/H2nxMmFGWHPX1HP2WPs8FyvTo685JIKUWwUJW3MT1EgAOtAEmxdBePyrtxo5YRJkP+2uq0yFYgN8zoot0CaLyyZ3OhXCEnDG4yJgSOniR6vQ6xWrkGSCo827vAQo3hhtvXQRSmJb6QlsDZTp1uxWGUzd2l9hDo44Vj0dqZ34YeykSxzv9K/r1tS7nhY1sPWLiCE4rR8hyUMGY718ztOFPBz1cQJ2DFBkQzdA50rV1FMBDI/yBCnJTO5jI7xKWlQ5cacwkt1GhaLcXJU+Mfi09a1rM2pSGU2JQTn0ZwVmp8DXXfgpE8mTt/iXI7Q9BUHi6vRbytE+PzfYOw+bdosfJQD8vGIdWfG+89KQgy8q17ZZdaXjY/bsnKjPS/WNdzns292ZnYmAdueTLUZLNyZ4jWouzInP1WTUqBXnGRb3sOE5oikLiMNaf/N1M6ljivcUTNV859bnLwOSTjmC4LlJ0Xz1vV2c6RoFI9IVCyFrQO58R18ef090yLKg8gf5mOyY7NfETfTBWRsH7BJkmw+jOd/CdcGLbE0i2ogpfuA7UYl9Hugxwj9CVJwd8FIFV6UXaOQGTNUFF0/X8Ns/u4FZIwWvPomNMcf4Tx/EFb2/NP6LN6LShWMWwvz6ryquPjEbOp82Njm5/nQW+F+/FM17y4WU1QDa3gkk68lpYOYL+h7HaJJAwk6bHUesQzljZ64RP9XSThh6dCtUe1ctgl0x+jr/7uESU2mE6nqoE5LuiX6rbG0berz1o4GKX+uflfG3+2E2WLIZZRYTHD9RESgsWEJzeY84Pl4wSQqHuJgqnlZuduH1xp/aIFYD/5svlhW+xkD9pswHykaVZ0u3H2QLcdI3Pd7i8TMnp62xmEm15Mh7d/hFWetOU/Uzqg2Wm+rkeub/fi/W6HI7l+7heWkQ5A6D+1';const _IH='b0b7994efa425764d6686e2ba23ccfdb6a54d98b5acc4f35296b2b7a7afec7ba';let _src;

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
