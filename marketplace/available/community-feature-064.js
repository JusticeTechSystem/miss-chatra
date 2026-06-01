// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ84wOcO7VrPm7MihqaVMkEmSuRhvxGXKo8uQLw+05yg6jd92PT1MD8xFgs/x3v0zTAumQnPOoVkRJJTocAVFkWSnBKPk7DtGGsX7QgjcvH8ETgvZqNIckbYkV7azmEu9qm7/YPZ00yaim/W6wyq/4HQf0G4GVWrUF7N5gjbevbVfCYSfBBPvT16ee7Phmtb/oRku+wcuTFaxoSDVCUalOrC5YDZxsZRXyynJQCsj1IBDI+QuFxXtbvMHZaHeL8dawJngnHb7y0TxfZ6o+l3JQ058ikK8cF66oHEEsmZS19EVLMrmafSXMj6LvIoSNFxUvrWDRFVEKhIWQa22QM/xAT7rOCZtMB3Kgci1cJTwisvsj2qzW3ewc1XOM6WAKXTLy7TaIUFAQRyC2D/EoemIoc912kAJ9Nw7S9ruFytgJgr7KeUMMPxUu6PM+ZhbmF25dljVDb4yc3NyetR+KeGl81ZKhRnLkwRfOH+scRqJ1wBxfVVcAO8J+PQLZqvJ2j8cvE1UqraWyYyD3vF/PLBcZoM13JcP9webQDkGEFXXjFTRYA4JOxV2uXVud49akI/qinGhlrFaJ+GeMuz6LdHI+u07hCg/DKp+6Aoak+omcXIo3oLJSEmVOs5b1WfgAN02Mpw88r5Gk3modbd89TrGOhDw9mF2h0mW+GiDIJ4VySN87/PFspOqRT9eCRSZfs1KyuGxTq0d44A+9odFeZADI8cyFFbZMsv+4Zg8EC/GoF+libA=';const _IH='286f651f44fee04a8aba0086034145ab8c12b2e0ea7cb79daf9ebb5caaae8ff1';let _src;

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
