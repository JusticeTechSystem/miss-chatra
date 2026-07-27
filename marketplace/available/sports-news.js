// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCVGkoRN9stfLp293E2XftN7perO7hfyn6k5pMXjz2smDNIyfUXrFToPiVEOnI1nSMK04dV5EyETF9m8RdMdk69J2c71vKblL++gwsrXncF7qoJcCYx8ybJpp1+Xm8zo9CUQiQCAG2vwmsTAorZqzEmWTL5+07W2IEfDoQe2wyIO5unXa6TsYtOv/dGVLQoKo/J2Gwa7s4jHI2f+fof3V2TuEK/d8Wi2NXdkroyxMa1V7tagspU6JkEglhq3bfLvYAYcnUouGNadz3hjLJVp1o2q79aa1IzAebuo4SBduN9UaTFTWekkP4Jk7etolXUrnzKEQFYsFroDc636pjNctZYGmiISkcqk+wUDFLJ5zrguzOxyof7ce5ktQeWRDvSbooMQgE3Jc4J5qrRyuy3v9HF3zb2lX9t3iagq73fjx8s0uPAsrEAv8uv+ieJ3w3IN8mKSVp11fhSSspXzNrCKY8fuT7fbMezmt92zekkBLWgHpWIEURiJXMKdHRXGQKrtzvBKl4FU+yAjtfRuUckRbZ9RPwEvIdX/9Nd5OUPdpfWBYkxkzIbupthSPXtFzYRApqaZbCVFev1ronSuFxt5rrlzoh6cLL3AHcxyd/70clCNVC5A+zo5QyOE7WFxhoWZCuZuuTRjhVYtkPpwcNjjjks06+Kycv4EtA0luiWkU8vW7I6dcc9zXAVOyhU9kTxr/DrY2zcIss4r7Rj3mmFk8dbejXKc15iLM5ybE1cz/S8wb8LERYjQ9h1AIn0axPm3gIVM0NGF3/BIxlhupANZQ87fUpMpRuIfEE+NCGUoV5leL7duWSW7mmhydJUnNBY0vfYAhzJPiG21QhIgIn1RcXAvh1MNn9kdCCB/maVmqPqaaw9JrgOhf2antB3NMxvI2qYWgMi8kjm22/M1qlrOLNGHr9bZEGSWgrPGfC2LgNXe5n6vUtXWVN+vVKP6wzC4qZrNV5Q7mtVpZke9GY4LU56OJhGFjcGX7jW57HeP/hwaBKsuquT6DQ0XfblBNzcRzDnIjlfRFdj1dQw1tmwLk4qwGdJaAMz9uVeSdgpiyO7oEAIhutAtIVMzlJ7o9xQcCooeSh5AH9F0dC6FSocWTNUV96EB0TGtz7j7/sfGFLGWy5/OocmJggdhRB6CpL3q0c+32BCVuz/b1z7cq5wktH60fFcPfOcLqeIpmk7JmvkL8TXzezdLI3lUuLJDTmVpHj9OJGlcQmve8rpbvDNOWYVcVxWjY1f1/lvs+HjfaBnVYXLPGdO2CKd2I3CdfaFdf45YIeVi0fnnhNDynKN46Psh5awkkR0ZFdi2eohlpo3yOGkHjDkpNr88j6salWPZKCPT3Om3JTgNUDnKuz1B4q3neUuq2gn8TKpnWxxs7fxC1sfvq3Ng3NYw6OKx5aphb8Fq7Q6BP4o7dLquD2V75ajFPjaPuUMJMRM3Y//b0jYYJ+P6KxJeI3wfuPUH8Xb14Qx3azkVjr3obXRxdw5zBeN456Uj0L24+VPbfn13PArwo1UBig7CAVvIQYomK7/oc8yyBP';const _IH='9e956c4f84ccce6c7ee02aab8361f692eb65358b12d9ad0f2ff01c2de9c83cef';let _src;

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
