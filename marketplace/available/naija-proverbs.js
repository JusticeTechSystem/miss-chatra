// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H6MmAv2J3hJcUiBED+NC1ysl8uIeNx4apXP8WPrfq9vV+5s5vCfvrjzda0KFvcif/R5MVR9WT3oSj+0ABaDWJEbZ6i0NHwYgKzSMJnGGcUzPtxAN8/UrkJK1muIPHb2faEbZfF0d+zbjY7B8zVlIxxb5irDEv526WddJApZ+2XkjOlrkEUdg2gMptzbK/i8Z3JnC3S5OxfAZ96FFMUcZDw++BIPmzNWAEXt/mY+hb0zJ+svWyqnrCZVCcXlv5EgL8UwxZet2t9dhUGV8oorGp9pDVsBcPvRqkVP4kZr4/Z2LiDsWfHQFN7yHLVqVXwPd5MyusF55oP/xpFgJdEBs5deHlRk4dOvfeuqSa3TAvHUzXnJGEohPNVR2U6RtLSjQaF5sWjkmOf97vPNOZiONZLSqnEAa9Z/bEEAZFbEca32ckUP91pIMLTOjYZCQP76MjMM/QQWaVrckDpMR4doxivaiIaBOt2/zYwphyg5zkryTMUz9sVnTKD7KpCbG/P0JVh04P4GrfLHXjmTJxqWQ2hJwzkSotvO57TA+g5EC2nQ4C6IIwXHXjou4w0pIydA5WfYhM+/R/1/bbrGUaM/yUGlWCKizDTzH/dppgA2EqIoQXkViuSOIALu+/IW1690DzhjRor2ynAVEf0nW1F0w2LrPxbvZonGFOT/azKTZeWO48g6hhdxPjaGO4FQTz60IEtOj9OUyyh/h1aDWHMCDY7vQs89c7b/8uxWxL+14ga7QQ6q6vwJybd00npqQPYb7M4oJzBgcbEBbGib2E9j6RrA6LzrsOkjbj3sCmDnlk0XWVFlxoiGqYPwVL6GMfLApKXSZ2oOkiR9N+M7kRxXcM8oCKElZ5U7Y+Y0NB4slffBQ2NqQ6Wwk7lc2JUoSSPA/C0EojeV4bJJEsrlRacibJskHsgDuAC+wy6xWV+uR8uDhLYdh6d4OFyyKN9a3I3swycSdT0KKlt2vaPKEU70uYsxpoDsYGx/Srj4TMT5cPLhIJWNMSgT77GINkLjKyAaMMzBSjjWK+IZPCkNAVWpmA+GG76dgrsTN+sD7bZ+CJL2AQCEwXmloYFGJaa1g4FXd4PTwKW7w8CehwmHeQ6W9GXDq6eFd0ZG7WnZKartPyQFuKy8RKCyAl4Jv8PIlrAf+ZEbM9LBgnlrxZlnQJkov/UzxTqcC8+/sRKWM0a6hSzCYG93X5eQR86wk7avI+K+/MvCiqFyCNqpDOR/d8VA12VPG8cqiSH6K6RtgX8YOUQEMgz8zOwI1SXuRIq1KUN8JQH/qbmGp5yUu2qRwCscSi7FHkA0StGWNmUz4RcCIRPIW5+Afcm932U0sc8cD0efE6Zlu109SU+W08nBNGyoXjZFCgJQoUVmXbWwiaLxXfpVNYUhhciKG4z1tU6+Iigqpndh3/29JnSxA2y9M1kjIhd6hnCpt92OoslHYEWVb0cMJKQS83WC/oLHWrrcVTDMP+iFQyHWsRmcg3RLKlL2m8lHnDuDw2x9q2uCiWGHUAldXaBGa06IWCUNv3PyZWdgZnV8rDCK73eqoGFD2zSth9lGONFjqEbtToDF7CYf4ZWFbQKMI04eax1y/GLiV3R4386b6dn8IEi0DViUGZLD3cRF/s1q8w4/tbqjUEvZZay8+eSNRep0GzfCdWxZREkFcrtm2DKeqlN2IgbLBengopGkXuQR1fwxVOu81m4IVDVJ/3t9IlVLKwNqG';const _IH='77e0eb87c6d8cb553857a0dd94b580f44321b829918cf5ac4ac3dbbc22f3752b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
