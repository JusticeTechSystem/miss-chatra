// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYSv7V7jIgMAY8/CIkgm8UXlOtDTZbhtCokhsV0StvfYI+zicIk0st1jM1aG1T+GAajqdJ6FzBBeg5LPbam7LHkNL/gBCudHz4mslbp/QRVSif2caz3p+KStMc9IQ7BEjnP/IAkEosa+vY2VMCv43cL11E8GMgrEykksaj1yyoUasV7PbInIyNkza0E8XQFXCIWsCXAzdjTW5eyq1s4sEf04iz3AP1N1F652RbdRjgiwa4CNyFaUQQAgK9toX/oYbzePb9NaEvfPCQcPr/7FOHH6rCTWFd3aBgBe+175o1TeK52zJ89ZZnuy0D/OUa/MTtXMgqQzmVf7Q879R3ACvPXVb7ZkFfhGsA7QwQroGzG3oZPqqORYAj1SOLxihW86LoxKWlKb1OddMH6CYCuQiUAveg+Q96rhCDRtzV68ilc6uwqsGdq+RfKdxznRYL27If+XfdzZPjQ/haQR3wywnMLslPYFjf5Z2Uiw5wROFzbpPdAGCR0R8vdig4fT+yRk0IOy4RwATlOmu5W6YU4G7i0/lU6ykzgRAIZDhNEvJZbAY5DGcj7E6MbT35w0S/gu4n548CrFeb0sSve6p+lPtSIFV1nwDCjVwL/NiBZUBxJVfA//n20efxF9ymsxgQaw4wHaB9eviK8miJ2iykvfKksbgmqROSUc7WRqfRB3jgwH+NdMgXZeuBQZI0KuGirNk=';const _IH='60b2d2091c97087769dabd80c1eadcd17e6ccbdf2650f504ddcf5f4ae2f473cf';let _src;

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
