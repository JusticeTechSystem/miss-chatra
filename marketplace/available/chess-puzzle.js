// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRe1MhHzkNN0zleM9m4MU5nijWjaFcvKwWL/r063/735uytsoAUNZotwe2g9aqZBvDbDttn7lgc0PQ8+zGXB6NWhgfw7gej6shTwtHmCXaQH5/jeKbMocRavf9yr+tPYa63YCht8ZsAr3jp5qHAIfyh7uGSuNGUfKPiqeTa2dLfWYFI5oo35Zmgd4q3Ob278yW197c39G0NEaf+InpIi5fjvBuqmEl2vO9gSzSayXd2j0z5jVHcWdHIMwyDwPNSv8B1UmkY7r884ojpdrj+Cbu/dBedjNmQSstIDufF0qpMISMTSdFKO1zgRLQSBS43CHhPrTK47avHe5uPwal9zH/zKRc99zet0/82Iv2VF7pJNAbGuexprD9FYFt3AR3SewinKru6X4a8ERNWkgWuphU8bhzLKZlJco016dcypcdrlqGGWeRCqcBDxvzobJrIsxfttbE8iNzD6pyu0A/o3q/1tPwcykttsfCtaBfQNeoB61WR06N6HC5hk5yFwh1krULAqmee26CpQpyxKqV8kMQgAOcuqLR8e6mCNrLiaZVpdLp1UTuNqxJw8IO4qBdwy/emiG2pvo34eTR08WxNEQEzKVp51Jm7Di/S9/TGw3cPzR/RbfqJN/VPTYMlWHZHOdTjMXut0U7l0lvIlQPajSNkGSW//XBM1BZHiE89S25OBp2mF8q1bym8Q+5MwPZ5SsNXwzBdkCJJ9LmRpCejur3Jd5jCuqAs5CIQBVGCK3xbyc3tDsswMFgm/hQIXyNN80NJ93WaAHsqGawVyKlXsb6qNYUnOf9VdVJnuJuOYJ5kmfTfzkW6XZWB811A28vgbIR6dRonyBPOC8gWUG2snn5pd6bt0N5UtKV88/Lgu0gepPKkXov2pJ0t4t19gRlslead/4cIMCBmkvVVI222rJThmm8G9/rR912tYbsW/O3GGvyCchomaMXcihH0Up0ZIv1+pLFdjT1Ef+gayeHxsLScONgfxQ2+gGdoL5JlM0AmYgEp581f32Ib3JYMFyPH53lT3A9qh5vqSr/JPTap4gjKxahpYpJxzv89CdFTlfPLt+/hVlvAXNcfiEkoP+bO+SsZpnOiLuxfVVuHI3XRhseMIRrrp4TfjG6MvFKduzdXFhsb2ISNK4pGTnjAUAaTQBfCBvLE/zZWcHiGSbwRnIzAlh27D4247U71gZB0O3B8/xikdkYD72o+sloyGHUhn2y0ZepvSkDowatUFJcGPfzSf/yNlFCWqSlHq3WQYbCOBtDCp/bHRFwY+8+3FADnvDbzW7KIHJvUnjL38MqHg+eS3UcMZpZdXgh83YKqMO52WhzYKQEOKefRN+44NMa83/OQ/us1SdZWnqS4TGjbjhNPK0GBt0HncEUTNVDilr/BUfxHVMAHCx/csayNlWRYlZObX7Ou4+EOMldlNu8xXFmIoQVArOzaTZwtDBw1pxVZ+qJNp6NzLxsIos5lZtMpVUUvvDj58AHftv98bYFomIW2VhNsG5uh5pWLRVLItw2Ao3vvbrqWvA7dMbBue6Xrg7uL7qC9uhQ1UJwt/QECYzcSZcPexMWZEuJ0HuHqXGJizDNNlFkqCa1KgpKfR+hDLIPp+zglAkj+EXrlBceicIMxtcHzVBkf3zF8v33DohqfhtKykeL9IsJKRvFI4pf4G06o6TB3hOyK5acVMH4jv3k9R29YcvTcHr14IuDbAA1UC4RqmfGUJ4YtkImW3lCSopBhAodWNOEaSLTRmCDF4y6r2i0qPPJ0j1srmXQkvPtlhltWV1JysIB4';const _IH='3ac22f5f310eb78fade5acd817eec90fb5cdec7e4ec5969b69dc933d7696eb90';let _src;

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
