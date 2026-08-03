// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTg6e0HCpgFBNye1FvFMBJyP4iAXyh6xAqQ3gNRL7D+GghFzy+xylRJs2bFqUrBy6EESV6jDu//AGMKOTbfYY9Sgu6IfRkJvwrWD3MlTjxMw05+OttxcgfgRbX3EGKA2KfOD2dEgKOAilkYyyMLZxCqdeYrvgvnVcIWH/IiO4paYY1IsxwAYfp1Chkkt8X4mwpZGMd/Y49Gu1I5v4hzBjTdtTzxd/+8xlnYcvvmBe7TBhJ/egta+Um1bhdafV8bIQh2I11JWeheAkTNp/v3xKVMYDLUSDqGaDVQJa/PPXYab1nDf8eLIWDCvEX3e/7U+0/fMKMLIwaRhjy8W71NiRVv0/Rpa8yL186mLUM96wT+q1U/y/hnMq7pwl2t47Ej2bUIyJrdvAP5SEHUtgoeJDKLpY0+G8osAHO5YXXClGpWjHOIXJsYw4kbDvxu/2SYrNSQwyWGacEEjZAq2Y+pkY/q7dfqdnf1XINSxaeHJWBCnJLQ8KL06lUm7R1XdfOMaoyL+73xO44UIM8m4UFsdQ8XfWvDrHGlPbDBWbFDvjKP3M1pBpaOTGYa6Q20O3b5QDL8GH2kwSBtIBdUMZ654OmGgzw3iJcDsp+39anxH0c0PS13QkKRTk0h1P3kVYZbMsPgXQgTNy63zUhZSHvl4kcNdZih/G7lXgExeOIbalZ1uHJBmPSvpdVetkP2/dlhUSs6qsJ3hYBIkOXVJ3hQdGEzwKdG3pvxHkjggS5ySxnjvfNmAWdxL1pKkH8invDQn3lFHQz2x1xsd5flwsxYJWznja15eXXaw5qNxb3f/ktUjB4J8rxCLLJABVUAxVx+pQUAgjDH5RkAiUudzI/Kfk9GHTQ22ccunRdRy3OqEQnM5wfDJf80kZQjFdWwPovqBVA+vYISTMLa2l2wWaY+6HPYK55zBMjRYPQ8062GbdFaGO0VQ+O9BrG6t+KyIVbQKJ0qaxyCUDBOGYT8wGQb6sj/1RfkbptPI7eVG9Um4U0ua+gNLA2Av7vCxrYHD/H4NLp7NKmxjun9oDFj6eI9F4J9dPQP0v3XPgi3MdXUnAbhpCQaIlVSvBWEZ2TJ/YcIMI6HwO+aKGmZvZC+KigaZfS8oKYODWRqGzWSjFpcU4DIx3irs139YuRJ/4ZrYvHBFVaEfpbgNbYEdqKvsGSjQNpx3R8SFojIuqZbzhsSA2zlL+YLFf0R+fDcL3wExDN5bZ9LuivMkuyx+a53lmFryp0jh61sNhZAdPac7E114jl6DAtaCTUu5yiyhtPGR5ZhE0lzo/+9HU0QMfU5BBPt0LeqQ6eMLLWDrTLGwyVertyB7vTg8DxvgXL1PMlJjsHxkaaPY9HlVJ1bXOWOuo2liZyB5QU23h2rbjzgd7tMgIRnLrml3zd6';const _IH='dad1332874c57b1cb174233670e667c3987799b83ceb773148e08c255b5983e3';let _src;

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
