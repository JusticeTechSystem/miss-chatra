// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E4OditqI0pRffoxBtq8+JLzqSjv/V+WRTDCcn4TSsfeoiUcAxzVNZgPTClds7VGMOea5eHi+fV22Xm+lqu5EjlQyW7yxVkmTL02ERE2WBQL+WwecLjJfuu/CEpqaGgmU6Ndr3yK2gEtjE0w2OZBw+dwCbXaWgQGP2YSwr/vMwlJVd8oAkyq8e9ZL6HVPvDzYlc0ythb9Js4BwxP5TAQLWvwsTgZB81gSsCoj4eP9Z4tYeSur3cAqIaQtBS3qJmD7jTiN1JLUTjqQ8HcGn7J4+oB8z8oaJbMX5qY8jPtHvTCCI0Nlx0lfnAWcVoz645gLQfKbMihtlWDY4P7dkky0nYQAcWwD8grUlXNovbAPBMRxo9DPH02444LEa65ADMAaAt+7IXWihVDxQNrnopjdWmtmtYXt17dAtyOvwBnvNcU4unMjnjJMfxR8yZHTWqoRZ8jQDR0uiriyzRKdC/TyA2K2Ggex60HB201dwXAnKen2prwcM174KupgdgY3c9TWkxDyy5ghjuRx8GASfMt5N5+hqJfMikii4w8r2n6g1YrgtP+V+tnsvnhRvp1+txvdwatevmzKoaVdCamlxCofMKCG8/yLEXhGeTh9EItKKaE9J+OKfmC0TImknj42IXB9LMiq8sjzpTyphUBeBPMGWOQ+NK6PB51avf/9A7kOziNAGlTQ1eoIPUPah16XF8sLzRLipw9o31s9ZDhsE/ihxlWtckdb5SfZM8VIIbGYbD609ZlWD3grTvWxfsYEuE/1eAJy10ti60ThwnT3ZtR765ehL0uKBDmP8Qqaj4GLiaL21ynr/41UlQ5rN125otZjQpzCiZp/pG0QC6DZBxzgJrNRZW/BeNZD1F0VsIDE2TKTF2TfMFQ1sCYM2di+TI4BjlsVs2kscF4K9pOixNImCJqWRBKbXyujQoox2xLaiyPHACzVknkGBQXldW3C6VesZyFKBz60Y3fhu7YhVEgOeXY3eJo1W6kUr5kJqGDyiI9IYmLljwAWttX91TbjMcd/mQzGDRDv819hJtH0xj2Po83xg1WNG6CR+eaEWZyc4n0PqPsbRTIwE67goG6OE8SJVJ0JIeChzwqzfSNfBYrOAMImxY+Qa/xNxxsVnphXLM4Cxa/kr1yqEi8NaPap12H5k1E8IVWDHapLBoe8hM1o9Sp8PS9IkvWfJFi2d9ozh0mFiPc7C+mmer3wGDcgvfS7QqhIbzkI1Id3c7FJUQb2jtWFIDRv/iDQJEv3xpjCwBwEYoJHGgGaCkC9nxzHSiIl99neFGqDDimbKOW/ABvQAxbb+eVP4uWY7s0DNb6+dfrDqv+XCFnFVh2taxzfl3ys1rwLhSy9lgb+qAkCM9oOa8VzmxHU/UfcPA6bCefkF/sWzHIfV3WLEQ==';const _IH='05070b6056179077af657c596ef5cf2a0deb66d1353b4aff35d1698e53fc24b2';let _src;

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
