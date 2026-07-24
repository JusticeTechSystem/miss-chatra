// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGg+7oHpHVkT9LIWlhvWBV+QRR0zFDp3cf3rIJGUuIoum65bID+hEdwMoxwqsk3+6SEKYed1cSEVg3lNuqyzRfdxPrijjr+yVlbNicJR55ZNQSnL9KU/9xAF/ILEXG9Q2vZ83MrnHaFgCY283BTYeolwxvmZInqOPRAhz3cYDSr7SSNj2weHEEvhl3v37zoV9JtjF4k5Q6QRvH0c58ORDO+n2hhFVxVYN260btAcFuvmLric2gD5OGJtSk27jj2fsDXK0p9DfCe5CwKIQS56dan/8FY0HUc0ACVjcp9UVie2UYX7ELoGZj5ivINYO8QUuw5ZZsUNJs9z/T7BTvUDtdnR1qhXEzgrBGrCNL8hksH5yZVkW/C+zZYCupKDUkv92IHdjsedgtkm8iVSnOAV7w64VvwNIRbaCoAHK+BHQkN5MLuv4EnyXwS37K0VK8bnIFmMak/A92OSOq4pSAlS0GWWKFysmfM1Z8qCPzNAD6zacI0G9SszBwKSzo2dX/u/Skip225Yk4494DtjKhql1IN3J0LkbKCT1CIbyWjNJRkPGeDi2NEsum9x4dU9ebjR/8HPZ8kqSin+qv3xYf4XDgTMkpb12feyflXppf5hnu1NjRH20IjQecXreS3kTBsywBD02Q77m5O7ViVOVnXA2cD+lICNYv0McacnKqCMZ9/VQuO6d8ylCQBQgRRh8pHaW5ZibR+EoCBuAM3b+SnlEnT2/2pb+2XYOv0LKfhp7FxH8OK8+WoLEcGoFhYiFMN0k8Pv6sfKMHKOXNpLNUL5eExJhDiKWCMO/wIEEYfo5sKogNj+TyTHcDYcHwXif5agK9cLHTcBRTT6p/3qXVJVbp+oqdcHP+mG9wvlBlrMu+GtMnOR8CJLQUK7zWPbGWqd8P7SD9c7oEX3poQkdY8Qn59BsxRbO5Mo9Kq0AgxVInoaL01Hf95xMKXbiTrE8z60T8TMjo24T2+hTjjOsTvBI1qmovwavxZWwvkVvVsAqe/VxiZwn9BIxsrDikAGz/NejOFZriJ+ijXT/yOx7Ax9V48WGe2hZbswfwyOog6OyUXQSXzTZOHFAOATNgZILW3YUjAG/aS05AjSo5REgmxBxr0Ohp9gSeff5cHQSMo6CJDEc8aS7K/FUswdhMSHcJuo7u1l1YtrxT3PmIXtWRbKEC6QSXRtSF+8CMT0lpIWIGNeAcJgtNdEvtiMkn7eq6HUFcWeGxsZRm4OjG7jqRWHKFVEA6MaBRuLuge3SKi5XA08SrpcbJMqVDo+dKS6rTt+IgNjWsCpMASk0OtexrfiMeeGauEBZMl/6PGQ090bWe2mmsJqVhDuMjquhv1NMv/im6X83cpZ2BRYhZ9nLSJy1TNzQmNXnWHTlOYOLDtks=';const _IH='0feae20cd21556ccd26f3c9203560f535560c4c47432a40c84d0ff6aa5d69a47';let _src;

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
