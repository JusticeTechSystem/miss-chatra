// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jjx72vM96GAJsPxUvxAmy7IRzvjzLAkkOnaZhZCS9ae/CkJ2AIZCI+82gmXfR7FdNzrGbKPrjWdRECJVv/sEAZrSIFZ/jfzOj8iyeav7ii7iQZFA+GZMeEyHghBDhTWDgfejv18NpW37PSuycRXHNvScXkwq4ieI63cp6KbhEFkcu+JOdz2sPrlcLrO+H57BX3oAEQzvIsMCUE/9/i2eZy6m7cuySy3FbhJQ9acLZJteBTGnp0H79LmEUPw/hYQH0juhYu+MvIvll/CuMIpvSI/hqqUjdla+tU4vHYaOEDIlnaHXiHH0X2Ed3Out3i/f86cF3YQs9HSCl9Zdckmb5aPmJW3ISx1pJV8h2w6/AvOoM4e3Z2leghNwHEArQDVin6JjSXztSY/fT4U5Vbd/KM2xvY0PtshXlgAp/ZDIUqNggtcMyVcM8B7ptciIuHilfpugw9DFuW5H+PZNFcXE1MLgFBM6mONmZP4y4hzo2HDM356Y5dOwILluWDjaJS1rKeWgn1aRAfE7pis4/IvrI7TWLMD/8SGnW/vXu/Rw5IUAAYIC77QveDlsVZ8jAVDMHDPC+ZgEYFGL+UzR23ee6kSz0giqegoQ6Etai7H6hIWfYocqMJukgrmr+AELTDuTLGbr7Jf3Td6SMNiWfwAwi7z3Yox3KugPfucA5nvzUg+FeEFaEpKhn7MDVaBp6+uP';const _IH='ce0dac7e64c6a04fc67df215a4a83f8bf1beba186f2fba112a453beadbf0858a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
