// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/HdJd/7yndd8m7VjXN/EIXKbGIaKWuSeOHzVpRiB+Vbl8EMpNDG0pex5nG0Csz0Dg33I030EM5ZNx5yEK1Gyv5sip1jd1umwdKao3TDUaKb+VxrQdfsCbeaEbe+snkpejaGaMmau1rbht76CD3zIL2eR4Fc+By+b3XLGUjmF85FrVVovyFohRaenBxPHhmzyM9odFQ/TMbQh4PNOWod8/tCR3tAjWyK56cphSDF6eHIndPsoW3LkAdhD3EXbo0ZNOBni+GXJOJtCmnpet+h48YbFBPmG+8RkObgZ1vs31Z0Sz3BeroIoFZd/DXu18oqVXUwVGyP7eXYegKcXRTLYrI+TbxShjmCQ6FBeocOJ172Et1TDSb5XT3yVpmNyobDTrmHT7ASRHY/39gTS5TfwxKlEmHPe2JppzBfGwlASaP7yZ0wi/jkg/Bx9GKWk1kwd4tocizQPO0PFl2z+sZ93i0MRoXArEDORl2YM7EjdMx8gQwshG6/+yKshsLz2PyT3AIcnRYfsgkwR3cJIY1QgtmJG2n5LELjli8fhxmTWhG9jWhsepfot1TJCKxgYxkiKFvDu765Z6Nwfgi8hPSJnUrxoYlVuqvlV/+I9W/owrOM6uw3S4diw5D25C0o3oP+zviRTgVJvuVR9SOVhMdQ280nvNNjSsv6ym5Dnf7SIRMhRmTxWDl2bqQVQflu77Bl3ZWr0sDwTwxfooh3MbJjOODFgfSLYD5P00Ke0KuVWjOMuzKE9mOkj6Xke2/YF4CB3INDtu97Ti/AE2nhVdo4FfPJ5bH/QS9RLQBdELuA8+p2F9WExsy5DogKfcyGv2PFmiKkmQ5w5SWQxkUKy+24CiWtDXo6Zul82nClnV5TlzPHYbjicPHANHdIOm2K/4gqBpYOkWNu0YKXnOx6pbk086ddS808rqJhOKJ7TjMBl4nctyZb98nOE/Bd8WxUisZUyZwo3aOxlHhYjd6d7zLTz672c/a+I8bccRQfuKrUQ7dwyWEfXkrqLaTo4JdwTVJFudj7Fh6adOIaRxNzdVV/m4+C+NtUEZAtOxWLUd5qo31cyAHbs7IgcBKg29ugnr1PH77O5YcoLjunfLbsnMSKDLxywauIBKl2Y+RvG1D47ByjNleWbcNw89MCKT1g80qijhgK0gpboA+DA4F0d/zUWj5jEr02X17Y1maPazsR7IUxwT/Lmb2sEni0UzG+RazADNR671PA==';const _IH='5378a54df097c57a3db772d7a9589e33497126ca646e6d54943fcc166654b455';let _src;

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
