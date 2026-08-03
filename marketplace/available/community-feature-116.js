// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTb1gvLSbrtOyfwHIl4qH6HSAHtpxD5L03AayM/kKZcReUpKozpxxBPGOFF2QHMH0nI7y3q8q6tz+yxZ4D0Hoh0XahpuPOtcyEYh79U55lYwB6o4/V/cEsRWmeHeo8/AZu0i7KGyyULH2gkwVoWcopcrFVdDiCAq3wjq3237kUAFFgsYpNo+oc5fffmmicwvEfvk4lNtBTPlUxziJs1WfKgsif3snqqAWRgrNQSu0L4BIotTLAwUEt4dZLjgECgAhlsh9NifEECkp9sVdbCLjo4l+od4TFoNwyAPhaoQRS8cDwOt5+9ELhOVCWA62Q3sz5HyljzUurMDaYNx6r/lxxRGUQduNOfYdH47nniQaopXs+Kzx5+5pUfwTAEu/WI7+yb7hz5JkqypMLi6OqJiIyAdAQvoY312WrH2pJvB+VFrTydq384+zklwJwmQiQCTrNcSPQGh8twcAaxpIdq4YotiZQZDT62pjfpCCLE7V6UmY9Pf0fCgoWJf2jKSHvAg5ZXuPywAQPhPSO9Yh3fwtZEDv5psb25vMo9pJFJGT8YiTQiM9MnTvkpLWW1x6GbSnv7zl2+Pb4Z8dnpWzVx09y0p+QA2nycCsQYkuHmfN5NJN2sXk5ojmPVp82fmf7ba20ff0sVfEGbcEZ3aryCfVgFvHK1TSp8uia1Jh198AQ9hqxUaxfyVNeNERmSsAjPZj/Vx0ohZ0F5pBS12RtSQ223Xdjdg==';const _IH='d9766be8467b2a58ef2316690527d8c053a92a93a769460b6172e50f527fb90c';let _src;

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
