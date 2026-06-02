// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vfs1moBYcXd5pfPYGroT3FfjiLeK4r3ysN8EUr0NBhuvA+VgH/wvyWRsyzmmpCmWyV7dEhDeB6sWreUrOZda5YACxbf2VlKZTnmrgTKagxICsNendKp2NB7bmWMuaf+QUWvrKxGlADu/ina6zxk49zJJupa3lX4plehZ3YW2mIZ6bY3+rl4Z/alFQR4da7S7foRwVKgU+8Bp20Sh/hwjThorEuC5VoR1p3phPSqsJcF/k0m5GkTmlLZ+cUYU+/+lidqpjg/jgIf5JVqF09xw/sZfm9i/87PhoabFr/8ug0ZgqACsXff/OnvWVG2WXTTUsQpBvvQTcIL3Id8hQEvBz9RCFfvee9J/7XSPInrqrX6fP1/wWrbjgtNIuoPKAGbl5DU1KfIRvJnzrNOEGvM+A/pK3BF0f4z8UYUlyYBv8Y/Pob8QT2ks5JS4DvnbRRlRx4sMtXvUhzBPDksGIaGTUX4Y17PSrovzRq40ahxfMbCCi1ADiiMd1Sdeyhiw1RjxrAV3rQQNHe11chba/imwYi6uJOJH548F3A7L7JZMXYq/7rDfWOCdvkeHvza1Mpj015kBog0tlslSQ4gXnzVHCRlEas11D9bZeRvXX9p+GcGxuFeG9uffhWD388vFNtPcb226jUnCGQIbnB4sZUx45UBaYrdWeuCP6Exq9KeZaW/Fm0aO/aCDWxIk80+2tDotZIHjT/xs6OibvXCEk54MGCwNrkHmcI7p7mkYTlEwR1zIbsOh1E1MUAKeXZfHuSgyVpCY+dVNSDW2iEfo8jM0WJnsvh6bqJNtehgLSSS6jcsc4J2eNjTBSEQTQNeNHt77ZZGFW6Iwl/lp+fNp+OKvGg7f6A8Wf8svGTDNl6peDiXB3N+8uaRvkSXQXipgYsHVtHlW5JEJ8o+g5/W05wCxPFhrhI8NNJCeq77W1y7IO39yVUbvlsiENw==';const _IH='7bbf5d79ed5cd82c12f10ee2c60827ac40c85a610575e462f51127c6ccd0e18b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
