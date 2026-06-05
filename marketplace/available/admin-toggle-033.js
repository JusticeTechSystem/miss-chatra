// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wosV94HUBibyXmWgpjLJfA1g3xoAvrf86evNjpbqpFqFL01guzwDXw6NbcngAaaxshUEvPyB6xpkLSjplbVzxQmP6TMvbEWSzTGOFA4GPd68HWI2nOYL+Q/SOQpL0MqmWRfbGKKuxzF9UuAf0qhtFRpJ/SkbqREx4AamjyyjaIRduERXwfJz0NYGdNsaPLi3OCQCF7HjG5Su8pAoWBqm4O4WWYcrJWb5a2MEG8n9P4iI7ynzYrfIpS3MFwQ7PuR+C85zOU/YlYjc0hpXPIfZS9ef0SQVBINrW2YhNtKmKXktyrzHcx9WMKp/8F6SbjnKhoGAxmfZWqvAA7SfH092hM7BePye6w4FS1ljkkX0XplqUYZRLnhOY9j3+jOdnP6lX1XNlRgCAzqBYsr90oLn+7dR5YfAVvv2yebzmhfhBbhKadCerx15FI5apKctTZ7h7avc//BxqqOsWkBgPGY1C785XMMIvww4pfKmLPG+dONJskVsf9GfMY1WNfpQyEjsHWA6Y4i3g+RNPrJvx3t9szCrF4lzjuaGy5cubWb9DVBObdqpbmz8H7NK4HGi/itNUWlCu6sLW2enUttdNhLX6fXvmTHJmOxFDJqhvMWDiIiN8Q1Tp7/367VPha3Ray/gBaA+ARFAbw5g7MfZTj8EsD0n4Trp7Zs4Mpnty1r3uLxm3u9UCbRx7fq65oqIz20JJv1Y8NmpOw0hnvaQEx9JT344r24WlTxzRBwApWQFPAfvukglkUGooImByL2wVCfffWpLoOo4E0c6rCinsPYoN2jWwg1ZgSpNM1dFVZLV7ywvUc2SxLmnOpw9q66+yERYNORD5jGsH5LNGSzqrMQAtEHOOq9pGQkk2RoVJPgB2B6cFg+jyfn2h1mL0zEEfhdnmKCx+Yh4IQRcdL9BawL7whB1FDFEaPVTuRCAGRCfbvDcZSWX5FDZoWhziMQfta2etTrh5otqsj08Lcj2cVBQVFUeFi6+whIyshkp5pTufilfzcXcL7iCmdt9oYph';const _IH='5bce95dad7aeb8272cd94d49e084715c151b4f0da3b437f4fc61d3795a2566ac';let _src;

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
