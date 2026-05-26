// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uZiyrbyh6tRUfn/U0YjxX5KPus9HguiotzQ2dnvRhUTUOh0p92ps3mCGBRMvHmi8pYKAb15d4JCdYN38Zemq5OwM8znx7AWfQOj5nCv9JTMgugfkx1neiW8mg5D3zhdrD52zAcYEignZq5YNDDF6BEYEJJeI0+E8HQHNNB+JBubnqZJ0aBDUnXbPEAA5c9LyrKrYARKq6EDvsCa9I1O3bqkXpcnj/1jdjcn8n6K27racKQPqQfpn5rmNLzXsCV5roN2ZsGq0RivbnqG5la49fsxNzGPOMxBlCcb0/dbLNkFel1695/GrKKa9jpQiV+7BrSwL65aBwgOeDJqT6ZTv4wXVN7G0i2zWw+WiywApbzfcKe8JFKgzvF3JDMX5dHQvAQXITKpgivhKt0R1Itw2EV1YpUCjFLbUP6RV7w7WOkzKyQzxCkLkwHCfeSBSt+br12R6gVzPSElXK9Fekm9vYkWgKGlSvbgwiaPw8t2WK7u2/ymLL7N46lMCOTXclFWJISPGctx1MDNlgCKU2iL2eVLQAhIaGywTuoeybQXT57XFxE3vtPQQbaeFS1Yuks+0xqz16pLgun5+nIaNnefUDstrs53nPAmU79J9BxbL8nQV44C5GAAst/4LeIW8VJcaxdv2vv/GI95LhaRq9b58JP5wl/c17lNLvT735OOVQzFlpSynt4DKIrHi6S4E0THNo2yrKWixwKiPOmOsZccgxs65YUc63mMx17Y07aeaxZfxn1XMeGQe20YV9qN4jsPj0dWQ0HOtNLcJw9PgswxUkxY165vt1OVa4w+cdvhmyEN1X0kJg6JtTJS65y9xs5VrpLLA6xpp74gVQwWlpJCO/4h/onT6XCmZl5kL70EGXRmIOVCDZJZPz2Gx+PNvLkDcfwi1U7zRPQEI7+JNFAxuFRAw5smz7YVkreELx1DzrWFDDHn+5GnyWor8i8/FqCRxQ+sCr9octFs/S5hAE+E3CkbdQmRy/wlC3Tk2Io0Q//bbWMKy9XKgH+iFtWUjH1BY7lhSEUeTmNLa4v0CsMWwtQnU7t5sgJqudnN8h/J7axpzitrxrt/yrRXX6QffuYQJET/uR8vWPXYQb6PU6a9I/Vr0WSrIx+NLfnM7of8BAE+X/XwOeL7ZvNaqX1jyAfcTgcwtCsrn7dpJfIbNz+8z1RBJD2VJZ4an1BC50+49Jh2rMAlYLR0acnrB7G2dU36s3YWRkypzCD6PLfx5rSAzH1ZE0iO0xpRM4rOBFmWV7kpdRYZycXBZvX2Y3gpRWwqmwV3wxzVt9ObTviR/zWRDp7tPW7jcyDf+Adik5WzaMlUeZdJaHdQNIqwARF25a83f2uF+mUsp1Qkf3+Ne5iQM/u3w1s0AihWmzJp5voqoitkZhp+0A7JJeXQIkpdXVyTgTwM2Yn0poja9i9kDfqkB0/YevvOotdtt1MTN+zJDFfezy8zZy8jVcAujUJMVnqveiGQRnvfZsCEVNEd7rfOGUuizW98021QCDPwaEMmN+wo6aJ1kWKpM3SuaW45zLhRFqnCygLXLt2AceLCKnlTRH8YKP/qga6gw1hKXNqJKEY1x/4Qlr4mNMc8zzWR3fCX1cffGNmTvlTcsfzWq1VtcWjYVZ6Fi0W+7MLZS4qdMvUaewPVefCULHXDnOfU18Q53Ygyz5Pqf6aLxnsHQuHizZdxCXw3AMZ25IrZC7TCWDHI3rvt71lS1qX9BzQfWnpC1WSCG9kr8HHlXQMbFBdXGfNkCltpyFthZn/l+NqDnRpqCS0qiTDDc0yte/AuO3PbGi4KDmvynRx6koQ==';const _IH='2bc22d9c0c2457c81b2116ea34cca2c9e2f24ef6c8e36e19e65fa48947a39013';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
