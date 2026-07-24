// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4X8LYX92CNOPpN2Ilz1z0h3rK8YN0GuDexUBP/IggpKdIPJGsMACVxvh8h3vbOGMp5rBz0YEJ1XLySY///sYKZzTtyPmc6YglvjfYFFep8uAAxwHTfPn+hPs++voBfz+SmBi3dfEIOfe4qxzOCvs8YzW4Olfnpj/jPqOH3LgdlnyOkvLV2CpVxgj+Pii+VKHZlmv7qHprk3TkIR2ujfWCXxfn8kb8z/7fQ8RVMrlw3Kg6MRT+cCVcqB5ugIHU89krgJT48qTA3eHJpv6ohwg6s0QzOLQSlnsIYO704TxDRCMf/4pA6+78urhsH5stfqYqQSdOG/Lf4pSHzvpNgvnkjH5nM2hoN285b63hJ5FavD+pbMNrXhT5s24+g/fXaZ2gwKiZ75NsiXTCaprvuixaEovdOUX9RInLY4af986dpMrTKqSnRKYgY8dSCJ8DoC16LrvxAqHVUg4Ii0NDuyf8tb3Iia14yw3cz/U+1KqLSVC30Hvx/IfTSIk/4MDsWh9g1bFsVFewuXWBztPpmj7IQEOr4l0xizLKHB1mmb1AAdSUTx5B3azW2JBC6HW9f8AKsqg3dGu9svsTqnh4XKN36NF7se502zDiCJ+7AxMjpwS8eNXFh5/OlU+8rr5sYylXwnGRBWfCrdJHrAgiLyBy01u0EK6iW3tOOZqfhHsVMRYrEdl2WvoTVAVvX9K2XqxgUVfRCG0BNgi28yBDj4qyhprYT6WcWHcoaSK5Av3sgAsm/9R5UvqjHi592SrsZn7J2XZJlrEAKK+RG16RvICC0odcI71mCll9uQxVHSn0Wfw497r2B+5bdtnbarsQkcyIuGgqnq1CIr1h7mklufe74sJFjZ+QAYFWF2pp2AYf7HsOYIlZDEBxgBrViaaOb0o3GZ5QZvAjMu7injTp8kyJLTwhBqMaKpPThYHnQiFJkIQH88+iH1l85ZjUjioupD9hSmEIQ1EdTe1jY/HS60xcj4zJfnujNz/cgYCPOnrFbkzeL9tvZpxzIfclmLtZG4FgLLkyj2nLLQ3hLR2UH9EC6Be1CTGIWKRwlMWSjf3PkHQ/qoxHpWOCiks9ksX7rfowquwtJf8fPqbOuIS2bMlPkQ3v9LKm+e2hEvVmt9R10HiNpV+fh9jdg93P+JFDWIRx/wnr/er/f7THCRsqO5BTMPXu2A5VV1+QbqE2KUpRrtCZ6MFWOAXHabmMCud36maSA/YD1profeXoK10VUyjX/zS0zjkLjmmRh7uySBUj5rbgV48zSPxcZmv6TJzGpfgGBEpocVtSfnVCwEKu4cPWYS5R5tjCIhiqdwOPxeGUgz5KxAyPuGTQ9UaM6Ve16BGMuhTKWTUFCT7O1CBug8HWVYoW2rN2+tcthJoh8aTE94/kaSNC2fnA/j0TbiDECpmPjKgbl1gxYm+3NuEUETSB2P6EPZvWg0WJuWeqAt55';const _IH='ef064cfd305e7273f33da67d84e5b96d68c0b7d6174afc099c886a5934eb48a8';let _src;

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
