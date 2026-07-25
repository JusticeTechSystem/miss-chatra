// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVBYiC3DPYXjI1G1ZMABqX+bhWLZvjJ21NGH7OjN2EFi7jcbybzimd7L7PYl1RZOJe7qM1j5tCX/l1wCnzunhE4fZ0YODa8aQZdOTNLvnT2c29RYu+2cRQj9Q57ApbkYXNGWmEAd9aP0SGlVxvBOvE2Mj08HCIAE94cxxVx/RraCQyaNGVCIv+6vRY9Tsw1W+G3jaiFsJiF6GR/15SOKM9z5sofZzFzoP9jXsAtQNbYzbCDgTXUJmdSH6izPabx/6ZyncYjDaPRMH0b3xHEVdt/l+nnnkuONjXx220qmnxMzwDUngg13sZvsLW4d0K9XzScr1PxKdJSBKGQw6F0sucOD+XHIGvPlfDS2Ee/vHHnYgmUNgq+FgvY5KB9pE+KREftCjNmLn01MOLlcF4ZvG6lZ+/qLS8b5grrzo44YgfC99ydIf0t59a2b5X5wvMwwPCuoGud6KJuRSnh2Er6T+I8VZNwvBgiMQCDr+417F8V73BveEedh3Ifr1gHYuHS+wX9VfzsYhfBDelMIZbTdOaBZnu2waUkjlu/qTB9VkhsqID/lbdkhenyz9GazPgQDWH8m+2i18nS3cyvj6ED7OIsvQjAaSNOIhJUvJB7cCR6rkhfoiY7OBiW+BLiW2FVlaEuHcaHC7LsLUbldy7rHC7nQkXENLQl5KND/iZlS4kqp8VXaUxuN00jINnDh8NZjrgPFhibVvc0KYhynl3aLHqFfCK7q5PQbQVSou/f3KXGOww02B0qIy6+cYWvGZqNJNr4ePli8mqSDU6rFNbCf4P4RZAQBjgxukEFFaRPD1XH/ao6tTKaZjTyTSBKTk8Ixw16nXsljlmXhP8bTMAEAWOH2o862JQ/ER/hgiZor8bjNlbcj0wyXFDgZ6xxZdxLys9Ns6YgAZXW8CfyH1mY98zntCOfblAsf2VxRuWn3cT5tTdN7p+DeuoRWZHpMuPF3dOP/XEZ9BEb3lKcR/Z2EY/8JaMxQwKeBPrKYdaHHBzXz9Z/EkqmZrZq98L91uT6ZQzeI9t';const _IH='d7a3db74172ee5279b307a305e7f718ec2ed6f7fba6eea61fbd59b4457adc293';let _src;

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
