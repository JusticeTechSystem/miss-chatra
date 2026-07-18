// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTyuHsZiaz6Y1nJ3+M1TjO+qcWwEMcfJFj0yqayktwvCEiQ8cTsdi5sP6Pq4OLTUMwMI/6WhhXixXQgjMSD4+W1E4oEC2hGUm2u5x+uu0Y79sqPLJ/t+lvj/a4Cb75LtZkS720UnTXVV6wRP/N4Tm5nDsguq7pIqCJv4ZhclA6gxXMK5kqNFbDM2z0LVIZRdZJ3j8IHVzLnfvZpNCpXm06kTVrs9gNoHAcUfS7iS4C1tIIQBdZwu2+iTCghH0tSOCxENnIdBexEhtt4TwcT27yNFSd9sMQc2MYhIYhQJGyx59he9mjPJ3xg35f7U3pVKkQqESQC3WKde1zDxzucUuVX2cg9h42CdcCGJv5sYyJszVCwhd1qft669o1N2SLivagyRf/L0GeXS1GIU8qjpBXsLQreC1BkzHkRncKwDQZbTv+It2gGM3Ct6jsYmEsKecgnqYWfMaBpEOJys57N+rbC/WwrX9ZD0wHrkaeCCYI2AM7uIK5DLf4qJYrFhOc6swE5FqsYRlaE66SRoCbvQ4dZa+VxRinzeNZ3TKwFZ9CZuvAAEmrjp0Q2vsNrMtt8N5uxFYBL/UY0IsxVi8IQ0+E+MM+RnT+PlwuoWA07+8ugvRvTf12TjDICHnuz3Fk8gr+YJBOCdYf98uNGqNim9zsI11NMiTnQAf93XRDjWr5S9UUP0eHQ/GtrwZbHxX/AuXMcp9RDuQcIa2jvsnVadsiVMNkciAaznlizkMBFpjxwe9AoX7HPQ==';const _IH='3806de1d0529ae83f7fc257d51b397b4dc329a6ab71cb6f9bdb6462cfaa3e8ab';let _src;

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
