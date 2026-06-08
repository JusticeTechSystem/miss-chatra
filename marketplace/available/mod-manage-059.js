// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rNw9uz/rZD3UmGSM9rIu744L8bHyMhd4WDSTixbykLOjNUiZfXzJnjYpAD9HvajOZRMIjr9SrrDZA7ewaSusYNHimT7AGBWngc0+nbKgWiEs9DXFMDmT6Gcq5HlWFRU+qSm4Gy1ZkvT8CBHgtVxNrQk+aQt8XEvgPV9A/fmWRHK7OANbwcakEs8DzMCvN9OOxFyRw/9ZX4H6TZBg4k9zjTGZKVpI3hcTXSWfsfCeNBUcKV/Syq9zUJ9K6FN+OQpy9pubfYhdFToriysTgYNLHOGS+y4gerEDoAMDyf3ak3gEr5A9IGQsGNFT9h2z2Is7AwjH1iCMzWGr3FMNh6U4Sq9Omqqz/RZdg2fvLe6SySlq/imIR+9IPzHd9N0vlYHYEXwAanzBwzcri4WvWi7fVzF6VfAaFNazwZInmoFGq6e2nC2q1ZMqxk8QakDMgTs+lx3u0KhzGpxjPfV5fq0aIcjllG7PpOn6u8wG3t4UunbC1QjQGEgupbIlo4tYCBRoNnAWXQFcpYTj770ItuakJiGZt+lJD8UZOk2dwxRyMTbu6Ac6cQg25UZNFucS7OiYwM6ZSFeLvlkIIDwWXwgekGD00BoMym7/alIH+PGJHHvpBuDZofTTll/suxT0slL/w0Lyae2o1g3d5rMXRBeO5gSpGlDa1f2FdIL3f+blOY9wTftIHQHq4H10Ddj5Mysv5VMaUwGDnHKt6RqRCsiLrfxmFRydQZKX5O8y2JRWh3UJniQQpfIYF7cjvq8QC5fxR8DGu4fFtB+weJTHVFcVDptpIxNRwH77LccD+LP0RtEFYwhAcWe/1mEGFkab8+P5m1GR/jV34Mipj3zvnYfKnW3TsSitIEs1WwwcurE9G9+4llDx7NJCsMdZNuJMULftMivzXknfo/K88n07h3akSksLQIG6hryPBZtI9m2nSMJhJt8x3Nu03WI9zLoSYyn2VfXaUutUsHGZ8S4UaEIJNJ3NvPFKRclSgcNPwPnuq4pBtUv4iyDeewJ0dXqbuCTdgH0hWZd5I5+gorAd8jFKCEc/kmYMLurM0iYHcvPFWUWIcjzlXgN+oc9uOk7TG6d8f42GIAAnU6g9wLPRqE6xfKbF3oGRIYO+3WWfksH21rOOpC3Urhw32aIjtgl1+YC6uTiVQv3hHoCp3XTB2PbBDh9GnOaXdWKf6E7NnTUx3fMVroI8BFB9gub+b9aeBkyHugPgLUu+RI1AkzNQsHL6oyfPUdNEQibzaIDVNqhebcl/3frzCDNJ2b3BjtdWjWdzGH4xrGeCXijC1+X/5L+nQUHOBa7RSoiGE/hUlqXO+Ii3THfFSe0jfl0R7tYiNYGIKAEx1drjiIiu0ILcstqhFvpcB8H8S8Q16Ii0ysRltbWTl7I=';const _IH='17bf957276f0a6f4e3e43718a1b0a42f930df0499fa539c5755679eb4d89b1bb';let _src;

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
