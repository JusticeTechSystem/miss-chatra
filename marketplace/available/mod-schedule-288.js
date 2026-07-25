// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIX5z7VTnspeIKJzHK3LJYIYjlx56M22rskLwwhrfndB5Z5F7VGP3xbJbZgW63cE/aPLk01Hw4NwYDf7swP5njZTsOh6kQloFB8DvKGGVGYMaCzFTh4q/oVzu1pDWZ+jSdvLMSHtR0zTIimxH2ssevmdePwji8RrLElGIeehT/HyhbZruicG4xeZnObMeJUv5P1z56AuZJJaugYV1kzpTOYCNOlxYBxLWqsg4kPubV61EBUv8scK4z9+9qV7jDdKKwCAvpn/q1FGycMZv9d/wJ4/tSFJJygKxI2F7atP8tnf00kFbfAAnl5Pa64g2OCW/+ZtfV7AWrCFJkt1mhyUD8IpAQJvB1gksZEQTXf+TH+YXi3USvqMPLiKleE1/UVrnWLIXY3VhZ76tdKzSuHLGLOfqb03NtSl4RC7Rr/5hzutPyLtZ2yeU5o5fWHb0joEYSrrPWKj0mq7Kg0+ujDjpAem6cWMr3DngDBKY41haB/M3G0GXxTOQLHjiIFoGfJiB0wEoRgzXyvF1LValkwgu2J2yQUY2LwgHmXjRhu5UdO1197e2M09aJngxhArgxGVn8xk4ZBCLY1elTF0NYXIAPMOaiz9oA70eV7uDBKeUtEkB3lexs2yD2o7Y5dUxsWDW8UY4tvwS2Cl3m3NoGmTQ4nOqUaS1kwuVy1MDPWlN7PLsjuxlYq9EqXobegezvnwin4lx+ZQDQCRmhdIVbSG0zYoKcROjMjioC2xzOgS2NWt5k08E1BlTVqaV4IRza1obXX99Ynz94MHPIlpRtQ61eOX7/7mbykbCcdaSUkgRNKnjyH+gUhG8CTG/dD9e6ZijIJb3ywfHE6rQhhPkLC9dzTTSGQ2u9owCBaTCx/X9OWnkGd5Hozf2xCcmiW4ZRyMr8v+S7LLcbXJtoyUSQicAIpAgD73m2owvMoevOlRMDKON+liBuYd4qUsfF0plcQqipxdv0dmIA3IcaELtIn9B0+mkPF7i5w4Xz7TzHDSbLGIczx8v1MxMWJ6ypFbM1sXvK9Yluu6Uj5nUOgNwoLSIkKP3DmA5nA7qbR7ag+lYWDk9mt0QDeX/NQaoEdnxigLM3BgFe1jhMHT2MMeHrwNKbWuazTpwqwZ9furYWwcScdNvYiH7DUaMlmHSlEl9MzkYopGl0LpGDN/G+uEbNCdYJrw1k0wt957gi/vOb6tOWcqDBJMPKxwT04rQEKpDonIJjvpfLe5UrbbkTz5ym80vTED7RjVxnq9Czzaq3nNvrMCorGxWwMBccnRqJcTeuJVH+6rKTnXU4vtj2uE6EmUzn5Ljga0HxWD8rEwygv8l+rCWnLMZcY5FcYxMAnNeOB44zI32uKc05j921gJAWc01agdKakyBKgaKa5zJNfknOqn//7OwFvAi3puHSF05aIlGFlcqpnDo5ZLvqN/Q=';const _IH='39bb7839da39d8ce1c5242d3d17718f7adba02f4ddcfbf9d1fd76bf8dabb997b';let _src;

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
