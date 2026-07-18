// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToj8CyyVzxvk9tL53pdngvL9Gc3x+TBkTqDTJJKpppwWjno8e+yMGurftt90OqRTpZsDplUN+qyS3yV1xm9fDzx1l9ApILEI9uISgQ2oszo99paTssKI7iA2yxpPlYEbBCO7msGzKVrHNzlfsdRlyzCWSxj/FySoVfBDyQmzeEdO/B+o7PtF7oES3fHIN9cS1W1gur4U+eMc1ShHliiU6GrZdwNMtRFAnu9nnynO9jbQJn590cy5xlWql2hF5IkrS3XaHEAwL/fvQ8T9mV62Lmy9AaxpC3amc3gcZjQQNnyjHhT6fiogdcs7fYd+JbLPtlpdOYJml1nJB882O+P4fAGfHRLS2uCEXm8+5/owx4Y2vfhJR94f8KgbGn8/V/7DxbOAjSCtD7jm4u5WKaNGhgD3xAdM30rui/fEO8ffgY0QgpkIE2eF3Zdo4+aHUXhjZUGAV6oeBOs3NWpg6gKFyX9vUqEfhKqocKObdhFzfmiWZOt4BaFDMZbFcAqDhBGNNkp/yv0/fcuie62NT0y7WTMeNMN5NENFf7qo3k7g8Hn2JL6LoE6wQ7iwZtR43tDw+D68SjQ11MwNBO+hU+/jpRZq58czLMhHItvEWaeR2AmI+WgOZQlAXYA1pc1HXbIoQsApEqtkb9i2OwN/4w8flOVZtO/U/4NOHJ1pCkGXUMYoN0AGI5nz+JskGka5QzxvvOKMUnUPUBYx2J4elg6t9AmRaFr3OFKRcFSui67RdeLtWHUPvPOxBOiErlQUEHCxWXOq+Np3ppN5Tsq8ON6YWS4KBjSy5DcuCUswStukXrOriwXtTSKUGJF6zgo9N5ZUIf0VEV3SGFBb6aAUX9hptTUVkVsBCZy0scUdLCxDqyqb8HaCXZXixEtgT3Rp6QYkuCw8pBJ5bA7vpmKEEEW5n7RaXMROyF2hiYeZFEFKMzblhJbl1SiZPAJXEnAxDlhfUntpEU8OJTTHzL19y/eCK0w3/47Xsm4WYVNrasARjF2jrG2Lm32O0M8P+MJMMLHs6CreRYTjl3su19wWuaSCAV38UFgSOgPZcHE2qIUSwHPsNmIiraTrWWBIVyjJmBbrZVciaSGfw22EUgsmbE1wrBJBH86F5RhP/LBEYI9hkoYGoIvcJzJR6WqRBi4voHvWvz7iIFCPq9WlMY+B7xE7Ei41KCYa2RxuJnMTziiB3HE3mbMZRM2jRo5N54tgcKl5w9IOPl0sLxc0MYzOyyNlM92XKeMOJLbXOnBhGGAhVPp8A9iQkMByOSKRi6FaJE56gkrmKxo4dxQzjY1vpNMSCSkQckHARSlJIy1RraUJ5YsznC8NwqAqO01/un6cjABwalnRXU6OBmlkfCXqKx3QGoUKdloagM+HZLYKTpOTdZNdiPG9vKdcYPpvtdieUsLRz/Dy+iKx88Y5NHJMqa3HL7K+IvwXVHV3KcprxJjMkoppwZazW4zai68LXlgOO4HoDTYZsE6igHM+zCNskuXZFPkFC3pBtr5ZzaSZQRLF74nsJNGt9qmGQMvK/w2EH6ahxYHKqQgF5IAmnnBYvVvoIt/TjXeRsxeclo4d4h2XW6TZ9QJTraxvYyA5vRULMSaAioC4z/UXWmTl2Xy8UCqjQRGt/ydY4eGbrQN5Nx0ujhv6E8iRswPk62cS8LA1jiR5WrmYHIxUoUG99qWpSXexRHJL50RKVw3xjyLyabIlDUzs60SxUzu1sgu7Y0Na3cBbknSuPEpljtesqTbsznOih+NjmLG0jiVS/4BdxMaQWuc3ynuH1RcOmk';const _IH='220f9892c7ff7a686e68655c1c142b5df9c42266032321bbc9a50a61f4fdb1cc';let _src;

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
