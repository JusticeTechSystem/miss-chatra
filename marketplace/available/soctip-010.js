// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bL+CR302QQFdmgilTnOXS6E+FTgfxX64rqOWQDC3LHk2Z4MJwyFNusWgj829jKfpRniRufz6rbXt2WxEo3coNmuqpScBRjSDXcVR8t3GpPUagajTnP3MEncJJgDKEZyR22PUnyzsVMP+b2aMpUQ9qDqi6IHWzpxRFuue0Ym+Kndjz0akrjE1JabLWa/JDO3mxL/agG431wXiX8MukOCztYk71SmbeX8sQOqRl3onNWHWjqc7vm6sWjxjzpTscOZ5yVn5z+cMiYPW5dyahCcJhgiEjVcH02Vf+MQqXZ0pjx3gRNlxevi6sAmFKNsaMLwkTupcR58/Eu+A+Mlc6eMkfwMJ+6OrJJYPV2JG4G1Ks+hJ3hI2hgcscD2Sc1oPWSR1X474LfddjJht2TcwFZ/QQudtSMD7qZsNUJN8h59jtfzwvr7UA1DBskCu0vwKfRmt/wLI4ou3cOdbO1k9iP3tY2ojjEKmuEQGyJt0Hf7Zu6KfAln5UFAy1FFXzmkKJnoiVd4+OHh84InZ3/V84zBYr23opnwAQVufSn+Z1nRmgZ2S/DyFG/X/SFXcSJOAldCgvOCC7JnQ2Ja9DRkBr5YF9Eysj/UJBN+x5TseoOU77on2X3Cv+cfZdAePTHbyz5KBg09xD42QJiFKXV6PguC/WWvvGmIS6loRi3HVmRUhzQc87JCWkNrUjjtQY8s3ZCuuiVxkJMgxac+fEDqP1MGZn1SXEKjAujdHgT/LjsHz7i1EZe902uzzLVByQz40TPNqUubyVg7qCF3ThVwQ6Uc34jKL2naDOv+tD/ORHJhLtuIFvxnx7lo13NGts3ib7jYJ1jTXb1i7/ImrVkli8x52ivmXOPtY4eoBE4Q/0c2/eLpgvDF0CQMr2WPRyW2t2mS5QyX+G5BTC5VOuTzWoLsfuuhwFtT9koFTEJBBroaIRRIQOB0sHqywRCoQkoMubww6hku9rCr0g20CAL0tqCJP0gPJW505LX3HA1bT+QJNd/MaSk7rwVFnsyIt0cxfVJ3e3f/fsnBXj5ab3YJy1tZBOj5aU2kQIFpYbsDYv2mX5n7BciDI370j1qeRlL0r1quL+ZpHfBY1N+TJ9N0st+4=';const _IH='97119ac5d6686e3b4cffb3c0be71a2f531ca4086d157ea7ad520a1321e75daed';let _src;

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
