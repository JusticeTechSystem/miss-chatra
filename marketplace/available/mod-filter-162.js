// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4kgs539LjKHKNPDkjCKxzXEw8GiH87ek5D2dsRTvzGY+q862LEQq3gtVrHxOcI5lywt2wrxA9TYcjPSNZKbJeOeDWdd5QS0F9st7mKNEjW+yNQZtzSmQ1fyhC7y4DpuG8ene9DVkFPfzaT+U2NntbIwjrg3N5V8u+9vhzhCqX3IoLfPNV8hhLV/JauXAX/eisRLaTI/4XODZSvKv6nMqAVA1QDSBe9NV51qktFSGREzTOwCW5ANiGZPvafSaz9noxhX9UtV1uYgQtve6WyRjKDQpHOXTsBprcKjjm6jc8KAVPr7yr8RizPI1BbCQipO9kxvTxz7ALFrbYj4UuG2kMCoc7dLMocb/c7t+hX7dmneqpTx2vtFTf+KA+mfJTTkm36eN0YKY7jJFEz3wLMele8nKurJ5i8w+hfjobjJzK0z2QahN+LLCmVcdoVl6V8oFjabkkYrzXQqSuNRSBaLm3jRLnT0dtyGLvnyiLzYhi+OQiq2cI+IvpmTtVz5P3N880bQGEtj1dVOjEAM8FOZIGDfCghxkN8CXWtPQ5dNlxav02xqmBeqK1vnbbUO5VWW1aucgZuDi4Bh7C4j27mhsg55aFyc95DKBAUmX64xsuUxlWzGHh1Oo2HmVCarV5CPgInYPt4K2dMXDfAofZT16iNYfZZwqRnXCjxwC1DwDZmwzvn+8CUurdTbHFmSUwLfmV+E2zx5nvlfBi5xFos6D3Js1ChDlLZofZqJStN2gWVIkLxTN0BoeW680T0LzjXBFXoU56vAO1xX95vSbf/R8b5ZM17/b8igKPndNC5nFNqL0g/hBk/7COqEj8mucu92wIII2y8qeIsXgxCIyGk20p1bRfh8JnuouTjNg1hp7np4W751FgTV/CTzjqGR6sNQ/V8ACEhqCqAZj3yI8vfbliLWbjBjEbVUUZtH1vRhvMJYNihWIBCvTL04bDFBtIvUgjOgA1EOYwmlIbnwpUBdjfnPTvNId8HbXGf4rJyKJwRpNteVFXNcI9ZKlqDEouDvluslC2++hLt3yveoaT3vcMVIVSFj7+18Bp34HJJp5Hi32byvV5HvfR9gE+ovCcjA360H4RSMFSHnEplNXp0QTsfXXttswAOiCXiivxGuEh12s9fjSamLYzSumIxbCv6W/S5oRXudcTTeLpaX2/CU1s7NYRVvDve9KXeLLjEYlH9iAou9qMyCL1ki7ASN/BNYDHNkTrE0X3Mqx8aS+h6fFJslVrw4O32GbVVWm00g31RLL7kenWdY7Wl970Y8E2jjSwBZpQblTdRDg8zRu8kfINETEUWjvQx8F7RjEeM7r5T7H7K0S1NqBzv6kdf1ayoAAkVtUzOyMvIXIQ9KzKEMota/xOuES5NEZfG7xcEYqAdDM8Tq+sdSf3';const _IH='ad89ec91195b39407feded74fea32d9627439ca1306c5d4a5c5fec0d392b0e9c';let _src;

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
