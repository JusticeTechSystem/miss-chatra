// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWNjvLbTaV1H9CyOb8pQHsGsYaFlbAxOmx5WQa67W2S9H9pByU7A2LVm2UHPttWReiEr4rEzDtVFgNHrnai6wpO1QGXhlO1RJByCHIkZSmkZUlLLREKOU4ol8JLU0FDuV20VwAO/XFe9vu6dRIU2Oe2uB1l36IaREysc1vMGSgLKyQPR+Pl0wHqxnU3KPiLKBof3ZxJv2ODhqKqnEyVxJGEUxhNcNjyCStQMp2KgRfc/iEKppqI+N9/T9N40xJKIkhlVuzRLZ+EGAqFl7T03/BPq/ENcJeQrERle5syXc4cXUafzfUzgOLKyd1YU4UL0vk/XM33KquB6i/uljEzOlaZ5P/GLye5O21gh7WhMPz+L0Av/qY2ZoquyuAk9I4l0swnkcfehnE798VEHlT2aXpwGPBX6dCfbNmWwPOMV1V2aIhjJLvEYS/QP+wwj3QMAWPNw+07x0sk1jRVLQke3lz3PQWCRZ7yWv2Qzj21VUx3CfRKaBYU2u5vT3/j/yD7oJ98Ic6CLwxcF5FRjTRwPJCRbekE5ifPELNVprp+5qpdOnBBgiSkubRGFvVnyZVGrx7eOq/UTlsUElv2v2qgAgplEjNeZA/Ohk+QKHlx8TsC+UUGyHp87C2CJMa/i0GirHZ/NvwWOXQF6nTfVYlygo50FuE71H2DtLUUy5Y0iwJtoKWVDcImtAnWyIwtmcp49to3DhvOglR3IACrZuWWaBkBqPIiKir3EX/ksV/NU92UeiR8cM7VDJriQoHIz8i3IjdrJFm+AmYvz170C+g1OB1EwLAZR5gDVjoaAq/EGS0W6WGCkKDlNXdwZDQbjGM2az/0H0SmapzE8uvKWISq4wfW52H4gSjjUTo/Knq1PuQAkVuscU8o6e/U2cn1PVPhiQNLNIyOfh9b8gxJHkFCk4vzzp38farpwDw5xSpMoViGOCyc/hIM/940LoXcN9s3G/KQfrt6PCReFYZK0YNpDx1yHlbrFtC/YxFAscW1ojNDoFT4cuaI2L+OIvjar159EvdzfAnRAKhHZO/4Wl06RcaTcSAHOZSKIgew++1XKEjkNe20OvSsX2CRgXu5dO6qHq68TegOJ0tQMtXv+fToYmdJrD+Isj64X3q42x1cOniNiwqv2ZYEobsLbnHcryo8KDpji2OdWneYh+aAPN6BXzJNR1jDOyaQ+SEC+06fVh9i86+4Jcw';const _IH='a93d0370764a11a7301b8f8558c79255202196d3a3847e4a6a979dbeb5992381';let _src;

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
