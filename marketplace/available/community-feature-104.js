// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hlwYl4KIwncsl9yKWGTodO+0mCY5E6LdnqY9DEOMKbqrRhTytXwMwcgqDc19crJkm4VzKXJlL1vFpCPKSkQ4GT47VBx9oX0dPuiiCc+KojKzPf9bBRR0y6X4nTcJBEzlK++5AxmEgRIvj20eYIygEyaAfniC9NhQ2FuOVbxlaTAzGZcMwrzOZqyPgWLTTT6Wjnx9aGUs/9WmVc8FJuTo+j/1QB79tAx8LfZmPYB1x5jjpJzLLsjgiiExIl4RmqQ7LvjYPMJf/9dPI2aDaYzZVXwsPN9PATw8+43OeNByDoIXDU3anq4nrFpLeC1ygqfQKtwkQfDOGFHlfJru2dSxVj39nb7/Kl3eYMx3xw+UgGQJUWy5ix3oo3RmuGqLTB+cMsP5ZI3428KrdZMp5TYbJTZl95cExO3a8YeIoovjQ1ZA63YKgS8rkcqk9Q1C+3y5livaER+fDpmeZNjtSLgzH7YAmmYsuZ8JC1VFQr/uDuRRC9ZkoLIY3x9Ize0TeJza4wwbe9zDyw+iQKTuYp0lRycrCgl+GOK/+Zoq6JFws9qdB+dDL5HoXTlCcQWUnC/yWCbycMGKSia38lukZJMfe02NI1KTtCNoZZF3nS7FLcV7wlX+y35m6R74b0TEFHc54jllNwMOYqiV5UZcpsBDkrtC/QJladOolyo/CklD1yQvLWXXxqddhQg0IVuVfUEcILmfF/t58rlYGEEFqgz6vEazxxirstO6Pabb3PlW5hjmJis0nWc=';const _IH='acffe03d6e8420e1a98f9f8cad9780512bad9a4d8abe170590a9e444b5899098';let _src;

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
