// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I6JpqGFjxZB/6Mr3xjpsdDUNXxPhMYERxxgxuR7Vm1yotECs7QGOhUHKfTXv1vNgwcrbfoQ1+LUfplkfdC3CtwOmxjAh0ue2niPJsPEDG8K3oWyhNv+A8giUlWV3YdlAKFk+NNTz063REIb4IySh1MpENse2ejfVN64UggZnIgIf68vrYdhYpI6nzXmkF1ykdQqH4KsxtEBXYWQ58WqkpDKQ9ccEVzsQzlyUXWkBPjxvh4I1ULaUxuTHPd+eNbiQx0MT3IQTxfUU6NZ6MQRHV7wbHkL49aFk6/oNOcrdPLLro9DmujwOEd98ZP51ul2yKJGc1Ep94tUg+9G1b6Nzj+tyQ4sUZyOk2kOD1R8CF+aH0xCd8n1IyvGgJXfRp071p5enuAoNSqbG4L12Sm5xEl0H013oCNwdA4izQfNYFH745dRnbXyzwJd7owGQHtm8u71bb9DizB7xyjVsQL14yumZITzwRY5tOW8bqUiyp9E2BVA0zT7NEGUpaSDxfUH7b/kCHVmV99zfdXL+b4I8oCKbfQMqybo1B0sAlm4cHR/Zy/rNUK+RMmZV3lacUfRrTfI6BHg3zkAMqoUrUQsUvYfPS/7A7iaJGHw8X0g/O0QGfpiGEgfhAH1LVlTzztjLDGiNL1yMEATC4QIf2hX97MVe2R7rQIi9ZrpYoSBeDymLMj8Kfco9NrMXv4VE9U9vcxiBp7A0pW0p55wc3qalbmWh4xM05YqrCj3CvwcNq+3yelJKvt5fujo6Gg/khn6VKx8UNWJMDuwM7j8gyeWvQJU6oLpGRfG+yy28EMniRazLZi6qMXPHcr3S5gPBJj7hcGFr0CBBziZhiqQAN/BBJ82zOvU3rqYEnGAHDXkscZ3kn+SvbROfhy8uJMQ7J/9ulyVb9OG2+431kfjahVySQSxA+ipFObvA6nUKXYhviHus531pdoNzH1LBorVPi3mw8ufcecJX1dYKEV54MkLHWNh7obiIjc3ZrAh8Howi1T9QNkhrCr5CGoGl9f+Pxd/lNtQsm2Nr5pX57SnDPln3oDYohLHhiKubWzqy6DmOepf2He59UvqEubaNhQNc/o1jujUb2HuG9w3dzTsu/UfEEqB45RpT2X/vzYVjuZGWJYTti+cWOSqE5D3u3pGQoXnNLHeLhvTv72WFa0I3mutFkaSkaqIzZwlrhtUd6LVjik8PZJo3ZmCY8M5O37nDZLQPnDB3L7wOsl60TEcAbW0IRQAo1BF8x3d81zoGlA==';const _IH='5ae272b75398e93fa89462789348b632da3dec7c1c60df19fb69d9f6dfbfd24c';let _src;

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
