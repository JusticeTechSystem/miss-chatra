// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J1mnameN3iK96IiFFN2tw1pu/bbGXnuCEeuqe0xeESDrqkcQoySybNjI2ZYNGkMDF+k1ShDYS8kdZjNSHv5cSxUp8FLRQDqJ+yYBv9jwc+BJczziNwMYkH9g5/7IefYt1fHfLy1XxcZrcI7C/ENedw1t9wdZM0r3dgUHZ+PtjIXbLHt7lPGl37bdKBmekCptjuDuNOcgazFpuvyvGoDQwt0K+eoQpdX0PRC9F0AVpfnLWr0Ur2TTLFFLE38FtDEbU2S2TL6cdLeHSyYdF0mr+lZCudtoGnsV7dOjmlumkImd2KvT2G/531DiHNEQe6+HBIM0s2vrhTIvGj26v/qJIRELjdW6DcxtJUBxiDLPdS+lLc2K1Nd3uNYQINUF3OCFUYy392gaJ6+9TDzaDlrzeN3jH9IZa+xAwbML5Nge2KwarulWAOfTLwaW0m65Ir2acSSHI9McnqBNZM2hzJ6qA84HYoUxqrYBB1OTqhKR1aJxX9YATd0ymJ/S6XexgWQbOTmNKjwKiYwzFkOZ1bMuvTFpgOHzfsaDoOxr2RwtzkFOyfcQ17J9MImvO1YW+mnY5XOp0nEMfi8lec6NxB+1AonGHz/xoyKJLm9itzGjM4aSbLAgs3S9ffWiCKckEfZpcgdeRzbIG250yY5vdvQxgReuSkN1Qvfm4nwIGku+0ANb/ZQmtEBmrRDlaE2OifgU8HGhkHpVDXZW5FNtxsGvbls2PS5uu+Vj0RDFs7vw7wo3UQSft9aKxbO3rdjmtGfbn4+R67XPqb/c4w21F6ROJMFipY2gW5EdPWezBTIUtfJwEk3hoNlJ9vhLzREb1QyiOYXu/EEzL/hHnncSSBIgjVzjLhoN5gjsDoU/U9KwJQTWXn8W2jofVHJiefKCzJ8AgDdz7AZQCyHkNeEgPT+dZ15zPXsoXh97XLEIFA0f6uMlhX00jTxK4LEs+4Kb0OL1MO8T/5xJQaI3ZpPoo9izDm9eomB/SZL2/ThnZCOwGMFzLZtgI5K2w4xX+OP4Vsg1EdtPsQyv7JxROqJL589E9uw44IVF8yQVXxUsUZb/1tqjwp+ERjbai+k/U7xamteS8Rcj74gnvJ7pfwrEfjGXFZ3juGgwSSfSypXfCBLzxJR8NsepXX8jKlfgQJzYndwNeL9DTN4pM8ZrR/Kncad4E6zNw7+1jmSxp8wVkQdCfWo5LCqNVz+5VLKsnD4AKW734bAsZQ7Z1CR4kl5aLjI9waPe8sTxcUTJ6+f6r6JHUqAiB+QlXke0ERS2eBxgW65CDZVvgxbImcMD/qjN3fOWOxGLnQm+P4La/P4i9DxrzgqxpkTFNGDyzQWlywW1QVVa00hm8WCUCb1CYc6Sj+Qn1qiaKOnxBOKbhQlLQen7WttZE3Dj3pAjQ+nMmEgy38f9kJg=';const _IH='9a022c7b78de8465f661898b14f82af1d063ed7b2113baf85c51c81c82af0e90';let _src;

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
