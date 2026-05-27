// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U7Z+L4qaaAiVGJZMmc6MfMN0sVoANWABYEjCpqDtPV48EXKYUKXR0CkTXS3kEa6wJsWgUBkIahWWZsUeraUdMRxVgQUhrpAABWS8gWz3u371cTB/T2f5xeC3+Dx58ddsiPy52zltndhoMotVo2sRGVZq2WNiXBtSakesE5peyfGSasouiuIHK+bgGOX6HnNfh8xWdilOFzIO10Fhr8RRDrcz/zUG27jxGt3V5Rmg/+sK6urI5zgf6nFYVzFzRqjUzcwc8QOFWIx3prqwI6O6gmHBiTyenMYqRuaocs/tf2IacUKm9ion3TekJhfSgL3mH3Abi9vEtwABBu8xi7WD5Y7/kWxkvHbgr9pyRGGwrlg97f2ScSZw1YzZdMNJnmymA9qSGpcsQcMUEmJXEBIt3UPKEEkyOxTyjV0bYOxZ5+7gNM/kyY6sk7Q8faGG59ExFNGpUraAqCKHEfmc6jmJY3zq7kljdHYBA2IbiGOPxPVhMkDdWhZ0zyjfpP1PI9uqv5jIuovgEHsb6nVqqCoS1xuLaqfzdmyrvAkeIMSp28s2sUSPN5VNjGLONqEQtn531b6s8BiNADtHpQKk94Cdevv1Ym2RqP6lmYIOacXfVYTUnQfQB2IAyjtrFpF242fNFgXOpD0kQ26CGFTYO13s8SVgPZDzMGQjPi1zYMpff0zCei4xiOXi3phKHdCV1ncZK31fp7w1KGCC/eippSQlpCZCRbOXKlaFw8IjK127rSb0X+lJuO9/JMtiJhR/S/5zJ69L7O/df5NlhlKn2K5Gwk0DWrkK3W1Ig0Bga1IDZAsMakEV8P25xSEnyO2ciCUgTF4OHRS43yA2U7DMc1cHcoGYYxr5gioXgzX36ZlJ3T2KqfBZimHIyBadWDv0VAesomJQslxBMMVI+UCMFBtmwzOa9Jj+t2IF4fre2IHnNQhFxjXR6waO21V8yxM9+3lZIhszq5RZFE64+ahYS41LqxPUMzx6UkfkapIjYTggTwtCLf3e1vipoZvhWU6DWrh/GA==';const _IH='0d9bc0858069c990e7d29ec1bf2d5e952fc0e88f8ac4bffb39b4d1db777de837';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
