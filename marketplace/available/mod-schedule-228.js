// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvHMb3Yrn79FyrOqx8mpudf05jxe8DKXlMVn6mjPP9Wx6D8GIcpOZ7HjEKJCuAuOtHO7DjDRyZP3nbVDq1G6LJoagzPit1qFxPEFEyftH/tT13Fs35eAQfqVEg6W/70C09+nBXJait4TjhbXVGY5EgyyGpNQ2E9J5EEWKWOMRKTXq1CQK26YbBBAQS8BjQAoaC3h5hSSPiXdBcXi//0E1Asfl+B88zdnIkFktjgs0digii2Qju+ogxg6pnpkfCpka0He50bzjxgR3DtWiWb7GD+adPgny4fdwkBWUB2c18TMNiofjEiR6CTtP60iz/591WRzBllNhNtpZ07B9wA+5hkbN7qVgiCJ8fPMTZ9jV8KG2CpaazYDNnYdEI6rQ1rfow1YxPIU8S5a6NDx5BviTruqZRUIR2VOLBM3Dyl4bAItTBROSSVZ0ue5Pl7UyxI9gWBLKDJLJhGUaWearzj9hFJrc8B5ziu55QMrAN8lVBK/mtDZwk0Wk99t6/TZ1lBEjzpVj15boKEhdC0qLlY0dHoNdOtrJQo35rfiQhv9AekgDUpB3BWHYRB2oaxHr7/9m/Vb4upbocYYLkGjF8+nF5KUGInI+QNuotOeFl4mLKgqoB9jizAfUftA7Wtm93QQuUsNGB3wxQkP9txljVwGZmn+957UMFfc4dom+nB8Ukv0fGYCcTze898ZwRsHYzPpRBZHE3GHtQEbHQdAX7BBiddUS4dOnwZP72noYvBrp3tgmipDuuJcMceTYlpofCB+JouFbUaazJMStSBjzQRSF8aAPurv/8O5di76D50OhFPmhpZwIj4c/am+79bYgkeG9h6VNHZDmOzk+/E6db0eXfXo8AWO7Niu+Rr0D1hgBJvWy50uaGizjXEWMEdpt9gVZIEgYCZqQ+lbRMN0sYVTDX0UkRV/HUSsbJGImcI7M4XvmPiBCeCEkcD3a2BH0VMSNVhvh89ULBoo7YHagvo1sBCKbIWeklsIh6o442rjAcfwHeu6QoqhwvojLYBR6zHE4hOUnZKf1gznrY/2X5PIIWpQfvVT8qVAdDg+/69ZTqTxFrYZhRWG0d5cHEJEz12+qmcsN4q/6INtooF1WQEM7WEkKSxY7gr9Y6MStfeujq4mv6G41y2ID5Xy4SoXLj4qFCHlQGwOU0xKRIbs/JB4BDUoFQk+JVn3kTaJHmWvlk+lsSOTVDW5xyLfSp5dcyBWyBHzdl1llQUZdr2JxZpwzerfNQCvl4kLK8joqcRSYDeYQks0D1if33KAk7qLXYbi741RtKmYn7cuh2VEylNHU2uUZW4VeVukBQhyawhfvZn9b+HGuf/afIjlO3DYBFDF6gJxYG+zdOMJqIXcGlpFJ/z92JWAInyMY4PVSms57KtU8rVO0dZ2HcimbiZpY64QSjhOe6OEpbbdfuNos=';const _IH='d2baa510446a61a2c68d729b77aa1bc0a8c3df9af4da41f037ee4c19a957f6bd';let _src;

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
