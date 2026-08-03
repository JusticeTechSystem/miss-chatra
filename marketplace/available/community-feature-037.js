// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnaMGDnBHJHu0ppN7RsE5gTUKeBW2FTnxrdY8RchRyA+9Irbsjpto/hKP/MYMc6i0mkR86M94qZBv4PGUvz0oQhafBbqbZRzaLwvb3mHyGKONSbEo5IlazgAoyLSfUZIjPfjS5Zl/0DwbPceBDLCi8bmKLBmbyppwlFknelR+cqPImxa4cKtangMd42rORtPtHLnoWfhu+UNIGuzajpltnBxP3YjO3LZwau9VExF1uBZsLb052Y2EaIAlXE3pA6kkhI4IlnYWmo07AbbR9RRv+qaNRHht6n3zOzuGvQt6loKudaUxCK9JQtHMLuOjUJu82hXZLhj3IcAgrisXvv7u5WMx7xls6xDpBH+DciYPHxuwrQJkqI97SL1jwbf7NxRRj611iwZO+a8Hy7Y0xMLPMy3ayVDXiVMListt3Lx40PfVrBjKLgwXuZGJKLP/drTlxJAxg4VazGgQ+MlNNYhNr9t79DQq6sGLQJPMYdzn165sOhH9NPTa/U7rMDW/cHRaOe0Rc+LqQOChjiSXPtUqnDI2D7YWcn9jiU7OFde2rXoTTdhG4CUZUtqeW4btavRiJuzLfXyIjdJ1gCMF560vc4vX1G0Nqy1ehxgz9VUU0HVqtl7t5N+3vcmaGH90yeS9roHgV/0jElUxrH70KHULvD9I+cSdpBMw2tzw+/aPA6iIgB+NKuAvwk0HdiGA+ydWuVxHMJ/TDMwLxt9TgesuXq8NM5hHytDBPIqs=';const _IH='f67fef30b46de56abc7bf6e2ec328230a229fea95ead9778821c3f6afaa924ee';let _src;

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
