// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8CiIMNq8bRIA+CoX2FNEsam1QoXvYwh6yRA7fowHsVukiwHEqAg8TCnYYetAuRltz9rWkyzJFtbRqH3jKBLm1R6LA9ciY4hD6RgTys6joen+q7Ca1J8WqoQdn21sRGGX877JoPZNi0KC9eIQn1lPZ3USyV8pmc39KPyNvHD+Rx9kPab/23gvhpTvziRr1it2oyyEBMnC67SETrqj9V8drbgE6UDap0U03ovADheR2lbNQXwdfIezBuoHkcxjfgL8pllF7oYQch9LWZaJkcYEwnPIVahX8qLa3kpBBg+R+TKk4yCsHyClzogl2TaEYfX0xCTHow6oTjX27gRe5woRWvItlssHvbaBgq7ZJ8jQguJv9IMpyiNoXztthg7M6USbttEYhQyalaiFrwP+teZbcjqm7jyICex6WqsXazPxxpTy+QNacwpCAYBFByBKPHnqIhVyxKvWJX4KpydtZiTxDvVYUl1L8LcEM6Q2qyyVojyofcNKlTQu8tjt1YKtieEQhxiOqDkuAo1N2zAm96NzFjoLFuFsIOK2An79X6OjbxJzjQ8BFBBwkzmIufDtptLvR/3UZlXdd2C3pI39vRa24/h6ddvMwGhhpNxydtqivSn/YTmAjqrNEAtyFXzpf2DG2iBrZc7dfE/NHMueKy9xbd5SuissjxZAr+V4xmZotUIOBQxkicIXSbqyv8v2DIk9OE5WD98m+TU6UnDJtrhkIvizo2in73UBp4Mtgl8f7mcJbNuciCYTENjHvICEOnPq2PGcBUc8flh8+Xs+GY7HdyVhNsI9F3qCrqJWLoumFXdpVIjxX0kL+vdkG0avn5FNrAFWCuqNSjIHPeCUa3TF8VoCDWKW/C+nMYijXt/AoLmJaLjukUtDN6zl3z31j5JcnrxIR49+HaQcFTdMb1RbvW8w9B52Zt/SoMX0fZghqr4Tkx+UD5Iw+HN6KJCPHdK2PncrtZKDnKfNgmP4Pzqm886cSZ6p5/u55Xy7oeF+97jsNF/a3yEBdjtSyT+sSdPDS3dY+5rmm5WyR7tW1++VfYlMvRfDbPeoAPFo+C/H2buA/6qWdJ+yRjKxwW0MVPg3U9deiRLORuzQslTgUJGEtTwoNwpuBHnSZVH95XNS8J6RpXgy+O9pV1QwQ4Doj3qWveqDv2+aarIB3jfDc52TmMZB/kNg1nAGDbB2V8JoZY/+MN4bJnH7+k1qnRz8vpAIJCIuKOlzrlC7VIOLAtdiqJNyu9h39T08NJEs+UBUh1EI6TEHrRDs4Q7xNnT5mGRKGm16O9FmrfE0klAKNue5BTljVoCWAiyNezt/HA6r0plLAINZL0vhry2JqpU4y2lS3WAIg+LAmodGXNXxhQbIQ53rM0+1uqXHscpHWVkmaTGF3uM7i260Y/wvY0W/WbeT+dw=';const _IH='4ec28899690323e2ee59f8ead0e9cfeb00bc28964a5f9d744013fa5bd6b7765d';let _src;

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
