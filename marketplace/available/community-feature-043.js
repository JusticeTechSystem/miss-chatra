// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDpSC7zRCbYc3OIVEfKZT9Md0V7Dw4vVPO9v+uqk9ypo7zBDsIDe9tgiP+8KXHuMumuEn1XKZBpbs0pOEqCHDjptZj0G/xISH3aUTD6bm/zY8QTf0ZfX81nrxDJX4UQHEBwci9WTYLTDf/eC+hTtC4wuoKhpBESZ5aBgLYFRJZ9tDhE8GapRyGCcNuWBT/VfHgQMDqUR9wuT7/jNNio/uVQI9wS7SZjXpP4W0Zf4bgII8KazyQB1j0og9LnOJVmD6pV93AL9DePyAspGAsVUEb0mMZ5DVkavOgEctWKv3PSe4Zaz7r52R4LqVozNrF/RuzwDA1OFq1HPiLsaSeaQMX8dnffKO/OIS1Md5R1aEdxzrwy8CiLuV9Era8v6nRoW1CRadV5js+T+/0LCJA/GXZTBYRKJLvuJelacvdnrHXuPCNvXEwvhLl25VHsw6QwIwv+6/1Jh+atQ/75eRax7guNmWktWNgXPxpzJv6+osp7qNfowMI3zKRQuDXOWpQzZ6VplYGb59LygaOENbc1qN8myLVq80G5/+iFB9YViIox7VVg8JG47P4wjG3Sh4wB4I4M527WqNv5YEs6dzgqsZREoYgKxolQkVT2aetr0xHKlPUgB2r1hy5ZqN2o9bNZPAplMebD33L2J41U7wZ2FqhOVJjrH5s1vVQ64mxuTsitCkSxRi52CXVOEx62+gUZte1zvFK8HhwStTT/ZzeR33cRq/W0a075Tlp';const _IH='c637698982fc4de304dcb396d81598bec0233b87b5eb6e31e8e6a31aa4882cec';let _src;

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
