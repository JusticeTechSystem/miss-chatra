// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcxcZBKWLl9MRZR1kvswsDf3yU+XoDqtCmWDxzOYxXYkEct1/m3CNyFgTXbMprC/pXN88jzwCF5nq948v6DquUoOhpNfCVpCga0VyF2r/CPtW7HAmS1iQAS91NSM+FfwZNWEy/b4Yq+tp6I3wHeQzrO2F4Gm++srJd3aUVaO4M7Ewpyl8cuQlGo0Igk1GM6NEtvsR3CaV3E2lHhiZpQqAmqiwq1QX43TvbGMH0gSh6YWzmWgsjSW3Dv9+taYjvXfxmDyBZn3uMlADZuPFKFNyn9Bu9/hfd4z6OGa5jwym+otY2dTg1ggeovMnecflxVUx1SLkWj/F0Mu9Hem0mQETF8LakYUQWXx8H4Qf9TIwgFKiiJsh5t+bB+eyzxzp2I6K2GcIiUFTAdodHy7WXLzrqAUaqKvAaM11BfaEFAHLzjQ+0UxNOdZ3EY7wDRrSa7EYtGKL4BApu8DfA1M+Hp1p9MuO+wPglNFhZQ9mdC1IM2OXsQ7XCZ/oojUhNnUzRJkFRniOrw1ZNrmyVp/VEh9LWwutbkG667WbatdXcKte76zqGF+tbhGRjlxtAoHwnt+zIZXtrcpaFA6PU/U5lJWXJuSbmkhIEFCQjbExxfCLEVBfc2a2Yb5Jc7Rtzpnws0D03HhPGT8ERkS4tBrTdvx7WBcOeY6MllHHGCib4XOZ4jmdNv+ba3ayNUJ4WZX8XHYEljIRs3Y10EEh1gOawGWocTTSqixGsfx482JSgfvpk2unymCV534H6ztf/jvIP5ewPE6wxVABciDzWXM7Y4OaCcUSLVQr0DUi0SJmCvOK+dR5EghIVV167Vik93hXSzQwV6SoSQoqaHe58R19GVSkqaB/qGqi1kFXYEXSbXpgDS2kZac3nzxyULjK7JqPnP+U+QAVkZ/3fgGfagi27OPdAO90DZbpaZ0g1fcdNG9+JRlXmXI8uA3MXbm0DuzAebuHcbPty9K6tFEaCG9rUMFka/A/JBdBM87mUWBQa7X/YcGsR5slq1tZPZsb+/sSA2EPh5xpbwhwz6kkL9aHTUj0T1B4hlNtQwymzohUMWLPRPQ0T74j9vFkhgTbFVGaTb73BQETHa8Qe0C6JXYuytljnfajc2yOK9CXNCDO0QilgfXI2RZsxPd8gVc6Hf71L61DVw6DFsiReDnq0HIV20qYknLV30Ehd0q2KtbnzJHiouBKVT72QsE8JtCydC0qjdOk8Wv6Rk79/NGcB3cnBuUqh5MiWOnADxvzQ7ThdAhq4tRwzS0ow03+5oQLZF4Li4ynP95vV88yZ/rX8xiaw+TaT+TqRHSpc3spH5Hq1A3T6o72etFIRYzW4gQY1HJRY71Hz6IfsVjh61wBQXbjG0f6SvfEEefyG';const _IH='f2df6dce0b49fbd333b660df0e35906eb54230c70dc5d07186ed0b5ad27afcb2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
