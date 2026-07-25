// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6jt+EBF/Ps4LtmFl6RvSw9RVAmtztC1kcMiHQyammLRhztaMZ+OKIXyhi1b8D5IcbDk3E9KlhW+YeXf99i7IkZQ21bXm1fVLNB7EOLTufENx7SEnQ9Zm53jHeI38W240baKbsNBG+fip/8TqB+6IoNYjKmmSKW+ute/S7iSKwuAuZcB+WDM0HlQ0qHo3hSPa2wjCgnCBqWNZkQRhvjoiG+S/ywTtr/ErznxhEn3sNJBbl6VsvgSA+hLfX+x5jDu8bsumzoQ8MHqMhDUdSbTzGneYvK3JCQRW5SwK6kbeANjhmdqMirbBA4Pp9kO/ExU4rD/7aRy7DB+G4dPMBdQwCsAHOzWORVDbAlTxd6Gjin9Nj0FpTHTHXX1lt0MQ/hmmuK20u01/0QRIks4dJwhg98n5tKJ8AndpZKhq+zmT2V5JF1FUkmzIy8KrgeZd5ISlc/yQolioue7wfASvb1ZV+2BHa5rXcdtkEAICMFiwCbK2HwHjvzQTDQAraJsergbYqSvAvti36YcMEiOcZs38vndSiEJ7H5bg8J/FpxBE9YsMHNyicGF9uL3ua5hl+bHYYgQ7BLFuIg/Y1Y+d7HPhDjwE2JbVYlK3cmQNo0S4KO2KX2Mh81ywvwYmNU8HXqmR5dtQ30iC10uIhVOFmLcucn0uET0278gIBje8nxjhJYf+j9G86wvfjxdAQKYX3zQ8X29fFbwsuFM2MtJTrrA9uSKMwPyOEgHGg377qwQhEkowWl+6j3sCZHcLkAqj623NCfqIXaWi4mLsGJd/WTcHPSawRGbz6eoWCtE99KQCNj91/wmIyh4RN33nZrJxj5Z72jOt08ZkCpJ1FRuE1TMbof9ZqLPMisxwwlzs+zv6S6ycwtFACzXUlUvvx9qYaW/benkKJPnq7bwWHoVtsWH794TnazZoAMK/ZZ8gCxTYbbVO3yk4rQfYcvmIDw4tq77Cl3FQIc7xomOrmr2AXDqYgoWdCk8cvPZZtbPvVmEqlem2NjJ/SXb7eKIL8b0KSdkU8RO4JfwmZzj3v9gT/aI3n65Cdwc/9wz0oCUC07CtePTKx86xWbg4cgz03tL9p2ztusTWntSjRHxCLm2DqOMoHb896AuV75bpWOKyLI2J7H7FUb/qV8Xu+s5vB2XF4ribiZEgx9nrtFQVAPE+mkey3e5yrfhgK8aXaZlEM8lzcvtrco6iwRdCySWSROQcPSLys04h7aL5MApuGG8vLppA1etvL6xI9/Df+aPrSpenUc9SszsWkTAYwA0SOmYnWIGxWeTViOBIstub/O8guT/mymgIFUxsif052MQBQLmkGJZZj6dK+N92PNEny97AjnZlqR1eHdt40dzp+vq492hCSLwMMY6/Ir6lIlQCOwUgEVe+nCqVXcepbltgKGOOQLxuukMpw3/ISmVKW/H9zu8oyQ5aIO+ZYe7zoI6eZA1tsOSLujfxwVsGlG0ZpNiwGA7s3fveeXojWLJP3jgZyFfcCd723Z+BnXF4BMw2DXVdw5ZcXunzD8TiG5zOiEkVbHkiKkqqCHYS8W0Qe1ju83wuCWrxwvxEEj+qhPUNyq+VDHGTa3BwLIK/WJbMjN9JLkcs88RujWjj+rpL826kuTtcqMe0EqNLdqLTtYoCyERLGmUR0Vrs80R7dlvo82f1ui+SWhZxi3dWGcekQ1So5b4xo5QHms63JEwizeVSedyI8O5qe2xZj95IGMOQvmtOWjxHoUXQuPEDyU+ncdMRye9yke/s0AzzW86RszS6v65OijzuXb6ZmcJ9cYETG82o5rEZSyPgPbQ==';const _IH='e2b95cf7cb1f6769ffc289e61ba0ad8272a8877c23f4ca64c53f82d8fa1df951';let _src;

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
