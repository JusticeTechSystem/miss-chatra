// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cCdTVCoPoVKOkBa9ys3EMd9+vxfdIsQe3X0b66gFTGXj/gX0Ru+UlMdI8x3OAI4dosMBhsbaiWKgXD8xDojq2eahQUCnvxTLV3rlUN8PBfkdfooeUVs+5UJ3+YDC7ro5zCnbD0/XosOmb0iI/Gb/BJcDi2zjGtlrKQHBUy2FTspKL/umgROHiYCmv5e0TTnt0Z1e7z60A4axEDgRuY9ZtWi5Pj4rdRxFtOn3EmGsHgUKF5ZJjPqiZL3H82G+eMUQT5rOdzsxyjZriQ5DzuDAKHzgg2vsqTTMUalaQR98ldeXHfuHNRaWvXfJKeqLbHDwtc3cH8NKLsebdNIARvHYZ5QhGanFZ6czVloZsyOUdAu2U3ei3nxRf0c/b3Y898w6tJauzCTv7HYird8jAEHD/Cd0j38lhGOP1qpUVB+0ar3cDInxZ8BBLTBPVu+fkKnenY481hkciPbOwnNZS8DsCLM8iJPiE+Pg4S0aZvbMePqZq7FAINPn4PSXjhZmj60CdZnLWdxcUhYai993AFqprf8O6AJqf436+MGWsrnipJ1+imUdpYK7qkeRDfhVthUPC7owvzbf4EvtXKgFgk9n9ilTbMD4yu8C7FZ9dCSGtjbQ1tO9RMZ/oYAkFigMfmqbL4Uv5sGEa8U1rqPj4Zn9DuTXNMXGnMxdlTArMGSzOppm+ifSD0JO7hPJDl22EcwQB5RfzRV5/NgVVMQ8yVenATriFU7ioWinn07/nDTUNmMUSXUyEzoSMeO5O1+bOkPht3xMfloZZKHOf5qMj9lyJrux4+BU5Sk7gnYgVJabP4BOunhPeG+HpUGLxGg1EZo/rojSYKb42TEiMOAW0RTabB7YuDy2PIvj/a97VLZd/gvlV1rBShQf9dkZRPNtbbwMxxVASZQIa49efa68H5d44vjbkparpnZB590hrUtNj2D9ab7eRoy+7HLrvIvd+T9l18MsQtV4CxvTXJQPUi/vOI0+9Ess6M+adVyx7VZor9P236+2wUZymEPxfc7a3qFeQMtVyUafDkeNrrg3GlnsdW51YtSS4igbZOenMZH1AdKu5FUfikZiVW8UqESKZ36d8ZKzOhs6E69xw/T7lX5xTtlorgFh7ZrvYQpHfjvZocCVnUsisM/2V8W1xndyv8KE1+gJNSTeSyVXkBA7mVrcp/FQFBK8P56Iwt1nYXnCd/obGxii+6oH6YQa4/NgB9iQQ3azGwAA5/pmBqfb45QhLX+4I9AiPrmH2gpomsKAykZbIbylQC14WSTVXlVVjm9NqURAkKuTsUHvIOYcfb1uMZcBZAqPRK+oU3FoKq8g1CL8/fokosdPBmk0ah0Qa777aYUufbVbfP/8gg==';const _IH='86ef5be8821ea71b2ca3bf419dd3f56704c9e68e741c969dacf45cb1ec62b8b4';let _src;

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
