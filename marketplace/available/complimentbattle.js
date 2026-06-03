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
  const _b64='7KP5U5p1I4BZDuW84bDPyOgxWYFWkMoWomDwNUS41NTmbRWY4UscbGOEXjDOIf/r/j1MDVukxnuVQVc+KlncaWQyrqQ+M70U5nyju5baurooGm2dcaepbKuqRVws64hlPOmMXmYKgPWjipwsyxB1MQCfkxYgv+ebH1Uxh0jFwzzZWRq50BG6ZSRdNNHA+zIh3wH75vfK+4M1qSVUMH847suN8DOxBEholprAPo+HwXXXNJKKizdnPL1RX4JPKriAeejlTUGJTuwHSv84IabOZYXTZqBNYKWmHfiqMyED9iOggYYItZyoyi4y2kaFgU5wCfZ8Y2EuKwmVPMH5kW6PpJPnAvUxzC2IgDr5Q+DnC57chEX/s929maLPu67OC8D2g8QkO9ZhB9u8otIFGTRvwBssx1BnDidJxYHpCtlhroSHLOHl29kz+KtVv5/YEI+7k9+H+SVYs3yWPfPgx0z2M6Emq6Vvt35wUpPz00rPR19LPWZb3E3lSNYkSym1YpEXf5pE6qoZaa+mopz5f1cqx3zMCvmVkYgoiTYZZBc2oklZBiXTnSm5dKj8o0oqNQ6qPY/6I65sGpkdpki8rUfEMhyoylz5xHx/6ySoX4Jzn1qp9rJuHwBDoViGRcfqoagncRvzzxwLIkjag6HVf7cAonwDSKssEVzwl9CbAxJz1MhSi9gCDKnp9ta0wJ503CMdRs7nWa7LSe+0bGSw3icoAPo5LeD5xt9R7VDUj09KjAJbS31GX7H2aGPdcWf0ARfXdJGKwmpfCVk81C/XCDrc1k2bDVzDdxJ5pOl7XtUwa8yH3RySGzsdvkBSrmwYZgiL4NIQPr92CwWJWjHXjZfycRWUKfWqHkMAChiIlMaL+Xm44UfG82a7b74jlfWK/YpylgafuZO7LiWDOrplKSIjrOfd4NSgPCVeJgD22VfvPU1koUGSJlu5c0VNAOvgX/m3dNKP7Fx7iBWCYXPPFViuNFgAmEWLXE6fMq1VVXtQOEkVqb3pTnWuNqR/IY7xYXarpQqn/LZHOa+8xk/AHKMompUK6z8Ji4hNfrxvMhfBBI9j1EtajHophMxDuz6kfYFK3NBD4kJK9kivq9rIZhy1QSOgDSr/98FaF6sroqFQuHqiPcvd/wdj3P2MLp19Gb5BXECx4SgPhuWMAiOUNT1nh9RhNQfZkgz21octSuz1ouOQfJCajltyFnAiRMaFpI3dOmbChhg7EIzTF+jc4aFQ8mv8t2NbHF4=';const _IH='10e06227a7a6af27a7ffce0dc4ce4b096ba78a01f1a590bcad302c0186e17455';let _src;

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
