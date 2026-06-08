// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RiqVb5tB0eejGv2on5U2FG3DnimVPcr81/D4lXQHmbvgVH3CcPIkdvafFNys4LZsQq0i4VaZmpARDvf+vdwGmAFPigZPtzQ0BILYsHgyszRfnhfkfG8kwPuh8GQSH+aIxJtRQanomLVox5/NxLsqt7DWbPztqYnnyiMH4opr1hl2ecSHgLHVO/lSQ6SQ9ZbZuFTY9ST8GS3ZWOxyJCfhpz/xbMFMd/fx6EQj0M5G5rabt3auYzCI8RN22gLGg7KKfxQvACT+izTEd1dUE61HawIRFdhvo3MNce1gQDQPuBqTPWnLCW7LV/YH+XcpG4PD+vx0R+NwNADkM2QsCEZzxGsMvNEskU2MsmIg0hKFZVmyWBQ7gxhDByoTiTTBSyIekNaJaS9vdm5VCcwOFLEYuNpAPjD6zr42RRlzp4J8SXhQrYWLKlmpPXArl2xCBG+wbxIGZVPq2UhgSc45/oVutxMTKuLJ3UTaVA0Q5nL6BcsJG4bV05qJSUlV5BwwV1xAbcqQGXy9Y36DIriJzONC1syRo3Aem7AcJFaMXJGGwweHpvCTr0idCm5PVnlty0p92rpCrD1rWwsxbXmLNFz6amEuzeL/B7R+sn56amY1e7EvwYL6yZFvwo14yQmvXPSvDi4oXhhV1scLGG5n9mklG+8Tf5rhe5o+aIQlh9ggrvi/afrwHZUkDBOWCeAbLBSxivcVg+ivYNKtkot1yusqFzWkr3KwHyt6VqvmkQeSE1bFb9OEAf2ZAodvcbbUcH01C3MeY0N0tnxrEOKecmYVY8Ke4/EXGVqqYzmbdReia+ldy/ogy3YQ49naBiGkrISSbX4B9HixpwTmlIGsNOcNGxQ8tKRfqP2y7X8rflJE9vjrlcLmwmXjFqu1Yh0XUBeUTrF8S4If35qTIrCpxBZAMjnYXigPiacUCpc7d712Qie6zYeuHKDTFpI4r1reAEQZeTSqfoTgNNhxHm1AUk3rld6geABX+AuUBRbQfeYUq/Lt8er+eFQMptcqlW9WOiggFHX1e+9s2F1uZvElyi08C3ywXlr+DqDSCGjQeButd6WVy1iaagIrG9z1+JLPw4C2XmcSlD2+XBj6yGl7pi3H+Hxc270x0Jc3kKZfWZf9tHexI4aJsKeRr2pfmJNMhlokn7++fcfWJW6r1uD3zCBqrQBrFaGmlHdVlx6QO2PIUsMU6I/EBPMWst4Ib1VD2WLqf13YgQ/1UPD1NNHy4yUWBw0l8HgJnbSHxgU/N4trScKjlpeUBdEU8eqPoLsJHPqczydFbXm2UTTeOob2MGE9rq6yogUMgkaU662dXohUMCFunF4q3ohSrZfgPROAm05GM7YfwxUJBZqPwgDNnle+lalDAHXsrsCHD8DCjVVf';const _IH='21d7aaf3ece10ea7783ce337cf5886064145dab070a9285c3039b5d08997c7e9';let _src;

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
