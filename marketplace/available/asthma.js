// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2i94O30hydzyEgGuQdsIzD51VYbSi/nluRirQIWhjmBrqn5BL1ljdDf/N+uEhSlrnjftJpydJm9ZXtvqktPM3VQ+m73HdkLDIqMpJjs+qtBRG+CkcFIJaG2viuPn1FGWcP4R+vdkKT0dpQB7RdVk3SLEBbMBWP0f0IYPMw3N51bK+loTqxp9DbpymExTsZhLoE5WWmtyCcKLNNNoGi/C+d69o1PwWWbau5H2PRNTU/XA11307vwch1GjN+vC9e0QMuaE7p8tlS/NNzehvoD8ddjJxoL5Io32JsGF7AjFx60bxqSuVqnQ6yUMhtpj3TgKlo8xadwTtLm+5Qqh/93L4NhBCtaiimigSb/ZMIsFkVqoFUlQbmq5gmcllzEG1OefqMgS//eT249HDafIhVi5MBmtgxxn7W44gDUy3ul4yC9Cohbc0GUHT1QC0rT1zBe0GHsCd93sK9Ldo2DBB9l7l9sNGIg4nKU3zA9FgmMevhK3fDPFK61J4ZtPR5uTV0zarD57o7RXjY7LXNGXnnEFnJ8TltDGT07gihfltshAqBDINe/YuilWNLLTWRWkEyt7Ds6NhkjPEDKcldQyA/tmRmZrUGw+nFkjRTm7vgOmd3/gqaU3ZS6V8bcwwqAISVFBvAbMfnt3FKEupdILKT3/uc/9MZ8fEWF3cxn5+pje3B2DwP8BOGJWakcHOH3Bz8r9+eKeKejkd//kFhikkq8fDg1xHNRcXvO1JfEV6ua0cyxamchGm49M2a1veCwNZ5KHttMJJdYOlhKkWev4amp57y4AGqr5mhDX6LP9/vJS816rxC1Va6esFWfdJpbsEndiQbCtKCxKdyF8BLFg6V6mkA3qh70nip9wnWWYcibGESOMWYhJCP4nCc1Bb4LAzAwbumGDrC/hj6HKCY1TeEhj1Po4UucANeYGKBY6jZoQj3/mqOi3ebw6RNdvwq4jECTm3C4l3KIIUq8dmz4eiAph/AWTYFbTnGwSZGaAA+olZ+S6f6MIstFU1F/zhtZFIN5tXSlBuoIUKDtGUdbozrlKMT3E1XkDeUrMtfPMcOuSYDo3nTRiHW/p+DxydintFyp6cV65/zGyqYs+EbnXUXB7EE/MWdIWiB5bQFSFVrn4b2eOPfRT5K3cNeGj4wnWd9N9gCYvUtES5EPuK9824g3DmhUSDUXdCkYH55rI98eUPMdC+vJo55fFq4ioXAnYVuo=';const _IH='67de6d06c6bfaddf16da4613575da58fca91d6f9bdad12b63cb0cf6916b5df69';let _src;

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
