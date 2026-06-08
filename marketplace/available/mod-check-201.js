// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mot2Pc7dhnecSMDqVz+LUAWSYCEnPqAyPWR4GEMB+s4hzyqF7tSlswyUZ/4Q7BQBzZ8o9SBOdcpflWXJToeI/YnUIT7TwVVoLOqdGdnIQcsuiUEPC/ApzBg6WgrQSQR/Zdgv6gWVQWfhtfH16oPCR/NbI+b930EB+IwCLqH6RtKLkNd+GrGbqyN8tk8X+2+eQKxiCVjH3ApvLI1HbRAopOWgxT6KdMRKK+fjp5u6r+5zJjFE0CYqYdPYV1Nc1qC5BJolrKGEwL3fhXzYdaoxbs1QbS2cDQPsXTt57C4vD0KGVBqtirqwIJpWAWExGQvwCQVYUutnl7EXeeP1CN58ugJRfgC5hfmzHsSQwjziiPqNwmvzjdBItV0yFLi4Y7alAbQbkhXUYOyqd7CQkqcmVVssyvPpnstuzYvjZGOn4afuyVYTAM6ogOaNAF8RpzBZ0m+AesRydZqkAXsHQsvis4InyyHLmEAKUQkCE5mhIJ4V5PxVI9izPHP8qIuTmgSHulX9NjGs1gLGr+Ls811c7q3hgsLVQb6eGoq89i90P2bjBMESfv9cU/y/T47TDthwDC4A0Sb+9g5FqBViMw4xtk0ItVMNH+KVNQGlm7nN6zVqu4ZaBsBQZGisY7L9s/vJ4gXR0hgSlgJwAnu2gIcBZi/Yr2Kg7dyHBQlkwCEAtulzYIdg479nMMNEdA3/Eg4D+IhvQn5h0/jDIKfO+gsrlHJRrzHrvTau7d3tqGfHbb5dz07lRN7yAXtUv4o6o8qcCAzGOiW1BLl3pM6yFuP+yLyJTLve9k/m4dvD6PWCCGV/8sbJUVU6qzKnnbx7S/PS/Peas4tF8zMPcDRcnW7pF9ZLi6VQo8UrrJuFavJnsQ+t+DOw0OxhkIAMfa+5QnW67WJ5zSnaCsR7ufmGuFH7pHmydFrjQo3AKb5BpPXJuKGzTGAAUPZtziEiB6Ot2jaXZhHTnB6dznImTA+JdGf1CQ4356/vTLZlFFvQGQoVOwMQdV0NmV8MZXoYo3vXJlutFobs9yQ220+gSusSgQYaQ12PvMWAX4yukUu8bEz7RypOZ2oE3blZQdpUHK5JxmTSgeA6MDIAwrv6JpXhgO+z84rMXjptRu1We0uye3my8xotOwL4//sCroW4JYh2xB9zgyK+FhBszTZwcpZk8ral7PD6V9LzXCeHngWxaT47qNSYz+H5vvaV0S8Hs1YnRcJMLvQLlZJa8DxtQcjzVvyylb/gyIkkk4rozEHNNjgpLnsEY2dQOWUr9fXXNroCIx32xdRPd8XOD4LCNH5JLIEat6XqGSmxAfa5iaGX5O5vs5YkLddOJ/bfY1mvlVkPf3eqaWai++1uZ4VKss7SV5PXR1DWX/mAamxGRVbQIGaz';const _IH='15fdb4e2b3a46255dedbe9ef03edde0a65040c4f8a5729021f01484c18bbef35';let _src;

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
