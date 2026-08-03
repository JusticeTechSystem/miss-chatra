// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQV5w/1QmaGh32w1XKI5Y+LbWr6KekolF2cOaEUIrIsmAPXSEa5keT8c7rPswvrgZNF2oKNhXpHJ+NBG9W0LzSdbyh9CQNdTk20JpcPMHx+DpemolJa6+/IRyfTevXcAQcDTDn/u9Mp8IodqeDU0U7+k0Uv8RXEYAnCtK+j7nyUSBzXFOiPJgCMHnkW+6onJA06h3Vae0TQysXstoTJthHUhAm06zPLLc8pN6Cxp91YCl+ni0s3Jk4eJeH77gb7rFMjqV9D4sBEbDSy59AHhVJphK87UEj8ZdprnOWzLYnSzstDb+BrQp1F5xzMBMMOFCgNeCl3K9msW83qS5IXxyBo7N808dVa27I/SJruf4tzj7uKV002iN8ozJw3tLua+LcAM+YNapG6/HjNnhlLJbi3bVkO0pNmCq3NFFQ14OcR4AFFs10/doo9FcY3UcrPDWdxvcny10f85pyNoetbz/7af1tkYEz4S00v+NVmGcG8vc+lI3K1zecO0/8+ZmcJve/vSExu6xPl7gJzHHmvrwpeWbTsOnbzhpQLv2284Kx1QtwTYGirbGkYvIT/7YK6TgftHXpFlIrNjoNo4HtrijKxuyoLGPzBeklEGlT9XmMvH+QivhkJIMcbrivu6l9jrbnbCVpHCmDRBth5xBqnGuXjvc+Yj1mPeWWa8PjdSMYHosoujCvpjauvPkp9Sdh81HZ+jFHir/HX5a/ZJ7Az74aJIzhN1pFhjoVb2j+LB+EYmlavRiox7eTuDorOXWKFXFBGb+PSaqUWHW0s3rxb1s5MyZQKJv1PcV0wXazWDft4TJWldTwUq9mAVMag94aclF+gEG/EJkzCkDU3Grehi4LOCBI91aPiwPBjdMBU7cwj/aZ5a2CEN51THVAPPP80zSoHS9d9VFb/ZTV936JR2MoqGuI8yw3zKVFStKXTaUBPZTALApEhnGvn1FZHK+HJR/t/MBOZmbuQ9ltm2611HpEVeciI0c7UIJ13Fi6Fie2KFY5vGaHsEGrS6yE1Nn1a7itILc+UewKO6G0YbF//5U0DvM2DGWu2GRs/SZkN7PbhdOEBa8bqybFH5kucq1+h9Q1vk1dl+9FgsKw6E7BoGW/XEcjBky5Kr3lbDK2TcP1Od34akq4/A/NIA6/Q2rHfP0A9tiC4g5lBsei096UhMaSmkMPjHTASF5EdBpo2ylmA11m5yCusvhFZcf7KiESW7FUwGZn69ymDIg==';const _IH='cc60a0dc12ef427b14ea4b28bfc085bf98d0030565e0abda0a045fde82d73091';let _src;

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
