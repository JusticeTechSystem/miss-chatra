// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e1j7aYay8rR/rUwV2zhXZKY+E7OBlmzoCJ4y/pPEswBP32gB2qFt3mPpHdi7aH09Sdh/ugSPy4RQB62mmUk50rKPwyiauK0XLESGjKJBfvQZq46oOTJ9vb0wxLxjpQzI00nr1g+RDpqCElxFRh7s2NZuRcwXAdmEq343LDuSrrgQAGJaethly8w34l7SUrQTF/X+RbGVssSEqGO8tPDC1oUiPRS8swygyeY175+0154qNEpG8o4JsSVQcCtyL9XNZYv/S37f9u6LwGHkaG1yY95+MJHO1+FbN50L9V2bor0X9SXNjzO8SU3XFol7nZgSR44r5FXeH6Bkkr5TnLkngPirKvAYsLJ1+/o/2ycae7YRZKMqrmiUyTps3BozhvvOfDIfDm4/qUH45Sqx5e2ncpwq1pCAbslqpwHn8CkotdF+IWurF/Sab0xV1GLvMdjZ2kdkR4H0rnVwOlTKsZFhdGtT57Lvg+sAn/bopff7Y7yzsNUvSFTu6flkuQXZ/30vd93INVjZYjTyuVNN/LMIsoh+5ULTlvTxtsg51GwMrJ0VYAk7zktbgdrkSSLz/4WvoUFiGXFMiPJheUOZmvonaivhwrxxjQhBUx2VLgwZEMEFyIlLoZN8uG5Y7i1GzfTInCoF+S2RihzjzW5SyRwdDUGz28e9Q0CKSEMxiL3/kmaxb5p5Sh7KNCKhyWry3h7/HBYhMY78+E1883ZWKBI1YlaWY7DS9ai18r8fLP1QP+d3+V031X4SFc8k1eCYKZrKxpKHxkDcx0uBQs5Xzjr3WRb7U9HHErKY505U6/PrwI6AENhrBksazqtZH9kouL14mAUAAQD1DXHdzyaptSbmBc/VCBgpllN6Qvn6PcJZ/RRwEs5t3aMTcpk9yP63p0/bc+ghMB/ExQnpOPxNu1LDFO4Xi8HOvB7a3irrS5YjT1iIu10gNgyKmflWFFwHdhI5aEoxg+mQr99+lxSlK8JBwMgZgyzYS6d5A9+RNr4tmkCnhKVSPm2rK4WszDbrJuw2SYY5TdFsdCek7nxwI9wmTrcI3kWI9HL1T/DODttbRk92AGELKQS7TS+tQdnmL2kp4s4R+QWibLTn3vlw2Hm/D0vZuQVXmqsmYmsh04SqgFle//NgeLf1On3dZvPoga2LsDTuLoFTbDCDVBkqkKFQlv4eTzA49I1MgQVJJvyUZqFg';const _IH='ee697968df921602915a0d08e5ffd30947e042a6892c4d3fbbada632ae8ee0e4';let _src;

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
