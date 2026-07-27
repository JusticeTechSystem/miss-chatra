// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNhkAqUSdJUEYTT7SLsL2F51UqENwdpX7RhlVku5K4imutzzC7aRsSjy2+ImkUjz4zdBh49cBtIZ6viwWaE4BQvwrCoYBrGIsd4kFPihrQ9tSU33cGoGgdYQirQUfZDs4pkL0NN4BWuDNQL3BImDmFyrDlHLz4qXxKEq4bZDYcJ8qdy+z3FDdvHY7e5bsFGoRyId4n+l+EJs+EFmcqbKNEMSDA6zNl3eb2WbE32fu3aZUqOmWvrBWznyxAhSNV9/shsc47qlYQpFngzog7woqddXejauW3mUJkn8M5Pe/uytb/jnhMDj9iutAe1ki2hZ8BJEZQymWFgDvdCb5hGiwk9Rj0tHEbwglIKsxQpgg8Bz8Bo7g0oHllEwLMVU8CVMxIrFCmIKhsvdcYYOx7HUcoByYZekhK9EW2udphKnUB9nG20xAoR5XYN62n9scZSN1BreaQnNb7uhX/CWlx1TnT/0UknUnvyR72pAe6kA5zDDX7O95f7Fab7LLHKoYny6BxA+iPY2s8CllOOvjGIpxwdTc9aN+VXcmfykkYt8DYiInrOvsvYs+4nUleuJXu+iDxduYhb5sti46DyhJUpdukK+Y4XYUnay7whkJ3Q1CTRgcp2/G0QWRGbTxGJShfFpQz8cbV528dBDT8Y+srg3YNnDaprOiMhHl32eGl2dq0FSCLYpV89jGZS9mcp2wEVy8GOjof/bxUACq2dJBR7WVi5C7tfA==';const _IH='30cb8bdd760578907cdc93c224bc1c6b93e6d3bd7bfb4ed08d14794a7e1460f1';let _src;

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
