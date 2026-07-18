// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFISJCOUS+Uud4TzgJ8PH1MjYy3Falwr9Hs78YszNrzClyvs+BABAsRupyODuDhf6CZlzZCTkM7REQdmJeEqWx7h2jAKM0T2C0qrbQ324HXcB6I/yT5cftvSfC64n1w3o1stmr233hoOd8abtK+TpgotgiBmbTmD5Un+rCaA+aGI4WUCt+KYw4rmm7IboRktseVqRJGzRD08d2yN1/sgocOqCd5E4gGb7P72Dvg6mD4SGnIUMWzjjEfihOl5PxzUzRZIYO90LbDp5ixTBBQ5C21j1pL2w77psEJbrnS5qgx3jKStu9xVcmQtKioMoVxNCVbzs9LFLmRU4o818XrE+62p0l9qYF2HWr1u9WIqjFx0lFDIz4FHNWbyMlz6xblJYYwAswdnyit40MbzYVO5JKoCrf5BcjnpOulcNYIyZB6HpSxfDYkgvV9UI10dcpIjHbpSFs7MOcLuUMs6/94ARhPUPtXIFTMp1YrN+IgZjV2ozsFtdOHEhzSi2qiuSG1ZOjqtasM3xkHg9R22cXVRVIUrH5BEMh50rfcXESrHq2zsexftEmPpw9rbQ+mfiHRNKVuG2gbyPJSSj9kX8ymaFgMiouhKAD40iT105uBpVzMD9CYh1iC4ZYMUPvyUdDcaDLBMPjB/Te/pY90bpwSZLUNZQ2ueViPdEzkiuUJ2JZiNtdC/6D09ZGI30v2smx30DTUPGJadLAX17QELyTFYJU80wExVM9ixYgBGjOeuL6CzN6PrZ3mTJEdCsvkhpaprwqVRYQhmdGxT1bAwqSmeciHonFJnsBiqOZofnjVcwuPbN24QKay4uWpiCiMLMyqncVU3TdB+NYs6tjf0CXNO/DWTkC6LFc60bI30KPZ1opsKBZcpV6BXL4nflvkUhICAT6scmRVxAzql5G6VDKdA8ddvpvkcc7SxGIPw3OsNiimePVEDHFWOuYses7BMMlVqbeopnWz8y/EqPxlDaInfSS6+I7OcgW8cspHe6ehJOTFfI4k0X8oSO3fcK9HZfr2VpcA15IcgHyfc2dxmAjCPUclEkczWA/HcUHvOEAWKaDiuLpVL/ViG/avFrgo5FqEzFVO8S1xR7aT0OobDfxY5Q+lo1LP1pkxrZZ1jaVu1SlnBPyEdam6ZjdZhU0F6gXJNByZ7Re2hLMnvCWj+c6aaTJEJ5KEpI528UZS/ZOivmovlJ+gqdqldWuslWuThwmjJx6/ZoYfHSt3A==';const _IH='23a45e811951fbbbf7028cfc0dc3f47f606d2c5722a527e3c022acb6a8cbc0e5';let _src;

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
