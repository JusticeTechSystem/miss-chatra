// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aWMKPAsTpcHu7snHwpDs9ieZk4Bf1lKSpKyz/Yk7P06hZbXL70N2daZbjr1Ivz2B/GF/gczp7iEQvaM89m/dbINdKnVwBjjR3PwYhU7oaQXJJiH5j8vUPLfKNcpWIDpm11AkpWIXkw0998bUeYQOWPwqg3fSS/+F2NpzIBo+GzMdVO8oN4GD5Tht4B8E25i+nY2IV2zbkNYdA5fAq/3kI1ZwVyh1g31eka6RiG5qeBX6NfxF8iHXekXfzf562bGvYVsi6GLYDi8itkai/CHKbWqpInl9/gX3BOKWuXNB7pqNCoTJVTlpA/ugGWSbJK43OX6uSmgXUYuZdKKBbUH1+am6VmY730DClvJEs6KJVEumhvSP45ryI/LyKRyFlN8Pf6cIPt0x4vnK/AcHRMLNTUxAuOEea6KUeWUGuPeqgiWWu24GwgPhy1PX2qSUvCcCw02OolfwQ3sISAj3pKVxV6EDUwiqx3zWyHF0fyP/2NaZ4MZIb0nFRfjaYPqwr+HOGDpXb/gdbic1nVqccMJL3s5e4TLWpr6NjU1yZxUjvGpIe7ajpZ6ASM+gwzD//HqTllBhJLFJCpda25PJyRdmJrLLbI5XBbm+y3w1GgTQHubTIgRb6PX+TLu+l7wALSow+syhoeEAqdbgMvx5uUXNlct/MtNn//JT';const _IH='f2a5112f03f70e24ba91dfa2a9c44439817a3ec84ab01411c4296e7950f13453';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
