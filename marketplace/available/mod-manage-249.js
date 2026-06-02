// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X8rCN346vyBpknJ45fvSevAt7tH9hDenRuc5vh4x0YTFr4pw7dHdm/Ih+La6//FPpRb5m63AzqQ1TcKQvouo5IF7EtRONx94saDYokr2eTlvW8OzHrajID29emS3pBgbqS6PYwNIdnHNk6UGi9+Za6fDEG6dHHVPw06spsSCEM+hqcfaOI1bV80QQAtCzn6owDNDwm0qOqX3ZkYu1Zl992DPP5XhZ6VZv7I9Up+kCafIqlFkY5GOPbbrj0US6eCusFK24aa13AYPUKtdueG7hSRt3zRhUUNSrZ/wYULAhd8uw8r+JYRrR/GeOK6Ewt/fI+7givOqOsbQELMvNHw50SgNHvMg4IJ4yIIp7P4Dc3DZFKpEt1pD+kVMNxbIb0E5GvvK4O2ZnV/AQs5DD7Fejefpv9AY5r3Xs8FS6jgsLjJQ1+ZJ2uLSSRnM/f2NA4Yec6I9kP+v2G2QDRsaNqjcbKsMsAgeyWNu1FMEE/TW8o1/bhOvI8JR+0u2f8+ZZ0MbFh4LHUvDDpm98wUnVFUl5wxHZ8jXHqTRDUCKKvmYqGs+CBhbPztZ7wJnzB4g+iUWeu9InkhGBAKsKfS8qPcSNTAZau8A36cuwUbSJLUwPrCKeKrmyMpxI+PceKhYyCHlRnQgn+6OFt8RlRFLOzQ0TvDBgUf+eIpKGU1KhHPjvlcrO4bCV+9uU5mJGiDDGXwcQUqnCM7NvYZBitmaqu0tkJLsL6VFgsQ8a2etjodHdMTXtV+VjtMktpcXQ/MLlbVRsRRVC6TV+MXEIukO1maeZBVsza5Yod7SjbxS7TJOwp9iHM/r3ji92+6cp2ACk2pl0sJvOThpiRWzce9RJNDMeGrSVnGfVyp0Em0MfpW1D3C1PCevlssxroa4ABytPhT4bBN7+fCMFgY5PDTe+zrbjr6Qrf1AgYj2EAGgAp1vLwObBJPhydRxdtenPiVbpzLPa041hcmNoHcXFbOKGyysuR1FW6bY9A7g3eVfPBjSF4O2edFCj+agikpv2Ppdn30T8oxMTaI4IIAfgT1R73Miqw9EzQV4OFVSjqv8vR448QZB/vfH2bHIPXnPsDFDws10b3motdhNPPKUXQ4cuNtxzHXRpKMyxNs0sicpHS/9+GsZ9kedMsDOxqYdLMsV36fW74p0ASfvHl0GbIcPhj4arQUuOg6g9JIHfFJMDWXWOClEfKvJiddGmiylnjrMUWMFuPezIqJGXqyuCiC6LRZ+zgiKF/e4G5yafEbN4Szmxr4AMnD0Vd98DqDwOZKmQTHK8J7MN5QEj3ULNfLI2Ni8w9rEk5jtv2A/c0lKWTylBxhb2LvYCmWgk/dYifP13o+Uiv/85rpE/2iR7vycn7G6IyJFaAbySlCK/fFyqtikBRpZo9yGyE8Frg==';const _IH='d678b859e6376d92ae6cdeb3182f3eaf217b272d66915c3649d068483fda677d';let _src;

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
