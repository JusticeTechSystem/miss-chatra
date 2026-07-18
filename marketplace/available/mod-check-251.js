// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKIF6eetHJUWTIr8vmfRmKE4v1mYi6vAvRNckiNo/06JrRBKxU9BbVgo/oLWIszYaQcZwhwfJ5NVy05/OqMNl4WyIOkKctn+OKjMB5wuMzXOUGwO1/ROx0F1WLYhVpDarhlR6qTfPpL25VoEDJSVMgqKHghZsTOY3wZKJNenCpEWOyjE+O9WiX6pPyttMhk8cqOKYyNXas4Q8JPe5w9P3mZhJOIOpCKAXrhHbcqyycESPtxKErsXSsDYEK1hcBEzoyJRUiWLWiTyMvF+963yxOAHloHT+0N34z6mDlI95Y9b1C0zBT4SHENwzAwhiP+c7zWQqT8FFCP9MOFHTL+qkP/M9gsR/GOaCGc/iDkFds1LrQf5ZhdYGGkK6yKM0JzAQVeFb33kvagVCtq4u/Rw9/Jklh06fv/4nbIZH3bdNVqtUpmR5FCQTnjGkLNDIe+4KVzZrgBs1wC3gIXZMR+USBYQKw8AmgA9MsZ84FMPhKsQL0wrEJx+WeUs5iZLB0eWVhs26+67idYceuPd+kCyGALxf4cpF0kYxrpN4QnKYnZcBTcwpxcG4j7zGRyjWeFEAEf6RZ2ow/Rdh+cLFf+7pFe6OXlI0ng4AEEbFnbNh1fHQgXFn+KX696iv+SBWR/O4YSJ2uC8FWcsxLfM+pTnGVASlL7ApoTi7bIZ+NYnYWltTfV7PvjnhmgkORt+l7QNmy0G7+1Z4RJTN3QeTj82q2XRPZ0RFILe4+jPpo7Id3Pm8qFxI6zc2lDlTHE7ACoPsVVdrMHSZ7FdZdIG6r9vwZ3VtYrXvQB61ma0osfMT2TLI7bkanRQ56pVWlPhEZbGVQmykn68in9f93iizsFcvxxwFkj2+Wu50Cz6pPxQlj1ZCYB75X+uXlTqMlGpZ8CGPOEZGM93QsLF+jSQlzMfw4JOO4Xz7ZTS5tGiq4HOsNvMaSW9mBhFcLwd80tPgQEE4PWCZgBD1dgfLxC4KVzl3RZAgRJiwAtCvJ+fdgwpNqAGxSTyshEdz7Vi9MvUYJUGFpKQdDWHG6CWhsjOV1U53TjktrMmiRBLcoKeYQqIj+kcj66lmT9b3weXz0NC9R/Iw5RubVQbyijRkPa2GB/9muQxkt87GlsqAklVksH6HFoN9XwstajyhLiA4UThmrKxuRO5JsfKRkZ7idITi2Qpa20cBpSOYAq4ijHyK1FY6L0+WkG0sL8w1f3L36fEftJYPoXUF9Y2TvRWiZWmOuiruJIelSLpidndrChVyJdhn8uvyslG8zwdkQG5FJdKc0KWDRLhWKXru956ToTPiJ2rFt/qb6GNMdwORUSKpwaLcP3nmWe5XGCYHXLNsb8FHr4AG48wnk8FaU3Ur4TpDEfzjLcD4Q8FVHNfzvVb6EmRc=';const _IH='dc6242f8481466887cd11a2b704e1025eb74a273ae02b1d5bb9baf31d7d6e43f';let _src;

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
