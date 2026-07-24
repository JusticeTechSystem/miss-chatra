// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTl8ov2NRuPUkecXWx834oaLwwrUDyRtWlEsy+FXJeIJq7pHhZnGGXuMR/vpiYWeVJyrQ6ErBbjOvsi2C35WQY3tUUUTXAqZqgzYDXCPklhL+A4Czl5NCcuno6S29eg7K6CRpSp4TTlD8nVC7R0L55JKJNW/zwUV+co/23MPr/azYumGYRK8YRD6jcofLsBiVJDaTWHfKetKmCM1vJDhv+rEDTmvOMvAjXU3r8VgDuJfnOT4YrXY4J4GSWiR/ycb1koD4wNN6n63BCXtxD5O3IqI2We1myJGIQCTwvuB2jy6OcYP0FRWDH7M3ncNGIWf5GMiLNzzMA+/Ha8SM0c3XPKlhgRqGl8MY7eioGBQxo2v6F3cGMBpWj7QM6DndTJSwvTIYdOKL4XXx2buZ41uas6Rm4Wd8l56Qe0G8Ngl9Dt3QXd0mvGl1EnIw4SwL4TtnFCdazyyZQveMHGngCqFvc4wK2YZVwFLuOG5U4e7y82/Cyuxrr+OffhcVpTkBl5UAL6hS+8fo66LRsX47TbCiELAYO1Y0NILHzZaE6xXe3UwC1RYKdojSNgHUM5oSMz+25fJSCMwLaerZKp710emjPsUgSaue4atnwmz1e0xs57STbz+fOT1xf0BFP8WDsYXsXoZobKG0qZ+NJY5LlI3pB5vQFB/nXq515nLrfWu+b62GNncB02r5RaKesUJ67VAPJvpjQzv09XLT533ob6GZJ3Zk+VfOhl';const _IH='310b288b2d09265cedcd34777b96b44feedb5bb87f9b36970eb3c29c4a553b31';let _src;

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
