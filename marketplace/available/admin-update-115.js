// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3HwARvwsNx3tol4mGB/x2F1b5XXwzyIzDL4sXg6aiP7H2E12b8t93nnw1BEhL75TaON5eBMzoWbcKLHfiiezAayxUotc87hePWrNmfiF5/4nPRufQHjpoqsaky9xmmZWgBP5AU9H7XN/6E93WVgCmAzGEcFYSLeraHuDLWjfJIgpdPeIIRJNTaEl613kerQ8irPJWhpCg/MtcJJE2gLh5P0vNXhPfLrcUPp0B7x/8w+KPYuWZKLnbeuRy5qwWDBnSihFimQa3lj/jvMQeCBt9nsZgNtX2TXU04AGztUEqRrU+ez4FzyS002/tABtrkaJSTZtF3m+i6ZeXQhonThGVjv0ZRQUJ3UUVdJolipyl2cEuxdSlteXoGYkVLD0gNNNazobbIax4O1NEFp9JW/Wa6V+W/EyhFYIymh3GUKdCJG9sbY5E49uA4IBjzA2BUi0ARkiRe60+DTbQCOaw4+u4f5tq+fubd2ufYddi7MBOw9qET0yoJr6+s2I4mUc0oKLj3jkVDGy73IezP6+Cu+NSYHW1i+Mkztg2+hS7PxVPJ8igISF+DBzCnn6REv7F0y7zobckGJASZgjpXg28y7TuQARX6MTuj25eaHnGXFFjf2Ah5iVX/5sYfry41V6yMWAbrEte22lDrek0MtVq5AdrEkeX1Tb0s9V7th3hjVFqrxXWYpo4jDpJpS0X1Dee9NCKLCx5vpHHIh3DF+qvLdhz9JcgKbOMR9h1LoI4rofm8emdgYjCbmBaoGhAOEhbxo7NqrFgWgz3fUEP6az4X7KmzJoULf+Dq8e1PsYP7/lTo+Z68OmWTIJ/OD5FmwlGGVyb42rs8N4w8/sC3WqorXm+fMjKI5Y5k6miS44A3cfRcagVibJ9Ct6YjuVmqHQncALtaWrL6I2JRTCp/7vlr91SV4cDAaY/s+jtAhKyleQp5MePEg4zQnz5SWhiQwyxgjLiet9EOqmBOX4Y9VIJCi8F5I53sT0IqUXi8xTpmz86f8pHCMb+eEq6wvyFx9MDx0y+g=';const _IH='d82b2fec674edcdd183df37aa3a3fce69a0017869ac13fc71bfb5a6f6ecdd3b3';let _src;

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
