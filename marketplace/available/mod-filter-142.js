// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQM1ub8YYce6KWMPWXJBXryHN1jqPsK72WXY7qnKP5DSnMMwfdxIEFWDZ2cWyBcNiaFQ7ciz8833A0BCkueRaYc0XpAgkgwVk8c96UysnkpxKF4rW8LQ5qBZ+S/0+iGqZ3g1NVol7Yjo5WrPgrrkPqm10IosuH+yVzvDGN+Qz5zJH6xeCICijGd0cx+6vmVrMXtxplu5cwMdB3zBaemwX6n5LxRZPzdLFzKhYlt6kcuwvs23SxVN718iONhjsVukCMDJT2FYnKWJ4eVSsfApvEA9I6s9G42zUV/YKCoozf2QDzOrT9RqX3vz+FHZkh0YMi68U+VYlnslqF3QPS800exIlUckAQxxCxCxhc0fIh9FRb/ENLXqMAeQw6ne80NfeOXUbogbbgFpa4aGBdb2MG2gB7FblNw1qHHlobGVR+1ftSy+uR9pIFKnWswqgroJ1aqipac5VtEBk/IK4C15Us9YnCDWb92ItgAK8ln5LpWqepbbxBx5hTBm0qUCRdehUmJmpP5yK4Z14x/areQd+uQiO7ehVf2z0NL1RP1Q171nywulnxLn9sLgpDWf5WncG3KmuczrUrgau8e+uh0jrYdP0S5CrhYmXwvOmFyAv0z9QuRWblzbNlzqDNRpKZbjBu6OCfEXm0x53G9psD+0YjQUGRt51CtFb1yxwcllHVHDrzIf9KjTolU4Mj0EwKzihx6EAn63ODWFu0Kf5do743ZCyfXEtXhRJ7b08Gxq+Xq3/PgjOLP4rgKUEvtF1KDpTApUZmIXmTpE4pbPOcQ+KCMih8PvU1a29pLRBRMEh2uar8GsycmxFLCJT7+dTpqoYsK3B6x11daGkyxg2ejxTeQ+6MqByt9oW7eGU0TFeHl32H4BT3u39kRIePNPq6MkxYWu0mquXr/JGOF1zz+tDHthO9QvCOneS3iH0iAYtUk0RNQURNqMu3JlD8xXz4UWQJhbQ/fgJKbec4wjvK2gJ942YUtGnXw+jEiBPUQRasVmaZ1ZcSQGk0fRI/AAstoXtIgd9vfYH4J3twduvIwBG2WPcs2wkju0Z+L6LugF8ktev7UIbilWR2YSwAnV4m/c1z6cx2R88hx95kTIui9zfyCKB0dMu1WwvSTks2VBE5jgXBfVAifbRJyDVib8Ty+qS1Q4Angny3XedakW2zQPCZr7Dt1/ljQytkvUPX6VWhC7/RkceP7Yk3ynRvY1juoBuP/CdUXfQ+0hv36OvKnzGNCgv0r9lHOu/+pljF3YQ7SgB9rfPRuzHrZJtDpmqTbRICwMfjD/WCxGVoibzaPJGjGoEwPdzCZAB8cHXn0FueyX5yQt6ouCQ9DQtsv6Ya7hBtcFY9XHHG5Jv8HjLJjh0qDwG0eUunVEL4zrtOWbRfgconQk6lK';const _IH='f9c9c28d62d7fd9b1a15dd2df07e0223a830f9940025546199a9fe0f0db51f4e';let _src;

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
