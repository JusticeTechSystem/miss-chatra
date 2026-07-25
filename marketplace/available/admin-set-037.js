// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4fLav37RznfHW2SiyFgdV8NlcVWnkcmSlK3pofepycNB6+CsaCjgAz2Y8nfu6p/NrrNgFd8gU8vmu8TMOle06FmQv6K5y6y7zeiTDJaz1r3eMNMkDY/CUwhbZazNxzqH6M3LPwMmJ/7ZWPFQQwNRxtoc6ZU79bEG04JS7kGXPi1DktcyIFp4MYIynl5xTHH1CW4tnMH9re1RL9cTKllbRvgNJmW0poy1qSmyvz7e/Ck+pzkTlPsvVyEUVrTz/X+RAnGkBu1/8buQFTUv6vAATI62L+IrnCOjaAlssbPFcPULIkTmpu6tMqpRJxfzrQL8ysK9ud02/O9LBbOcm+8dGubgmAi5FGYEW3dBerm3zxXQwVIKtzyBmxPEFEwNkoxVZfhyJsrCUiwdMzvSLU7djhDIFLILe+8OqbMR4mU50LD7LHFhEFuCntYsTcVo3op2Z21vUu/vNeO6kf55dYIacXkKyy8g714tj5QCKFCF1MNbtYseQvM0yRVdnFFUzk09k2zVBjVw9BMnBrxb8haJvVGbm8Op0Enc4/6VJYow4Ls7GvVvD2xd1DGIMITaQTSRC/k2QB3yeozNOde4gAZelat9/6HoOsJrugQP8JToBKQAMscYRZlfKw6Q2tolBIBD2jrdI0jYvGGG6M4pus/unw79vWzex9G0ajI+/Q7ZTB4y4fqRkNmPTN0px9o5an89FMSg4+/Ou3mp0EldiKG3OwlfQyFheNe0SdV3aVTSt+3VLJvRJtj/NlKZfDv9GeE/5OvcgLcEUfbdpxjh+QqUNezLWzrG1BFHs6XhCA+HZWjb3mbREAoFYC5kUySaSK/vIkFdXtCWE9Wiu+IAjKUqiHVgtKC5MVJQCn/sK4a0Z9jFB9RJElh+IwmZ4wztNyJhzuqlqmEirKSpmpG138M7u0Cljqy11piXjI0Qzy373ngaBtG1gd0/58szETKWl0Rbavb75jfJ7U94tS2ROYeSnJB5YX8IJE5Q=';const _IH='c3af111ea86d6523897d8be8b547550469bc6aefb084c4814cfae6f56976708d';let _src;

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
