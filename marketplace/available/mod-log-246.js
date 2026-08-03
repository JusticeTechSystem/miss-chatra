// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTe8WrYOLy4YL/AqKg05dFWAm33LmWcXsgIB6LqrEvfsqcERlFp1X6/skzaSuqEZ48uA0AqOYhgIpzfrqUWHMuSB7mY+eUdfAJGEZqHa/3y9ohQlX2W8WNCjo3lcQAmDJ31ujmHVxBzm8igtJbONAKiuNY1MvU9g0UCDwvPDsZ+2thIwmW8RZUJC7vV7Ihq0jqQEcvWEsL/7Enj6qdp189PW3UVcuD5Bzq1zbs7iY5SWmtO1a5yPlWZPWJQG+m46ws9IF2RfiX3gxELoxfJz6G/FT4IYyE001U9Nnt1WEFPdciKfIRfS8q6LwQUEDYLKoSNMyZglRTyelwq5ufEYykME61zD+JDhKX0YSi+tbvPk6fADBRnvmiZpilHLTczCXvormlWujVS7ad0x1ihet5SRpDWv7hRtWfLIi2W4Gw01tz5o3WO1RJxisjRWRZn1USpskGUH7HivU2rYDO/RHdrNOaY+OjVDlH7N8c5k8PolgSCqNyOGZIRY3BnE7x9I0PJPapUvi9lspBZDD0DXxW25019/2dc6ovt11F0WIgUFSqX/YKPyDRBaEW8GAv8rUEMGGTeil2BEh82/71wDgWBMvJjHTiwCEArUvBfOJ9ihNz0cZHXVc6WQENiNNsN9Jj9rW6oot7y2WJZHsa3pj+m0qtt4Cq9ZZzWMFacuCyZFy3PdMfKiXy4dM1EsMg9nBbUToizy89TMLRmJC0PHHuLWcby97nTmihNV+px75ANKZque/PflVPbcChDV4DbC5bm+Mg3AG7s4AfAKx0mTVXt1seEqhfoKRsX5h/VJx1UmcwR9U6dmGC3ynVK8OldDqKAdsrPDybzlgOFeoeCxLj2yt5vud6eZrGWTvZzZ8Ws9pr34WLv6t2izg7wkcFROrS6/swzpgw7OYy6V9x5eN/DwOWmtrT7eQS44IVo0XjLO9de+y/f6uXdYTXWvS0ObmYbPeaYtaI8t44tqIvGJmQY0i89L8nWdR5vTPcJUq5rpUFy4iOrIpcRyMSWd9kVx0de6Ty4UEqE4A2c24hkACM2ur52kWmsFadzmQk5OwBqG7o+OEyDmAuLnvRZICBj40VynSCS19lhxCdGoM+UnYo6K9m8XaebsFiw7XaN8EMQsmKi22Sz5Z5J10pnaQZg74SRF7mNYOmdLXSEL7ZxjyyWVYOHB5xLpwA+Pp5eCFn2f6Yn3OU1Gz2V0VGC4c8f/qDfpAm1eo7BrfkDF2IijYE0N2KxfsunsyQ2RombnxCyv+6bIp8P/KrlXOhCIURHcDaEok/SGHEfXGg1bjrSY4k/TwhJyt+37ZQbN3cr5TXBG3krgMJAj+aSpXYroZvgFdy7nFXvL+cY';const _IH='127f2756eb144a66b6d2e70ae47867eb91fede0f7c74c082b113ee4d758c12ee';let _src;

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
