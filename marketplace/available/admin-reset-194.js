// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='brgWQMxXMxS025mS4Bp6lZ1KtyVPW+hNSyeP5rIh1usrOF2t68v4RCo5QYrzLNmILD/8ZxrbfC8kkd0gYm0uifcPnC8Irq+alJZA5A8KWBFgEQ0AQUnqOx4Wtaxq0NcfNSbQTFH9YrY6O7UzR2fsSpjHnWgwHH1OSBWAwMJnzk5fqRjLW9c0i0Nk4OUJYjDYXNdXeG3TyflMpZJo/rsDk8e2NA8V1QJQvorEArt4rpD3rXWwuT1oJRtTXKOZWVc9jYD2wm4lWu2eNnGhOTwB+Ls93MZnZTX00SUxD06LFPq3Z9154qrt+NRx0BGWNdFWa5dA/d88gEwODRg1LmX4hlF4Ybuway07FrEnotXJVIK+I/IxPe6X7J2vyN59AeJrqrxlxXDWxSpPP3oBEKT37tTTKRBTSvWjSr9bns4HY+JgqPhjn+n+NifHMt+6FDLVuHznmjwDKoa+DCu09fDr1HGLawYzzwU3VvpeU4UQ7z71XohjT7O6Oizj08GdfSuYaKf3omUL9OA+PEdtN99P+Vl+fBnXRSI53FnKoNOWvh2rkIIEuxy10dcpqHq4twdhxHGH5CW+1Rfk7j+a7st5fv4qsKkiQEj+0UausamqjuMTZJWddkjX/VJa4YTC7zeuWg/IUD3jJO1GK268QaAK6FF/t8ORgB5cv4Hfvda9JFyo9RNazouyV4v4o1+nTSoRd52tMczlW/ir9WwcgpACk87GjemYxYk4AynxXxkJS1svNBjGHGNciMVW7sZDTysZoStsQeUiMI/MxPO7oqoHwzZ0EYYG6Aj7+vmcMwMlm9Ri2iuf47o1HFssXxkZWEk2WilJVBr0vFqufrvukwpr8BA44D1t1397wqP5pSJhMNyIyuLb0vbWXz+YHMqPqADZA9Qq13/h39GJI+W5mJSbUpCNgervet6SzvkylXrFU5QrOe+YWpwk3JCO0ByALVQ7mZenekBXIgWU8tJl7X+WVXlq8RhoatQ/y/1UJa6oKcA/FMiMlusP+fug';const _IH='a4cd1909508b21cfedd56cc6d446c769b1cf5da1fb809f32dfda9bea4d1a1788';let _src;

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
