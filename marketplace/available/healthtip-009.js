// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvSi2z0znoEnR4cifpYFBLYYmD8T1/Kf+ogUbVkJoGh5aW63eHhxuXSv+a0Wgw5eNdbtbd9wWcowrfOsxLx6yKkX0O/OxjUuJvIcvM0WHe3GbsZPGGSQvadpIHE3WCFUw3QFympKb98iCozj7JWD2F/Riyb2FY9CkH35/zIXO1cc6bUooqvS6LlPQUUhGymueJlxJtO6JnttWYKmUKAi0wGJv19OrpzNLI6eSc9564ioMAcw0pZG6pi4jCbwfs0zXpxTOb7JvQA7sWBIkLFKBOj5TFpMpYsNrkTLsuCq46u3bfM07A7Bm0WDJnyNfHv+By9EVlYDwql+Feedcel8H+UPC1F95jpHdnHpCYyx8Bdxgij0qgM2iogCWQJ3TbVAUusfSXwk26GcIhjzqYjNnaYLA4aVnoaRo4douInkLmatO7csLn8rPludKGTijW1SiSOHPCKWs5Qvfj2+kr03aLOsj9v+KFI7dSuKPC0y/fOMb8NTa722WidA5lvelf1OI1/N7HUcMNa7lrl1uWoyD2o1gQcgEjfV7WC9tnh1I9hps6JIorXjlTTKOKj1c2/p1xTsqxweCWqdZCSDwsPpyog7WfMOJcm4jXnGyEbmeUulFe+2G2l+QxzMtAJuPUqn4YHwNexoldlG+AzwAYnWDosQJLgq9LU8z1f61WM9rOUW9nXAiYkF87vdjp9EFsVoczP1YafGAWgHt3grTPtRjIfsL1g6wp2w54aYcCZM764yFZg762FnhyPXecGVp8UCMsB/0lYx0yeFaPCvCRdFZcu2P1TiI6ruuOlh9B2/lnR1E9yPejmQzbOlDa567zpzY4yZSXpqp3MfTi48KG7eHySQpchGJ+rxAgDUE9dvFae70TWXLdaqfS1MgJX5Y0XG9w5Ig54W3pMwg/YrQdOrMW+Gq2jtN0utW88IF1Tk2yLQSApvbYUw==';const _IH='ce53089bc96b791737ba4e96b3e185975bff55ebf68814997b2d5a00f10973f4';let _src;

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
