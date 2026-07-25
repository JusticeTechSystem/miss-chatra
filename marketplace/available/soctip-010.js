// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1z+czWOogK9dZ8ZK7h+89bxxPWLipx8u+v34+ATBlWcJHHDrzych7MWa+o2QwKDz09qpR5BjvYN5XnKzmd2eD5CFauPK4vw6cuW6ypf2xbuAMKgooS+rrOY8LWyYjdalIe0r6OIrgDLnsgj6mrsL2cXDG5Rc+gy4BxoKQZSLXb9PBtlWFrbWwZ7nAmoUMRo5PqU9vOdBJ+N7kYCIrRz8G+RW2Y0JfLf5fLLoGJ54ZyTGqJyixkpT3SFbMYHONVZa4shQ41dWlQMTtcoEdTUMZqDz96pFsz4yckRHH5+zfntACZ7UEPEK0IY6RXck6p/P/N9C6rU4wSc0RF8a+SbKV8NFgwmETCDWr61qAr+LD7XUhwAX5WSXNaEDP6aeWJyipcpfiJ/6P4hJsH0dYZw391L7SvqXe6e0DXpqfK14RKpD3iTsyeXX2CdslCWMFaQCjPvRbGyABFvmi4z/9G2I/ZPO2qOy4Hu26yYycMJjRiUbtTLq04cNvw2phjk619qAeu2KKy0CGujQouhK71TkN1V6wg1Ip86yVXY9cSwtlk9lraxcVq1ftT3PgqLS1sh9MLfvfzw7W1Gpn/wgW7iScM9lbF8Ec0dZRyrbogQZ+jbSFP/Ab6nnVQeBciVywSKe64Rq6GCO7KP2YF7HPKsQTRQ0HsYi/AryFMrhZnKyptROcIveMxyjs1LijsO6Y+lfuIkbEA7qONj4YbtL4V8KB3D5qhYv3hX9BorvZ8qqKsRSkViOZWvaxisUZAvwf7go4ejx49jlIpqxu9cDaUX+SfxmVJsMV7Uhyoa+X8I0ZrlJT/mpX0HZhYp5yGO2hS8uzwB1v0HQjbaRfpzVburePrxCY5AyMbksdX4QT3zsKB4jd1oXeznU8JUHlfO80b21RIN+UvJ8DVg1BOO3fPffTNnEDrops9ljt2MmxZc68nlmmwJsaPzaQVVL8UauaztO9lW/50AzSI5EQu+yPBWArm8AYH6+vaCaoxdDyBLkVdrDd5DUledUeY/D2QIpAsJ/gvE4ehjwmjKz9zHnPjaSUbSzAXISCHBD7dWdO7MQ0oNlAAyZVzsZJ/44Lh6aWEzPNSKIoQ5PxxSpdjLeoFw==';const _IH='a660e1229aacf15556be2f720e0f5c6e723be5f3d50f62094b0890014604b834';let _src;

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
