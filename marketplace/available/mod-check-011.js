// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M924VkQD45fDeI/bCn0YDZ3N7aF7mUKUvjsJ9O/6yaRFZyi7VS1Fqdww4gJaKGcGCEDj3GQgEYJB6PPBTVeZsZ9V/rbutEzUTSjY2KviUAMttiiGAk1Ygxp8rvQhIB2WnDApaATzEtgQQfeu3BcHYEWMmXbryjZGBOmWPfN0NLuDvpmHoFIq+0wm098WzsK262j+sbMoQTUOI7A5XhPTlSJN520LeAcXf+wAa/1XrBTvDD0lPlEAw1hJC3vkiNcz3orCc9wHrlPLMdn/VY4n4/1a4lRSsnj1CC/ahhtkQSH9XZmPRwk9DrMcBPpyM0Ogwt4L+CdZldP41Pfq2kA3oLahoU799KcjePyr31f8NlswnAWI4CZpLEKVRuWGlXr4sy5l0xrQ+ItWbFh7mVerTknTiXSCgMzfT1olkL5p007X86IZfZN69Z2EOrkXhqLCPWuA5X1eio+B6UIyfbaW7du79aF8+RT3yfXw1zm9ED4+z6ymN533jXzLbHuXULwWgdoIB+QWeRNS8Epff/Gi5BiZWWJ+H/mXeDmTSMxMvaCsMTOItVzeTTcHqyfb2/NYVfGsFrNPQGrJa2EHLOjYEOxYBkxw839S3C4Q8Dd8GjzQrTvjZIJ2nMzKQT4bJl400Zf7QaYI0tEXT46FR2mabaqgwZtRey/88+9pNONu6q7m9cZYrsVGXhOrG4IwMqeYPMKHdgeVAKXh/x37x6AklAb6K68Qn0BzDFm1gVfxgrhud3uXme5LZzjmGQ47sw0+IpwyjaW6xCBlab4WG+OTH6OpLijw5zjH/90G+pnTs8iT1JxIATon+TMfsz7L+z8QOd1DhkbppuDhyFM2WuaXeemSVdM2xMen3i5K7AbrLiiFeHxpRK1y/+DTNFrwzRVdQZQBMEao88f8PzPq5nzMzANY7fAgmNaQspYHaVVH0pJSzE5gVqpDRNoM44wJG4h7l+HXVvMguEtxkOFF+gi7RySo3gjQnKXZYYVpq2qlbYSwQXJG2+SnT+pdBqdukllBzndABSx3WIsYdSa8AdZ7xnhRwyEIt9o+Q9Brgh1ukLjY/3QFBZAa2aD8tgJAKh+jtD5JlIbBBGGjpWWCNghFYsC5DNEbUBrKnwR5lscvpEhlsXkGPIdghoDOx6CFB15VxoEPFz9MLTNXjtXoFHx5ZZmVzOgAhS+D2MZ1YpLtNvB1mIdmFFqOwdvhu6WJAooJYvAKl+3qX7llDOhnyvmxh8+PD6nrNpjwUdIZqQW/FSVt64bdJfKyNjd+//xAJTt1KlES2pXXQxFO3NFMRKn1S93RTmT/GMaOhkO6Qd+jEv1UgRIi4tjA+Vj3DF+051t8ltsK7+PWlG1PuErB5fjn7FrU2g1QGN5IkQ==';const _IH='bf1e7be6225c9cf6bf289c6bef41f48fc72b421c18131a03e4eed8579dc8d9a8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
