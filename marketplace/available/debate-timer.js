// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7RhYYd9tYzCQKX1crtep3L534ylzBhVKapK4BedyHKBLoQxIb1KobGuNK8yoWRi9Nb1qxJmwX00QOUNEtI5xfRC+38X4xF5G1wPb8FpJxtQGEeAMNo8Ae/ztAs8iVZkIHXDaogMFYPUgJci/OlESw3P3vVYpFwXbTYSYxLuWb88weSBdoxcdrBXQjB8aKn/Ej2xhHNbDQHgKVrYJN36eUE7hZVswmQP78ErkhYaHIKY3bbsWI2cBktClin2XR29u5zKaX/IvqK/AWgXLifR7f7TOP4VetUkFBwKftJJ5u0SiYR+COEULk6yE2l8/n26afsRAV2eiJm6iUp4f9NOj1V8gJuAWPneV/xBV/bUz9aP+QKv5MJ8JG10Y/I/d3L68ptEX1k/jYubEd56QeLzgE5r0LzFTj6qDzeqcuz57nl2p/HKx1wg+3/r+XmgcPI4vJzriNwBEKDSx4/uXgCxtN7Klru5yHO5mjRJcFYABUo+TNYxGhfVb9pucZC+F09whmZIIMD0t9PvNdaOoe00UKyOZtB9Bx+mv9uMzA8xOD1de4Mjn7t1yQOBZ1j+WnmRSGgHEch78VBp3Hl6RcAswmBYM77AUhkfYYk9tk0o+xaMEHdE9OpcgnajG5PK/rrvTLENoFV9kCySD+PvWW40kOgf4/nV/ad7TcURYbRuZ+3gn6kjqaDfnloqyH0hRD0U+1RFEIUoO9dMn0QBkz4h1bz73mIKu1qRYHoZXBOKgeHvCiVmOlTfGQObv2Tjd84o4QlSWPUK9FRYc3jsZ7MUcZZSUG8ZuOeWblL29wMd0ePzhRdtTjZ38GYYnhQIkyJiOpmzbiB72G+agiBVh+NfXm0Dq1fqNyYwt7UPDWG7plMrsGj/WNzBDNBzckKq6AAgcFrh/4CF/8buqmLGeXxJNr6HiYpcqTwQIrRpH38yCkb7yX4/l8dku9iQIs2A4e/RWVvbvRcmDzfn+2Dg6NGjgby1GU+5CKBiUq0LofLqsKCAhHjTB98RTWY8UuapCDkmoqFL84t+dS3qjGvARb90TgjhE8TK9zALIFmVtL0f4kxLoQl3hswIX8wG5Clf7MXV8q7kGmxviCkWJtDq/dlsXdKH/y532ISx4T+WVLmtLS6vEiZi4HRRcAZ8ANNAtRxHOYHG7Xv+MsNsE61EUHOmWT9o/IAxYXHE43dHUX7LjgEVnOFGzBWW+4KgTVHfb0OjmwaX1lzmjCaMt/ymxtm/5IeQQi5426DHeSMvjKpDiZn/jaUJhBGqSGHHjMcyqMcbFn0=';const _IH='64df1d79321eea5fe3ac539ad3f8ad4e2c68f5a4079618a6df37be03288a0fe6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
