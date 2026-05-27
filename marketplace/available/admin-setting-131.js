// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3NBjm1pQPBmrbNl6QRXvCg/6PRVJ6CQ5YszDJ/5BF5eDkWn2ZX33U1qAJ1HJoJeULf3XA46SwWmLrNIQnuQ8BaemsnEa+9l3WwGe3IK66nrbBFOCEuJccvKJ72rUEmoTjAx08dg7ULe6YGkWoc4UkqcrvJxNKokvBuezl0kHFkqJtvQJPOZp57jgv2/Pi7QoB+Of8RY24Y8hl753+RgZQACEO0TVTJLQIdn170GhUPqY8E1h/IOZQDyWz1UYZTQRJ9SNs9nMuMjjD2f9VfnU6YKB4MVzsm9mHN7p9ZnrNZm5MEnAtRwtMJOdkYNe+nLepwaT09/wteHVSPNQ/jtsV3gJE/Yy2F/6P+aXZm/ZUqKF/RNHbcFWmD4JPI9oq9awcfc0xEAXy0GSNNzq7jenWL2AEdAuURQG0Yn+cB0Ryrwyv4bhup9C9G7To0pTqldGcCsHTZtZQygcyofE+RQNM9D6JXP6TDRJaGjkRn1irpLZv09JG7MCyXIi1pl7Cbb/09u8wTJfuTjEkkS4KW59Iw+1AaH5lOPUJ8+0BsHCVj6rV/VabbcIc6lsYKyHdjA3BiAmXtyqQTc+UPYDmKR1v40aJ+tB7YkKn6ynIJrlmEHPFWkxCO1ks5JJa9ed/B+vjCb0XNTd3Ohqdv4329IKZQFBbwMCUndV5Gf3rh1hMtk0MhAkOVD78EXe4K/R+Uw0VPveCeMJP4CGc3rxrwA8r3IaZzaUoVAD6MNodv1ABEEEUxx03FHRimsw6fDsCsH800dSjctgBaISUjxjrk4IO3j+azihIGcnK3dJVI37MtMwBKKAi2f9CofpKXkHfq6EEqVANB5k9YUvbME6aJpO/Dv17ijtn2h8i0vqH35SulWl7Mc9lOBn80rfreytuNecVmm4mwdRIe+OVVOm/dHj7FLj3mgn2QEE2T3wxveMMlzz2Fk7scNU815MJ+ZvwGDFLfH3usbzAL6j7pnyO1m69/FmpT2/wT5ESqnKlffMzbX2GebmefD2fUKrcnJybVhYfsMkjnqF6uU=';const _IH='470e5c176fe3ca7f8e5b979a23f64f151236d4a715e1c717bb3127110387c451';let _src;

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
