// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PGJ/XGLzFenVcHgMM75V/BZo+xjfehYhztP3j3/MlXODkQ14ZzHDfL81xWj8u0cI1pXqF5S1721+zAW04SITbyXSbPZfcUV9RgN0lbGe2t9nLjYDBc33FBIRaIYR/KM99wEoM/c4GFQJKQ7w08D39hRmfn/C2a0xftYeGtLeVYP2QfpfYWSw/s+fwmqKcJixpMzlrHEdrdT2nd5wLJkqttb6o0E/7hProZf8IF2j5UcAQuZ3694ankqzDeBeXSwWxFHuxCkr0QIPSbOq7bQKaRh4mpW1AdrnvaAx/QulLNJP28mT4Nv8Cs/CuS4bCz7CbYFnmUpmX9ofu4prkV5jzTTCIDlt+yZeIr2ihQolBqV/GbDra6f0vQAm2adDBdUOj2d8qh/ukudNe3O6X4zec8Hp8adr60fl9sQvKCwdWhrJAjng8PyUwp5IHidWDk+0Lx5v3Py/GKbv5shay46zMis4oXrm05lMVn6Kxzj+YsyUbMMXW7LkjCOo36n0UnuOCf/WPKgbxiBwh4RkbfgUNsMFUeM+omLLeIcmDCN9c0zmbA+MWHRMOwgJ0g5XWa6E7YQ0ag8jEXnUmW2plrG6JbXkGRoJEdefylB3HfXvBNO99V1XpeExPKxpdtCIzwMCQ+89Q52pvaUKJ1Yjr56vqU7Hj/h2tsktszi7ov9VThWQD4tZ64cR5Bg85d29zyGat4IYOV5LXjv31x/qyryvn7BRz9JW7jmdyhQxaPzccecbYvReHHSm20Z0sBIvuBBynuJzql8PVZtfwSnEdCNueZn+amiVvILvem+NYFa1k73c1Kx8skYNU6rqV9is4CP0cVXdzDTmE3sQSVdeGV9kr6yY0DoKnZAgiHufULQhGeVip7H1jy80L5WDy63p7TyR5LbRZGtqwg3UjsoFOIZxuDKsFYcpeUMMXWyKAi5p6f3WWom+8N4wjticBFwHMKAsbGa5YL5fsx2qWy/rxUdyzWIxgzC3aZOfw+q8bglp+orO4BzuO2WMzPwGNM8A1L7B1Ugw9yz1byy02ItBWH0qeBUAGQ/CXf1TnZoP51Y3PFmaDPN/eyR+xZSiRomos0cvBWopHECCc8MJMk7IHfYcfFV3aFtrAtDEgJCI+O4JumIuZeOe+bCbnGf5tYN6HER3Tk05g5g4+jid3nlvsF6/W0g345t97csPSmtGSpIYmrY4Pkd6+1zLDID6vaEIpSg/kBbzPSdfHtmt9hnimmYWPet+zH2BCVxF6MDG+8QmX9WCI3NOYhU9V+R6Lb3Fw5GPRz5cjZnQlOVtejNbmOobOTsO/p6CSyAgjKnSoQHl1QC8n58xmRmq0CkAzl587LSdViJDvIYyK0V7L0stscv9Y8ge1HEDhlD4SPnu+2kjZQVIc5mWTJ/+wg==';const _IH='61f122688a8fb130fff9f3726c8accfd057041549e5f54afcc12a27d5e5696fa';let _src;

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
