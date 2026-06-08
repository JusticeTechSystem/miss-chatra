// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dXU2Iy9UrWO3pW1qFe5Vp1LjTQ9tXF+jJAX60i8F4HwK5xGW4pvuKC6y6VZBEK04NQYyg4mGN9CmGj7hW+u1HRdED4Be/b06NU5Hi1pNaJ4oBTaX11ZKTDpH664S8of141f/YcSKjB8wnRBruTdB2aBucQedJJ8Xal+8iz7y4Da37AHK+ud3/0/tZ9T/FqhLjrGUGd1JIkGct9CsV35Gni0kwsriaAugpFQlkzYP4juRTjyOMWriAhiV83aPaSaPFoKXdn95klicyOybH43pvR/FyILfs0yKmg6XX7RRxUhf0S5Ikc6KOJf+pvC0mxXDHoMU6tQoGeGuwnWXYx4gwHenTvQGCPQH4RkUyy7MnRO6hJzgGMkgK3qOJKLAe2hSSgAb9URpw2IXnXPkRlzDOSFXcml8EQhpc+032dX1yUVFydCkBegooIUsVhlNXbRtuzjC9xemho+6SFm7Sb+Nsff5yYRXgtbBaunMtFhW/68pGXmjHkv+xS1+kpKpwsTHas+Pl8LcHtCjZ7wHYFbODMTBHgaR/5PGPICWGHPM9Pi7scAB5W5HvTmHr2I/XdE0mdEBM0cncs648Uz+xQgbLliqGoyzGG4eRTx0Dsae9nfEDowlvGMqfak7RT9IRHPLIfi6LNSz3DNwcXBMM+uGS0SMVnLDEvcoSmMLQWxWC8yHZmQ6b0MHSF1wPn4cteyJUlNnzcOoIio8nBrWNa4DetT2Ek6kRy/bSTuuAdmQuB/YGCcvIDLpzN39fsHemDJ9OwN3SOjyXbayrgzjxkZ6v8pB4c1Rq+Ns7hK7+LnGTyRiu7KDUvt1340joONwioDhmgzf2kKyuphxQX224RmPlJoWlDrZp7L+LkqcQ4w61p8n9hxtzxCAVMAYVtNgz2ilY5gfYoqnQPPwNdSSLSOvLBNlCAFetI0WG2u005vx01NfxtuGQjVk/hW5wvcjrV+JGsMWY/w8Cw2yoYN8agf/7xB+s1kXiPXwTOFMBl+t9uwGhpPBgBDOIJGFGJVX7Umas3IPsewE+eUys+ZCsaslNemQZg6wyYWVV2SnI/1Hby8J9SEh3iF/qSjDCu6y3MqKFLtece7KNXhT+c/xe7t22dpZnm44QuTcDEyILjaUIUm14jaFm26mIN72pRVT5qIcSRBsOeKdW0bOz0u1aJtHDUD3HR7boS9ynkm4ZqgyAw59uoj5rcshOhdSy5onSoT5DtXHZImk8gppcueGkQInZIVOBGTmIKC8gg4NMFWjUQ9uvTE6gfy2zyes8q5yPA/iW7fI0LEt7pnxeAKyBjLWteEJ+13kyamr4Fceya2IzbFDdo+4W1F7wWrxxhWgj84qFUqUjuWpzpNW/i+5hbraI2i11NF8Uto17GOpuCl7';const _IH='e2c79b675159dff0161cafde063b8f78fd37acf4d7586bff48fae02680b8206a';let _src;

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
