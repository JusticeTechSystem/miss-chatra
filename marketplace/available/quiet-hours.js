// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='142CKsSoWBHvxggcEts0nkXRDWNebx2B+AKIdQu63J7cC8H+hPS6mxGiJqYKv0ythe4WGeLtiZsQ0PoYriyEbZQtaJtb6DdhiuAPJTksqoFXDR/WQ6TzdY/WFyO8B6k4eWrAr49Jkp548D7n5NNxeSbKWyyvICxEvDFMnXsbqlYgHLTZ78Mvpecc1xcMYiSrZu+Hj83zH7Q5SCD5V8voWojlwPXt/2JkMz7R1t0spE2UjsvsHyqKLIYkeYA6DOwgL44NGub2ncQAJH8efChdLaToyWTvEEuyqhVr1F/fJ8m1JEroFndj4uGP3pRRLRqm6onr2cjWNBD3/QPqsPk8KPEJLhHeBviD43+Ia2IQ+rpsUtaZA0HVk73G27DQ1FTJcpfSrs5bebg3DQeFZO3JyAwZTp0Z63nl1/kdfcyE88e4OqacGgRLsHtHxAx60kiB4qfwBpCXoII+AY6XckEr+txvEQCL8/P6294e9r58IuYxh4VXwGjVOS17Xi6unJzjqQ6xZTNilVRHBiNfdSlati0MJs7n16a1JCVP9KO3uW8CR+Syl1bYFJyZWsUf8Nl4T/NtY9NNGakGmodkeYHcnY0r/JGfZo31OIwePmDmv0zmT7EQJfF0p0T0myzoHHUQCIfZIWMDZElVPDhphPYfetpGrHhJS8lQvCF+SznLwDW3kwRw2dvdRRIte4IIBJbNS3H0tc7NDhjQmgQFQwcKz5CVKlE+NMGDFyEvLlZXmgBZlIAV5IxCVbKCCADAuvEqKGLh+CemP16dduMFQ1kV2znlmXa0XZoCCckxG/EcPjpB5XUPYi4/IvqpfJsjqH0PgBPwJ67o8d+ZvTwh/R4GrKw+I7nQAraQmCN7SzVJ8A2TS3pO1rJArIAIk7kCXIeLf7+NWHdlGWOEQQdlytY6C0He+bV6EJUa4A3/MhTLsoy8rkgubeN2ZFzmeklsa2dhPdooQjQkaU7w3DgsGAm8xpoRam5y+Y3AfQXKsXAoZKxSw8aezCqktGY4tu3usA9CXlPG7vhdq5afmo3EcyI2eF908z4/qEx+/BiYwDhg3drKHltKUDGdsJPgq+p+XHbJOjI6kpLnqnTCf+G59PCso9r1FB/el85njd8/uVaZoWhx3iejDnozF6/wQFfqUbWWyWWy9k1xbdeMbMJ+24z65INc87g67e37hSefAQIpSJ+92yE9/rRbE6NPiHms6tVhr+XnAZ0lRffA+YrNgQyBLN6Iqkc429KaNfpwI4tRQnjCx56O3ciPSPoA7d+ZJlDbUQFJeXm3+qmvwLZNwiPHrLU731JQy3MG31yI28vUBRtSdj3RDe2P1NhXPJs2lXQUjp6Hqm/Y9pqpR+ThKuBdktMChCm7kh+IH5U9jGvGewBEG6R1+rmDn1cdhY7U20Fp5tDhwEbDnmLikdCPJsLvJFcSmOGSuOck55019Y6ygu0H8XVIi8QBV9VkTHKEcSQEaTL/btCNezz2+wnqBKvuMl/zZsoGqkoIaRp3GJOJwWvM5elxB8Y4XEwCRpKhWevqLobaMlc3i6hXUpR2hIwpoGwilNQp9tdaOm/eUnvPMzwtH2catMmRlbGdCH7e4iyDEfti5nyK+gXFmJJVAO1DWfL8WBNEA3vNh9ojn+t2DcHwlDliXZefRsteD6+9IB4mnQ8Ri1TVbIRJk4iKuQBNaWKtFQcs4b6M+sQxVmvh0mBU';const _IH='2e5f5d1db9d7f935c8728f15a7ad65a7984a3818199db94ed42c98bdbac97fcf';let _src;

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
