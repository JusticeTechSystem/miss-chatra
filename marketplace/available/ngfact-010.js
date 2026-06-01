// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ701PebEtQ6gtkFVOOKWSdHzMsAOxGcd88IOPctl/6hfXDDeQco2//izUG3qZOOb2I2vgM+fSKgcg4azRrog1s8BVKkqvjN8hrfyxj1QIsWPyUHPM7jdiLQYJU89GX42AbnM6R82bC/q9r3L9rAtm+u9sEDVebzJr+szWur1/hSxNUfr8XM+98alwIjoXcljAM1m9/6bKYPY2BPKYLsEioChthN1sgi7AFyrDrqc+JXJaPt2cYVNxoUJI+nICfDcHfo2UGnrEeJFsKHbEmkmsUedkDnIybuptQwyykcUEtxfDza51EoZBktiZAhzJ3Z2U8C+JtyMPLS7k187Xps1whSR7CiuhTG4hnBjRob4qF7dVtl8Mg87spy2U3q+X/8nL3NqRIfobEsHGnulXRPUZJ+TpIBOePdMvPpcqfayTOXidhWrgjh2SYkvqsfOBtcTCr2TlCNz6IQt8cD2TDjd7cZSQkcCxY+QjdAdURuva96fW/YZud9yD2DndhTD5UajFb0O2XGw+MfnqINsW9a+yQCA7UM87ijE0UbpsaAxkx7CZLKA/9pfgM42TWzaoXB98wkcr/O8Jx+9/c0GWrDXlIxzyefeEpfHL3+Plm0yS9gRBihIQdvZtlt+JrxWIIkCCShUtwCqdkXeLr3EbK1maGpRL8+SPxxIpho2gd6bJr4dnZR+A7UNM8LEfHNMnpSZBBKt2Qhh8+t2';const _IH='e527a3435172b3a2ffb204c01ced0bc0c2d76061f84837904d22771cfff9e715';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
