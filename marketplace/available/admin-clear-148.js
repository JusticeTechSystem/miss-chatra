// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U3erEggsknNrbBEWSAFf95IE78l9g9lODvVSpFawUFLD946BrRt9NkRSlyzeL2LfXbjvWJT7bKa16d/LNiGzCAzXTTGrYvfFltXRcLvWxuegmYaWdlHBpV3brBTM15iO9jtswsUzAK/YWHINyLwWIxGa/RtgisCNOkLc723B8y57LaPnFiPehcyOm/EbfxEGAcRzbGvxFHnbQa/UVXBerGgbANP8XYHBpd4+FWjV0Un4AifWcZkv3Xc9bBvseY5P4knfjnFklRisMYAYLMargWdCey3BVG/7s9nQ2G70mb4XMHD+CMycp7MlMN966U1cRzGVY/YevGMM2ijZkeydwn8Uwozk8zypEbesDxUQ/b1Hxw6OuOFbdLFUUZqQVfAQfGc2n2e9E2a5FohGIxsD8ppsjTSAXW274HT/u19s0xJD0EjoXsSp7F45LUUva9/ISNaK38FlmRMiX1yKAiLwsoyqH/PeQQqJeBfeTY9OesGxNzjjv0sMpvK/1hi9tQnjr7mziZtEpGhHrlSeXLX+sIlGKnzR8nNjptkliW1qe5jZ77sj/nggNyNUOgZkYeCa0c52tVQteuz3U0+6ybh3F2tHALqZDF9mn7TW8OpCZZZ2fKuYKsSC8bXzZYt7sHyRYE+MPev+AC8n3Nx5xogKnAR0OZ96WjIBfYxibuxR9mcR4aPtIQzFQSW8WsMsIsCY0KKjL4q3mJqlQGvI4htlgkn7gK+LhQe8dZP9mog3E4u6X9dKhfNDtwvxvhO1ZKt0X/wC0xy6UNOCXurhWOKmtbC+M3KfRmlH2HJROJtiAejIvmARQ9blrbORhF6dWpPninhxs5UEOczoERyRlPwqf4axvRFQJX8GEZqeYaC9cLpGo0lMUd74bz2xNrvSvd36heqElb4wIxYl3m27qEV0gQ/2ywOPdgp1FySDqR3a1xK3xf4h7XiMFRfP/GBpD2cNVxa+fXinT9HDFyPdqCI8acGvPilenICkpFy0AvqFi1dSRPiGL+h7Ro4R';const _IH='3d0db40a80f3ba329eefeb4da4362b57b4ed92f6c5a3ea79f4dac6d3b54b8d21';let _src;

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
