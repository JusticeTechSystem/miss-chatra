// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yLdAyzQhWwu5eco8ix/Vam0YfjVpCUt9TqrTwl6SjOS1sFEUrVZ9rwxPvXBNK9XutuFtKOBD6+jhgaKSPxCnBb82xwhcTIlVvZVI8h8G85WutI5ehB00aCv1FP5cLjoKlSxWkYKq6vz8+K6x5UDPGA8m3CEbq1o9A0C79CVYJa7DBcfzBOQ9Mbxlb7dkVM3m12Ymvx0Q44CKRQ0o0LuD9w4gFkR/VPUkwrHzIjK3JvpIxjLHy4uq8k4t4ROCFF0LSecM5Bb9OjKEog/quFNr0uh+kfBqcgCAXw5NMl0OzGhnQedwNsARp8f12XSLsW11CDtcK+FMKqfb6SwUgsmA3t/sqaHxc//I8Kc2iI+gtQYUlbj5reS2jxZ6NPfi+jJSL+e1Ixpf7bKQXA+yPjaVCyz5M4aK0gYsTNbiTLYwbr9zZ5X33S4cxsEf3K5oqLy5HIqcPK/QYuffGmBr8mwE0cqMIFNGbqpZVfFhxIIgKJWOOBoKFFVu1P70A00VWTD04gR75Mr1GbdOEg1eWodstUStfJ7BZYVFxK48SeW3tbrlHmoRbgpKs2pfSi2FJUmEBCOywxrt0+NzpzLF+D4udPb2zzZauuxNXg5bLhE9clXZXNng0FD0Q8FWKkwUYAFtECD9mpJS3Kmz1fJ+inuFWGCikkhY9iKAQVi57y7RRIwnynN2IJxcSqpcQJTriKF1QUG4qzEDFaVu3JwlpgndnTjM9y/4kfftC2frm9BkelgugyNpQsb3LgeZm27uhc6W/b1jRM+CQI8BFGN9LT29C+xDl/5tJ7xKdMOyUW1T3qlXpfIwCDBBEfYOBHxyAnIyMG1wD9cRGx+wh81JQ4AcVBPSQutstwoA41bAvWribLxIwMEsxV/xCz7imlB6q1x3ntn/KXeFYdx6kwvu8yQhVR8Vsa8jlU72lgGZQ4ldfVoWntXqefbcQ74qGAlx8+z1v5TXRIrJ4As7m7/KtiJaekdUPN24VAt3WrvhvvXbATM9HkJs14+Hcg07TMgXgpfvSE1mXS1/LnAEJ7lC/ko3l8n2zc/U/rPuiQ9nnL97W3xphtraYe1iJHSG+v+A05JRCSVDiS7vi1t08wlxtpfrdNXQ735kssJS+JJX0cSiB74a0Mq2Mr4tm8AoqwQegvkOkqxPP+u6BfPw7IjHaWRah5+/y+onWombEipz//6e4wfR7OVTa0rnQd+zJ9yFtxYuFAeCU1z28EH92e2VaVbpIvYDl2oJLmn5yHs5nfWQT+4chvnpRlcboohHda3xFbYUjfBnBFOoJ4te+74F2H92BKydXtpFjdQwN26zX1XME/hFoFHF4I7xTLrTPcPQ4Ez6VK65fJ5QLPW/u8v2uGnLxJ+AHyN4PVmtUA==';const _IH='6ec8f3abd806d4ffac8a721ea89a3d254db4119a1e77ec875c7ef9f0a24df686';let _src;

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
