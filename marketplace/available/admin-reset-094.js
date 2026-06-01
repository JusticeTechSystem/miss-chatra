// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyM49P/HL8JeXMYlwosWiqPaWCJ8t1MHZj2ycnx/fr0FTo8k2yuGGaLxVokQt3LyUYj4Y66q7fb32vf5NCqvPNsMV9RCx0192KuDVDx6wkuU0rMDWAdbJTA2R1aMRwgyVa3yr4eUnjCgGxn5CLCiTRAZ5NPJxEn5f1319kNDEWvf6fgC3+wt6nbZZgSvl/DQCMx/ZXz0hUXXIZulqRRz0bLh+uiWTc3/cl0cj7Hpe1Xy699R0kkHHlCzdbsliiL+XL+Qcav6M19FIJhQLrxlkWZzDOfQOgD5+OYuw2FIH+XSuxBMYnkAJFKH2Od60Nd5t5NcQL1mlmRblIRmg8KzR5D9cNA6/zckAhtVOT5JOiRmlYiqm7clx19q694cfedIpWCJB6P+2E2EWRmu8j6KK0fP3xC0nsAReVIKao0Ye74Jw86D30NVUMCtyggEae0ueY2xbDfG8IYURPwuHY+8PJXzbAR8pNeeOudOaf2cZ7mITfBg19l/xpEtYT/RrcsS5lOOn6EbPdwj9+FviqWyoBXvnuTwj2XILd3z8aPUAoGaksRW37AUsKedKI5JlRFEzqWHtHW5hCQDwxp2DlfvifWhZNFq/XMXFQgjeXwLfrNGmJyUgj0UiN26EfXiDICOgn7T3ETvn8J63F40YR1EVoEh5AhQuMOHTutEIVSDV7csEG1myYg3bWd/5aweYhwbkboc368/iPH/9tmL55FBPkt+AvDEDGjQ67dOEOossCKVL/2CB8qyp6HYJto/A/WdxVAJojm3yRA5bFZ0Nv5YRy1FGv2HEIyALAbwzg7rGhookXIq0Vh74w7KGnz2ifPYBqK6tYA1SkPITsa3J9pi3xzFC3agNGWPsG8sm8kGpYZUA9q2WHsrTfLSUVwHzM5de8e7SusOU8I/UNdoNOAdue2YzJREj6s+Iu6/1NzOZR/cUqAp6r4dCKhpJewxIoYr8DvReFrP+UkdW4TR4lHxRofuNnpJMJyDgIW7eYaoJ+3eN8zhZ0ch';const _IH='d3e526d8f30a3d931fff86fb5f9857a7f36a20222876cf248426aacfbbb138a5';let _src;

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
