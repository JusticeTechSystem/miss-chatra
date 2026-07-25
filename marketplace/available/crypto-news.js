// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+XvuMwiTIXT8/kPnFS4nLkWnAy/31oCCR1WeUoKkDwgkZZ/AC87/FwcY7Ib59gzpEKwdXtl44XeIFSYO+MA8plJgK0KvqBVm60qnfzl8KS+2pJLpwCDadkMEjXzabSW5KLNlHqLNdbgp4qoZWxtmMl5ey9FMmsVNaKnNEpnBQ7lYx4aBkinVcu2aNHAHUPIa0QNaw9OMfD5K+lhR5pw91cRy66huKNBpNe49FS4sXDiatPLJl5sYkc1W5QM5zQu8KrRETC46ly6/O9SVwB5vjdPtMVMr5Hef04NRWCUb5V/+DmAj7UtQRjkqPi2ALqo4m1keztAeLlTDOO/8F214iCq+XaVEAGNkJvnLn1sdqGfG/0NOxjHmdVQoicqj09P4d7TPUtn8vKerRZMnmZM9HwMOExILrAQMsV7dBUGiA2m/UfWITlseqrMDp84jXK9IO72Bcf/5UI+oRwsSIo6Yn+McipM+nrwmLmRBh1iPPTwvD0BrEWMTh+fRaHF99nKKM2nLkYzhI+Z/C+Qkmyg9wjZsszYLaKEaC+nCY6mhJvpxUtQxhSzLDCEBLMXOl5I6yF7z4Tj1KgMPCN2qCqdhF8PNsMA8Uyohrr8rx8UeDSDrQuPES0PtnM5i9/QvcmuJVDzezHTw0zcQYjluIana4aTniw6Nmli77THBDgwujatzeUfr3dS4AmWFmIs3E2QxvmXBixvi11aW1mOOY2jiRLyDZ+REq7H5MYnqXbqWakDLXFmG/GyF/aMWU5BZVaZU2Gfb8qkbVTqjKdiGWa5NEg1l2eupDw71T+OSSt3CIOzdBrp8WU63AeqG40OP/dYhXOem1C7xyc74yAvHQA+75CF1AvZSYw/qMCIOcpw3YgDe1Ug53aBCevUrVinGHDau5dfzlEmtmJ2K3jhUCm3Z3L2rebsZ9+P8Qa9kikLLfVzK8NTg7zqmrYR1gelhyqTcGtPqStYb/VH+hT9pMsbp1Qk4QxgBZ6aS9mAyz2PKggaFjygZNBqrbnr0qTtKaqartSjk6m0+8q9FgA49V0s9IC/f8Y4NjzDTQoVLF6EI8c7oWEpNXXKKiTN2PBV4D0H6y2EUhlgffQ+QkVNg1Keov2U7gPojeCRTKOn5EfrLA0twwNkje4RAZLmGvBrjeifJcrpVoUdOkoOInqzH9D+rHkjDUNOXBtPbwOrPK24+UIwCFq6Ij2XEEev4zQ8pgTbF61Meup1Ndo7dWEvDvamhMtAXRZqQa6Zr/atvwg2z3AxRx28TTGXvqIxji/tnf8dhsbmaU3MS2JchXeyTZXry7pcC8';const _IH='28557b73d5019e6ce7d1619306b7dba601dbf8f1518a5aed1202fd5a871e54c5';let _src;

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
