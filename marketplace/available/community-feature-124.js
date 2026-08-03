// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrbnmiyPAPt4KwymWFZtACj/W6xxSEOddTwcmpGpJgDzRTE6d84VtlGDwqcaLQVjtVP5L+/dyuoHdSC1IWDSocRttwUzT5536AtwBWtkikSgR4AZoXWExW+UtYh/tcDekSFs927RKhGTMKdkSrVoMXtdIWwUlO4aNRWjY2H65UmwhMZLvgnYVc7tbhuMXtLtvTC1dk/IFt6t3XaprRTeUvEdShv6109zpiOHabUXDPA6nNmca5UEC0Q9hFRIYNTkmXfG1rS96p7spOaW1OMWu31fcYVtqY10CXClv1bX/ILD66IXtzl+jTpOcdQAxyrsccORwhlwTjgC0mwCqrIcRgk6xuBpy7Wrc6t5YzoJaHkAmPoPGuChkvJfr2xoo260oHzZuWYyVrH08/uCyEq2PqjC/kQ4YP7poTZkx+3bmeqBZmxTygbmFWzFiLY7drKxYFsXj5XNU5teQbELzY7ribWYdnCx/Fyo8tfox0hbtQ3YhUXB/RISGsa8thfEMeT5gyVzo6E/f/IB16HuIE0qgsm4BUcmgCbnQzKB8WXbB1CYiUg0LjA1gkgRTQsbs//95KnkP2QD4GLq/fThSDrshj8C8AfYPIMAh+FZvqQXe+DBvT6jSYgOrLfTe30eLj/RuQXCnCHugOXtZRi7lt9AlRCiiBNQu4HO5zjuAAqgO1tOTZJ5TZDcnBVka1iq99qCeGU+uVCvr0qwavVEndP2/AR0Ye1ia9NlnFV7K5kSnX3hQ7';const _IH='b30933ce411b3f90d84ff122a12dd46212e3f16b6cc366eb48485fc57aed2c5c';let _src;

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
