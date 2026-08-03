// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+bgaL6R1lFZCvFP/n0BUcznC+xlMoroIjQP+pdmVAv9geq8nhCjyRAWm+SOVUtbBAgj4MHpQI0Ko0CL6KAmniMppjG3U3TTwipi2lV3c83RfDMR0mFnvjZTeDF99Jt796A2GSW523dGsmWOmM5wpWLVOtawfRbTbUzZiWz+RleJa6DjRyK33/vcgehoimZcLlWL5tUAhy5eJKi7UaQb2alcoj231MJRDMKv9QHQY+mmx+MPPJDdas04jFQHLKsCPdwYMve3623GBb+w+M82z4iYEYOvOsYuMOONh8KCrnUiPaxKgFuJ1Pdpw0+IqfWtbSvGv/kOlGpS7HzW2XJdT37lMOY7WDXTGfChoznCUi0U92uD/NyglkMzT/QuwGHSnSrKLvQ9uQ1FYNWYOZ92FFP7GDpqNWW5GTV50TkIiRGaBrr+I98lvcr+nqVXoYIlvossXDanA0WqtKdsKkoDpwlQvWGiRAyu6eCtebyv32PBbrsUkzGBnQlSPvXtz2JHHRCzuCq6FjcumQLTOOoqRmQZJJ0bTcCEI43RO+XnkCRwcHEAVeXAa1q9laukl89/B18H7xByYuCvzsDg6vINnUVVu71aF+OvgRTJ8or+6w+OeerQh3/+CoaTZSKLmljSGZuZJyU0KFFGKQzrblAxbjIjsLz2xcwd3YpAqMtdPEpSRKloY2UgijYW6RlVnQgQ9Tdz15Q1kMUfqWAH/h+iuuJd/WDnGBG0MM';const _IH='a659ad8f8690fb7fb8e005c0533a87f30246afe7f6999e4468760de53c24298a';let _src;

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
