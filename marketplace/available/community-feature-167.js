// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShSL/yhxKN/HOLaVwHXiICWboTj5+yx5u9VMLlR0oJrlKpEgFgte2Aqd7JmMFai5vtWIKBmHnPUOn6kE2pws2LAkKX1yAR30NXDrI+0LpTrZOh3QwscY04zzOuB0nYv+jR+6Uv6RzU1Vepobr6Y9KFJ41hHtCZ7F/ciHGbIqohBb2PqKkDFJbH6UfAl+MAxfAwgpiAsYfkcntjk/tYR9jCwA4mr8OxDnBaz1GnwCSQZ1Szs+jjAaU7k9mV4iZnwWlGYD86N/zHK5pyVaOz1P+W4A6aJI+jdhQKI9SrYLX4mlksbEP3hyaw9xmGIFFJ3yGSGmmiI9GYn3kJwnGjhWPjZi2dbA81dIpkGrvMLhKqXJL/Kfj0VI+VzEWChXgIwYV8vJehCbQxEwH5jYaCkusfJ1nJzxEOj1U7r7m3aQ2g2U3yJWaXzAdAJJyNLIA51fAAH075TfsWCYZJfVXf31D7c9nRQ7mGO5ALjyYTgXRsbz2FxJGgficGQJMQFLFtdpHBYp2JgTIoYCJsyLzA4xZREGzx02/In5IwkWvIJyzMg1iwLxuRkqbl0q2AhtEH/75GmV8N/l4pxJji4A8JpwnJPZP1f1PWrxO2py6mRopQf/P27BKpeLCVO7hHszYmw4UZqK+Qt9VCTPN/uwULzvvwgmCWO4/zdXie9dGdPaASS/2BABRqmqLpd0FzFPHTsSzkoLEI7d18nJbAKuCa+3maicZ1bzva+r5XxuafBYpXIe7hQg==';const _IH='9772078bbc25740b246ac7baa4662033fa679e7bba32483464aabd3823d6e57e';let _src;

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
