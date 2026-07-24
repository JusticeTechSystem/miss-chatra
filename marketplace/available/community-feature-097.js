// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTxYp+ioofF6y2uo4CS0CGQwDpT/KMIKDp16tRku7urkEtkAxISCOBAYykJVYHwWJ/1Tk8n53DNzbrbWa7ET3MTmsZ4Qy6VaHLg1o1wGzY0KeJssEH8x/FaCiTX66/SGE1d95cYQ8i9ywJeRzlF2axt+J+dntkrnJaMELrQkunk997TwTNdU9abqQQpoefYSqhLEem1Un50lmv+6C8MPor+Hju/5GN21xc7hKiZY42SHp4bSVNU6o7S+1iGolz4jhsn8aOTemzjK4D0TuCatYRChdWw5gNLB6LdH1YkpJH+CLMN0tgcWCv0kj8uCEdC0i/TpRAkuE/QUafkvv/xR+tjZstvckEjOX/IJeWsiG184RXhb2kseOBrQ9EUc6UR3XcB2N7echqWHI/vCy/sSgG179gDLU8bTIjYXHBWbu7c95zDWDpRb/Q/VEFx/fp5IBtlUT+FHCdguDjxK/9JhZRBdGyw6q0yxFULzY6yqTIGlEOkADBxPp3YNEv8BkiY790tbbb58t6+G9tjbyB37kWHpwpdamWS5u6SrAQnsbALQVwG62qz5gOp23WpcqG1BKqfUPAAT5doeuDrtd+0qqsRYm6/Y+KM/tpz1+6CDRuwvc9M82Gw8ralR3jXxcfJMLqKc0XTnc6thKJ5aDWrm6yu4EJJAEyQQ2Pov8vuiRDDSFDu0l6RjltQgjsNvFiG63DfMYVgOEi3IBF5o2B0RWJJ/RGFR9OE+hsXAXsfvUa';const _IH='4111f56ee53b7e50392300bb4468d01784a399d77088d3057e5d957de8594716';let _src;

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
