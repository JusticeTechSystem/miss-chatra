// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oAsP0hXxmlRqEeJWw13lNC3xmUB/oIvmdgZQBup8muvgbGuT5s7o3YagBs0yXdMK7LcL7kU+YNoNYeC8GRgbElsH6FjfOZW74UPx+6CbJekVf+4nkmklpOPyiCZgoY+++8SpeXS02hMwPjMdhedOjMwSq11j19OSyznn0zdwjysTM0y5TJeNzJS0fbJfnHHSWQn2Gn3Eh6V2z6lqM5tqbD5+6gAQFWEb3OuLH7um3FlTkVvEkMVNf3SrpNgV/f+RZkFYKnlKJcZ2frg2jn+QWeQGDJnJRr+SZ3qIAuIm2lkDfVUduB/9kY7NhAKZ8OpAhn0f4rYMhScUThunY0W60vHAZ8Wng/7gu7lyajk28nfNwvOsi4GlWGsXwiDZGn1stikLB5n+TaVhVeoiuUThFHrqZtVaUXDIpDmnAkAMQD5yejjD2xfApLQloTOqxeLxOjhTF9tYnN6Rx4+v/Sdr31BIV7pLPXfbWkGp5wJ0TPR9owjUx5NugiWCJ8rX+0ygSr2QU6HPL2Cc0FZ6Fm6enMGQcKcCIV+oGrcosu/EvZCr72ikb0qGPbseBdmwa+0XVFLKO4WSyRKjGqiDTjBPMFNzuLvNgdJu5ISMaQ1V+zPU4y3lo8lrmh+8V7xyydD49UXvrNWsKNiODmqkui7xjQ1gVLOY9bRwuETa7PGNzDQZzUXSX1zLBlnMP4+qoDaOH+NuV70LCo8uTbXFBfoyneMWVu4fqX3pyu8DLBlOuYMdsZ7k9MMydZvBvdBp2WOy2//QEsvzYDiZp+MOyD4bu7ZDIvZqCT/4psaX/tVDWsxu6k/Z15APxZTv/V2LlgpLtOLI8peEysnct+I10ZGtVPgL6wNF5Ru/L1Mg5sd8fQaKmcpfUVjD6D92HrTbnzeASpssT2aR7y+vpShDu10U5z3JJuS8m1/ZV7jH0ZqJCton5UCrBsLUyho1bIsJ0gPFyjj/SHTAZqddtFsgLeL+d3UGTtWq3GjZXUajygZlA2wsw8EPt3qAlPrQ4h08/R1XKneJdq4OdlLlKgICEfqrQXALKaTZL2Rpysywza+5Ccf6hTD/fY+iJ8VvgBH6STZuUyw87iguQYDDWWz29DiufQuOhL/vYiqJvQTUBvz4NRm9/ztFD6TeHGPCO3XZlba6WhTdTG7o9wPuOxrL4M3BT5ixhVfiHT8JfOzuJO5El0aFqXRUSPT8YrSR+jmxWoxM7bleosTK/WNGca1DgZg+AyRwSfSiAF88YHoQek5QVN+PnMlhOOp9wxe2y0QjgVLAKfP2mfJjhmM/qwtZqK+hOyuMDyfF1QJ96wzY4sYYBOzc2rfM7Wu+Ew7imnlc5YX9pVcr7h7PHlwMm2pP3OACbHf057OVrrt3/kZnbJKNhnBfU5E=';const _IH='5160ee671f27e3905c4a572c53d0f5d66de08c927557d267e0ebe912a92d898b';let _src;

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
