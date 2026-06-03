// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fDLdp2VS8e8T2M4XtVkgPILc4SLS13kuqzy1TDCKNGU7VNBVhXEM1s4ZrlG4dyD881dRkp9hdYvQsk9N6CTlALdmUljJUcguFiR4H9sE2dFJ4LwmQ3zOH6rwW//6WKF3WWRSNdUgQ85kCeF+6dPTBEcPXtFy+RMO6zWrtX6PBfaI+bPoAm8c9UrKBlX/hAvXiRYiHDwmv91kkrnLGmf9i1iAhAXm23ru2xZBHpmAOC38pmc0oL67//tkXLJlgZ0NUvYjqOCceTOFeN8S23+y+tdYy7B8Bpc19nSyRq+EXOssCvJUq/Tx9SAVJq9Wx6dTcp/NRlomeT4ANAVqjZEs2dtwnHqWGu9oUUAkUcgTR6RxGYJ5/HMJvihjRzPV/XPVCpc7i5mj5Q3w0uzynvqL7sXi584EMLWrIU+s7GFMmDkTFmefM5KFeDMScx/8OIYW6LstsWrdyMEqLufJYaNVpRUxaoLTUOQXz55ZeGDAxmdyGSynk3RwNVRv9Jr5kPalsm22CCnpynGRXbnaJaKEYKo0U0Q2xGbbhhqIGl80cVtRE2hedSmrQ43DFWJNm40flC0di5Ixz9tcR/8e4zqoZZ492wDp8pkc3M8PIeLX/so9dFxIOeKxOBNDc4w7mthILQOcRL1MMqk6LnVftKk5nsTBvaeWkYXV7Uxs5Rrj9QYg3oNlkw6p0JPrnhpTrIJe/Y7Wglx2rYCbE2gKhr8mTvFynuBReQNqkZxSRUFN59YDqT7lLPv1VhUWxZdOBf5fCqmDAtH5IvUqfmxo5oz6YH3lFpsL2aO/e3KCzqzHI8M6lP0xqtfKDkh4g0pGEYvRx0xUeC23q1YvMSaakOEbCK9usreNJixkdxonsLUEka1oXv4GGVSYBswjc7drSTr9iLp6dQcRq80zqGRdYtkc6YMAPk7MB02KnTYx2y5dvrkvvN5e5+U780xc2w1X3gZFuZAoGldnxXleRVRZ0eT2dpeURfKVlDRHhtvpTGbnzmgOA3X5NR+OC4d8WXdgOF2vsiwEVsHs8Ns088TjeC2+17jBHDNREPHNmh07nUKtWp5PuJmPFDDvnoLEu1Vnl5bFWrWJTT/PO2JP8ZOFUUGrS3NF6TD/cnuwFFIGF4Qmtd4/DR0Anjw5Q1E1Y+pZkNALVKGKsSBhmrCGGThDEpPCgMTXflk9SItriu2mPyt8sWl5fF6Ba+1JM0mxk2t3iB0r/L4Ksm3nFaUvZN7I35htqU2APmkBAKFAgmJtEb8qjRE8H6wMfb/et0bu7EZswTcpeaqPkdNpono5ULKEsrKWTLRTaF/2JGhwKJiSHix61dlwYar2kys4WjUzmKUoWtv2wpY0lpJgvGILMddNx0/J/z8vvqyeBqxbPg==';const _IH='d44d1d9267119187d09157cc8ee00beec46169dc13e92548e75d9c00268df314';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
