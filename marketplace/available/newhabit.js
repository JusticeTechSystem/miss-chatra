// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3JWSsVDmhoXr9hrAQI2wXkbtEhmzqJIZcv4i08Spoy49t45Kp1YDwb2CIaKegsw3VSf8txx8aVWsaqpUGG/j83Qk/pF57lmuriuL1oAkYGtEN2XwUZVwk3+OswfmeJJ6aDoekkf8hXiLCsouDItv/2P8PYD0YCSq82aVH8aQRDnxNND+nCmElFVJQguGFBODBgQneXz11bFvz3u5ZOpbv0HpXWUb8O9rQStWZwwHTiz/+jNZYmxXET+f2Ic306sg6gyU2ypX/iRGbC/crYWs90Cqjv0pCkV1ItxqaQgJw4uR3/XUQNe6EL4T5/FkZZchDxdvRvp5dTmzgwU6D7hFt0uxIqvh8PN64873pcNpYlPXHXVoxX9qQMnWU065vkpOzpMi8W6zgGiLhTmn3s7Ors0JAbUb5nPJugPbbzfDjkL8reS+MMSe87IocEzODfpJemD+XwiVmTnR9Km8DMuRdVuDjHdtH5uibRFDspiTthrsSlqjS0mVxwLmNqWAsNCvfdz2E/LUIa4tedQKwyjZjpf2E26Ucd7AzaSSQ8weghYqVrbaSXQxH1aL9xTxemJdnqwuk8YxjOLcfYb5jAksat0fD4sn7tFRKdXK5LTBYtFW05l/H2zP5bUEMkBhTi/n7h0BXdbJdu9vXAzXlGuIrUsQgWLLtWqKMjVNT2TYQlxJwjfU/PB7cLkB9oVx2tBhlSXHeqZnRdxe8jBnatfG0UT7/2V2dLl6P41khCk76jdsqv5Kecky/ulYGOj4f7yMjzm5EAZcavl9TfwGqm8TxB5YJQkAHBSloSrt4SxqJ4gJRxbewZ5ud/IxEWAAOc1bEc6W4pVj3VFmSWTCzPutNMoI7vuGQZWvX6pA5qBbPlwmQsE5VYRaZ/e9MRMtKh9Eic/9eMl4S7ttXRuFHR3aYhl4Wzf10KB2LK0rLcJGs2RB9Qs6PbwpIcjfLGwKT7VMVKlzdxmjy00DEQVvYEW9cHHzSJgemOw74I14vZ6WmSYuLGfA8+ZgrOuKB/BcfewBnvy49N1tvT2unRPwVsbpv5GeVoeRfy6o/BLYoQ3lOzm2sUx4lq6A8NLDjIEGMdNECH5jk6XZl5Ob3kzCIIuwGFpAnVKtNr3Xx/RaLa9r+cGZr2AspZOMMEKxD0e/vQsGd6G8/uL0k0hwXsNQ/J8jUURcpt+18xPlI+VEhkbGlB4GCEzVEw1lKW9eBn2GRc0c=';const _IH='4f651db7bbc45df980f20251b7e419a0d173a15defa4c84c67cade102c01ead4';let _src;

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
