// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwzaLaBrkeo2ueHymFohU/qveMsSZcwnQiXHK5J5JTu+4hyY6Gdkd2kiUMrGOOGftNafuilyLT+sSVIs23/ar/sEoL++eyYcJrx6ozrCwy34W9cQIXN970XIAWCuxEhfYrRoEoq06aOkOYQumX6A/mcXFJNGRFxTujGW2c6wcpyMSKOaiggt452F2WFrHR58acOKq1I9eVkU0RpN5NaekFpW8RO44O0sUVbKW+mkRMiJmEUbJCnF5LKBsyXtohUOOU1AHhY++6zQyfgL6eZO9Ym55ITLUG/IAz/2xZ/guH3xPWBRl81/xCKKdC3lqTdFbAz5hkraJgBm/bXaXC1hgYPRcq+pkpt6i1gVKDnj7XuLhUTG2AQ5MMVVH2tCgtz6QrPK43Pjc+nyA88zj1T+yrm6+KP8Bx05g4ClNzlvt6PZPMM1MJ+hyMcbhIGHGGb2iathRxWkfBWomkzP56GT83QNLejxpHwz7dmHKVDiK4HH0WffQzh9ufxku1zizdyAPdLysmtIbL1f/SiJU0jVwLJZ6PTP/VDk6BxpwMCi1k62+dXoeNYZ3BqI5E741sUN5XOujTNKLqLeV4iA+8DONwD3P5kfQ71x+Z1r006T5RvR/c2RAUw+SIMPt1uSyO/GdywppYiPWqqnus+Nslq50h4shkxubzXQJMeqdfQ5QQ3JB/dayg4VFIbGDUqiqoDUW7ZRPW9DYK68aeBMsydCPofjwS7pUtWO7ZUQ3rstbzjMRV';const _IH='07ef3acdb437dc49d808c3243280b252f9fc811ff8cb930239093dbbedbde51c';let _src;

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
