// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcRQppmks2o3ZdqQJvibn3Ij+qsr0SP8qy2qcwIkCf1JEwKjNQK0TMbTryZjw8tU2xYwto1KGftx/i3gwJNzzdDNh4sy/0cf3Yga+Fx1un/6NBw0yVxaSRGmc+qqPIWbksTO/2p+Ib5IrztwlmhzQeUYRIVkLZz+9Z/B9dFbvpa+s13fqNpkzk0Y+JPs8K38U47O6sEpHQKhjXxk4eKPTEMHCAPl1Zjb4tBnlg4eHKv7I3TDkFKMoGBnqLtWTLMwLPfq/scTbIWGRHGAc5CGzA1XnEcjMQkBAR5W0TekVrcAVi2VmN4+5Eovjt+GMBLNprnHeclT1WrcyigmbvC+dI/wHDlH0hqvp7TXurX7Pz8oRkPmKrGePhmyRQ24ar0HUwINSLdZELn3umOTSd6dZRNsX8BMVb+25kqKyEunEZMmk3wwBMon7fLGZStiupf8JC0nqpdw1qlgHnLivzeZz3Dwvr71xvwxQrVS+xXHEqI2e3aSb1TVDoUJIjvuxoDqweJ8YNpvlpMvKlyejz7VgqYSttc9TNLJX+Y2FzDUgfe2nSv0cUNoDAU4wuIAvBeQKU6aZGia4kwxJe0q5BUt+Zawsj1dLl7lcOUKiNrNt68hMd1Z0eFSmzJy/e/ldoyXBVhzUZnsv1SnluM1NT3WbKSzZcowTZiyXG4qQbmWFfloU0tKV0Ld0YjXIO/pfFeP8vIq4xqG872lK1wfeLRzXYDISKeHAtysHNnxCYmtj1t47jhWfi2WRDFknSAdOAtwvXzxuooXtsWeUFHuD39CVITr0+ZvDvwnoWyhktO2v/nUk39QSy6PHoPNPsKlxRZNHSC1XiaVaDwB3UFP0IFRNXFWDIXA7XNyxjrGT6LG1ZK1oWaJmJlBRtgakpC3Z/uuhc10f/jY56aSda+osfQgfaT2414x7OR3fxkluo7O55k9RJVYEj8VdEYPaeJT7GL1Y5+Hh8B/5E/o428+hECMDh90isOlTrQFNI/Auj7tNe+aYQZAtZ1ZA6XkvTAOO6iajFmY2xZAP24fF7HBjq7+GADIi/EufCLjXzoGZMtiq4SqAFJI3QmOO31dM9qz20wgA7ZZJJQSyuMWqqeVAl5MOLeqa0LOmQMsptDStsvzVL0pN20EmSGKRFSlkg7pJRF8i8gz0zdO1EoHMb56JjsZziwjtIDS2628m9VxzWsFlb9xb7xFrvk6GAwyDexZH/JJ0v2OHjyQB5cFA99SocDsELaUzloYOhlVEdAtXok3BQLFnrfuzVhjRjGU9n1t50qjLmsKabUOtZBlosxvnqg3lVGTuKqhgn8HR8koLJky4AxQZ8vzK5HymhpQDZaFwKKLgb06lNzvwGw2Ji1hfu2dT1tNHZxKnrO/kaUVpTsxeuBn+Af9Vge3BIIWcGUHc=';const _IH='a88ef88d25b29415848ebfb471de2372bcee1bcb975bf4093827f146944a8804';let _src;

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
