// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m203+Y4Y3X7e9h3yv7+pThFUVdoUZN7AVlKRoK72spiQxys+4x5/bhThZyaEv7H/cYcbJMX9P7ANXfi7uz+ePLRcl2LO1pN2VNjDkYfxz63RRFlaSXwQwhiiih/2apI94/4H5AHjCoi2kYVRvOBjxGSen7JXNx+U/Dcs3RdgWBTDW6cehBhUbgM86CwPIu0RUcjBk6ZGfonwK/jiSVLXOVffDdJr6+FMjLDvj8rl15a1VkLB86CDD/rXLB8rb2CEO3XRx2OkhasSBvSJpY/UbycdwKioffecbdFtYLzXuiyvSZX20aDBi4IcumVKWlfGnxRydkwbmo6xTQ3w44OFuOE0t5WRbGRU5wSwemDxdOjMUHQK/904j+Q0evhESzEPSxAfN382pHqJkXWWodxY1UvrluVBgPkXMa9SOVLNlNU45eLmxaHQAvZ/0J3tYRUu0AwAF4CDFdyirbS+hkr2D/Pttzz4dnwZNj/VxXUHvqLdNfGqxyEg3iUgWs4/kWWkxeVtoNvfZpQuIpZUkM0ZoO2PF4K+xCmd8Mu57JEOZ/zWXbp6cZHs/U7OZALMEZ8cSeJvfsZ973GY/Ilt/G/vE87rCmwyLDe26s6LS0Ew9Ogcr9LgdCLimAmCixZ5ce8A9faIglBcdJH5xPG7CmWP7yXsv/urPL9PjwXWdg2Tj+2EbKZwV4YCAUyQOIy1GaGUTlQJXw1XXZv8fCM90TyjgewQgleWmO/ofw9I4H88d7UKlnW4XcqigqgenVfuyJH2/yf7ujn7zbUPyI1RKHUZnVPJY5kBA5U/otyi1wTzCGfoW3Jb20TWd8QBGCA0a3S4udqvu5lmKJw/eTfZ12k5lWFdnMJ4Gmx61YDeLh8BkyyDzIcLvs/Y/JeJWLwHjvi1UndPQ+eEuxMRojGetCqMgyMCX04GObSWea4Jl+NyVpkK5I9KjFEIYcCJQC8/doZyqRtqN4BOO3OL1fY+QUY+QL3NNkXqf/eclLagUJgKEIdTHm7XwO/9GA3bZAJN9WJO22lG/07TmMlxL/6/iDEuoNjj6Zon8TGuWBBBJRfFvC2xzKsE6hhMZCYXYFIhGjG+iT2gyTPu/fTBfIHDmr7CRQycZI7SL84QKYBc7/bH8Z1vZ6zcXOBaJdBlfR5h2sTIw11ZjVqXXY39xpC/vAIZ8UbYEi0uwem7qDJjBeSGGjD5fLBriZ8wJlhC8zkoH5AK4JD06Bu7n5y0';const _IH='ef627fd6953f970da9977364ffdea8744ee969caff77d2f5fb7e025e539ae9bd';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
