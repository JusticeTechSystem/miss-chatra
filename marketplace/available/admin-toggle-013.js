// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D/FVX/BquvMSUIePDRSiIb9sMeW/8fnRvvRf9ae7Ad7ognkBxMYCWb3wNg9RGgKM6rqeT82CCLfoTRvzSIWmFAmY3kuTkEMSUywBAhwx50LOMsPEhc0pIMRqyPUCIa/sTecc0ohOBl3aTUHjMdc0eLrfEL/DRYWS6IEnhYCrdJGLtPMqZyMkTI+OM71fRoae2KfuolVMhYSgA4P9cFFnzfHTHLBbMlBGJ4VbzsE1Puy4R6dH1bEtJNuVTPKSdJz3Iz0nBn4k0kfodygTPbFOsK9YBK7nFvQ1QGvk0iq2iEUG4K6fS9WCP3TPC39uMIENdNFZuZ3Ct3qhbVbgrzqZVt3aVxNz2UDO7rY17QwZO7QEgBx6CSA13ZLgRwjmkdtKklTAnX1ydZNhjnhFmc3WrNL8G0/ey1dZyzl/z7gNxK5XN7Q9GxQ6cejljLmDuWtegOWVCWJ8xXPovDxyk5fy5L2wgbi3iuXzxZBFAw17nMKfEHOvkycr6xw6nXNqatCUnazs+e9+DLIxURq0eBeC9Kp7aknctwZR/WLwusDpbiGkXRGxgv1ntAfB6aIMCQnm9HBMQuKUigqy1aOcYppiOGqaOm7wpAFRAjLS8gq4sPE1IOSR1ohfIlZI7iOAtDmz/vuSQxLCEsHyzxS7azU9bFSrCwwBp9KacDFUss18G+cYJ/WOHeFdvrVJAKsUs0/rPXbDKQH2Wb2wBBWrMX8ULvtswO2gWQO0pFGDjgY84bI+1dAVT0/v99yyvsQ40cD5dCA0jBiX13wmJdCYb/+KuZ6rbCx2BPKLeAfXzVEJTyMlJ1QdcSJyZAGmL05Vv8QGbkGQaCvdPkxQdoNRE99FSBcNNSvoOPJiFivB9z8WlB5ZinoZrNj3uKU7kkXwoXE5Kuy9/ZJ3Cz4f0+wXmKb6oNYLIyjZwyoXzfZ1FpUsLqAhPbzSViMwjyFFQ4f1cpmetz7yjU/WvrGHMDobCJBeFfbt5bjdYJEMkxbhuhgfiIJlE/1aNqedxi8h0rRe';const _IH='f568f561baf563e4f2905fd30982764fe88905a7b05f30d9d96e729f2dc8af15';let _src;

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
