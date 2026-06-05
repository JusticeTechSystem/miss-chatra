// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OyiGISr21HyZ1ZeVHGl5M9Ibcvjbs70CMZwv0ZqlkV4NfVQCG+06jnW2mXABHDFgHd7n0iTLpjcwoNBIPBFAUu0/6zIav9H7mtbAUg+TAd6Ifv+tGqW670uNPQ1eC6vLXhizjFGTwzaPQK60GKaaibkFebhDBxeEmk5FMh+nSXVrCguY2KCAVsTFgHmnVZ0YWULGrRTjyK6X31kGJdNwHWQWZ2R/dDbJnlCNL5c9oD160nc8KRZg88MOx2FCRs51Gp4RnscSlwnOzHaMMJYZXLEHbYzl9eiLfuxa+n2TFENepMJEPsMhXv5X/agTr/U7+nd6KcqhaW10ofQ40+dLVnstWx8Trj/sxNpbGpZDFbpNYze24L0DSrib6gUbdMJomF8SkrNGMLImIv7sO5hxtd+zuoCEBtiHpkteY/WjifM++SA4wVpza0yhUOLhWj267IqwH2rY8xaCzBpJPqGv5SBiHRQr5R+jWIgO+z77PgdUMFryuVfIDthdLE+XV21LJp8C1Cx7UEHVwD3Xsjtx86etDYpuyF1yyMgpZtb4iQPjrz1HOPz16X4c6YOZONRJTnb5SOLhxTe+crv07ueEIRpF1V/UO4VBavgnrm6MF6CN4v5ayKe4ct7BuDZfBp+HMfcHokE71JVOIa/cfii6NspMddm7NiwsrUwuk0yZNrJd2WapJ/bDHsRtu1nFkjz0Yu9PWg6zHwcFapO7HiR+5tvxplkjULyTugc2GazuzTFOuHyil+2kiGR+9Y0XnsnUfJ/A1K01Aa4U2rynFcKsRTLkr+JcD4Ve1KJz+3J4IIjacGwXGS6JBr0dZF/tfh7bmEYZX+3pL2toqJZKcRpy8o2A5GuzRMkWTYOV4tMVpxAwYDBFUtCyydx/94e46VZGIsaSJ1KZ2qrUcJuxRWgW0mns0dzFmait93TjqDgYOmUoSEuYTBOhUyczEtxxeiBVxCth7mn4TJ+UcbY3Bza4MRpi7jaKxcc3o/Xh6qwQZJ1PLt/CWiv7xhg9TzcA';const _IH='ddeb75302df276ae3aebf65872dfede192a65872e7f8b37e9d3fcdb24ad06944';let _src;

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
