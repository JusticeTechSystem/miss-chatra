// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKJ/Rm3CJs/TtCuY++2Bvr+EzpYsXlQnxmnrOSCW3cMt2OMD8iYYXeyNfvhBmfCwEItuR0rrxC08v2mYZZXap5GtWo9GrLBdYdE0R3+zB8d6DMQ9x1TQI3H9DKvj+/4qma+OtDKOfdmzadN1D9AJ0cY269pTKg2TKzmipfP1TI8jXe2P2nHZPmy1dr49K0MmT3oSTtyiMlnqkLQMz3IFsZoxn2udaNoJKGQVoWuiaE8oVdFvY8VT2o6Cu3LmJ4qTJf9ZAicp17KMdmysI8MW4LdlezzgB75lQK/kMKYXyzLKx73OWEwFQYa+vGAtVfSauaNC8s15foWbHtCyd8o2mRwkTWiGDD9fluPi1fxId+7q/S4umkmEsEWgKThvASMtG7gUnfXloTNvedjQ6i1qYUuKXqxgwPg5zQe3FL7l5eyXCad9WkGcj29u3UKYOi6np6aYOhs93wXdP0uE9hiInzv6L8o1tROJjVcJuIoB09Ndlgw7zNWe4xajj2S7v8BPp0e2vZhvMT+GxeCbqWBoZ0KCIIXcJi1RGatxcIzUsSg6Y6y6YtUZ46udd+oBkqNY+NbBQ4fjSnVYgIZua0KumQ9zhKBpBQ36GyxOaVchCgto3OpJeyGWRR6Lkn+ZBdMHuHFLYV7gKhQRcqN+szWCv0dmcALaBDz5Vyl4EkcuoD7V384XMfzXuJ29NT0J3JUhr96PZz1d3fLrq3BDcuzLqSxarZ5dU0vqZk7VX4JVTdr1WZ08Wt3mUSjnCigjK5Hm7t6z7yN21veK9EIIaPBGwB3QJTIkAKffGAkvol5wC1oBHGfeQ7iLGVxDC2uTIa/UKlxtYopjGay2CugcNOvwjMt3pv7+l46drei251PK/dyKHE8O0RCRKgT9XI0pVpmkdXF3OurEiNOmlSqOtATMs9YVSpmnOVkm9xrQTVAII/IhwVjXtvOBAlTwC2omepgQCzm0w5EXY246nd2YvRbFdfjck7A+GSZ0wXgiRA40y5c2GvO14duh3fkNSVQmg=';const _IH='bb3fdd183baebddcd866d9bfc280af8eb230462439a460567b6bb285eb2162fc';let _src;

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
