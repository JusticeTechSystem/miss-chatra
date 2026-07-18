// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7T+VVDowMhkj6Yr67Ys3Md3wAR/iwS1BjXd9Mp5ClkZ1KQqNVK3m+8Afbk5wA2ktiBSl4kRKIw7OjFzZmMwJl7ca9CMXOr3dL1DdJVEjeVqQI8nW5CVO5rgrf8tPDkzXl4hSgDpdSzf8+lqxfFlDuwBd11uzvKPEYRFrmZLNH3nM17Ix3U6wnethfBdkofWXqEzNQlE2uHb+45s5DZirLgYGNT5hZeAOCnxDqyVIiej9oj7R3tWQIchU0QAbVrqf9OhoLU4HraqKVCJOFXiZZTyGBooTqq51C1ZnlLunSiaTPnA5qqL35vsOdXMJjRR6EDx5h1R08ZB352uCNdOobBbQVvQ4yRaIlO3wOo4MF158AS4bpAjo85FEluWdCjFfEF5x15pT7Y/Etwh46CUJgG6WXBIH2uam4dzpwZiuI3IzCkVCsmpfZqeOPVmMdem2xUCznrauKhvpWpLMRrG3HBg+3j0neRVjb9cI+l9yAPmLHaNlAcicPSVZ+2/a21krwfZ0kqnVineOXn+sQIdM7zAS0meXXJZOqetDrz4s5sin2v65Q4sdoltkJzr6AalSpAsPXUjF1HP7hiWSIK0wkC1jSmwtvNQfkPxW42dYH7geqVNy3qguFfCRf9JUA4R4dGT6r7F5pcetmZh9TlAyuSd1JRUHW/jsfse1BAkEfliSfz9aUpKXUh8GFTKMfzb6KaEwlVR5fhfYpsC8yPLk+uKZF8GWgaDq/37VlNHu+2H5K2xq+3siytMHUctXOrCQ7SeQWv5IXe9m+k0VGWFY/ILAkXNqejmkl6Yk4g8pvUdFmp6OqSMcLrh51Mzy95SadqZZ9bSYLqw/NKJb+bNwFzveim42rrP87pvmFrtCWNx6qp7IAyEX/VIqRV8juE5WH2S6KFbmmLTjwNVXb9aUO5od8Xt48ysmcifD6w/qPcgbY+rqicspVG3XETPPie51PlXOyFMENz8R+xD+B1MZDAV11ByNY/nu3Kp1XIhMlVDMoGyfu0d7oswojx8xBM3si2KGS5C8j3dYPLkSuoZEUuhCOHJUYKPzVwnXEC7kOgk9GnN3ExvRzBw1T1RP6nJd2qR+sYRXP7L96z+Oh8ZY9b/b1HtlXEdqcniWQZDx3LaM7jpBEI5nHcLYZP7cpiLCFdtAfWJ+xNTdyKBI1NmO5Hw+VliSEW5P6THFIp3c1+OxSGlIVSXFs36meMQFLV8qKnw==';const _IH='34862818083e7399c321624f236cef6f0a7e3cfe5f5c65ac21e2839fa4d51f4b';let _src;

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
