// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1aPbzCRNMaFez52c1Lpj01QQCQz5PFzoJlsYqZk6rKgI2YChsPrP2Q9dpW8qOw0O6FSwyIvU6n1NBCdaCnFyzPUGkPGq6C8CWuU2zDB0x5zh3Kk7ZTOi61FvqJF2qUEtpUfT8lLkDaxuO+Vd59ypSxEQMZ5okCITy2WqSNWxpmvu+JXSUqimsM1QlnvQjWru9HCeahb2Csy4G1CDsJCcHSJ1jooAHeZE8fwygT/gOdMZ8MojOUtZ1c5tMXLoJuVP6SZRQOh5MzzJW0qnh2rr84yNVqDsjUMHDaKWj6sR13lmOiIIcgMLgYFqYD0uZYslrwil5lxUwclRDDy0ZfnpKeLvlmcT2QsZDTSpBzFlgP5P1NOVfj/pwqGFPpSq0K83AWnVXPt43ymgW+NckDy+Ug+xCkSbNf9IP0Bjb2+mSsuGLyuB27vSzTFbT02nctnEdl5Hj7pLLilYudWSs2mOxPs9N3qQdoVpyM6lgBNO80flNXNnCSvMOOv5TIEeCoIkV0QS+qA9inf7DmxuCE5tahavnr8jYgm7r7GQrpweYKCJMY1CicejFXM0IjJJelBU9qH9Hu1dtPPi7lsHpzb1VnqA8q2UYRZM4o/2I4YLFpYFRYUUxpl6GiMqKEbzk+xbHQia7rDTIWRVDT0cqqsiUbvDepBe8tbRoSJo196jchy3xdZ174ksAOGHXrXbnxUGrpO16PhxjE4Aasoo/krOmX6aZ3CQQaUTHBdwCmCUBguY9wTlJcGBhS+efW2iVB9JX+SYdPRoSaSzLMttQinzIKRDes7mL5pmsuK7Amz6DoEW+hw3F6LzqsKQFmEf8vKmKV9cVLqlvTALK8nNS/jXCzJw97vv4dOMjcB2vPro7SDjT+q1KBtl8V7DxQG0prz+cNxM/M0x4f2x94XGDAXv4MR8zkWMrLX3psZ5sf21/pQ6OQEX12R+oAHPxxLN6i5teg1y20i/L2gqaUz/SdTGzjoEhHwd2okxk41X0tb7hlojU2A13Mjp9DpL5jQRbZ5N9R+TQAUVvbnSeVYrwxkX/zAYQtnxBsgPh/8vYHx0nCIDxL+hKHENNypHDbTQW4Z+lG3ffMzRto4VvpbdZwCBQ9xVnKaxV9HwAA0zHoNw3Aga+CXVQli/tSDLnfQ09YZZ2DZT7nxd424YIqqcT6TgqNUHm5Bhv9996mCebvQCupuKeLlfxymp7JDzzZqzARVal6n182eGJb8L385xEPm3JUIQGMIoKOz79DxMCb5kdcnmhCVbV6FJotO+klOASqS4XtLj1MYiSqskXJ7CDY97oxLn27GW388ezaozDd4w9ozUsvIxa4P9jGAzaZM+29jjdj6OCtaaOZ2q4';const _IH='7fad62ec812b2c37d528f4d5046bc40e6d62b049aa3fe53432bde0931f85b697';let _src;

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
