// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2kQ12jqA/wuk567+yzpb6R5DfRLQ1YoEnKpmgiWRcDrTTakhj8QVJtwirCvo072wnEl1nOP4XBkA/YTXeUK23do+sofmv86LClwFJO5p9a2Tx4yqG5YLDvXztW63d+WIoVU6GCnZJXT8LR567+FUy5R32yFFIp+93C4Ordpz5nVbYq2hIak2TPYjy8tDix8Ulgs0JlxhNFghFjRkA5hmUEJq5uYSyKquZmnA66CBQKSUtz5iOxEZhPaDPPky+n3pV1o6arcXfkjAlktx9Hze2z3EQC+k/X6Hf/vJC9fZjZDZQRGqatBt2BJG7V8gf3ZJei2kt2p+tjtNZjRI2jythA6t9Wr9QaYaBEs7iDNUqLAbs3FLsUimSwbiFyXiYIYGGVLMr+saL2T75VpWUTETswEwYCX6hB+WcTcdEmFXXWLoXMGGhPPgdcG5ozEKOlbvTIEztRIio0tOY4RuvGS6oyEM94beZ3D5dnvC+ubnnXBYiK+I3G1xr+xEt3dtr2h7WSyzc4uFepWKiPgvB8ToLqmNuvTNnv/1pjmH6fY2pTDT2a6h+oq+iNUoKT16b33I1lWMzEz4dmyPKL+qfMuvSEIEAe/KGGgbgm+m44tgF0fic+0Nx3oLuK2X1//zBpj7FyB0NCX4L2UOFS9qmKS8cVLnYshrF7K7Vrk6rc9cy4VRHsWkwITZOx1UCS/jOqh2C0hzowMzBlf+Pus2s5eb193ko/6G4mQVEXMMJ/tuJEB+7jbyyH0XJjI9WNbj6/7OpnQRl7i/+r7FK34FZeRNRHf1vlZuiz6pWhNG4xDYWyqXUx4QbzG1fO39aeHiU5PuhBPWCef7+L+Jw7drC7Nki4KlKqFs9+b9m66JiPX3r5Ixvsmb2KE+/oWT3tZMsrQE40EYXEmYoqG2GlCkDHhTq2ghBd3OUaUL3sRMHzMgPb98Lkwei38avRiKDxd38BE6Qom4iZNnvNJqhyzbvxLPJh0lMY0x9/6DJkV/TRkYMIWYWBaAFN2B9xyiUU5YErrIfYMwKpfB7SpNSCCjdmZV42Cq96bFdHf7mS57DLRVdWhaufEX4OfI+EUw2uLhye+9pD+gPdVci0u/iLHhwY2BQNmrSds7o2adBu3N4H2XKy0S7XOAkjYsoaEp13JhCuz4TT/vmBz+q1floQ3B/gJfeP+RiiXUOlHpEyabLp+ZPrYH7GYsGfvXMNY4BBDL1leJw6gy4UXouHIeqQnwFU7QUI4+3VWyhCyf4JOJaMoKEPOzNGVUnUEG7WhrpUAX1Rpkvv0GW+5v5aeeJt/wyRQ7iCqwW0ZQa8wrOA4eNGz4HEMM6Eq/vjUQ1gI2gSUsHEc5rAY8x/4zVYO83oUsb7PQR6wWN0Ktns9IHrTZZ+IF82FvT0FkIyni3XrtWFXFOa3OqnNTVWmhU49Nq+yKWc2tGl6Cmb1V3q5Rs07VEAN1pXjybLv7GcyU2QjdpRd1n6emGP1cU01rVDmG0eS9X1rYVrIRvyK+5rirM88US+rtXYWxrzp/jY4qw2N2dgrmV5o6bxbT5fcAnpvC0a4JWKSxJM1Ax3sjds4oK5DaHwoJ4z32X5jHjqM8EQ==';const _IH='4a9192f21574b692212fe1a874a41f11eaac7dcf56949fb301966e37395526bf';let _src;

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
