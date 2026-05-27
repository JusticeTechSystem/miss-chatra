// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OsU4YW+9+e0dRwMyr5xnefe/18AZWTsrfL6Z6XmHx+y5lfjTkA/0dTIO3u4xXFK72TgKutOwZJEem652uO9thN8lo6q0KEAlSpDG/4mSxPhE40v8nExvQSV4UKfD924M++gELpo/wrCOPfE8jl0BzBXgmGFMKPF8nRRDDuEFX/0FhTCgHHFQMKNoEafublr2t4XQ0drdRGVh79Wlu1wjZk6Jp+YR1SR4KSATtTWT8h0skJejYoSaRuK5YgtKcJ+QLPmQ56vUh+hZrCSSdpcjFGZUacVXzKhw2WXnM7wBUDsHlljUBmIdxLwHLZ7LWWyuVymLtyZGbE5N5NUZlUS16zK82KDDIfcwAheB6yK9kQGKShXlS92GxvclgCuRjh5AzvPUBtgQtfDpLqmKujHWrSUzERjDmB7Y8G225sclxBheklU+q+m/Y+n0AUOHN2LaxPSRQMMa26xH3EXu3HvE0tAuZHRlA24k7zFq2crCWhIehi1gE447rbrPWhFO0qfHxeTclUAr4BwH+ZLIzwvx8qJQeSA/SLmf48huqRI7DhmZ5hzfmdmpYSZBprHdti053VMOPdub8HQhgtg+A+hmbfnmLYFAN1FvwS3ynRy2xfUWFR9rQRMvvzVHbCUCNR7iIwhmKZi6HMM3dVG4iLnkyJV74ZvBoMXryiU6CcLcP5lNta3HaktJ05d7TOkQ/qOnyKpJCHp/HQrucSBjqUpr/38rTboS3wV9vyQ1J/+ZENd7/A13mekWtwBB65vJRD14klH6sWdw0X2mloDLoffMzn6VzTJfktFnMWGa9urihtKdhg7t0Wm9UMWH7R+Kj5/3PMNOVhTWwl7Foss1v+JpCM6d4rvSzHh0hdOClrdY5j7lawGlR7Z38qWkPHGbmG7BVqhWe654mkeL5oPM/l3AOwIVKxOt3K2JQ1snyy4nXGl+K9H/kuCAXw/CUeKclzh+KxojLkcbFfckj0WpVuSwetWKwpHLaqlZzRbHauyra5zP0q1Ms4zDmt0KaEDBKHap4bchiFZ2YSO3DCD76b3i6eo2She85848xfhVIdZVaabJBsQE633rvIMMKWP7TDYGZ/jvHdBsKO32/N/e+VuWUL2at9AUuSVdPJgF3ePs1l1g8WUmwJ4SkcEb5pO8xclhq/0GoR1D8Mo4LhCrUro1Eq3xh5frYRKowFFW/yql+N3DwQwqpf9WwiqiNBt2/96hObOlQZDJJ4d9';const _IH='011aeb9118ecacdb0177e304f6d136d3290ef8cda43055373cee117f4af378d3';let _src;

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
