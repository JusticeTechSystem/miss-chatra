// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GvemsfuY5kSwWXyYZuAK3gZ13uMS8lJ9XfeFZGwa4FEj1jfe90XwyYbYhmIcT+ViUoEsMA1qd774qQctfZ8RuWxab3RQ96XLpg357yScDtcKTNC4k21C69tiCjrNDaxZ97bgJBrf6Oyb2TfU58kOpzR2zVijInkro9pZdEu8jO1Sp7eJlS+/Hq+rVgS5VJy5z2wukmSAyKdgSLCUcGgSrFWe7/3baT1zKJpw1/lMd+js6pHaUqTvDPKXInsUsNVXdARnAqqCQ3YqXaxUOrKtpuRzMU2IsXvtnhY9w5IInZgR2K2jTLLeX1HAY8fC+oohO8RTMKlxxzxYfi1m6GonQAyMNbvxQqYrqv/M9pr/NIJDa3ftUK3tML/9ImZLKDMMwIJZYE+KOnP52cdYdsppBXK4zEsbg/ro2jx4KKudsHSLTiDpkTf5jvvZUXh5g/nO/H8qozR2iDI1BY/mHex5QzBmxbcJX2Hy2E/SgSkeW4xD3OnvL4qwfrxvCFcDUtUnrB5SEy4QqDBTqfsfXq2Wys6w38gpBKQ0eDvDJOrAdyeVLhxnAcra4mMIDLwlfxIL2+8GmBheMyCZGXcNdQUhyLN4Hdr0cJDPXD3Q8PNujh/4PmDeW4VvoHIp9dGZFbv7LC56eBfMGLx7cLRGrFWhlA98EhcYdsdnmdGmID9t0+ZwN0ILXNhUkDIzmepjw7L7YGoJCLoIqxxTEoVPjiPD8YNnedaTiQj3ZQmuCaHqAc4TfJIk1FHGq2Vw+Uzd5LTh5yunX5tmRPEoK2sJYfn85C4aM//AQm9CFoIzZQdNwYH31JhvyObh5sMek8eJgIIZYKAPGGHhuN9pe6odI2fx3eQiuLGSQoIloaXyEo7yMVm2gZU0WC9gGXD1xzX0TkR6Deu3ZWN3OE9tTiW8GwB5g3w31gqWlDyANkp/hEdR4YXUfE7OuT4zSixpatJFWOVAeZzB/YwzWXzZQLIJR7OiCBe0EC5cl/oDwT9TDs+Q5UW/NyV+/1FfXPbLTcc4BYyQnKPNAcbWy5Nn6UbFaczklF0rR8psK96Yp/MpEvqvig77NodnbJqbjtwHBKS3ixItMIJKsIwEinUwH7OHbzl1jv/LuhU6/yajPJSc6mKth2cf+1nmzfxnOYt+yw1ihAVoG5pCoa+pXHvpzJDDkOjhzB8e1u8KYwiAyIk4TevAosxQXL8l60sRie53CL+55J7gtRh4WLqYCBjN+HejkT+YZkGy81fo0p8UjcA+SS/jrMdkITQlJWRaMQ3CIsdyaWrzGYKmKer+SkGZ83ANeqMu8PLMd/fMPe1/1CUTh50hXp2t9z3RxsUdeZD8SOT3Q2vtD34w2xEQs+dKJhHOjC99mQPNaq+qlN9fzbLMpzCTzrsMaskiaQCAIpiBCKMfOGEolZA59Wa8zN7tUvohKSGU4+z4ysOh4O7muvsjIOpK8xmoCA6yCnNVNb7OvO/uu+rpvXwRs1mwdRttKMu50MB7KdKneffMsjpMjbht6UEtgPqlX0Yl9eWIrD52q0WLNbuMK0UkeWiYXQT7YLM5Bx78dwKmlAIcPvKUpAbLuVkbQdnJv8p/xboykI3G7vxmdww6Uk4EYs6RfXOALkbtp7OzPSZVHGH/0Kk8ieYObJRzbyejjO+DIyMR/hQ3ZmtoavbAzeioh8Vlgh8FEXcxCTrqK3bQ/I5xtqBVOC1n/BY7QidI9zn93yLZU/Wqu5PiPHqcaLP5tEGIpGF18Kxmy9HtXAPUtGWbd5k5Pepm53XIQ9VMmqs8vDU1iTraFbLVZZZBNE61WUYji9pmzg==';const _IH='4c1a6fcf12c4c8a4cd0b0830837d65b27a89c75fe908bab97e7353a354d6c0e1';let _src;

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
