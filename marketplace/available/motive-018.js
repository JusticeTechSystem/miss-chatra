// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrRi89UK6mtXVCNjIJoWXQd9EOXKG6vY6cGh94uM83v4nIzWB5setqZC6037JZe8lxg4WnYYqOGPw/m/7NPOpNhLZ2R9i0SOoQPQkFIlzqm2IJEtQp228I3hKLFJH0jBiA+aJvgpfOPaGM/ZL5t9evPxet1uVF9zQXZm7BIkNdPcfZpOepZaktXoww7/e6h2b8UCYfwvS89/fp1sFVkuu69RzJff/RFCly3+3aJqXkHKXpNVGxP/rdPCd/2/kyVnPo4DlFoz+e85kLt5cF9nmGpsKvHwo5wBBofmYOPuJeb61zkLPa23Jj41ZTjHb2cF/pe6j39GSye4OTY53ezazqWMCsKRE0CdpmoXDsqqugupP5M+Aw77v53a4tItpAz4llDG9UE2emtRwAqpIxVP5+NCrLvkbz1iC4FcHCbJfCbk/06Nhy86MVx/NMcnJpc4tX/KA1ISeiGtzGa9zXnnOpSnaC+bV3wCjnEKPswUvlSc4lRveuEaaH4Ld5PNPN8H8BZOvuysRwRk6tfmVuaaFNVkWXfb/MeWZCJ37bXet6pzBQbD34bdlpPSZlKPDKVEzAPKGJefOLU5GH0kg0VUWodtTe/LpJu32P+LQV6vzgJeHMlPMadDxD8g7iWrAr6vjEE9890M3eP2C1Q53I+U6RajQUMW+ADlxXsXr13RiedcUaqYUN+17LL58lyiJBVI2GBuTMl4kCxsSfIrupDbeA8YjT3goC8LMDsZtica/zDpouoQmoZo7NV6kNAizVNHMXPGmrPHe2p5z03+nBoO4loNsh3gVx6SQhqJOq9J5zb1hc5L3uPxhK9m+dCVmP55QB5vbE4coZbA4wIROzy+e9qig/ZfiEjhLCRIOOyMBxaJP4gi3ifadIUmzc1bRFQjh9GWsyPvt3W6x4hAhUenCw88GIKhDhJwBG+K8Abh+XXBI8uA1gFAvXmu8wQon7I4S3NbicZ3EVNZ/VXdCrJZsMYUEp662bkyZW7gOdyZ82nqqmq/vBvyg3eoOrgE0i0wgUbb7lMlEGl1CUWZAIfKUTIws=';const _IH='b6eda751bcbdbd0a1ea74a8c797188821951160e4869ee845263570758ad84b2';let _src;

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
