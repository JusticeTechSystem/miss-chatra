// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpNcYi7ZlQC3z4jdApypIjgIgFVCGjGg60VVQs02YCw8aJMMwb6ncz1+COuZ/jYqbx+7V7k4jy9ZuE2+6modrmJdgHxQ7teBCsxYnb4jlZ5p7VT5Vkd4bnbaBZJQVaQ1RSR4dJAx8WVaFGid0cZiwpiFEFLUMB95anJIwg65WHWVcVJ2eR1yWD+SB+cyLvRfD5knXvM4hBg4ZsCwXT9u3llBfvPNTBO0hP3lE4c8ER9A5MnAkQ9KMzj8XG44be6HFM2wuKF/qyfrbAW64lFqXYDwt5JZS2yM0uwdbWEOT2CjnBPibZxPBnWemK6ae5lixt03pFv0jka/1ubLIswEE73vlotIB2h2bZvLrsr+BbK4ADA5A3wIW8EsvXth6RLVfOAqkv3yvA3FUU4OyKkyCcLvNAqyGx8LIesBm99hOIaY8wAgJn3z0qLJ+xH2juA4RNY7jO15iCS1CMYD27yI324qoQVE3fB1Orj0Hol8oz1Bqtw+UGnOKiZD1wZQ6Zt5IfUz7wX7O160NQSgN+amLfzEjm2C+L56dBKI0WBS2E/DL515NBqOc8lmK9IXO7Q1N1D2Cct8Ne6YD899I8V8mgxrYc8j+3YA4FOptJjVgG+3eFR7wQa+U2fN/lAvm6VyfWeMfR0FCxETRGRGnvhxUBbSZTB7dGePCn0FPFrLmAw4i66ja81BQsVlmjhTFqsRN88HQPsEP7cYuSW1DFB7qRYJWirhlTqpBPqArwGIRR2xaOrfuZX66smfqgvO0yiP78qCN1YlfVIELozky5OgAlOj6e1B4S3FiE8O4Osk3HMTqF+195MgEP0OVmDbkCZrEPlm+dIfaza6AL48k0aOE96kpL713YVhrfIYACgbfhdTe3vzy9UJm15Pyk7s8D2hvUw3UNnwmYR0OyxDPa/VjqF+R/iSjjdX6DGM4F8atAoARP1RxbDmOZnOcNy9v+Rw22BreyXVwEOJ7+sImGcW1OhduzZSflsLxK9D83Mh5IPp3s1U8jpglq14n8LaBuMcbXPeVHxmM2It3L23gl+JIkYHmL+u3hGwOEC2+XDaE8UmDLTJwosTITlC19mpcIYqzwissctFn3LDFGqrPrWMs34ACOjzz180pLH7XeCivR5O9j9Kb8TaM5awpf7enYtobLDT0f6aEJJlrB3kbonNqfjcNvAuwq5WlVPXgabscR1wbodICPdreULUgOmTl7Z6ezi5CEltb91sJDLr8PB2FxiqeMhNO3lnHWIu6j6GQlQJpD5PlZbAXFwZtomdzmQglOPuFASsp5m9+6KqVprRYSiHkrIGRXps46Tve9yFrtDfM3Onk0xwMBR3YuY5Jm1AZ4LB3ZOgzAr783Qd1uH6xw/7z77w0j7TH5jhMDEr9yw6He/QJbPVcPQ/F+JEJT7XolcNJRl6dZIPvqs+I=';const _IH='9b07c9d4f0793b357a4b2f9e47fc4e7275383998b451332951c7201f82300f1f';let _src;

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
