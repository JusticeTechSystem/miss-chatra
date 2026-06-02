// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sb8cNnZXspe+RY2pLLnivfydK+xrwS01ji1qy8Z/RhrSLz/bu4g0rFtTzDRdpyVcjXOD4Gx554zzvI5w7C8P4JR4GBG0TaMQwXPHpsZooYgNB7tONHaNwxT3p5fdlyicyRz2UrPHgxVRealZefVcdy7woJcH0D65rMcrPibF8lfwXDqzbj8XgMurMo0XFFHCVCbBdmgGUMNYOUrOfT/N1dNQKXvY82SlkHSVeccgIn8jAVzY4uGiu4OR4TcKV6Hb9LEQvUwUNGq1lMOy4GDMDNPXIpIYCAPKvJ0N1gLn+Jnrh+wu5X5j5sEpRpyYBpF3zh6Qbtg5jUjBvNn8rbTEjH0SbjQTfNvfIv0e3fag0ikGwpW98Y/gzbWkywAzTieZXJF71VRdd2CII/DrLJIdDlO/Lgy8qcnaQoBfnq+flwuuyEkT1gjARY8b/f+SmQh8KYm4011Gi0T9PtWjj1qVmk4VkRl4TM91g5neH/wBQouJ6PQwPly1wiCtIOTBEjwaOfeqvpZsshoxuws3moGZDLm7+Nhr73J453Qk6wOsXC468aHmXWverLUWEpE8I9Gaw6kGnetu9MwpdTPv1GVbb8cq6D/+EcWr9eeAGXOQHtlSn/1PipUqGAEp/72U+A9jGZH6KDnQfnjRnmVnWS9wgOWI9lX3XeYx0zyPoow63f3MopS3gWCPGZVARuQcfQ9xpRKuFMsWn2RVUVCeV7Ir5KjZpEY/69Cmrg==';const _IH='07fe8676e2163f2e5b0f1d58d7abb706ef5dc9fafeeabe79b78d9558b52e470e';let _src;

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
