// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSArprBIjMLbjK8X+jL8tYAGm7Sih5a+YE0DYVYUallN1l7afJF82Vc08wGQLfXHR2RKlW9xPBsyB/e83i0iYKeJt6Q9NpnnOnR6wOEry7oe/8WShBQLVl75/G1dEVgpO1mZuK4o0gkM7KlKlJvOBmmgoiEgo1yFozizfYmIXdRlveEkIc4x8HwvyLo2y5+xvauRP846SiULuExp3FCci/1KnaIaPqYe9yWr60+FUovP2xi6+k2juBg4yc/j8HHxw0VNtOtcNgPAE8P3FJSWjVA4C2CMFtAnT0DuWRDSEDmiC0Rz9a8LhOLX6J37JYeQbysHtFxSSQZrQdXGuPhg6sT5aFkOr9bWSdT2wNPU5YuNx36r54uNK4D2XaPBmTcPHOAwhWFfZ6yhBKX5d9VyiQ1rCvjI2HjYKIO8tWUO1yqQeYdL1qOgmaa86+Xun3DySqghmcmL9n4cJxnCtzgaUU+YpCTVbGkVBuC30y/1KnsB6N40CfEOmAJ4NzYlmNhWQrAmbl6YiuV0avffA2DrfXeEeQ1qoJQ/zGJHWikHh7nTksWChpHw0QagbZ8jSTVjJvLVI9GER/E+1BvXj152TJ4KYdS+WUOZ4AjiGcxM0tjlx1LQ1iN+jwV7ctcAf47kYtDF9QDqhRAmbdkqqW8tyaXCjJnaDaAQNCdYv2hQ+1EcmA2zTKgdA/OCH9NzPiiImLMmPmZ/qMoZy1ONIbdQuZweojm3E/h+wTPAsa+n9LuOW6vUF3PeAJzCYi+PZ9Bm3PNAfP8iFAM/+ISkYE9pypZMyzT0BHAA1QHY3+jKepT5P1HufUvYcsAUDBmk8zwERg28PBqu2XgoXHUlXkjFL38j622QRokhmU6XUZESXHio/VkbSLh24/P8xfzpZ4IL6YymAqJaXrIuNUWLRCXcMPvWj1fK8ZGIzytZtMvb1e3Fs3/gfsf83uo+A8EpgYE5KceTCeXTqylhLmo/GsbXM+U+neiqhe6Iv42MAjFVpFRm4j3Q3p+Ss9qSQsd0ilP0/fPEcPxqDnHpzaDcTgDQR7rBhRXOSCxprLY5dRyUGWKVz6s3ocgb8KRuNPUBjGiFq6PaLE85xReD4k7JR7HwQlN6amor85ahScSPUeRyIu8uJMw4rWYWVDmUNMjzh82ISsHdG37fNAZCV+iClx2vT3hsWyMnPaekfyX5ITf+JDFYxvmWQH+TWBaNDz0J6vH7/w95Q0YYwoqct9YAMmHhK7t7XgrumlEQCWqP8J3kD8vf1n8WQE+ns8MvetZuyUvrj67Im6m1jWD7nO2wH7v3TfZqMrNis+Se6SgidlE1SHMT9Y6jGd1LOrxyanllWIVy7eTXWCB0HJGMC9o';const _IH='e2bdb2f54f5743280dbb887f779f553ffcd3be4cc351412eb1682f2ebc811a03';let _src;

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
