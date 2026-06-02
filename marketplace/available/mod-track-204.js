// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c58EVaZhCNTi9mDLGXs3lLQbuphf7moUm9jj2OAD+ZJwb+KIruce5Utn/pnzR6VDvHZ5xriG8uBoKXSqjqtnfO+P5DjObP0NMKdouzQRBSMhHEocLWT6W0LDWRAq4iRfTETzmnCGLi29ja/6ppQgSPEqZl6aUmIXzpobcTB3J4yGlzFjH/d0iDOKEz9dOKMbqv+fjQKBShgWcYrSvH3jRB/Vzf3i9WYaWMinxhgWVkBJLKwXmvjDPxPerEg5tyHoAVd0OTIFFnZ7MvG9j/f2q9bw6eshkld6L7857hB657yjQ7t6NfRqjQkEEKKU8E02jW0FazY5OFZIjBHRujR5e2fk/7mSqLwym9/c9XzJNnGAxDNSe0VUBRFFgmiYu+r+h4H6X24PM85DOsqaPe75bkl0lLLK0Vly8fuP0PBxAou5fEsZ8VP74IC7DXxAsMI2eD+ILeZzCoWZtQEGKURcRm24LYEBDd1z4kXLyRGlWrVs+6eW5zg05hXz7XriinzXFauKZ1dLZ7GOFE9KaEeN/46P1PVFO09htN9GEFhMPdC7R0MC8zdic99Zx+DRu20zoFE05/Z7Mk+kgRGPI0TJGrrkBcViuJjR4DW7BHmWGFxU7t1dSr8uTI/fGpjH7cCP9dhKtNEGLo3Ek30WZ4UnXtvPD2fLxhU0rAglfSMAh6CFQaZSgS2PPwBNwMcupc4q7piktFcID4zvk/MBreFZTlZauppQ5pMYv/90Byk233zSqw6aMFNoqvJcsm71oPWKS07r3pLNb00PZoZRY/W5nlCTpPIP3w8u38ZxL+sW0K+w9Y0/ieJzN4tZgI2+X/m9wS7J42NioZ7836Ccc7QswB9uaZPdCNqETgZpeCRW3F+sUVeZ3sJjPH0W6p4BHV0GdsIlBJw0fswVhVB7eWJdaQym02ASv8AADdbavxEYMwDnMgMImlnbnqWiLwM8B75AzZTW8PwpZ+eh9lO7QjyBaTpUsmAcecQqpgU2hA1IFk3Oi7PPkkx55kH6Ab7uzKa6uHWeYCiZuERzic0KfKA0ynwP9LGaQwiSAXmln8fxUWdSrL9lXpPbyF4jGiE5oVxxJmtaU4Ip/iFdtypRjQC/eBPM/iqltm45xOno/51ifYevZ/TcMR7GEYjrqDotHUf7UJ/arBonbgNj+IO6NbzyNbnHD83gUFCjNo2I7Sq46pK/ua+zmHDjvK7Hdj+6g7MYgPWRN3UraNa4kBqK4z1yeJ1LQmOnVu8JJgLVd6nPZ2aq2haWUA5YsA1RqSNWfvRLDH9Iogr4I5Pf76JV21jm6v5t25aQ+7PQlEZxj9T3ZgEzTNLficr3QoTlyI8f99QtkXP6WnhVtwc7MNB7GFNQHUtPacLI7lgGJEn1VdqN';const _IH='9d8b73b5583ea9702dd799411b5a88e2bd363acbf44b566936ebbb1698aaec0d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
