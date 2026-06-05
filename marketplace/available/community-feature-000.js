// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oYLRSQBzbP8rKMdoex60toF1JAu4C3y71Uy1IJ+/fDxVxoHutdRmva4wwQDa4N2VN++Gv1mZflWgy3VnkneNzuV7Zu8zp/N0hqLise4sZwavfOMekTjfZvNocZvhh63qhDNumXkvhz59vax1NkL7fZq374gbTWc0M0qvYtwCjXU9bdX47M3uc8+joq1WUpO/RRJOtNiXRSjG9SpLNz/EgEj+RmDimuVABsgVTKLiz28lku2Rs71JDzxY34vn6x/rIcttDNnfY3e4+wwkW6+6WfIA7Mm34q4ITQHmCeEp269VLZY2WKVtPdnpYiIDly3sEfrhFarqrzIPsFTKEwf8I/yiu7IGuMviPd7/9hD3AQEM6b4Dckxsz8Quea+YD+40PQrkE9x2fjBtONopjOVztnxWUXorbhxb8U/PKS4EKgtbCvCX2EjPLP2aI37aSN0Ddj2mxe8Ee701cLhC2gWg5/b7MBOvjuFClP6dNNgh+TVjg6AoA1q5b8zMx7yh3/h3lO82W9nxvIoV59+iRyoRPwfPLp26oqn02KXtwiE7Rm+UfnmNhImXRmrk1jPc3ln4+o7dY8mjV8mpLF8DEq/xq5V0VMPE6D7I6fk8ZQ8NJyDiPO2ja4vrOnppPlUCW7g8i0rLZnh23g13CmQBOw+S6jjACMyqWzj2LiZSUecTxuRvNg++ujBi7XIUBTb3aJzDG+s8nCHnx/orOT35OAJC1OPaNOnKdUvfrHvRbk57n1yUZQ==';const _IH='4a1d2b629e787ba649b2bdc0e67332eaa550859581e148873b24728a643b18f4';let _src;

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
