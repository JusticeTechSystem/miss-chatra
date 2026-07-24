// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlVu1+NiV0maS6PLoh2v92zj55A8c+VnPd/TARjt1tP/I3SAGchxdK56JnS9c/ex1rSez/mBhBhzQ3YfEcbiZG3bRxSFZOs8lUIftmaVceZMstuIbXiGO9uWWh5TZhv+3wYhyN/rh/YH/WUV1adNGRRwwoT0BP4NUmBdn20qV4c9bcxdYg1qowg5cr5NcwSFbSeDqr5fxl5KkV+CfvBlBLt46HwMVl16mtXTSHiC1/OkRhSjrchRBZBLsjgXiG3AbzJjVX8pLUur20+sEENaUvSiUeYXyixi90NUxP1DMyVEnMaQwDcz4gxX0IzRWhAndg6tjFbOT+VL6yXBGynJ2H/V6+QOXMcTNd6UZN7gKrX+UczzNeu3w1KprMFMVrCe52vj4e7y1KadBmSCFqSCdvqxkqg1fFLzLZ8i715ysyTnp1d8L385GvzG0ETslQKyTSaG1WKivGexpIz6Xuw8RJQAoMLX/O4rZPEt2x4lFjZWhWcP5q6yNB60mH4Nvpq/ZeFmoIQDvIVlsbVjcryn4mJIBX/ofDXxL5/2gVmxI30ia6eKdX9eX9fwkuP/uhSDeb9cdhe+aPbYRvkrNeLBWi5CKWaqybbobuwQQrlVTPnQJHhJMALkx/sN4zcnvqa032gH1itXXubNiNXFr0F1FnlHBEhsRN3HbtV/rnV7bpNGk9wgHhu03wACULTwmmY6DPT8sRHtLnbdEwJkmsEnj5Ey2pwJ1OMPv7lVxVFW+S574IhuPf1mXrdOiF8LSYQW3GjlCrwp5WeaB6w7eJnIvvMHHmh5cfc87nBfkOHDc6Cs7ElrryTVpZvrhkqhrZwVOggaXiq9pTsMgIqwDgxcP7WjkaVBAeAvuR0aDSkSrPpGcJD1hBjGzaczfsqaNu4fBDEyhadR4/qzP0HwZu/QnIDE9xagu9Nh3n/HDY/b4hqpCyuYsQRbhZ';const _IH='1a4707f5f42569e005a7f91ed77cb01980b6a01d5a154852136954b56c970229';let _src;

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
