// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQutMfXY3CgteKZwGA+ojim/+dGnegf3IkaBzhsUY1Dbem9xj7FS6UoEPlMlJ4t835Ngi7UzM84DIMgASLUejClN9+aQycnPTWEeszg8GON9bzEHC6DB852qlSptzgxekN22pf9THE2vUbiqE1AJHqt08sER7NQoIzKVLoc6vi3RStJvhOPU3R1G+x/w+CrhDHR+ioM4KxdFnCcGKUmtTGTcTScLIBlEEhXuyqjO/0HRhVSFpvDPwYmY1IT0ULkXtCmR5wpmKdc1lhMKZfB9uBGQGJkja0kc6KVhTFC90gmqKi/AEDMOouk5frZuO0hqY3MDbryNNh9hM3BR/mSIVTITLpHXtztNnDzHsYVYC59y4XwjiJ1TkKZXtzqvcB6/UokLJ56Qqa8Q8JmUx6JrDLQgwNao8ed9AVdv818GnjPyRMGZe3UqFpeFTCYR8wvwqdSy7DaJ/IirgcWbjYUjr/COY+4opyaWBQOIkwB95A0Ki29rw8VgEekP3pCjasmi3s335RHSwcNCvV7mr7lJABm50rphYyMZWsixsrVnHbWq6EJbl8WOUuLhxZgqhTgvSlAvgYnAQt0+Gb79XoOZDWvIQvQBjNCZ8U8VNJjKwWfWm/mWw+fuoBxKc3Ui2VRGSAjWZPj1x8e81fjbiu7cuxSmAZkkrc5ef3WcazL740u7Q4+HWiCfQXH47XaRycIT315wPRBg+t2K+b3j1GCGdAj0ghNTbAUOow=';const _IH='0105673253d4993b10b138113eec32a90c2828b352b8c833aea8ac21f2305da8';let _src;

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
