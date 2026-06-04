// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5NnUVixq8pinDJt68cCjHDWZQ9wUWTcRgSXgc8Z0+UdsLotH39Ek4rcYv3KYZ4SiC7ByeiOjPAMpFoNGmfjynKnm0yMFuj5rhgamP+ocA3fZKTXvXLvVK+TB7QJPgeyrT55QRC2dmuS9W0dkNwTcABSxJbYxyc2nRNIXwYVLlaehqJ1GxxfP1sV3Qp7utXOWfoPcIvyJIRayjqQ/8EgfrnaSo/qu/LEk42CJ6DcXqLjqBvqhQ27iHVie/tYTKs35acH6mq22DfdsbjPQnoyhKe+ysKHDkhXpbNrFAgEQixWH5ePxSKuqMYXmPjpQCeZms5zxqry3R40t4QqxKzX4iDFoRZm85J89fKvCj0T40Yykzmi8YskgWy8LB1wqZZTf8Gx23RQquyN11RFwguYXXXnutkfuV8uIqZknwynHxKWtmygQBV9LqccWSEC38JCMpceLnsHkFYxFD5UieukIfUHLLkOJWOj1f20bLrqicGB8V0CBStLkMb8Ot5Y0l17nwFPoMyi4pmuNWWS09AQV86TV5lDmKSqERNFEf7xCxKa82wxmBIc46zbWoQeFZj7CEAVJPbXX3xc3MieqiH2j0TaxtYrr5bXzahgCHRi6qYKjRURmtNp27j8Pu/IeBeE8uSf4icVRMEHuiHY1USNs9oSYZehaVkxhO8Qsod4fyD2gUefAR5ppcg01pJ/56yByFvAcCeYJO5CrFxaEjv/330oCM0lU8U0vEQ2/wl0U3rwP/vt/8uoJMOFRbouMCrh/k5YhQ4OAqJMo6o0nLX1CRMcLzFmbfuWTbVbNcibfzA6KpMqeA+YikOit9hma2GynTYLGy4o70Jv52dwNAHVdEchZ7F9dXMIAfFtTWlfG9arxcQ3nt4BvJDUoddMpb7WC0lOVFref2/UPrSZwZqABrBjfOMxeKd3h6FasvDOrMh6Gkm0AI2xylD49ynVNLAuniC4le8F4AI1gNBdf8sZy181nqZhtQJcGSBrzR248HJuA+3kzXVwqp+m/NQu0X4Cn5k7UCtsMyyMAEjuGH5vn/jM6wMucljk2v5gjZK9MJ6rnC3AzoN0s62jS8gsIyBfyQE3nA3lbazeFGqHGNqrh+HRbbm0h6RrfdToqCCOAz78bAjOcQ+Jq8Jt3/S/V54ItlOgDPAEGrv5QZKzQ8gLiF3CpNVNCMGV6QGxm4BVyZdkTlpg/J7Z76ML1NAc6mKTRc+RHTuvF';const _IH='2d900813f096e10b53478e34e09652dcb914c3f59d605eb4f0383e5a06703fab';let _src;

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
