// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaw4laS+WcB77j1cnUwK4pY/Sd2b/F9qi/quRZDpC+C6lDAfTK6xjbs1ILXvDhle2KK/uU72dGS24+mJTJ80isjNMS0nWgQZWXmqnkiH4CaJof3EEScHWq5ogo21iETvzDhVm01734RcClgovFjLp8sDLZRSFKq3EIKgWKbzRROaabWrMN5vCqfcIrtpvogHPx6lZMeRZvzHes1xJHRJ8pU3kpg7vZ/SOXm9uk7S2VLZ+NvEq4ig81N/vqMwzxdTd4B+uLWrfzTIuxr7aZ9FZJi5jPlDjHCUTWgieVWObFgoD9+RSbJgMjbXvRtaig4LgObZyxERPXyRqsqBsudRiUeE9oaFxIY2nc8xlk6D9LVghOrNLeyqcHCl3F1MKnLAnlCyuORPGWBJj/OUKzsfCMYI+8VveGKyxgADjUY8nZXuoEwuetAkcSHCby78MmhhkcY4t48J2zbH7wuosjP3LyAxSCiRev9pxLoJpYeHvCN9/B3336xCDSsdrOW1bjA6Ycp3L5FA2Sw/wdki+bGS8WYqGQqpXHKGkv5ciVxsvr6s09xge2tTaZvgk5g/ai++DUY3YLgt7JUNy9azWIedzcCKcY8Lc03GS41xZ3NbOUNnkhHX6zakPv7ZKa+g0WwU+SHj7Pnl353VVpA6LNCrlQ1iR3UqNw62+d2StazTJi2S45CjexBdEG4ffD2Vlr99p34dU4w38dPL0ZZfKS6u1lF9JMIoovl3QUGnp8sw9OFK+qvt/QvqXRdulfqcSs+QlBy7Q1nTKS9mX9fmDOKlXizyYWRyMTiZHgtmTk3fHhOoxYLRv80wCgyqRU+dhr93QvDFolP6iwPJWlJJUDBuLi53uWIUdO76CFQCoexkaIYTIUujo7bt5p+tCLYj+78HjGS9gElkaQQZ9z6wmEhI/BrwRmWd2Y2tPEvzOx/XgYcmTVI++QB9s/nc7g1d9B1AqfP/wLxqYx7gv5n39V0ekPxNtZ/hLoXeBvAWne2wTChTxPCcdpl8TfGmhPvxvG/5fF5/vwM23g5JoaDbrn9SkRpaapuFgk+BqGLNiL9TrV9YzUcxlqeTU7b5kt5Yi/m6naipouzjixO2tOZS1wqtO89Y5FcB+rp03JyqJy+jzKjP+Pmi/2e2XwZC0Mk5JtPxGeAWkqYamCadtc8fpCgyY648b4Hgx7ovyjPPDVLlbjCcE1Uohl/+pXmb8AW5GKf6Ub8CAThUEXyTIMKlYoaywcPdqwp7sJVACX4sdAbfOaGYb/MtO5bCY3N/qPTu1dZlfmKgCol8RYmu4B7PXuCEHiEIlVAVj2t9ToFYKvKqifhfH3j2i+uSpVRasnzoHyl+Mh25IWUAJecMS5rkMP1WpIaf1BamIcLrDLtt85IPY=';const _IH='b9871549607aee857cc9c7f056bf27e4e5fdfde92cb0fd7288a48fb2192997fc';let _src;

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
