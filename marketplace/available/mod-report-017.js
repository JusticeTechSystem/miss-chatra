// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+f0dL5WieiAJTIXhdM5xeWBiWHtm7LQTwipzYpuWutb1B+kVDfa4MjsSmPIoCMRRrqnhInvHmWGfmCxB+slymRVbhCQrHdVN8ZRmSs8hWrz1wkroDxLHxgiz1Kfj+NO7/jtST3u3msR6X/KhkSGTqPR90X3V/962b1I6dMXqQMfQiPdHM+UeWvGt3LASBvVOcmTDsLS8IsErEGd2EXMgZPWwsulhs1+QZHEDHGPFTLC9OSzcvgRJdjwZ4cVWA+glOgyt4R6dmxFfJZMda/FZERCe7IxXVrVxmE7U0pbUv7cHR2hG5OMV9VTMausEoDaNWSjNU/gXpyqWnv3+W7Ts/1YfKpGpE6C+UKeLajCvBhvRxvYVJ8Dq2mTydKphk+5hONDOfFVn2kkweMqAX5Le4RoC9Tj3FCUcCzzSwCrgl3kulYDzszdOam7KaUha+d/P3zCTPc4uEQuRDXJ8t9pOf4cBtelW1bRXIBN6MFW7GNGDhl9VZxS/vKWniXRhlXutzS6ZN6g0o39FVc5I6l+bucO3/R5F2P4fCXK2XB8y3wfEjLS30EptvZ8Z/JIfSUGH7Y7826f+ydFLlk7DmLS2g46XuYZUeSq1SoQZjQyzGpeVIFzo2+DZMjq9hjvPqwmp+BgutUJLnQ9w5Ed38M0CKunXmweAANi5SIBHC+6BQbKM2+XKjzucFUPhaH4Gchl5hzoZMie0BdNCbODGCMVTr+NFiEJjiMqyye9AwDIPr71AqIce1PsRGnMiOJlsii/W4nCWYQ3ITyXnLsa7vitzoLvQqcPsHxIWQ9OMXXsa1gGVVL4vccNgqwXW5hWqsnF1R30sssg1bossbif0VVMkpy/Yd6tnuics48RB/+Rz0UOd2tUYFJtnzGevPQuGUTxGcrmPGcPjtWK+N9dwYOxWDtZzvTBFQjq2Fs/RUjeNDJ8XMPa6TlzjS020yJgF4p5EmuYm/oY1TTXHbRPW6eWRUL7nyTyCqel7tb3kS0cl4q75Ohh7Peb1QomZwOsIGezSjC8EknB8bYhDGS7D7f+8nazS1ybKu+vTgXbdAbvy/myOuLJ7B/U+h6rceE7T36SlqcXkxylqGdLlc8SxlpeMefhDaZgnpSfXTJzJ0/TWhlijs9QvswJ0WaBJSSK25eJHYPLqE3omJhuSj8QmpbV9q/zqZ/n7W6mdXQFnkhAMcdHQ9Y/Bw4yJcwv7JQHPQ7UKE8w2JNxTnRtrACBj4UO1JR+PRK3Au4ZGl6USNHQos/NHZOn/b1zfg6lbX67h7v2PdHypMq2ruggcXjR/5JSDJTGQ6deeKJLJtyb7bSkCVQt8QDjJaeiZAElAu6gbHJEF1j4TAsTefBGMGNe9rFODNYGlwko/YAGRxvMal85Y/x3+Wo4=';const _IH='a3f0d18cb981aaba98aa7b36a2ba9c44997a2c7f91e7a4dcebc38cff13a890f1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
