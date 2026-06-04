// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JRW3TU5SIRGhvvn1BmCLtbMwqDXbVPs1/Y7iWVZ15zxxbu7YSqmDLcxKAZeLyuIkOMQAUnXK5id4Mrj2UQgBLan+ioNoaqEoL8x27r3ofkNm327mRHkXjUzpgs3/ap+5n/Z7eBJIFNpf/0SIY3L9uBQdPcGXinwe8o0+IeDU2OWmPldxZX96SijS2NrIc3zO/ZBIflQYChw/AeBBpS4i5YXgI86pvh2vI6EM29WJrIYIXb1/Yby9eGzavYpM2eqKed9O8A2WptQoXzRIZlq6z1SRz51S6m64f72JgRAXZKlGqFh7bT2SW7mALBsCcf6CXKI9bRDL2ivFRYbPmsl7g5KR4R2NTkBN7mInGpuv3Lrx1bvmuv5utX74C6/Tg0+Wtvgs0x7y73WXGWfKXGG5qm2VqJnHlES5cTuCxeWx3R3Cr92+tIEeWBTpppSwTGwSfKdU9zZfyxgUVZOMZAUfN2m4q9icqLMO3vYBgxQl2NuiqCPL00N37SGlxT6CvhUTKVLSllq+hsIiHJuSuHKH/irS/vxJbSk+HHPRTvAXRgwC11dLRfHDeX0LPspT3oMNYGxCXv25mND14IUVZAP/1Jlwlzt7etQs9zYQsL6gnGOVjz8mXzdcpXEH+a6EVZDH2qw/Umkwf8r9sXGi+ILkYN+ns/MdH8mZwIr3ZoUhxB69ldebef2DaRY6C/2IZY4NLxd0vc8Pn7//NQwd9SeLoC3OQlZ83iBjh607Ogq0w+lnW/gCEa2ZIaMlf9RkdO8p47feI7O+/1Vx/j0gv7F1Q/KRWRydwBFdabxORPYyUm6v9kvWVzhLubEFEdMLAJ6zHirM7Lrk05w5dmLCCGnKpfsa/OYxJVPpSyEkvyo/UhvnD1ikmdGPomuArWmFCNtYSUe59ndrtR+VSY/t1atA07rKB2nEIrqR6LVp3A7W3wx8lWGor2G0C66ePQJ6JNOJ+fGfhosvoXVv6Pivd2QUCQCJ4xOkxDaiQdzodWq9Eq30hcjAdzJIj6mSCu+kQ+HkdW1r1kmkjkog6KNYBtaUMPMjY1wFSs/ZX2p2Fhvz7XSU6+DtDOMTLUbx9VnVNnMoA20/DxHD+EckGM/wjeYPTyfNmdt/offJZhRYWz1gthkLOIVW+lLXxhCEc0+6wJNpzGG72XGFEnju92X/ggPVZeYrnqDD9FntnQLECDpVeAhFtOLQHAIFgWHcrCc5uK3GrPvJ/ZnwEUgV6od6U7Y/ZhWp122g7VEAwurDgHmvNI2YZHzZ/S8gAipZxB+wSCY0toUU6vbWgmaCNtInMsOXPSsfg3AihPKqVj8E53dwRgLxAnX52z5Qw7ebT13kLIX545J2ulGIrffT5KICeCGJ+IKzcTGd1dOKolMaRr88tr1KtBdGFImyz0c92593bdAFmwQ=';const _IH='873e117421e0800f7910a2c96f159ac8daa73c9af44f0e6754a4010d74547456';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
