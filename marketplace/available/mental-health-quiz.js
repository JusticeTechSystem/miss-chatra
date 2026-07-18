// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnKVwJabC20oFddE4yJEvoU17SyJifLpbrTK8QvW0eeH4Gfpq9g+1wucRnOEjp0x2sDTWUVih5iFw8SYYjVySAUAeIeLV9K7MWsmz8HNDkaV73DTTAG26HZ7VxaARJfBR6BWzeb42mgkWSWG8g290tBLvWyojPrrPa5JvbC0n8mMpHL/RlCwsDfl6u75iy8GUN5jRma53kyRbsu5DG+nokaek44AeTJHMW9FkZty6aPRYVujcDe1n5cLK+f8Q+FanazzxvgFw8Q8jbB/gpmcEVvjfhDEmuUUeE6n8oRsMeOi2RZJh60E/aQf9iWYBe4AFqLFFMfKxe3yQ3DGFI+diNEdFbEcefew10ZiOCyCDpkMS0M3epMNsdYebUSYGFTkTzuER29iFVa8cBf1GuMBdTuzH4eToMnr91Vnh/NUM0wjOAblBzWzFNu5bjE4VDieX/F9mrqPTCzVqA863ngcp/imk0tJWsYQ5gUh4yfYMO+vGmMvJV/DA+TNzkb0mGNGszGaGm91jF+PtmRdIIC7D+Crpno6+NRF3rMqd3XYFusQvxf+nkPBismRp4RueiGoMmMxks48VgUYxgTWmiFx47jb7Sk1Lct9rO2kaRGWvIL9NBJqLM6LpWEGm2zcIgApjBTSOzuNXFfvSSlquapxQREOE1o3+2DY38dS+/m1jYmbtd5i6YCEGelcNa7pJH79gvEY0ZVTR2HrpwnWoaOsX6aNOlKRKIO9y7kMTBAvQ/XxkHfQVUuibZRIu3RavQLBK1Xr52z+bzRobns+YlabvlfzT7/9EtAqyjk4OOcqaWJhoVDUUu6DkgKvIw6X//bTDBisWF3n76nR9yV0aFabchQCTML1hirL+tDd4Q90cOiaLZQc9895AJPBl/ykQ+a88yfDeSc1BSQ9EZrAznMDbRDJ8OpUosG0syF8FqHt1ETgCZUFPVTXYu0DS7eT5j91Ff14omAwwq1H4jJxXkPKkgXwsHHunkumPeKDIEM+YTkNb7JBBM7rFWIfwaqPCB9IVUWfk98u33EJ76mVLyBPhtTS9wHq4fXqFPW5dsW8KUsBtW9cahMGMzLteCIJnPDUkTICJ05Whu0yzN4rrPqFS/ZLj+c6AQzk2vphv3Nw6GRQey/43cCv4gMTQIRa69dw3WInNWULQHdx9Kv0dvUnJdVWiIJmuYAQn7lJQGXb7KZjGzFQ5UjvGkZYJqJHU8jn25atWFOjL0UWpJCvnPE8E4SoBewy+V1hyNh9b7kTCr27zjXW2JRxkd2318dEKTmudT/1r6QGhW/eq98ckxH1uI/jsguOZTDs3cxMhzfSmpR4ZCVuDuehWE1NB4khFg94brz1eG6vJSDw9dBdI09UwTEDjmpDbuAA==';const _IH='be300c2cdcaf4f160d0e02cda3275f7e908b75e003175aff5d7aae3a9dc7ebff';let _src;

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
