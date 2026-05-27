// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qllDwBnEbR+Ai3gcrEmmoxnN2p8EjU0yTjGjpqFj3SpCBMscbfCL7HiuZi7yxEcYfi+OzqIoS5TLE+iO0tlF5WNn2DzZ7Bkaq1sQZKbC6/OMT6rYwpeKR9pNHEkQgltbglkRfEu6oY7fqffk0yUdMTrLu9yLYI4/4fuXzNts/RdUmdRnwHR9mcd8qzyB0H0uODEq0Rh/vNKCbPyH7Yn72DnRU1Xil4J/FcGkas6tdM90/4d0q5Z4kTq/jaGD29s3IdZfMfZ8ffLO302N3/ZTQI33VCx3XB07TDrJ3TvXKES3Mi2cbF6txUkHyTEWagdFuczIVgZXAmODr8Z30YdcTM/GppI4wXuTQ1lyevQx/jsLer9ehQuSqBPg+0Oex3jOt1Og5tQ1m3Dy+Yt6VIFDLo+27ynff39qnzy6lAKtyInbJv73OlvwTW8Aonu8MdE42TImi54HTlDjY9bW65W615Y8QmsUUJHunRq8KNbrYDVv7TCv6GZzhiJP7LOJrW0pN2VImOeBW1Qh9kd0WnWr9hO6ngc3Gv1CNKfkGYROX0/zo1LL/xB7T5SwiM090pQDUWjgPkOic4ZuONwteeWRzgtl/YLKzbjIrxVADoEYEVzddO6WaULJFxaMjdNeMZhMEefgm3sfz/sMAhbIV13Fg9OA1w+7SDeUX0g79nRsPuULuMfY+yYxXnr02l7w103sR2v/RUvBt9gvL9LR0PRRyUBgqVvGx074IkeSOYWt5rH7D9d+ZQ79Mr3/aOL3n7vfjk7lkzhexlpcHFi4EGmS0glTecugvHY961YhgfUvMFcU6Bq+02aqdIeNC+ru4MXi6qe7yyXYAzt/Fb2uxumIKB/PTEFpZdfmmim+TPY+zawCcMUwTVVnctGl7UYqRzR/tRxYiHPW71OGCW/O371UynNsw0XMhVa5ZqjFLQjwk5n4d+0PqKhD7QZD0zQcQ/AdVO/zC5WQ1948/qFd2q+tt4yA4EPGDGHjNg0+dsTeeJot0E+pDNNhNViuGkctCvac0XZwYire9i0RPUH7g50IVxMkdD1ivKkGwMiEV9697jEnvQpDIbrG8xZuFwraRIx4uPePbhOyK131Osgvwh1bcR84JjrWaFRxkYBeQKd3cS447ccVD1noU3rBnwG7upyY3XjzJ3VJldSC5FpAC9H9hhtHvgtCUa2H5qEGH97VqbVcCcysWKDIQmfucOg3MWazHfca91KLoxDrz/aY/sJndvZxfhn9hFGikeGrjg/i2zbGJ/MZRcdsmcXrxIMCL3Jx/OfBe6df0V6/Kg09Y1o4NMPwUwPUc33zapLkC5HyxHAGv0j0Eu4wGGvtbQ70uVMn1zOiQgj0a50QR8RlI8uWXWlxu6fd1ub0akLXP2GcCqAWLHpkgepnVLn8coR9';const _IH='909bc33c93d11348b300d6118930614a359084f88697d19740849f2453f67b32';let _src;

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
