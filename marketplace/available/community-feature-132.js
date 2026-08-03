// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZQZjz6MSj1cWuFdiVzaVNTRvVrKNI0JLG5ETBm6+kCEhKOqijEIPJGdmOAmWi1x6WdJWY1jixkjdAYvafd5W4m8lbv3UqgS11watmE+s9ghIH4GVokE4tnYhZmtW+kAW+Wgc3qKGpvC4nJV6rsRcGYTFaxaLhTVfzZ3djG2VlW/7uQl3AWCGqYbMwV9n5DEfY3XK/wzAqk+EtAATUf2+5gu8bheEbp93vqD+9EjZvjntEimSLRrRcqbJTz+f4Rx1OID7uoPf3Tr6HHnfBzYUbrzxya+gWXzRIfIE8vSimAceHtm15t7+cs3fYS8Gp7/SpUCNu+h0yoVFab/uoew0mlIvAfE0Sg0uqUcrJz9CZy0bcU8FYyT6ro1HKxzeIAmnn3jJpMj4YXwXJ180u+JDiBvPBqaZIwqqFWv3mqgzky4Wo5htqlzRlzW4y3QJFJ5l7OhsxODeHiF+5Q7rl0LfVajv7enuKaLMB3NwBvsZiiDzzCLFpN2b1MsrxQuwRg1BJTsmIn/zJs/Cb1uw54JlnssdimgixSrBpoWXLlFGIsAcRnQfBzHySLEzPdmAtMCymCmTFw9aMnjaWBtBuE39Ms9TLJxDu9EehLYeKZDvyAgac9d6fWEbDJrgh27V9esrxWEvbb5/8Fe0ieda9DnnCzH/7DmQNX3yocA2UKp5/3JZnKwTO9Ls0q5U4l9LJJtZ9AExfRvkvj7kmqxOiWL34k7KZP+tSu1hntJRLs6mc';const _IH='e64cba52b3233011c7dc38cfcc502fc1a3543e5483c7b00d09cb3dd2988697f9';let _src;

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
