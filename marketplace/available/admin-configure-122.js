// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RCTlyAGf9xsDC5fja5+hyjF04JJrwBiy2u5Zf0gKjW/OQgk5mH604FEfjqgoIIJTB9mSwIztjO+6ZIa8avHWftIYXrvJXg1jyKTbuMyC+tVYXgTOdaoTZlB4bJtLRKpdO6sDeQY4gJ7zHOA0sY23LB6bIaJ2ZwkWlCxCGaB9SxVg4bxXids19hlW5z9S1QSU764fuegzG0j374KaNcBsd+zTypgRWWy2UKMHtepoTVtul/zwe8nbPEqjPRXjG59nqjyfbl+Qx21W0mB02ciFAteDSHr7o0bwQHyFJUU4+L0jDNYl5MHkRtOsuVllnyo13xeF23C8ltNqBhdK1NxFkZHg5yKxtipK4gVgVliTiqh7sQm3rEejOO2SRY00Y7Kf8kVoGFooCwxVfj9Z/b4nt+QOvRR56hvV51fBh4FK2MH22/77Fz2YuJvuZqEIlVdOzUWALgsfStgeMJYkdCt48jzaMRWGDgTFA1/TFIXMw89ISma+brOHAx6ezemWfdvLVIolXQTB0BoyeJqDnk0iHtcl92MQRztKN99RPEI5CapkjTqjJ1Y7c6e5IbKfx2o+oJBgupcnoG67eIVxiCjl0CeH9uPFgMCetWsjog6U+oc2wrH/OHnOtdlNhZm73oRUIi8GpeGt6D0reF44PxGovXwuHqK9eo9IXGvo7orwmfWjWGBhIgZpYhFK3fRBWaChaod9L4jqXBCvTX44mewMGO1ncu14gkNN8v2HRu+7AgFcGboA8vE5lTGb/ew94s9l2W1MkwtKpc7vVkDWZ2xMwyAVE4Q3RmR1hkf37CPZUIR+ge5ZPxwX+DY40q4WJm0ZjGN+DBleYecswYrpcfVRImOcZc4181Cg+ecmwkTfqmKmaU6oUcmeBNU1jNja0VmSzgWtxJP2DH/9aOhIR/OZ0w27jGbLvPrRi4ItvHOTOv5eSK8tu2BHXixXO2M27PWbqFDIUES5kP6r3aUCJBTx7YkEWuPnrOg5EaFNdSYOtThw+Tl5zpo/T3V6aolRljJkCobrMHxDsuTgUXeO4gzS0pUtFHicxg==';const _IH='e38118cd918c50032c2ec41676aaec2fa9c0492be881fe2a88f8e2d94aa8eaad';let _src;

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
