// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTG/BeIrzVrJs533TLWP6RY/EpkMcF/W/+ZpwwsHDhtwbxl/ePctmvAImMIv3zJdZv0JBSzudkLb6m2Z1XssS7cO6s1TAmvr74T1pEIB8foC23+7wnLi21J1CGh66JW5c+IQ2dPDJ8Z0ke6WWnMVSytMDtUPfyOAiEM2nhe9tKifYMNpNihRgCrN9rf9fbzbHggvPxH1Vgosumhv/LU06QnjkHCp3GR0bd8KjKWobdijMNWmhSibXcO6CmyOW2GdoMtl7k+q7PbuDuVadfNMK6YQWh9iNyHkXQw8/oXy2k1ZSrYPN1PcR+Fgu1934CXL8D96IWuTdAufJsxJPPu1MEzJddVf2ACnE6Bjs/jWVYvVa/MLdaEUV3BHPQ+ccfUkiCiOHQu9fxAWpN4ku9NtI5L73NhZJgH+ZS0dLHRfBQSjljV3+yIbHf22icgjRwSSrqQQCK/6fj0MbM0V8NMeZ3VGphlwTLHEbuq5Hdc5qSLBdDf5X0212oeGzqJsQO4DcN2n9E/pNr5aWt/usoqApSbW+PFKMfELykrWAyNIX2T0YRpNZ4Xy87kraWCETxEvSLaAvTXnmSZVllJKsVNw9cW9VDFaX/rmY4UiAvASgMxl8xr9vObQMog394DGPGcXX3XMz9ZySvVdqnLIMwZIgO9U5uuZyTjZEUMjev076gWo5mpD/7IFFG/hqGcxa5QBs0Lx2uET0cnff+IT7lvGcTjlyt0zQ==';const _IH='34de144c84db116ad1e0a5d6051dc20501faf9256b4efa0b2cba162eeb0fdf0a';let _src;

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
