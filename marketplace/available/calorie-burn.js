// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rxFQGmGPdrH7aEMhi5T0uy0Wp/kgxuJwtuVPFv75BoW5iXl2UgaGCgDs5gqk/zMK7CmZtOWEQHzRaDXRrmvZGmFWWAj0+8V4kNVjlANx8+Sn4nC37Ogt+kiL7KRwiTc49kq0GMAiraLm8iev/Y9D/vMXV1X8+WEoe3tkGZ2eGsVn3q2C7OP8NIGgsVNiXtHHvXx4NOfAkyLB3Z0VyDfA42Yij24vx6SBXN+deW2Ujh2Pw/iUrTe/9NCiHjVVdvIIwitWixh2hPM/zNQN2A1asGHBmCEH5jZJOKpjPg+LkEyRFHclaw03K0Dst0Um76zVdV9QkpUJ3nWQpbIm1KkwGaZORipnaPCQcn9/tRQ3fEYA+oDZ+JgYHs704Orl31wRfO8K+ZT2cWY/ROmGq0PSrjjm2rZ0guNdDg79vtCiHNrl7IrdYgB7WaBK1XCTekRCGYFEuMb18Yt5S71ojNO84xjdubu4ZvNcJUuxrPHckGjKNzBtejT15JkuWzaxOh72vFdnWnIPvv4wXj/V/X9LCwqzPmh1d7YXw7rt40Y8ViR0qcbLch4CQNjA6ZRVAEMMydjcNtVhcr+mANJvYfMomDrBUkW55VyhsF4w3UhEfK/imucTRnmQEqP4LKqkhN5tIeFAAsks4Q3Za0e9Ba+Gy9Kw3PNHpkyagHMsHg6nggB8NkvB4NkYzJthPtqgbd6QojkT6iPnP5MTgkyFCrRDh+ZDfjP3JOW/a8miAePGhABUke8CzxnU0v9MQyFVONdoLiXc0DYhSQjmipzlNAYQzLBl9hrFfE6ahQaSrHluy0O+xQfyqzfK/o8iyio0bTzByOopXoqc18mR0mtwPvNr2spcLMLC7bgXix5TXZELYltokPPv+vJkIjCIS097BZLMnzcK7mVjzPPAmWzDYHpjr1RBs4/o63AhQEh6P4oP03cKw9TqPnbFphrNay2/ExQXqMPkM5eRqfXl3m1WvXj9WYWiYcRY/NKe8IVVfQ+jhA2aBAA28RlsBFh7DuJJUmsMJ3OX7fGQdkPZayUrepRYcyc/j0BuR3P4NDKeni2NniSOtsQJgnG3HzWnpMfcZAuaCdINtaU41wwYdR+9+fx5HrhBOGVWyH2b6xDxd0dGnEBuM/XuAxfzyza4sH6s+MF/I8YHxOWlRMy/jv4WTMVd9V1axvbD/FvkF0GcBOU6Cd1/pY9EWHbgsehaKgkbfH6r44hisS8mrsirAuAGLo+Hy4Kj2u/MHThgkesRazxM4xP2rjOr0TxhhUDQloNgI+a5dQSt3n4RRcLfc8BLHaddgjXq3ELEdiR5idYg6mrxb3ihbrvd42waNAS5++cg4++4oUU9ewy4y5Ax7vGAhQg1Fkiwm2dbH9EMJ/U5IIHEtlXCV8VsLz4g7abzPEf+TJ4EfA4sEnqzXS23SaUoK1p1yX11zsBp35w0qLOF';const _IH='9bb87482fb6faff6d554dfbd8d2bc23bb69a5cadea040a8bb43efa8c42fd0d75';let _src;

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
