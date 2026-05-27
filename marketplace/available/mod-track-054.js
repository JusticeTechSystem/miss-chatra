// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MfVTjHCmqJ8idHMMlPkz7MfTzgZS5YOCWZ14uUp4g6bBaC7t8R17xam8BHz1Hhoa2h2Uhtw2zyCuJQfQvDVERMX++4nXQ59cEdKjW3rskl0ptV6wKAzMsqOVaAK0ZuTFONwDWrqQhkgMnsgQDLUjqgibZSLiSN05zu4zqccVtGZQZBkw7ihoySEq09S+vMAot/ZvVN7BFZk1MHkUyPdiIb6vEpmn56TI00quP/hbrKwWBCcDmzojMxQoNMredVaGeDs7A3jkSU/TNEq7021H08lgT/Vp33PQzxeJH45BcHSeh0i2QA8v6EGC8WQWx3SRUVIEjikJ7PPyKHkeKfvnKObIDBNvWYAaFVUFigeKI7Y1TuBHQvENlfJhoH7uqaPpLzan98HmVVBW7YMOanZnwBcY8qbK16hKq6Jo/gxU31Qr6M5npmxoji6Cla1B1Rh4CYXKXHTToxxn1I7HB+Yb9lniFpOJpMKTVGqdePGJ77VlL/Aiw7kJY4EtWLepuKWuqQXzk/0leLw+X1NKECTjM3sV21s14ISB+443aVluTGuOjKHplik89GXrE7TFy1FRaAYZYE6J7MmlhaH/LI8t2NQohhjL7a1LwFkcU9SJr+NNpJOdnpB2/kieiEN73J6iEUjX7iRYm49j69tsX8c9ec/Z/+Y31HHnasQR2vBjpBFNFHJy2VAyDbdgSLPH43qbhz024Quka6FcB7setE2xXT3OjbvUKp0cU8cMzKpy3iU7+metffr/Nh0qrNxvazC4+JyzUOO8oqWs7B12sjF8Gwe85IG1tlgtIMFbO0ufB67cXnWUrZDlRaQyk5/cIefhRbgZ1PaS0+NhjaF6xYtV5K6elvrKw798vZMcNMtIB9lhGWTuPn9XOWcrsFIBOPh1ImrZOi4wm9eDo2iJp80/ut5AEpcnCIaSSzZN6fHn4qtJddQYafsBTLHV9wykZbcmi10rK6uXcvvCCbvJPgaMSgYUZvDy0Ju7D2NO8XRMjvpJ1swZz7hG4hhoh+rjpmpKZbq59LinpT7tkFoNh3T/6G/hSnjtLhfhRyO82l5VeW4b4M/C4SX+QGaVy2TQrJ0Ye9e5CQOo8g3LUm/xeh9DiR3SivoIsPcnrjkxK3IkJYfhLAOKC/OSA2N70tKOPEz4A1TfMxUDR+i/TO0HuzIdWpJGk7L8ANrgIJh4LIJNCy/cmmTFidP4qOwHSJMO/vHflzcovpiQJx6RdBmXA7YjCdAeDNhpp0n2+m6lYQSOT5WV0pJ+Y92Q9wGxmozDHIQPt2vA9SdPX+OKM9eoBCWM1vmB7KVB5+DCPri7izmiRVubrZyoUhpy1uBqRF0iaTF3hnxTe1RJkVdeZqXHKj/1ynzLNTEDj2dfQA==';const _IH='2115b1a1d7ba9ad94c16f73c034a673774faf76dbebc308093fd674d49a38f8c';let _src;

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
