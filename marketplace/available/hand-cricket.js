// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn0N2Cy3U7+u9X21TxpAufw/0AEL+GXRq77F0+KeuF6vTAqqldTf/Vm5KO16gwCZO68OLs5/c1i3aRxXl6Ej7hWcoJjbDWfDHhnyivzaJfeu0aFJdYJJBGwRzqUoiLduyEPszky/5Kb245YkvGFFdxH1NUGkw+Gsj5Y1gG42uEFLuWkY7rqn5s+r++XiDs7GeU1SLkRNXHL7XOwaaDSxIe+alBxesR16KIOj1VzQYlD4kJ0f/SvqHUYJeJUS92fMnBI0NvF8rjsmbDnXUPlEF+pQ8mkNrpK9g7fILE0Xqbg9c7ThV7V5VjnfWwN2lnC+VFAKClk02zbfygHzvpaDogNlpwibtQbFg+RGhIY3GcgBDjPxhUg1kBse7pddqmDgcY7PuOyn62HeMYJS4YX2LLkcGS1ZTQCajkUiQBhT5NlxJydfqjs1kbhF5ol6M8q6uj1VBqDUf8+91uPkwFThV+FZLXjdvEaYpBJ1vKWM7uO1WRwqwBa70hPQaNliwlCyvBLQH/SunhAQDyyfuBaPZBuTquqd78XdNJh4nPzGsADtD000h4LUbKL96iFOGgUzW+ewd7Cs/QjWZT6uP6q+97bqnwihHjzAq1xpQbe2zonK2TEuN+Eh3AUrkkSsBIn6v/1dlwFv7ocqGT4eyOT5+OJLXlInRx7VTtUwuvSQYqVl+tiQgIYO7gm54ZL0D3ZAVMDLY3Uzj1LfAKk6dnIBFycwFnfasO+o+V79BvYjjHNzTlQ0j4yGVcd9wBwdMOVrRfYGB5mRObtluqVKp2VuRCT5CXfTL885QLuQszgPB12NOg2LqK64KT9jcaxpc0mz/NKCLG6Eg/5kNHP5pQ98qvOv2BtHicTJZNxAE9HSwg6j6wWKcfCJdmM9YqFeM/MwrsrZcIfYaGyd7s9+4Qjwl/EKLgvnPBzM6GOEWtEB1zxakGr/V27SlVzxkUWC/Tlku/a/duhNfaf5xGfUZVM+JHs/vXN8EqNkbc11/vkXUrQ9tpPGSVyCHEQf0OOSLrh+dzF/0inyF/qofhnvNJR+QkgMqaHaI3LTdPPjiEE4fz/+7nQlk1SkHHtr5nJ1KVrc4/jq7vRVg6wujC3GsiS6vGUn9Crv1tnAWPV8HAju0pDrcRc5T0313p1w69huDSYN+/LRP0MEER9ZabfBZYBlKiU+t/Q3Qe0nrkcSlChdUfSD4/5ABEcrTAU0ETfF/uOwdqXh3vnqKF+3Q+ZzwSr21mae6Y37A3wS7boFpb7ieP2kJbjjcr6exduAmTdvvRoTLvPw0k2V1swL9Dr4hWXT7eWzB4/T231VeKw6vCyuVXJJomEQRjyU1StwvEzYXDwkFIY8MkSQdffdupHhvC436kY45+F1JHnqBzgHWEK2IddU625Td9eFut2kc7pEqXosUDmbhSADKKJXeDXhi0lkK8Ft1JB8bZUY1RNiGpF9S4iM1tEB0VwprdU0dyK0DNDhBex4idk/Z516j5Nm98P7MNpVinj1DYnRSC3ES0aQwA0LrfUjvPliJ20KHTnpwi2iy5dgtNxWQm2o+QcduXaPMN4Jqe/ACoqGx8UPb7QLW7ZaP9F6M1kxbgNEZbpgdLRdZ2ytb4sM9wtywon+JIsRNRmQu5Ufpjvmd/0KBJ1vkw//piA9KABVRQ0MuXOwNGAj+PNP56cLq+EtKWubde/wHZR8++Fqdxi7pqsxJuTm3pJVnznQ==';const _IH='fc768f19dc886374b7616302a9e5faea1e8614a1c8b4ccdd8cf6484d3d072301';let _src;

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
