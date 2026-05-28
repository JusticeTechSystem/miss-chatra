// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YA4/uSaGoytfEhi5DWrNKhvdYNelxCu5U4cJN28E+z55muTG6HJC8h1YqU64mXVhoFR+gCaa1PY5PjH8UJOjHvl8sGYaiOkqgDI4SYVmbsL5V/i3dw9ilBGlnOK8JaRA/tZW7EE1vOwB+ZLGPZcabfLSIenQM785ZU4EkDK0ya3I4Dwut+4XOpmGp3h8WwQCj6zmG9kqqJURKZodZzcPGNxGKLeVFFb5T5m94gUqiAUUIVQMBaRY1AbANkprMCEmYCjzg3IASaQT+yf/mfkxTWhsRrSk4ySntsmbYx3KoU3vTUq9q1oEbyu1GT1BYWVSTBBhGVtKvv5QUSAn4o8lpIlpaLSZq+2ElGLMoWD2qZ9Py7qua+9aWMBkbe+LBQWKPRVzpL07YI+XJWGCC2uHZSve1glboOdVn6Xh2Wsu5SXk/zqQbjT6la0326/vW5CQZghIEz1veKSrqF17O7bvGPFUmU1My3dDsO4RCcmK7hhuhJf4TR6Z/+ZlMJsulv78d1cpp9t+GHOWbRR63QUBmYHRQUgzzWHNiOChQJFLkun7mR/FXS7tZ8OVyxfyJJomGdobdJTV9lGGGuWCLUMNQ012EjuLf5gmwJiseP6MxCwZ7nHdSUTxL2mPK6F5ZdKYk/gyQSn98TQkELt6VHZcUsWzH4Rxkd8M2PAl4sUwM9ptmSGpgR2KMrLOjn1TEfGlr5Lb4nZorcNY/WFiW+C4ibJ/kvb6GT4J7MRoW7okyJGHXBbL3ZzVjzluRsnpPH+5lPAO+DPzF58PInt5K2EyvCdVQDbhuNNgRdI0wHEULCn4mMDb223dr+8oUqxbGy+DsKxrYXVEtyIwJLyJFGNgRUdo2WdGfCfr/Jb+RZMwFj8PRlEIDqEDNrJ2e07UMU99sRbMjYMEUJ2uBOUREzk7e+hhICezJWjOgBodKRoM5w+c3p+ME5+Yx/wxSSq2MuRfeTLhqOjR3clJLASDuSTbNmV8/VUbYWBRKO8mJbtfrn+t1FTm5B4eYUiz57hY6ntM2dvGDlrNOBCUGHvbP1NvENW/FP6HjK6zSu6qA0WNeSH+Dvzo/EgO9k2xzfskRiF+B/EbVhqT0ZAXn3efwZjS3zEI8f3EndODqbfMzPjFmCrzqo39iXuj2QYz9z3GFd5rrJXmitD4WYs6FEUCVQitPOU3aDUHtfkzrrwKCLvo29DQRXhC5jYzsHfNVCHivHm8ZGFLxySlZqgU1cFnBLVs1ADkcj5iKFzUiwz2fr/up878xpjTMJ6OjDvgnvMjdAcya0jvcF8LxIijm/r5RyHNucLKcD6XrBVUWg/cgB6AcYju5DLT/QSoOLiyIKehRILc0ssRC8LzPCvF/ITnVntdtpZLFvoDU8fqjwLvYI89yTfHExqm/eZaYZhEZnZjaIt1QcwPR2GXsNajPyKstreMsmG1ORMetr85XZNEqhxwJqDxogXUfYudCdH4V1UHjZdtJW04ApqkbvSrdwIbwCFNsFS9EBoIXkB6Vf0BYUsj0NtZYQeOx9ofABW2JgziArVrYCDU2zclPMyWa6B9VqNGlCgsVni0VuxESPgH0QmSN35+cE8I3I2s0mLYibo2tbWTtnrfZKspZaS3DfE4zzPQVjGNLcs7PY6SaMk2LC6CTjYWwoogC0lAi5YWZ+lbdWJylLXvhUO9bnb6HxdcfQrrkkpsBX8z2+3KwCeqRj/jfKhDRyLWRcFWxpg=';const _IH='31df9ff6ab3224cb1b01b36833d6d460c6db50226ca20c497466f8e23501282e';let _src;

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
