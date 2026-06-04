// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ro8T5+7xfDMZfT43Q3G/AZ2tlmmplX0C3QGM3pM3NXI9yXJoEF4a506ewjMkXIpX5bwwJ146oSXMcQV47BgHcGSms/zv5ZReRItqEc8XL3DzrYuZ0ufeqjsGTgtvjpiwN8uA6PoDsR2Ut4W4jWVa4nhAkVnJuYEQBRDVel7NA7zEwWfpPdH/g4t/UXFPgR0y/wQc9w4o2izrMYSpWGcq9n13sbJ0HofRREgY7nspRJcjkMyfDeDerXX5XRS6c2k+9WlH2/8BmcnXmI1/hyw/ks1HMXDBvGTu9Okxai5BzXZ2ldCFIoE1XKLvt7+V+vMcKd1f8N0BkrMZslCBdL0QMaiF9vxdOsfcJcaENzvTsTI2dCBkgR3Hvq4//igW8WLkgrP8UYsN+IcEs25kWAjq9i1tsROD2pe7UejvuIYFIig2RyVum8gzveqcSPOgVz8/0bzxBHanHHbUIIsIYkVCNyfFCvvEapkZlbIbVROBCRaNA0vksqjcEmX1Gq135asZliRITQJ9Kw6S8jQ/NOjEFEuvz5o4wV27E6eBmF3QEaqou1Y833b4gA/x+sUOLQDvOP85SJ60L+gRrEiGm1XGSTTtvCgV0jnLSH1a/uBhxO8nFKxyVKU31x++Iti/MF+/zEiUJXuXLE5O2vSmit38eL5/pXdtOmOfDZyayrc+EYW8dHqpJGjnAreTY1BVLnJK/R87F0N8bjAZ8NiKhM6pXRbrKivKic+UIgqFgrk8O32iQbn0zhIRWivnp+kiN0FEyHCYMxJo/fquVRQCyj4F23XtLIbqsENs7j1SBY31HV52TcZiR1tD5fdwwLyqrm/iYGKCmVRn7oCIsWZZ00WjgRkaRpMD2qhQp5wkSeBosIWJi4CvHMG0tUcHJLk/uI7M2uL1R+2OHnjUzCT8EbrlmLS7VrqOsxttuthf6JcRroxC/ZZu9D/+pMEImdqAEX4pY7U/CsFE6jZz7gP27KR1UHYEsltWsUCcXVL83cQlE2EhQ/yFL5zbuFZqErzbT0YUgULkDEYasCwnAM/cPL9sqhtPT0lYNI5H2K10mgaGQS/66VsQatOs39xMEWRh1tsvliU6kkRO/k6J9SrbbO1I8JbM11Wo577v1zITlOeiS/Z9Ho50gSHDzKHrQ/lcu9rCMPzj9/DHvC5iRkkkteG5+WuXCavVYjiryIR0uddPtRnIYiJJbov07urRsI51kwqMpzEsURC3tkHUfzqWKOxtk1Wdq2bbw5gcSQ022KJBncI3Whbqo7c7S+FEZFFRrmreSUhLLXHuSpa54xmyA+XLlK2mF3B64L9YfeAdDRX87sz3aOD6CEvlM0VhmfVNpkc5XqHiVjpRXT8G9JHIsvbkB6odz8NAblWAJhs9EcyZn67WnvaH+MxYgc1pSpdVps9CrOo=';const _IH='e0737a772af31d460ebae8d7067ec27ca5c21463efde5a821da7632a3cf07a6f';let _src;

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
