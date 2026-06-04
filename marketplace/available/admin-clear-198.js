// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PZ0xhlA7opHqWiIHH5y5kYC9H0cXvCQ34u21JzMYdEabySDcbaRaIWKAxOdM801t9BczlP0gZ4nJBcoGslaHoaCYzIdOvibwJngZ+5Jyrj02BIwl2U21WxO0dDnazYFbdWux15uVIavribjcq6tRY33IDjFlFL3Y+bmzj7gtvBgYoek3236Wf5Wn2UuupP2cXrt+uctfpiNKQrJRot8cDcfkmTyX4EvX6AVvIwwLhA1C6hSZeq2L/fT+QFR4S1GqpLvyZ8RMgd5jJiHy3UbAp8QPXVVLwiUiLpoCwTjE6ru+ljoYSI+QCxOlbwvAJ8Ykm4GAXTFlEvDC3rxXqNZ0HV0b0L8z72lqZzBWkKxfn8Yxc1bD6nKOoEve3z9GxgKZXYoLLZVl2ohdBdKo5jyBmYhsqf34BSGYDGly5pGytx3jSl6vOpaUzaI4bQx+6nLHhLgQ9Bw99aGmll1tTqzFEitn5LZcaAglQjg1bTE4Tsk2hn605wOn7+UckGeNle4+1s+Nuf3RlG3u28dNNHgkHclBZjFp1Fs6dkq0wXaVO9in6SddkO54zFoB0UU55twJTFaylzoV2Qv064yGN4TNBHs8ZJ1sisJ2a+XXe5mfzJomy5DTYYj3nCtQApCBOOUJ+acylPtSUFujuBd4iiJr/LciPBf2mP+6CHm4Dbt+z3jvBrRDfq5+I8SD0YdlxNYVI9p9vL3d5sr60jzl7DEzbG87+gYtsW1IOIpPgS0I2UetAdc3Ilc9FYPImlxXD7Z6CC+r3Wy+2E0TVi4em4rZXecg27ykwUT/BNJUHFmCX1K377WMmKDUUtnBOMSLTcL5xEK2B3RLILDVoBDH4tQPdE0HyhlgCjXYcgnqNgon0NJ3JQD0uz0m5h+qI50GK0JZnLr0ewdmRK9JZynmKKC2WQA8R1oAYdtCiUfaOePrBuxPUYUh046vAX7pc/GYB7FBSZ2qv3dVQaiW4AxSLqSkdVlSwN8XMyX2Sj3bOzVrEb5Ldz6u3VqMt157';const _IH='bb9d500b59d8e0c166d18c754a2bfb9c21c52a8e6a1d25206758fa6a53821d67';let _src;

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
