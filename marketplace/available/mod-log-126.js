// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Urig13lYc3GWPWCNamarFaVg7qWEPUcRUKNcN4FB3RnDxFKLkWiUmB+6DrPgUUs5oF9B8fvlDWabtrEMkI9OMvm7tNaokVyQ1Gno7JaaQWPEZya+CvFsAJCsLxEI4naLgFeFUa2G10iGiz/AGypm4ZQeC9a1RkB9BxpEQ4FTLR9RSQG0rqrAO/NWCD52Z4mk2Mu9eg7Sc5fc/BQTmy3zxsKm31n5r1dEfa0t6MkSAISctTivmTF0dUU/V5nSm8pb+Dwtm5pw+zWPiBZjZ9L5BmYyDwRT2ztSInzTwzSvz7l9+Q+2a/z/lU/nuDCeI937gmnrNoVShwQ686STgOUrCwWKB1b2o65/8acIzjwdBndgtORpGNdIoHX8XzltHZqYKlXGr7cjcquAFdxzZRCgB65VxZewigO3O8BzxFgL9wbkOn3LP4/twgd3D2bdZxZWV/olj9iGGvpOaIXXFbzrjrbTGoxbhymK9zme5p/B/EFNH1ZYYX0zkPaxwXjFeJLgHzFe32WXzjBfUL51Lh0AoVh+FVpL/Rw/qZkfAXtd8lZVf1BL0anIRobIlTu4Z5HvrGaqsXhyECXjBompVJjvYuBTMQQnWB4/OldhAQMJEvfZxX82rJfX/sdBGcaOLT3bqqgQNkSGGX4MTu1qzk8rvJxmTWwruSWhNmIDLsQ3shS+qmrXZIfMjihsn2lNiGK/bQSsXvszx0HjP5viuMFNRtLsBe1LoI2ekN4WjBFWzsvXm3ed7as2lC9QsHnSkNhwctPrDvSeKZu2osiaKUs3BkE356EBO/TvrG7zOoCGCzEclRqd/vnfEj31nkJDMHKmpz4szbDPwqwaiUSZiYibQSQyQFUSlmEv/m9gGYevbQeaCKVrSsaT752mS7jj32bU2WXBCGj6tKizrJVufiJtKm1GA9YwKQ8VjfZwhSpXmZ1E7/MYJV8MJ+7jacnoFdwF2kMfzGHo+/X53QrpuS7DPZ2tEITXwS7D2OS04FYfzPxLZGgeBM4+GcLo5RKILCWFqO/U1FtmFX1il74F1+Ml4sLZPy04COZv7yfKa4ew5ANZGI8lsg7bksg4tMr1e2Hvc3IcV/MRAjiU4oiAekTftxDRC7OlpM2dgeF3KrhnMPQxvlIaEEnbvnoVBwbfxD8wdOIABsR+LMdKsvA7MrAAWRlMroojaS/eY6kNopm2U8RLQxBWtuf53GfY+Tbin0Ox+FcILcGWpp4fBXN3JrqpeCS92Se2bxD7+u8mjkyF0NW7p1u5w1SaS+152rXL3IM4CY083Z3xBuFbEL2HqeeRFSB9LziU3B/nzdvakC77ht8ITz4LPG8fGJtPXkuL/Gb3xZtq7ObzSGhuA==';const _IH='9938fb646424adcd66f0b418b3c1d93d612111e13057645a7b05b3b864ba443f';let _src;

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
