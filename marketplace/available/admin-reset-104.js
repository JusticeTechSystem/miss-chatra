// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnolCS6NfIL+xYOTzO7ewRVpZICZ9EKrfs02Cx7p9+2Lz+31jbvIV8DIEYl0z/Ps4cj1tweS6r98y5VokknH0VquxAwSbOHXQ5fnw1p+Gaw5+yCgZb0wu3Ykr50S+Ws/1QA+nrdjw2cQuYgU7PpnEV1ODjQFhl8crfOCJDrScrLlJ/dkoFJTaS2WIwp9LUKUBKLwxE1yvgkQeKA4Rf5CFGaRbrcerhL343UmjCrp5rh8QdSVkLvvp1NzHf/SFdz0VHlGXIBpxignoWqsP6kOIRt2b4ig8wTd8AlLxIiZJT/VS78++OhyAg04k7uklbbM2OZc91PxYWD2ao9zwmsNDh6Dyf7j0gRQn+MJad0OH0cGqKagDo1vNCGDOENA0WVmpXLLVX5WtQgeqSDVTIYQl6z2xdqU7jS15E8gAJo5df1FmH0+bx3hyydBMj/JDeuA09sWluJvsso+lSXBjgKg7UjDOKyBizXvKtliXjuTsxGt8zE1tJhpq0I8qCLO+TsKR6R0YeSjQq7IA1/mbnfx8a7CI30OQR+sxgHWhz2JKEKPM7UVci8BfA2movPs08Il4CuOuYLcepvQXxBEDIBIqD2JfTxfGjwjbLOuquZfNY9Yna5peB6RaXmwdspr1o/+GTnsOQu3Sj0DNbNeC1JG6bdV2VvNaF8IhRYUnIzdhT2XODzW5xn4Va7DT/n7VckvioaFtE5mC8MkQDwW4bjWyGXNAUqNdI+rhGWGPL6n1kneanHQywDUuhx1hKRinVdJli0Ld/Bgac5bdt8I6bCMQ3fKlju2Pd970+B3Vyj6na3dRjfzvrzcFrXpd0TnWFJwMUBQIWeLz/MiTibIXUolKW3OtAREwD++NwbguPw0pnl63ye2+GZLkA9boWnmDqL2s9XcgBKvSaduCngGkXu10Q6xBUipOhG2wD5pSJfbdpsJMFWB+Ttb5h8PCzxcD+2OyH7ZBY2MagW7tKcUeZAfTC2oPpbXZhYQ8PaS0kPIRjhuDdKuvgDkywWEM=';const _IH='dafa681fd893756b0fc684df8d75d1e7a224ad88b56cdd8c03cabce4cef599e4';let _src;

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
