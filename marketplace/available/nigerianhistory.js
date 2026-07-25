// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZ5Pn1uZjQ6u9BygDdlOBHDfTuU2xRtCFiZjZYBp1jxOPZYxXJxG/Bz0t+QmoKcJq7i15ktzyr/CJ+gLO5mrgdJ/81rNVmRLaUlnXCbBCN7ZjPvJBrc7Sa2ldoTvnJShpNio8T25ac9EPTMzIGXFDS4jfQdrvQIZG3/OyQZe9ja8oJaLj5U5Y681ZamxV9FgdaJQjAm/2mexRGslFlB+vQaMlVYbCNhaMYMSVXA/+7FMhXjwDoD5Otab2GGhKD2Llc2vtjc+ka7aXaWxJ3XtS6BV33BWZ2+1joD9LbPzzQlExyIb5MidvMJqD80XysvYo1TwjspEk4eAPdvYVK3Il7r7flHQrX6EbjgAfqlh0IM1i2uqr0lEEyU2zLcMT+cMTmPkThDfnYlQP3nVvFlv7s3fcmssb0Ghbhog0x6xyS3ln4CmehBUMHOsRJ/TA1P08fxlao4el3mi5/BOIM0HzQ31prdeVBlTMegdmyKIP1ZpSYtAl8S0JRVJMWzoU3rpbAJmTJCIIDa+SilVWN6EpvnXWhhivRP75Lvfq7OAGPG/UGHyYjS6D0r+3J386iCywxUxr540HOu/8s7ythndi55VUN43xAWr2xqKBiSRsm9B32krtDXWCJ9dm11nhfD0vcxjhlX3enjQmbYCKLd7E0e37ANTIoNgg3FBA5mWwcD0RNOf2JHX7KNtnPwdAEL9oR88Kpx+3cYkQMm6LneK/rd885b+HxwG4+BfyaCWkM6Y+UJzw3B2rd2qMbKRdJhJ7nZ2VxUboznROnVK2DfkTW3yVJ0hNNaJqZmVs3OIaxj44WaPHCOtpZk6yjPRS7iPBZ4k948Ivl64yVe9WAKf/2cynrfifDHsUB0DUZzsSwAT60bB+ecZTn1k9hyJ9wNwcbU1EA8ZxrQDeGqKZZZZeqncZU+qfGlyeafuUNbxmeEcRT0/MiP5WSKSbKTN5u0ykIS++3x7tAgO0ytP2ntDEnjwB3HHPZF+JSkZS4fnQboon60i12Dyo5ndue/chdWbx5EM9IU7OABg9vKjA5ens66RYHlwCWl0m3xGVojC5tq83J9SIjpUpaPDbFm3PCX+tnU1Fv7Ap12Nh9pCtb9NOuAPmRsnHktYO3mMRBQshcqO8mxT7o4jILJviRsyqAhk0Ksjowg4UHfJsVc2M7VBld7M4JXQZg95/A9H3Z3T5/f6coWVTzXomwBmdIITFZftVZjwfycsgYIiLaBxP6aASF';const _IH='859673b60791d3afe8095236fa2f3425cedd63af982cd4075b1abc3086953d04';let _src;

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
