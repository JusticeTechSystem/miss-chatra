// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zdOvtsjYCGVN9J6I0ZBoKA8mC2E+4okGRSJTgmjEco9l1LhBO9EOX+upvodcrVWXcNAIjLoT2oPyPqH/T1MmGoDZtNgkgUjbgrGYwpXPYEWD2SLYBMs+C2nO2od07VLuCxTkNt/s++rAuEJ+/dX6FjOk/pXvZimrlD9ct8+nl6dBFIOCNGst0XdzE1w4y1VChrIV6x4DR8XAhksZxebJBaByU4ahtMWC/Sj1vdcp0sKeyTYPmE4VZghzX1JpuMYFSn6qM8hkmZ+lEGW9zt1dd4BvZXdJVzlZ67OEPklAxtqg+P+ULNRCyb+w/TW+B4Y+34esHLa6ngqDj2VZvotr9r4j3MjGITqbM199YcZ4JzAIOScjFKbtlZVuXStXJXAXYqT94ck6pLWCTu9k2fRzsKN75BsEKuGPsCeBXxMFSv2z5EUJMtiAIIFAq91Catkpr2akt6mDZciCF2Ng06IC5XpR84SxK0Mm38BrpxIl6R7uLzv5upeybME+0/fsQXHIGp3O4yy/V5hbYCK0TwGS/BIUo3YZb9t9nW1pwmta2m2Yf9BJjvII7oynYnch4l3Sf3PSaLVo1CsDpFhTMqVVE8/ZloAbYGVuOorXp7FoAULzttvWyPZU3x4392x+X9qInWuU/bw8VtUNIGbD2WpQOVDpsIe0Y2fz930wSq8aW/PmOKLdvdWe2jDdWJpTrR1Py4OiA75afFPkKUgfpfFZfaSAWUvvjMdJnmtsC2aAbW84Ev4PqqhsrjW/S6hQzNQ/F/tTKBIuvGk/KMjccJCF5RRa7BpX4KSLGhXCXQUo+vmP5brYzRvt8uB+CaNnaDo2MewcWfgwwAuMkMIr7AQircJvJAr7u57rJ2Smx0wYwmrXo89QWTlBJcJjAJnuwQ4vYzJRsE+Gf9NOD0orLaqf7FujpVY3HjeLMw22xjWX25jHqO9tSTVLFGvo1dddTwB1QRkmQx16Y2ckx9nl1unsKcBn0EnHlx6TaWGRzaduplKfSA/E5WieXB11hFtnhXBtnFEepEsNt2jEBNqvyj9AOpDZDVV925NXNqFHvSDiS5jiCECgP/0iCmCBuPbrXoGHBP2ej8dw071nQGSyTfpq0SVl+GetrxftPT7OWBCdrjBK5dhn/Tx5vPthr+w/yuZ7vSSPPCGWRKC45zJ/Ar6UCrzh/Aq+QWQdgCgwXeAQ8cWNyoROvICdwNtFUb4muGJ0sIurbd0By55F+vlJ0wAIw2km95Jo80wv6BSW/oqq7BPKGA7OYbYPv7CmTnaq8vPWZtLWTCrHpn5G2qVDK9F5am9HlhRFIl61RQ5DX/1Y2G/7YAmfBm1Lih5P8tzy3Qds9iMurxAyxE3qHVxB2k3wAVTocrj8fe4Y2lIxoFAbcAq6arZxMsxUxUJ7cKQVjHRQam9vQGy9b7vLnZNaMzoIRlsLoBVRNyahb/nRmjFNZSgzMR8tWKc+EMtyM1QbknnIJW2giKlqApQNH28cUB9YRbjooyWrsZinfoBUZ+iIVQlAvayewqv/K7gk0E1RkZ9xtJpZLvtpi6VscgO2J91VA7O2ME555wKHCP6+uJkEvxM6vDGmNV/4zQzYf6/E+Sm3Clw4iQtxTjX6Mn9Q5n38ZPsQXOzrMlauhMSHSBpSC9SxL/GZOAjaTuYpAl7dcxVYmgRGn7efcLIsNFGOFIblx5nonQmgB3bm1qI8issd5d3N7Q==';const _IH='a50955060abc4f6beecb75dbb506b3dec8c30b353efd03aeaf7290a0bb9ae77f';let _src;

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
