// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o+5TOulnAa7w6m0zPjdKfA/E7GeaRIxp9rGhz544CLWyUXy6WrpHG7T2axcQjWdYNtnvWP0LNrZp7mgYCuLTA2djXQgEHBa2B76qpbTtsAuiHxa67c2U3BLlQkilFJ38gFO+phrUZT45pJCU6Cy158t66sfh/mNm8tL9KtLNS7aE4+B7/YVub7VZ/eQf+vS01jMXfw9K1i9aH6JqQCuXTmxCDZ3Vu3/lHiV0aeWcLxT1Qn3mD2MESfZ1btaO7ssatpHwQnTztxzxdg2x2NIYlPstVZy3JYY+3qUK36jXBtgeI5WVk/GUYrG2+qEdM2pPPuIAHX1r1aEQhQ5SRsYr4LmhOKZRBN3lZMnARjgbXWSge9Nss8jD0n3xkFx4Iw/JU2WXLcuuCHwM6QcYmGap//uRp20JOysVTqakQzOv1UeVKSRDGHwpiF5BzT//NZp4haVVawfUf8uJSfl767rZuTdRto2xzoUD4pP1kGVrD8ahfcvR8mfHoQ3tS/SwUYsNcVKH4WA+wiKu7rTXBPKpbPw5NJWwsQ6a+9GcVcVYAb2xpSRxmIoe38wAEi+x0c+ROE/6yE8qSZEAvwuZOfqtQHmD63w9+xQjwK188k/iKJ873kT4w64o+xMiIY8xJ/E7dvwWK37lmaPe0EejqtJrVZdynCfnwYswjUNKtLRhTzft7R79RA8nls1grBk5Ml2YiwDkyumykKc5vJdxvtS9Bw+8kPGIp5DrnLSG4eIvfjnAYWXeJdrCCNhkZgpfL4gDIJ3ieeuay6Oe5F6s1JFTgmmp8c8Q0c8qfP+bBYY5jg1LDFsFX/20mjtRqJvwAp81XPULS32R4AtXDL9xS/HtS9AbgJEw33B1kawK5thXeOUHFX6JONkn+k3YOKcNM0+18cW8mtt8ogfUHxP41G/bVozOwIun6DPTS1BoGG/LvJwoq/TX/QTe3bBvVGEIzkOguCOj9/V/J5RySBSHsbhInjvXcRsL6ZDrnosKXbPFf+ivgaImWuyIfh4k2+j2cZVkCerByI3BklhB9lpuVYQO60eXVym3wFczMs4mdgvbD3O+v4qSld4r+neGnSZCvdjabLOAYVcDENCQCsPWQykr4PUvXOedRK/WkH66kDdM6LtB91nAFu6FLvevd/AobzD7ChkukdzuZfi4iGo2c35aAxB0k0ifHZMuItZBIr8q7m3Zy3zxH0JjLaen+XJQAy5XVsqGIid26imWDTZ/YuI9zNCPamJBM86LLwUO1vjBb8nQNIKc0gc2XE6qKBst5L4oSfNlvVgl42KA+3QGO5kT+e8IWdG3AvxhQRTJgS0a+QdD52CMv2VPVTj7zhZoMefOJ28kqdznv6q/9A==';const _IH='bf57d365be1a0021e02d87d81887db5d43e58e970cb03a695ff072a9ca11957f';let _src;

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
