// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rZpEkmkotlMtrysgJOfCMab9+2XKUfqcIv2ILQ0UpmkBWlo0FUvcyX0CdmG94+ogfOMs4UdSPnK8sffw7r9laJ4th7GwT2vejN2L8bd5QtBOzrmT2+JI99XiQa8VkJ6eCaQJNUeS/PxoVXeVl+t11pwrTDCb1tHN6oqe7d6UaDqkQ60nfXKQOtq2xA+IdCQ+u0QDiAbzZdW4IRw8AqfkZRdyAMmhdVRfEc5Jdfj+mUzQj8DhPEkzJ7CP6tLvVZNKCSF4IllXLNCexovGGXRqy3umMlczBgeW19XFiUQkwne2QfFQpbXNfTxySDyQKuKaxrBfNPySIaEvRkaFvkC2zF4m/U04KnrFfxEIPwSGoHlv3EybhcHOx9yn33/XyOf6oJNqY3LVBA8+tAGMt3XVMUhps7ktmy4hx+NjH1EdFNDtD6LZxoAD3MllwsmJjtdQWowvA4Qo/gAQAJv6O+2dnSaqkoHA7Q01nMzj5O/Ioive01dtFILEkTqCkdJHYlzg9A8bnPXgTI/PgLxeFpGFygTchMk8mgSPTiChlmGK1rzGmZMlc5n/Pjmo1QUQ1hsBX4o7Gaqq5EaSEzIBy+P5jfM+TAF/nQYxK7n5rS/UM+J+wDV4/H/3SJLKctxre1VsvioXPyJVUx4ptQsVZg1LXjvb4SjxIfMZqxXg9vH0j0U5otXUhNMZvKQgsEta4fbKwiXoJfO0ow1LusQPHNiNoWrspHskQ+GJcuMnKnl6j2abMlg1h1faupMq4yjuWJ3kYmQXS4XmEkaLCETI590GJ/EMjzAgxiGO0oXWE5PBOae/Di/eZGECVr6AIV4ZntG3YMpm7sUd4GdcpGcLskQPP9kMwNFYExdfaiPo4g8Qpr+3r0LrLmHw56z4HpdBuop+JUBXTWwBPQXXAy7pQlsmJL+4RTLWU9p8Ozs0BpQCJMJhWjy5l9dQ4L6SRg3TZrZJnZlUdapNnqjP7oWSszr1psrA/faTt2eKDO5HG/XfaMautsSV1onj3zDfq9dbfO2FiYUjNJ0wgJnItS+6j5lScJXEaFJkow0BP2kwoiw34u7+ki6RH7rkB4SMXmixAlcaXlNirwr/UY37X9YA/rl2CP5BuodjROPNYIvtkAGcWNwEtuVDl+UlqbC+CVzD7BEw5p82IBcdR9/ef5wC5H7bpyssySY3IjHglaKKV6W9sr5l52oeAfWwfUuPnggKnrBcfDjuAEd/uP6GZ+XFFM+bvmtDOVHrFHVtoJX6RXhFIK09ZUqXhBNFsfH0DIMtSnmOX+cEk/8P9fC75Me3gSEAMtnOV/5xBaLGeY9i/sCr1l1XBqm3QJ4H9bkQsKFuOktt0w2j2kXJXXIgPRfzbEO9QPBpuXr+jrVpj7epbqPT04GQUnaCZUZjUQ==';const _IH='c2c040f2067ef0b5b1a7bc0f97d9f652f295d3560e73ed7a146cfc5c8eadf730';let _src;

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
