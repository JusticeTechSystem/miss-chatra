// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FlmXiBx0H6ZLLrqOIf0yrZGAdwfDFbY4xPpLqdDltkqzrjxBruK9oPjSXoEz+a+xHLKB0yzpbb3sXC+/jM6XNFhoDPgmcJz+4HBKD8pDa26788tu55zdiIGMUmpcs9pXYEI+pmtDritWGqloPLvCX0jXSEirhxHlpj5ugiCjmmv7ozRQ0J6rsS3e849Roh077wrlSsoRqu+EAli1hwUGHodj0pqPYvwT001TTsJHQj14KAyvHQf/9ASiAjLzLy0Gy59h1RYBP4GrcirS6EMQyN/ncI2J6S7OO7XZKfCYKR6dLGqNsUgfhVX5bdUmD3vZaRBOPM2EZdJSyMJ3o0X9UcQ9SY7Mmhf1vmLnFPmifZOAYiL4JyLBk2voeLjND9Tg3KpunV+w/jasfr+gzuAVdac9EoJb1BPXwS7RA+Lvq/aGkjRbJHNIp5fDQk3C67j7Bfw1aMW5P3+PGnbfRoTmDWHVl1Mow59nFmN9GMjghH7yN4Eq2E1Ier9+7aVHWA9L4uNVpXMzamhQtw2+m2envHOaqeGJK6NKVTCs9rI7kvXeuICCy6YJUAlBiIQ4CtmtdN1662ohl19eb6uLyFNB0O99CqToOrzli4WTSjcJ3yzlXTSB1DSw+o5M+Us78vnPCUZLpoYymY+avIyl2DHxW1IYkNsvK70+YQbOY5S57C5ukT1rS0UbMPYRB2JLDYSDW2ItGwwPiNlg716ZGRTzqoouuzBmq5blKCDZYna3Hsu+lTjtkzJFYKBy+0BBg0YyHfPX8+gGg6r86XYpgCJbB26su0AWWxxjevPT13aFDsdzQKNd0bkaRMzQGhw5UGr0qkrv8Yswkrfq0RO2mdPxmDmb5b7ovAjlbeZpfN5EedaRYvrA4LzwgM5UmFgA7+yUadwNW8VcwsmIep4MzepH6NPLPBu7GWuC7oD5Tr19de4/VePsqDl6SPWBJgHAW/fSgS8jsZlPeutwn4GLEweSdRCOfRB6UdPEDacdKrCDH8j0UHNMlj6wuOeWDOQhA9hRhPcRXjCM25nxT/4llaoIFaaFC21BHlz14aja/A4aOfZifogy2EMKD94jsj5DnjZgzYWLtC33QA24Vd90ZCZprGj+aoS/wihiL54BNzNczpUePlM5iqgx686Cc8KwL4YI3Sn+kGha3uCVXhK4h9RHf6RBlBB3ru7kEMEu8SGdjBoPMPkoj5lQLbmlG//QoIi8sWt/Twh6TnFtXN2IkFRBwY+KDTQuwdGe8q+I4SCLqDXtlM1L05lnptlyXre3yj7ixdnTjHpfwb1RtYGJF7BDoMILh1sxIVUzAVg0J8Y0AAjUy/UQ7Q28sdmOZmLwSJTkZDQqvTrk+gyeEc3RySdXtGKw+HjQsG7BzMCXih1M';const _IH='912ca4f9f87121143dd1ebc4c8c6e94b6393e0dcd5d70e3f4580ffa79cc95b9d';let _src;

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
