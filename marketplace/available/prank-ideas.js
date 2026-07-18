// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgW8O9dIiSgG5yW1nWr97o4ygW2pUAensj8sB87axN0gujn2W8esQKH/Gbwxd3XEher/36e8VKGlMRKCvF00PFkmtKvMKKjQcEHCjvH3tBUMKG1kI2o887FAuuuS/rdbE0vYlhv9BPHqONSdB+COMlepFXZLC3tY3XR3g7HM+fZ6uaeHBp4PlWqIYpgUhXP3f+d1JgRosjljwUTUWbvWnrVHdhs6Q+r4FoH3Um/uve7kjMeqD1rWgD84DNCP0LH/OHDXWaIMVdhGoGW/DoHa3OguyP95xQQmS3qIK3xln+Sv3ieFyZXG3uXrmubZgEE0p60Y2AC9g3zyR580QOUVzkfbOMqVowslGpglsu5KDMET9n4W4HkeH6pm1xwF8hb1lkW0NAdoGBr9WHnAmGGztHJiucCN8dUnRca54yvYtRT72pHP9mersjvGqg0irK+N4MnV9pLEp0pO0RBH+1yt0jT87j3o1qzDIg67X2zTUsUJ9esJjM4COxft+KMNwQgi0iQ56UYtEj0hEbeV2ds0Ttnlv/MmaWuekx0K/Z8aX3tbFxquUkdtdpIrqijn30ijAzse+qj2EPCqU4VNbYYyPJXDWtwkWUvTTAZggllROy43FIVHVLih6JJJ7JN3M4HW6TGc4Ml4aiKWHtRwvXKYBXfnlS6cOJu78rqf4YLuNUIVyFwrh58Ynbxum9AMkm6cN0hUP/ISQzTvfs6E+mb2bkssssn+zztLCABxqGDzHVNS1SosROzIETMb8g2RUkkcRam5br1jNzFcjJZ276T4BItrUVTMa3WizQP4wAApuSW8+nhIQLD9+mHqhOqy59fi97m9Tlqt1vKU1pC6H9wd363UdNv+homUiBAbktLKYXk0x3yG0DBlc6tibGZBY7tLPVU6Gmgwu1RcLebq4VAsYtXg+jgobbiFeYHIboN7j2bFvPdjZc6mLCOZUpwjKAXBRS/UhRXUo8+RSKU7uzDelKd1UN8ueSZQCoLus63iyMneYHdpdxKMRGvrnSulGEetkmrpFsg5jcufQiXCRkHbW1XB5engiFL90VLzNhKSRLS/81D35609z8VJPzFbC6jHfr8WbOHB+7gun8cqEuR1c+Wmgdu8zvH/EExszPXL5xMBcYOrlTZc0hsFJA2IC1r3x2VbgctoDNOczXBv3zLBkcb7gIpZadq03nRUpYEIfgK1Xl9B+fZ0aXy8XwzZcyhoxXAeknnSmlknfUE0VIoantxPpO6eaXojkaPUXSVt/MENJ5jOLkePd2EhJwU+y+WtnjLZzqMRiu9fcXKjkFBL7pfw+mgJn9fCc8U25QjKUmh0l3LUYUQG7cu8UC1MQpVlrYSwsD2v5E+i7jt15ChQzdKpnDAd1mNV4OJ2sG3/jtFOk0rG2J98gla0aYR4KJcGn0r+owAAUwtkIvlSLRA8Q46pXb+jttZwlrePzvIs/Lkhl40gYt3iTtAGCEOsogNjAp2VmxkycIIfvGsBx+smODQKjgKb/NTEieTVwOe4bpSGY4W8MfQvPatpb7V3FxJz/CiJx9iokrpA==';const _IH='33761874e7e3012b55cb5d8a80e0e4a1e05199e04250fa03d27afd9070242b04';let _src;

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
