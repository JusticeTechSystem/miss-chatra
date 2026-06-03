// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='60tI/HKAg+eqrwt2uUAsWgAQpK6EkxfZukNXRa791GtWZ3D7EIa9GgWqgTJwhVz4vqmXOsP41czBZnQ9KwFN65wYKZPUAVMkkuekdl4KI81GzQ8cH9o9u3h9Or6+0B2hJJUy4AwFB+q72zSymtl9j2+4MuBBH3Ky2h+ffuBjr2t3j5bbd1WdlKQ79JJ49e9gDPUai/OXPcJgISZSb2TaSc+EH+Qbwl89CKUyL8nNmBc/DLVhsiMDCHJ1shPD4/d3oLpFJNNO6j7W+VtiEMtgrfCZpx28f9/k14UyfQFpNSwiLl7KTialTdGRP24t7vLYFjXNDvPX3IorLEt/5jhzruRkGhAGMKx4eILGEIdAulR+lyWdYisdBA7HuIjOyjFoROSMt008dbw/fpPDtquf8+2a4xymWr9ZtofYutWpwQ4IGGikoPKoRGJ5XstXqtMo+/L+vtJ6yvkLtJ5PhXmTVfpHgtJWCqInpjOC0ryuUv4D9z1uPrmATXj1xf2FDUXEdTRSbbrI7JlGVjRg5Qc5gmY/RGYTnDoyOFFIvj7TFx0V2hXUPDJsbEhSs2WQ+gMZ4cZZWMrauvoN+PWrLKUzm4xS/Yr9b+PBdi00pQwQqsUPXsIQkr+gb1NkL54ZrK6vq9NX3OC2WVgxSySeZCm55UvasB16nPzk96lyvB/sEaUkjl8Mpm3lQxlCT/FBqAuoumo9tGbgEoaz+o2kc5I4TKmt77g1lQmMYRdK+dbpG5h+pLyq7m/IkcW3s1EzBbGAT7u3Y2nZu2dDIoueMJ9sSnD22woT76rGe4P8dgB3RHLYzZi8cZiFb7F8kw2tlXRsN5auffpHIdSPgmzEjbbGa6o1QUUia87FEIzzzbm9Bj4GGHh0x1anLSGQlCOLxyEr9haxOWZmb3UVtWBFvoyovRVwxWOzbwGxFBRrRfk/f19MB40DNN0NkI88t2ZDaIAm9NAGVHM79LZM6+Tee0L5uM34XtQ4O4P7sq7ybY+vg2LO85q6DllMNgQuSWFXlPoR+ZaNYxjLO9yhxWnVaxWlx/edAftlv1OnN/zH6TcrApkfTbwZ3fETQhaWsqodRKVmULQc9I2RP0xyw1QzT6ebTrPjdhDqR5wmX1IDpPA2z3KcMfH9q/cCe9almRWVLkldhAug39fAOYojf3fUO/NJ4c9XDZRexj4WZ36hNMUpe6aGuZDAFzC6HgH++tWu4mSHs963VxNXDwnyoDh102is5BHTwtjxgxICAh0gvxg7bl7kt/jUnfB9pQm369RMgQhJLFpcRB7xi5SmHkEz8q6o9r2Eucn5SVfuUr7H+L8lux046P08PgOGO3yisCwYLV2cO6VB/SVvWXHJol8h8V0gT4Z7NtC+yNJV+tQx1wBvRuMoBd5joqODDGmSNoipZqrdOEnKjkz75hXIGHV0uIAyC+jsO3i3CnnDbYKMbKkYsWid0qn0+djxNrG/R9+pzMtrTq/+fCWK149M6LBLx0mUPgUO9KRQqSBy4zmM7kK9XUNbAdqUcBgsU92d0flEU2tBreo5skTSKbS0Rgph1+CvvIXLsPwKciPI9L8/nris7lCP7cZNGi/u6w==';const _IH='84dd9474507221bc6da086e693c185a699d4b7a217f9ea857db2d3fd9bfbd663';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
