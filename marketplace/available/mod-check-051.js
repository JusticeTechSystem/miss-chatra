// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zJg3oHmQggaQqp2o8YmiqqSNR5cXzc5qdz6jrG5b0TmcLWtBxQAsqrKtfHvqWJ2PUL52p9t50U+xZpXjfcmZFmEEPVv1tp+whLtxbc3FjCP9UXJLgoFvRACf/NTIGaIIWIM2IUyd5yOitSuklKzvnja0oxDokMnqD+k1WM454mxH31ZevKlv9fUX3+btMxgUEErADjI3BfdXUWCHOsfpeSAMrCI8cj5xQ9pV2c+zMlicuaiCf1VmeNuOs/D1nO3eNEaDfpTIlr6tGyZFqp4c35OufZLgxwyHQWhjm3HE8QSVFXQHJF+7KnP2MG9nhP9xeuKpKBP3WNNkmog1HCFp/TP3TnH3gwwoNrSvQiu0/xp9i+nmIdxh6MZpEfyKXdDzLbEPSRxRfL+ld/uufm1gHtamiXFLjldlbr7+W+zvjr/OECiMKjvCK51t6oiC0sxG0uxp/VMnlo3lWrbzBKfq1pzfRlcK4YeOuzUImwk0eThZmxEWjmozZ86h85JxD0BP4Yjki27UtPdGjVIU1Fifpt5RDTZNj8NL6jeU0YyuJgNP8fAG2dZV0zeLQXU4fkziT1lFQCDfElJhmR5MnY9jihV+NmI/creBlL2nl3s5I49GNg3uK+wiiYrdaTK11HHG+ojOhFTPB2+6fGpAjQMUvfTTH0joD03p6VyWq5DkfATGiHYdL43h8WKN6HsDHTqlmi0Gkn6ezejIjnC8enITrjqQkHhwBXYW8ooe0P5PtSopbhbK7n/EJMuNLOmLxbZY59XcX5C/AZNl1ruGpZ/FuvNgJwZewvxxhgPWM+7yZcvcUxKFpREUYydIg/7iNvrnjMz+JYlo7hFMuKrZ8X5x0P8zV7GgWGSrN8QFLAKRCtNf01FAHyjeZCv+x5ues9evETv/pQuCmenPJ4+N9YqmqyON835c5AdQSEKvXPfrgennturyd6sHMJUE90nVm60Oalu2j0+51/DlWJvE7Ike0MOsVeTCFjfzUgDTj93IjI2c2XWKf2xtL7hRkEuxle9M0xWaML0WW6WZ0xwVUkN2M8rY0Zx/DMB/NGzuVIRU82/sov/mV2eGbzSH9cyy8KAWUZyKGYy+3BjYv2cFbcMI8cvQlTm0v8cp2qy3NEMEcYQ02jrht2BrwP6qcY1LsG1Tj/gdUUJoXnvGH0n2ucPbAeX7GzWhEwZlCdyiXiVCjSj1Yx2V7hgpQW9Ajn1pu5XOG6SdWlGwjjjTUQWvcUvHhaEFfV8zUpOYVO6PpaHie8s7HPCokRFI1chbuYF7N1w8br/IzNByRvQeNIxqyRTnxLFqA9lVoXEERZTOO9FcSU1JfGHX2ZNR12RjSWR5asvPcGFL7pIob6ofDHA8RQ9oJdIGIOswQe2AMA==';const _IH='76d62ce4d34cb5016f4378263af75693ee9e4c82e0424b485fcd1a2168e698e0';let _src;

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
