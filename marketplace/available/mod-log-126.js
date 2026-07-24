// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkzssVbyth55t9Kc40+EbR9CWdVmg3aUVK3L4iwUJ9istSIoA9E+UacTfBdneJySthuH+r2JmL6g4JDSomcRAKd1MzF97fV5CVtVs9xoJTbfv56e2CMS26v1mthgDTQ63QawjTAfp3EuuEKl7UWKc/zYIJuHY7nXFBoc3/cNY3PD3ntoifTE5D13wM8wL+lzXXqJjaatTiK2itkwqIDwzjkRAuVcQW9HDDpJtmGnZGnlojQMgwcKZquG4WKc+D1/6WUpMX2dCm1o2JDLzD8bLpkAq9M84PZU8uM0GCKBY6aNIbgzvGK7KCShzDEmETeGMMd1ffvUXvogNr/jzMnZftOyh8jHTVLUxLu9RC3XM/8Z5DE4v0OknqVumuy3FjnM0km6KE8bAVER47vzijCXDbZ1/Vp12WVX42fCm7eYVcTMsRruUX/UuMvDa/wJNt3zS+237h//ZhhCiSipZRXb6KSzia2Yr6qy1fsuKWONM+diDUawqiVibMVptGtGK4XmCziwbxI1GzxXuxL9Jo5hxaR4dqfzQPy3KEFCm3MhpG7xxWIo1NrsW85cBltHoVg29KgUQw+YA1dYWQQ/f0AfXwLJouNDb8DFDyGoVC0/7ht3eah7qfP+w9rtmzb1r8r1e//gzeK5QU9Y0Py6nj3QMPmhPI+kuju46/LnfPFy3SqEtE+d71FaTPX8hcuVYDo5Jsk7tw3bmUM5kaQXCBVBMCeqcK3SaX+VtBDwGsI5FE1SzIwFPy0NP2bRav5O0v6CetHqh48ewXC8yvop3wI7zBSgzaPdFlMPTtIeeJASx8z0YfaIFFs8yeJSR8+/b/zU1jrg9T9sBPWPFjjt/QnWgqzNlqQmSmY7J13MmSnJfoiNmu2abykBcZj1Yu8i3HpMtBnX4wq3+pmo76pT6IdGl7VTYF63LcVK7EPFwx3AiENpCOQ9xA5SVrykk6mcvfTgaeAGOQzBctOYsVwg52zGzgKskCs24fZw699wsvl4NzBF/LGKg6DTVaXc0vRCRe9Jbi/v6mGUJzC4rObC6fAisK7yvbOCSCAeqjq63MBJeqpMPCBEa5Y36Zzpd1b2nDIgRbdm3TVkAIAfAtcLuUaayMkjye+mJkAEQJoqpV/jYAAX3dArbkE7m5mAL7qTEIsHJaOU3Ax6SWSNvDAWkOiOIyTsGlfn9zv72TXTy4oGCd8NM1XnvfEtwSSxHKeq1uqxe+RLVTrfSrAIbHe+RWr+r1lMleSxoHA577Mz/yl/BTMxnBTWVczw0ZCVpwzSWsJFkTYz47KY7tcxPXChvEhuaNQddh1gBLQ5BlIza9mqS4SY8eJMaR0f1pindv9tDUPxadG2GtuxFYu9Nh';const _IH='855970bc3f502c7e7390c18021f6c587845a087303bf295fb89c464892a0087f';let _src;

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
