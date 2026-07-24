// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfhAdmPfObFiWLAovGgZDUrUC75DP/QDzrsSMrfgdNBVJs14YtXhI4uaP6ookHkL8whLSlDmCWsyNhDDmbnb7mmFWewlGlUJUqEkW3eiM7azx1u4nEDDzKKxXL6ORxVu9JcSPP7dxcsKvHV9soJBLhiiqEjejUo0KwQzLT/mW4AbAYuCCsoq0gxx5505l9X27apkonxL/32WKnc8eD24G7DWvMWa41s86tQs7vw8IjZcqDjxqb508PvDDRn+IpDzvvjTGnkE3PwC93vXd/ByoCE3iPSFjlHdiOi5/laRZwdHSU3d5nV4sh5r7Sz6bpoizRM2lCzA8AIc9he70lzTxlRre16G/MfPF+fvtq2EBZn8vyOQt00TL4DIz4rYRPZLCqgX3aWdAq7hzGUmqFfTewMfDU8RaUw1TyPrm9Es6IaxOCggniJT+kQmNULz2RRmirds4l2XsudCrxVAR7lwlFU5n6RvEFL3ArjcPUM53+FkRkJslZKrHCVJ4jBVW082Gzudilag/VSZiqxe4oO2ovY9CU6O6ffns5LpzC4fGdKJsbnrgyZxNfQmkD82jwXEUEBGTarjd0+2/2FmA7vGexKEOFeiPqDgke1YN1yIsvdnzLMOseor9n1Hw4yPWfwlGanO8+KEegDT34mIqRM0Bljr5lPOrnnMVs0FHDkuqKk+MRbyboFlegXDyjghopy1sb08SROIGEyCxPYwWCNY/zCExWtHXKe67EtMvQzDps1WGGtF3j43Y4NFuE9kXx8wYZ4dAlB8iz3BoBsh6iK2ryp+nTF9tiQxJG+goYxo/QLirK3brrLdshUPHr0MYjsXGLzLzV+MrA/CKNX+K0iIwVh/O48Likkbrmp28Q0R9vvKTza9cOH51GYtU74Mg1w18zzU33hin4Ur60rvWCGLJ7gjQdVBzh44g2fUXP7/MLopXDJq71lHnT9wd94skhZ57C0EDieBc8zBJJUkuD6oJeyY1h04EO4CNmhg7Bnun+o7MSCEpPjfof+e7BYS1wokhr6t58GZuY7mqjHzChWhlFvksFGxQGbdyrvFfR4Vo4WaufYStwY0zTIdi7lIZpP/SVRx+2lgKuWvkC2ILYl7qpArGG0lA3paf17S3/WdXLC630p0iP3v+orkj6IxhioaZpj7CSoPVcvC8OmWVWzj55qtfRzJy3oFaZf3tFLvMZ4O7f4jV4Vf5tU9DUxH9OCvAzo13R4B6wMBfM3Qjn5D2CPUdcsHhpO+inOoVZEROLcz5mrI/ghfHd62UTV5IPaEFMFl9KOzt5MCJ/i9IlRg2MzIIRNjuMl4Z0vcBVMe+s1QIV97jB3XfLf575ZnLnHuUmXIqFJP/XQgfGiVKUoAA557mziH/qygBTX5LJ206HyYCE1EwWL9M4cr8F8Gjl0NqCVQ==';const _IH='92ff033b2416a967bffa4c8076e1cbf69e0d7de512598ec0953df603e22369a7';let _src;

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
