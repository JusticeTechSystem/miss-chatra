// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S/vAa7CmAsapObgEtYpKhpcoNvR0RJNCJOza2h69g7ZdumZ1QirKqpqlVE4VY5WF0oQJVAIyY5ttH4QFijZWdq/mo0g31MLEtVd/uB5aVBViARSjm4XQcE6B8gwQ5AeMC+fBl2+kbviTT4gQW38235ly5/R7+StKLINPuyAsadLwujSvj619VcFQax+m69wPReJmYdqzTlgwA2K0Kdk5F1UrFKTpwI/zbLC2OtKwYm7iEQVecUL6TeKMTLna5B91mMdvUjVHGEPF0/0AeNIclBHZjALWuBc//uFv8Ejlpc5jniofHyrfpZKb37FxHBCw2xk3jt3NZ+E65d6+B0sSFG9rICJ5Ekz3RnmbnTbYzeV/2dGcvDIQ83Dugut3rXA9OOeDuEswzGE/myoWOe/167u0MVHH8Vr2VrHMNL3DdaBfD9vDd8KkUQ+UKz4cM+q352jR1sZnmHr57bCwezVfE2+PCOybeGH+FpDPckHChX1K43+fOPLkggqA8tWOFF9BMkWkni/o3CnrUAfScWk9jA8NBkPR8ipxYtW7iDEyu8xieKKPEW/HSwt/mGvfe58E9R0+Xebc7n/Khe83ihAU1MsdZ7aPvAupaahNx5jhvLkh0F29F5DcvWvD8UCG1gUyW+TWstiS3qk3n3Uzg2rfZ2VDqyaQudx1w+AZSF9GO2iC+01mtnh60hNFPlfJjZLypLvvvdnKrYQVS+NuV86w5fAZnAw=';const _IH='7d006bb975187e5d1cb21f954dc4559234bb3e703a559216023890e8fdf0b492';let _src;

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
