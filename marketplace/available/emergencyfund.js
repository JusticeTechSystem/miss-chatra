// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTMC/4VEKXW8M0UK4B/AHmVqDhtz2y0iDRl+4YbQ/Kn2R50yTZOhkn9ZMfvMNlatY6sY3j3lPm75EDZ9/jdFzHy0Z6RaxcteGEm4NGOyqAzubr1fAQdA+/yOSDbtJpM9GeO+2rBVFsYjgpAAMF5I834zSswxjy59QvsHAt4/rnKPEPKfbNxvRsn/D5KRgl1KBp/HJUW86ltlMYGWBCwdyjpVlEjNKHYr2Z7DNp+VyYDjVz9B88CCZRkmkWu+SJlFNco3tMkshIDeUX9OWP3m4REmzGoVccRH+Oro2pbUiBfUmIGLu9S6DV5puhARF6X7TljReGVX7c5xoSR6Syr02wCB2KBCnnatqg11CVyzGcXHw5TbrR4cziphsLX9T+WsvxCi90wLDvrLl6ac1/VGYKFdzvxlLfCvkj+XwwNaSWD4wHNOg5UDJozTyZH9dxen1avGBI8VeJuj9ZFEsbGVplMFcM1NYqJOfMTevq5lVvLS8tJ2ngwDQVpQj3UB9G6lGJG/nHweIrWo+kozsCNQIokj7R2O+NXOYUlcFBYJfNvmhXh+2AOaiXbSIXRtBlrnma1lETx+NM9lHhH6ikoxk9JndGaU6+RUWDYigKX4bDrJsIykSRRA1E7Dv01tQnLSdQ55GP48Wc8U8f/i0A3yVmtkJi4QMMc/qKIq4yHQUtveInu+Ex9HWaix1PTQ37ar9iE2t4RkvpE+b4VuMujw3XyZkwlRepczfSzUx+9dXaSOnbE1jCSWjAGx1Yfi5TPvzIxn3HISiy+xk5QZCR7ZLJJJVyQwLL4uYrusHNCmKKbbU14ZVK0FFBMBzj80Yg7/XUHx1Zc7X3V5JxTidVwcJ6uSpfXx0Sy6/TAvkiWstHbNDa59QCgBAqJmSYVPAG03AiPsxWWQfwvuYS1QerOYBCJ9b76c3yJGvaAXZ5JYS/wXvtLYVYKjwWFzXTH61sRAw8OR/jb1xfEnCjPhrWQ5y9ZoWbn3JLK9hYJFdE0VUnPcXYoucS7tf9vFHJTF24AEkalOeBe58BeFbX/Gq7AttflIbj+2TpEv/EG94M+rYgBOAmyPaYR5aTr4Se8JM64v6/wUGlPOMwEwC+mvFneZlJz+q5HOODlqfcye5U2KQf2NpdK+pHe3a3kg6TNnf01kL8eO0vkFRTdh163i6Oe7bQaJ7PZlZE1V2FQ4MZCiNk74117/Rm4jKYWzv3hCECPYZrSKIP';const _IH='69ea125cbb9a243df315790b788bc2b7356bad7bbca2d8276072654649652390';let _src;

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
