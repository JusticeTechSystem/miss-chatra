// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTY1HzylG9KQDMnqiLk3O6DtsPuoTe2fScqk1IQQFu9urYGnFFb2vKQf1BuqizZ4YkFLJZeKs1k/7rwEnXF5sHfZ97agWiLg7HP+rboO90Syf2W7PZg86wqAjRVU59wp5mrtpBrQs9sIS0+Xei8F6xMw6B5GFyzyzu/isLErCVYMJ/K74c05VV0eO0/duSuzaR7IRMmoeg69AgIwi7WixPa7eFOrkNxnM0LEe66IpPaxACAbeO6ZKsGQZsTllbVCzT7MjfjgEp+BGvV6SRpSS1rXPxq9ASiZ4n7pUnaEgCoxBIohHkcbql/4gIPbF4I8d9sxgsw8NFGoJDBJXPyZqpIZ7KtHIoYq7TEVWBgvNHKZYMTYqIcT1Uu15/STuBbAEYf57iIE9JU6p/UrPV0G6K42VD3WWFK5gOSryeGIEsOFu0j1MWdNZAU4+hDB66zodUrNTtUcZru8gPEgfL75K35EQ70CWjGjkYycqqcJRSe0SvOxqDQWWVckpRyNAowryxCRhwaFfVsz+tjv6UJlqfjW76VzyVz9zjBCNpj9LH1/wp0RgPsp+IelAJPYrBtGYpDQ66EpsRPBm25jKO+6uoGGq9ETwoY9uzEeZNdN2Kt3QtcwJHEHGOvP01aLLLSvHGfl7woxNQJmbSUDBKkuRcR2qbkc8UdCfxbVaqfUmyh9PPmS8BovCp9W67e23WHCKmMT3Cii5xznbte3xInwzvlwrayFgVVFnxxIXcWPwFIqrA+oRbGajLkCi8JfX/o+DraHfTUXYmfrfr2tlvaNfjmqt+GLyETpAApJpZynIqtmV4CsP71pxFUeax5z7N55xsTtplDV/Ih7IP844WMnNTaSBr5xnH9b84G2cdDOt9QvIxhO4AheD4xuxGXaivTXB2NAcWM322UYvwK7R6qZialHTKdvlOKsrbXcQAHhR0Lrssld6RtkRT/XK8SOoqCO/JZSGzto0KWMrVDMPrqQEstVyYbZ5SEGIRORhEOyHXgjhznJAAKIXyv/APom/za5GPDT9wLmzxucEG4x+gG/ebLA2x0UFsb3NdSu/1O1HhTlMFwJh8MBW+m59+L2oMSz4bGgpNTfPfGG2PRiqby7F6aPGoiWiiN53dwz1SRGF5KvzHiZsAswnAHRinTv/cQMlG1y4i0rAkW4nLerlwDUlVBzdB4MeVmqM9bVEGO//ryH5QEptSBfmhXTzYhVi8/8a/l8U2CaS9gK6lNhc/b3FKMyCODW2kndm3OyNueVX85UTm2Mkld6FxtstLMLHGJIZoM7kta9atpQXpsVw1mgmCwm437WJ0Ox/u6YAzUQb8Vo8N73xSDvdT5uyGwlcEqtVKk53SfVvwLEVFmDFnZZdhfYbAg9/KQc7lLJFwwB494+7m35kj8TElUBkkhSx9t9LKlQQe/Xm/21SY/FzzInP+jeHM7uflgagc5Pe+VgxsAd0gM7cGYXwe0gDfbcrXceLWD1gSyWE5uG9vWGWFyFjYZwIgkis6rixx8Ni1kuovr/ObrJe4c87Kn6tFiPhLfssUU8SN34DCNenZGf8U/MJBC7J2NdUT16DNkWBY=';const _IH='3c7630ceabbaa002a89660bd4b3e0924e75081ac99d470bc824738e2fd07cedb';let _src;

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
