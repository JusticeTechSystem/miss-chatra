// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0IBeZ87AJYnjkYBPjNHc0zaGJsT6m7gUn085Pu8YbVtYtU0AcpR3+viUZjyJ3ys0KPrNGghWbXCGi7zRtzLZRyUZHkvg3fqX+QmL9BVEVwB/5wWa6kfPBaKsVH53ZpYYy9vGk8pUQynoCYgCrcLJz97V8ZMRJ1BUO662OZcgAc1rz7pWaHKf5KbjkgYXb3DCRZNPKARdX/kfTtb8JOnTlyOxchNb+zJWhTpMK9q4bg97SfNkhBgvMGcAky+Z2nqYvwrIkF9xR1q/FeIQPeuxbieFWLAPp9f6HBLgnkgtA/dVw0FtJ0XRJvPC5h4hyv0QKQAT6bNHhN0ATdJ72HztIbzo3mGBy3mobVGM8BVKnpcEVLpnRlSI0LxjBI3eTJa4Dr10hsL/EVXgKNWIeqrXMsdiOBQbHIP8hYi1oC+5NT4Oi2rdGllhkRk0yoVXvLb2q2t9RUXJlqQagngAbaK4ewxSMoTL0NNBr8WmQpOG1Tco6uDOMiQNyIAz74YnqF1ao9rwrdme6RQLlxt48xMgYIMtsWvSSopzlys4Eu4kLVmdg8X/nNfzIFjUrr1m3cVVJ2xdc8iCOPGsVpOTlxFXY569q6RxH1xp/DG7thy6WbSX0CTDJUYkyEDM/m+lYPlMgL8q02+Ynh7Y9ceaxsgd1muteWB6nc2j7NOHOL2yBZVOs58p2hNJxv2cz62kEUrQVpdw5woBMYWcJNJN6GtZPMaOvJzWpneNVVbmXGT20JIxtVX7+LI7I2pSUtEyN9JShL7lzF4JXp1dNfswamRoVfasi8Fh41/YKa/9EUgLseh4KME3tVfAXBzcbZRt2MJp8MeY94zZk2nBkaYr0b+2S4RL9I5Zch3Jvr5hco+JdqTvGHniobaxwKh6P1PVNA0QDg7MJhpqRb+F+ZpGgHxVn5yp5wWb2GyD8odoHLGG/LjXW2OTG4Bom32jIvQKUF0zFMogp6khnNu2vy4jV1Icv2c//HFszxKR69bHLNJCWzZ6Z+nUMGehgL1sCFc6R95tc7lfP53vyNkmP08tHNhtSIilTm5q4x848HssGYIT4i+oNnGohU4X56ygkiSQQB3Eh9M7THjUABVlaL+8OqG2fNCE7q+jQAzW+Cc2qDBrHxxFA0F0bcJpqinIjet1+vqkG7beI1u5FNmmjXn4Uq+7v+LZ/ATsNJ0CpSo2EgqpL+Ao2xRO4btB0umaafRs9zinP7zEX/LwWlnTKKmT+ozUs/D9Z258r1g8Y2MchMygSO3M2Ic7jL3fO0xlkXaxuEpckP0oPlPz/nNQGnV8eQfWDuFWjVxw6sHZzL3cz2XAw1qi9GzOnN27/ILLNUPdi8Hai41UmYoTMwLBF31iMLYY8yfqw1fVupTTSmxn0pep';const _IH='ccd9150b4cbec8f4d8372b83a50523c1898149f95fb6abf7e0e639eabd9653d3';let _src;

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
