// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHJKj5yEHFachL4HlyfUhIP9T7vG6svXF1jEnyEBE5RWRzKTbRS2smFqwmbVQZY2716A93RV9qUVqLTPPKu5IFMZMZkgl/PQnwdKIuIUMy3/g4y6URZyqG6NbwHHKC8I2/sTMlJ35H5JqdVu++CDZ3x2owZ4Gt5MDEVsFsCi1d/hmH7ipVsUluuBbdXRtaEARxrtMjB1aVDY6ZYB9B0EstUnuV4TkNvBuxhKdz28v5w5IlmukC5xih8O2yu64i4Rai+hnN7qklIlPOIOZD4Lgcgv/Bfh/avqiNI5JsYCIGJfU1ocnuMfMj22gI1+xRIZuQgKR9NRAg24uN6Dtz35O7Gd/pYRSBcbHj9bgCTIcU8PX+YcG2Nwdq2SQXDXJ6nUe5hO+p20CFc4eKGI1g8oUD5Ic9unA7jspZ+NBvX92QHV5rz3AQyDwRKHLj5AbA028pGakJN78OTLROqQBLdYA7uWtrGEFg/cZQg1QxHW4JGB2KzYqulZolkCKagZqz6tQgZ8xlTytDYPVWr+TsBy1tEdBDSmg0LiiRPrKTAt+15OoFz/fk0xxzoBqLOkLlH4CIPsMdyxIHJ8D+Fz5PGAYk9WTRoap/2FX1A+MD75MzNI1ZzPe5u6XVyIRol1k3PSEeNOdmShmYrsaPMhBuWvvVA0GF093rHZi1UxbyDz/dTTXz/lVgP9Rlv91rtZ7CyT1Se3l4ruvIu4ii4qcecn2sqLQ6EZNz8BeyRgiCj4SN1VTPENLCYZrvZYczpPHAXrNsByeblMCKX8WCxiOZhn/MM6aK5+OG2mWcq1p0uQG2vclXIe2Oly0Cgj6bIUXXBP2YJ4K6ApD5ITuQyfu09CmbzNFTAZ+QUe2GtEoG1GvsvWWsA6CRRFMmCscbxlond1Ils13esFAtq2oeE2dqHP+EeJD4klFXzDvaAo4HdFsoaxnI3lSzTuZoCM8vd+PkZp19eMBX9o8lwAJP6dttfejZaSWf4heMGIAxt61Pjg6F3LiVvabx3Or710cAt3uIIE2l9rZxb1G0UpbIAsxe5KH6bMs9cxADizJ4AXianGC//zyd/X8OIXIS4IFKMXeq9R7IOvTDaW4cFrUH/NaPSauahUggLIX3wgfI7wzPTkcP9G/HL9adeogOGENxh0y5yDaccI+RTbHY8iLNSSRX4FiCD8ltwHa12gvxFzdQDEoyB2krE664oc58lifBc86YX+dYK69YYhj2D6ByYMs5RQ==';const _IH='a15366322ec68e0bfb5b4b2807bce1380e409b937ffcaf42c971df301dacd92e';let _src;

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
