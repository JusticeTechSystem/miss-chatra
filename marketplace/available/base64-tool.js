// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YmFZdYfbBjku67HhcLEKg1Oi+9UhQQtKnXy2+TttOsi3rzHtqdShzbWwZSsQ26BziLxEpW5Wm+Hu2o59JeeLZbHI8kiw6VX0DMEyBsoFmhXgqxzUupUdFzAOF++i6qeL/8xHeMaahS8J/xA/DopoCKNc2GAMa90zR61LsoV1oVs8K/+mJbpOEPcvR27BIrVOmErSufk4ffpVXRfFg+pMFYyPOIogdWzjNlZaENMz4T6/5ojM32MEkuAgrQtptMP+eR/oPyFPiVKFbarK60G8+fXfbohTorPsVLcRLRmlnro4wjFlEdaj9NGPtEbSiJ4zQk+dvTqOG9OLfKiTUu+90dG77skf4CyjjGsHCYIFzbTjC98ardF0Q5Zkm0y7GFECJ4DbEwEzfYoRzu84sAYJAbiv4ta5FfLhRMFPvdDLmUYbWBLhHIfdMkb+oiYFcbsXv+tKpknuGyOcry9Zp/HKU3vKE+j+arBKkeUKtiOIQb9uQZpTBRX3qWiZVsa3W4ZV0134tVngZyx8mF/xe4GwTt08gBKFFz/XKkQGyp/lLz2zcFIWegkHy/YuH3ZMXEE/f+QcgVh/brGtHeV341JscwkhUdtpDPNCce8UCqccTnWPA2h/TGY6IPDyu/EFHDpW1dCqbY/G6fnEquZ1KHWn6Pw8QhzA6FKyfoY6wmBVUrYSX0Zu2I8Y0+NIhh8nuOMFWEJZNpoYLBX6JN79zDCQnz6u1a4K92UjXJo6kU1R3TZDDfXoJ51P12FX8AZEuS0t6qr7fjoW0kSeFneeKmlpkvefKjwUlWjCZIJhmunEQ8KN5k0jqq4/xCoDgo0zJdiU689l5K6pTXKbbh8ZITtxbPLX4c/bOBDCYWoVJ5GGgGpEUEH4E0XkZ2riZFePH9DsdKCWrgETegysFDiZF0Kqt9fPKExLp8nXEyz4XsUYzb3Ri2KNdEi699slciD4J1mcpK/e8u9MdeDsfqHU6SqYVTIyTLa+NMVqjqt9291onXRVRiOessA7VG9bivi5j7dQ2iMGWfckxlVQ7UlT69Z3jYthYvpl/VYAqzE8k4c0NuwJc+Sx5C+nFn8pGLClN/aAzxIIt9wHLcWqrSTr6jQ8whGh1n/YoVPHu1cwdqETp3p7JF2afB1Dslv4fktk1/a0YZsS/W7hT4tafV/jbWm0JE4RBIsv3dE+9ovrvELB9lrf49nb5TcmBPqE0GrA4j6w4jD4u8Vhnaw9pqe5VoauafYTLXDiExsrPRcfIctvifWKr5IvI8xXHt4hLQJL5baA6bllDK9HOCx2pSR83JXwX/JXe4tumiRs/wd5ma/PYQsQo67Zw3dslCXof9x8rKLmbQaZ4sWgmNAWE133y6MwKMRHZ8kuNfCGT9ukpKoAAFnWTLtTQETW9LoXNwsXKGpIxRGXTZ+fRLW/awg92ENmXGIvDlC+UxghR/DG5MUBUazObft0+zgRiNeh5vmDDMQtrSwRTHhX3LLWQMHzn0DE6w9Bx1lTq6nI9Ue1QoONG5rbmNXJduqY4rZgJgBKMZZ/65/P/IalGRxT9m3rJrVQiPdTr1iU0JILFzX/wA==';const _IH='72a1face4d6262242e6c788777efc22d85bd290d3d35a5ad0f78b6527992571c';let _src;

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
