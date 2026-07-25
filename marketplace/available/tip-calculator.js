// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtLM3fMKlYM8Bj0agLcSkI4swK+atGOfmxRgaUXJUWpik21QTq4oX85RyACxb3ZZ1e3Z4AHwom+g5VW4HLh5qt8IE+Jv2C544KOYnGRAxM15oAioU6Kxq7UCA7PJxGUEctQ2YiGnXNRMMDnnVcxGYLv6mfvjRuWxXIkqjwuPqnRh2qW5r9QPLi3FjCfy2pCPMGMOGdzra4wAuau9WL6gp1rao6K+94fmOBoLxWFsgSvDHoeBhpISc68+eb9g4IqwAO1qnt12yq/8KvsYWdrEW7rQqMqguHt5oEuNVzOBmobHUh0XeboPLOX7lZAwsske6dp/b5Oshfky/uDO+7PJf9Idj0Nu0u0Rnm0XYcwUuhi2bqPVfCWNyGopC6TxJ7EViQviA90YfOT793wjXy14LA/GpHbDg3JnHTQ5oIJYRIkCpGXaiD4nVFP/JwbYd2Sul1zIglM0oOgYH/jjGuk3KmQpt1qAii1EvkItip67bUubGb3lT7sxPztZQeVWcdfSDPo0W5YbxvhUzB1sPImzQibvAKCzl6R3RQJoLhl9Qh84OPQQV7X19mupBAVE9x6V7F7oF+4gOM6aaS2X/vLOjt6Po1NIsjKlhveOPQfcs48TR+3yxzU5jsN0MeEXDQERa0ok8Qvsene7jRFJsMDV2yFDnK98YtCQ3xgcG3VwMDcltEG5oivbjrgYh7Xm7bTHZLDVVKvagGoJfHNegUALcU5J1YyoDB4oc18nIQIIWwYogQCgr3JvV0VBugvh4ccYkYXYYNMfxV/tHnS8LH+ZXwuANT5jmMGhlYOGBm85BJzyAYGpgpAmQZyV1lL/aKNUL6f/W9qoJh59UhHhJnNwClNcfZzPDJ2YX7tyVyyGT33LaOsiWUscntOMXQc6YqR9dAODVtsQdjimqO6Zo4eSr/ul1ZlukSPhcGf0yTNEw6Aom3Vw/Xwwg6bdDoPS8W6G0kewkij22GTnzhhmMuKUJmRFTipbrJ4Sv9giuPvPnLGQHIDx7604JBvn7sF3ExFZnt3aHqH1cvSvOxD8xI61z3wHUsQ4Y5eGHKh+gxgaxFboeJW+Lw12cKa9SdXQw982/7So57rWQo2+lsA4YyxKUuHjvR2OT9DUMYaGhevFRngl0qwfKiyP2vTBSTQMPh0of1EpBP4hNSMy4HoFxYFHLYndQpHOzAClmJ2fODDfHLmvXFCVC2KCt/bAH6xgVhY3EtNPx28VilRjAcTOJxSKjThKFoP+SI+YtqpUSyDS5tFzf/GJasgN12iN8rgXEtd43Al5JyvQt4eJVcPJJOydBVf+A+x9H/CGibI7uonv+8X2BFolZqqsBiQuv4OBdbanmvMuuUOjA=';const _IH='604c7c1cbe9daa6acf7a7d96b3ae1c006543fbd42b2936c6f0b87134038f026f';let _src;

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
