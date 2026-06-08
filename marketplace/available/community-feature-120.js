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
  const _b64='9qFLkrWSnvmQ7HcTugrj3UvnbzsyT9UrVc1x5wZm6XyesaecUmuc+eBHOBOR+Wyu9ORt1ABieEWe2GORdC5RtXlsub2QlnWmprFpJfgh/ruAImbxmOyBKkGjJgD2M0GGQeSh68C1lilb1DdfAmDNHHupUatREYlnNtI+rYUkoiemfTRd+3dFLwgkdkzBWigTtsDlOUJUIhLMmd2Q6sWabwF2o4jt5xg18GfdqzM1WohU97MZ5pIlX9TOW4R7FPgsVSzF8zUaEnAOyJEiYpM0SIDxNAwpd54QfM66PWSj2Yr5VM1t206pbIWC6z5YeNXjf5Ak0GCJU/J0trUvTcIXs7pkC1YgP+SRVXi7uwj0PxaSJWvHjpbIX5lgZIPeaZaaU7URIQlnymJ1tVaZvUT+ne8RtuQjQgAihYxYEzWFNsacs0K+vUCE5HO1WFwlHoC3Xx4z0Cesq9tcZJAVhYzatr4jYrcRCgQsv/QTFCjOI2nE7YGYAahlFBoN9no3PKyVCy6AodYlBIutbAiU/54/SmaWRoZGQ4bFafxjsjRFnlGHWKIMUCcVdxGHXJbsCG/SwZ22HT2YgkjjA27n3VdBQc1srg2a+KshU9E9QiceIxSF16CV9IrBgzvC6rXRswwoFJXylTP8eeBTqLWwdEEPhM6Tw9A0LMicA3N94lPDWIYEgb+oIrt+qZkWtTtrRS9XgqMaFNy2FvcxFgtBC4f9vS7hw2bZQYC34uF7mjXb2wlfXDm4eFpr3c4t';const _IH='324132f2022061b81689203da17e0a5b7eee79e05716f79f1419c76942112702';let _src;

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
