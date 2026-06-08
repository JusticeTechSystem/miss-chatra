// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9DfAs7LR6JvpIJZUGGV9eJgyG0j8+hZstyDgg2KQ+AwqzNNw6EIMLhEx99wCOUk607cbylV7xTcybblJ3sQcXv25fradnAG05EWEzj145wKeE+HiWXsDS6Py3vu24Npn9ThcEf3BFJMn2KC0kejL/BgjYpUZ0mYHYtdLt/uDWEEaJNf0MQ31I823VXgk5KlYpUBYlxwMHOMXlI729FWKBlPa4zlVgwfgHRDSuYanahqrvD8yqQPUOu6nmudm1qKtBdixpMKcUUZmyIFtrwlznYyPa7FJvV4BfPqH72YS9ld8Pu0sXgZgQrpxBdTknwhS9+K6P2Dh3Hre+PH75EgoKKnquZLeCD5EGT9IICUWhQZWSlkStRbLYzCe6cbzMv+TnNPJeC455Wal18hTy69zpWrN7sy05I3GBnUd8UNfbsySHVCOOo6QZnuNcBlzY7nrgAJhGmnqtKeotlmsU/C2hbpTDHJ4cNZPm0dX1P/+Uhc5bMcJbVXgsk5DWMx7KYS84qGHxLoef6GHIgLjQ6TMmV8bGGwjdJ51/wB5IDGlISeI2+juHEvisjGE7yZrY5UL86SvKO9DkZAQfnb00jKznhQ7Mih8tyCvWc+yBukM5CzoHFOEdEnpq2897dc0jDUKKsPNwwFkxNYi1c5nIl0zaizQN8oT5L6u3DfcDCXL6yYiYHzM5kHj6r7IQ/o4wbdhVEI9KIcJuxsl9hnFQ6QZb5XmIboexp+2ojrDAP3v5asZFqCOl4YnMfMh';const _IH='3a3335d8b139c6bbf8ae6eaa90b37e83503b05b92395a79fb33d7beaa26fe4e1';let _src;

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
