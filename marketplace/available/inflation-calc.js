// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRojWGX7h4ECE94gYTtQDfwhejxu3ILfEy6AB+dWZmcjW/QReYagheLowG01B0nf/AaN6tQ/3Mu8oJhI8pUvU6crVtNtDaEsms5Eiz8MZwAATEloGVhUDFDapKp7xnq1JWqRh7rSIU10C6nK6kn7pBAgwaAD3VFN+1ArmDXbVKOPTw3XHUPOf0/3Tay7esP3kfkNlImZlQiFyi85FXWBCjRJYs85T5FxZ06w8T3WJSY0z9RtA5WjwwM+bt4knRa2qgqybDPDnsTxeAiHasSx2mn4NPvWsa9aiWO8D3lRQeOMJygoxkL2U/0IxH9Pe0u70tHNaloqiq8bazB4me5OWXXg9cf4A88qM25aIbW+v4XhTUm773VAQ3iCVqU/ViGldu8j4jr2ndT/SemmNvSi2mvaiOHjrj2e5YHvrv6GGCNA+/e3RXiRbmjdT2eR2wWh8tZQGL+1PxKL/csW7iHJa73R+1y5oZrvaIRJVee5shjFYv+X0ZJmFOfD80vNkeJ6tISGoYj0pFTSFTWtY4idAFpIFVixjBCIT08C3RNvZJqLm2Hv9JBisFsZtWVy6P0EgVv12dtcI8iUNpZgyMunlcr/1gWek7WypyhFPxOi0P/18/itwirs/IOzD/60ux39rSloT9ED7/AhXRdH5IP7tflTmQkhOqVXmXGcaRqp4diZJm528cjW7joni04eimrxsyN1QtgVmbPeZCJ8yhWLgirPmhFpWuzUFZ23U8eGT60dlSmGyQlGC8qN9kdTI4OKS4OYcWVHZiQtiP56goxfTnu5JEN6H1raCZGbbdzDAMQaEvE3rh2uL+bI0p7DCn+HyWS2IlV4g9R9uqb/gjdKjTbP4eECc5qdnddhnppsrEYeUNCliPQ+QL2wQDgtvGXUs7Wr3e28KHuFXV2GRCt6wdCe7Vf1V0RYO2Q0cGiP1ndfHq7gG0iywnrLOxWAOpa56VcM5nhvOenkO/ckdsXa3H1ZezESpowNzJvwKBpyDWG4cs6uZ7a2RG1SgD9UCLFszDR8eL6PkOEZfOcl519UYx8IaVpamVeeTD+CFI0Sm+vZ7EjfXpZjjRFdVYjS1y2Rowebopa2QjlomKA2IO7godDzYKXWMeVAq5UXUDGXaLJKEe+Id2K2zAkka7PA+ErZrnG3cYHaNw1m+CC91CMYHCTWuyeNbpQ+VCDIaxB0XqOZdPNhU5NllTg/K12fEt/YS/hJdhg/sQIx1HYj8j2xEVRDkrWD+Mh7ja0oaJgI2R8N2xjAOivTnDFudShrzYYb4zYeOTegksVZQqrN0NaZT+ZElvFyIJuPpzOzbd9xL4rnE+LhRAcNPmyTJdcv9s5+iyJ0sGveFvUhL3vDopB4JPUnMtOZkwQgJbDva//oTkKGBomznsyxWIrzHjr3ndk2wH7u/6hOu8G6eFplVxA2K084jZOAHaKG+1XRtrzaL0t0R5c68mhp91Ibs9gn7Nzc5rAiE4qN5OjMj9tp4V3v67Y7TZu52j9Y8oW0PcCHPL4BQA2tbmOhSbL+V74PWqAJIkzhMN4tlbHPUavsvqUe4bL8VQ6Gl4SiUMnTjTeFTKQYcDxgPLZteyQTOsvvirjhAc1r9KVyjm9UQ6atSV+jKFQNVbmIECh/1qRUs/cDhYVtJ+zIsPVguFXxIG0mbpwsRnp/PkHJngFD+jVcGjz/+ETi7zAlh/QYBln1MJg/e3aoPeuipgSrYu6w3sGshtGdMIQQCEvx8I5iC+hWf8mYsjW9Kk=';const _IH='09cfa154c9851d8a1c86ac733ce97f8c01a82d7942090f02f13308331e046dd1';let _src;

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
