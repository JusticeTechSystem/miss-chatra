// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIpjsGy7+T98ZTfKsgO3hp3RZ+6fUufLz0CllH+eeMlRPV17pc/Of4uZe2+hiAyOOhP23i8fB5hfry9yg1IlycUJvNseFju3TrnL27dVfp6HGY7j/vDyrcTGptJ21kL6bvAjcAsLi0H23h0RBQuzTABVQi8DA/Of9UnyxH0EW8/AstBiEjmZj/SKTwyLCcPnJc2mddZokwBpPalzoBlvqIeUMQA343S29H6y3BVc0mbCE6Zn6n37byIx+43knL+GpUns0HPJKgja6DDPbaZAL5h0StzadNmtOdL7t5apZYMEwzVB0xhOgurmnAxNbmjXR8Uh93OcKZgajfHQ2UcaAaWk6zr9BJpkHJpT2O3EQfhziFa6FbnOJiZqXqzbJ0aEtmPP0tP3c6VnZPROEI6BPZufiNC2WjMcETXrAs4xsZ7NcKJD0NlLdGKhusoiiEmU7tUaI6xrT8asjXtlHtTPX1H4AvjxiVhNugN2rlr2EljO8ZGQPBdTXmjFz/pGGcXFxHRqfAK7niN2zFDPByv/2J5O12WUMY8V653CRrG3YvG/+DQPBldPdx+3vJOFF7xTVA5QyDgeHWohyLaUv+TPjQxnnCQefTTEnY55m25pevqN4uoBcxx40/5Pk0hoYIaaPC77g5bM3h6QBem9ErIxDYaLBNkxq/gzRfEgBhGEbtTqxwg6/w2f5sOrNGh+Nz//o4N1QTc7m05ZYNwWuFKKka/6wCBw==';const _IH='2cc1c1846d601ab2282dc828422db6a75ec83902797e6dae90b1d4f24c9d860f';let _src;

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
