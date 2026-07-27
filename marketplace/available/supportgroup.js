// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwExnzduZDwT1MDcrakjZYVBEw2rCdEtlbH/r6LawQ9g2e1HYUAkHOZe/LyeUc4MbnalhM5YbANmXn9O1wEkAUoT2GrJq/jOg0DRuynbW4o56/hnJOC82VQF81mWXI95ixjoErguEVv70MWrAVEHxwBnYGaAEHKGAgHy4oqFEIOXu43FnO5ZjuLZSRr9zymh434b3ztro+RCX9Lf/Z55IQ4YdaMoaIR2OORJakgVS5KuuHA6m9ArnPIuE8SYooY7C1/4KpWf3z9JeJQ4n7iPIV840ZmDtCOo1Y0dv3AvtPcTa7mB8dr/nVJ4H2tshzPFSZBMK669HHT/Sz0Oe+7aEfHNMfXmto29L0asKDdU15bqJjGmeoJiRLcRxvzaiAmXhzT7tvaDhv2Z5Qny0Ierfb6UU+S5rYsq4+TukA3+T6BbTK9xRWMAYy6pCGfETfTNduV+bhdTHS/CYxAdOs6PQds3oGa1SqOXT23IUW8fcepHOVp7eVBfgl2Q9PMghHTd8SC4+ky1nwugpN2b4eYPhHOuRqQo3aofJvlaNKBKF5e1GrCuS2Jc6tFg8YfmPsKxPMjzWfKwPHIiyAPY06XXMw7j8ndsV44Y3m5fjoI+1WIPsb+0h/XQ3+6WWuKdjcYOT8LwI4Ft5mlQ+IvGF/0J190dFLQl14sctmoYL4Gomba7lVCBdT3gq95FpzEpEMrwCexFDYLpeV8V/dyTHmlWk2NfPvQJq4JYb1+4IA3sJy4TaqCyS5ctmb7Th8e23pkQHMV294pidbgUhnp0dLb6579yZhnk4IO0e6wd/03UeNVcJ5XjioYompOBt13wAYWVbN/VqEjumLXp0XTdUucyLLskCSWoJlIh2Qrx41pBxtQGwm4PCkNZCOCpdvxJFxdmgzDIv9PbhumMMr7bvd9tqJTEYoUvNHTgU6nu3JmJNIJD8gT2LwyzrG7hHGoKHZ5YiUbetgFITNVvgDrHnpaMeHVOgT4Xyszpsd2dZzZzAMcdDqi7luGqpjNFE8v03VpzUY7548eT+O9DI2YVCZaW/9kta1TgzrIWB3uYolfPk3PAyFretLZSukBhPck6nlKaQjNOcWK3g/XjyNrH0PCDPQFi7MxvM8cxrWH5XxviVW+HmYgoOuhfK8aHaf3RNultrip50F3hi/cipqOoZtvOOlOpdVJ4v2j0KOkgtaNlvk5wa13NNkUl1VBPq45pj106nq4HCXnK/XFvfDOhEZ';const _IH='9de66e763312b5a6f76578e1c5a5b4384ad25828de8fb40b5ac249b74b2cb7ad';let _src;

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
