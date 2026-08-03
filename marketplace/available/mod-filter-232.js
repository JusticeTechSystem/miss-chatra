// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNoK8l167SfH43gb+CdzxgAy9jbDm/t32L8wDReBxm/M6FFLcgIhjnhMfXcvcPa3lJM8XmovjK5VZUK4O34bvjwDoU8IxFWKUYKINjcr4L5GaI62wy/HCpqcZMzB3vbNbIul/EHvl+iQGaHu78uUx/coPhZ3EvAANsWYdWB7SsSC917wVRgd9GkPKTQKC4HTDJbBq1oi3FRDXbAAxI8t7+Gj4diRSd/XMdN1ZVZuNtN9Zw6rrFy7t6RifkoNlHVRVSdb4QRJANRdYBnYhP49/oo8to8ughTcwTcQHAzRIoP98uywnp95UAdVS0g4b4ixkxae6tANFfBigIZ7XPOIXczfi0+n55IRKV6Wb/RUAPC98RXA9NtXqhdQKCLYQUf1F+pqG3eMVQOTt6TL4iXf9VGQ+EppqjeSzJIhox/CCLj8l+OCUSYUNGzVKlO25bptKH28s1sNlDNWsjGaTpcDdI3RdrmIFXTLyw1PV45WKT/dk0Ax0HyM85Pe8CH/gQT2b0Kts6wCEAzaoCbIHfM0FLo8t5Rlo0/IyRwJhNdYIpF58xNlBifr2c/YcqvJImRMEdW0RatAF75nMmWSDYwgVpQsl0NsQwMUWIcNrDke7glwfJQs9w7JB9KTI4qD6lRAWxio6J6M3jVBXXDxqN4V6C2zfGo22XDBPJ+vqAbxShHcwZujJVj8FdSXM7443BK3cZdJY68EeeQZeDEPkaI6/pwJxeSvx2OmXtXs4BrXZBKySVKV8YC3R8zXkVJICo/JRTLzXrmNm3cbbDVmsyPgDAdowUHDl6uP+EoMb1Y1s54y9JUg0dG6EIumIqU7J3UXbvYxw1l2eeNVZxog0JpMZkM0tG1ryAZNCln8bSxSCa/qwm6HCt9yiXV5ZAU8dtiQeSKe9gYq9BhS5wsj3CvAoWJG9Eu/jIWgTFYeIFugrcS19LprgPxSJvEaAgnOo4st9N6sELPjXwt8MceE1vlM+QthvXPGKgtmgmjnGkQ+Cd5wSd/pd88j4tEZIA8nDCJIhpSyu37jX5bQIxKYWeIEGx61IXagtGG16holJ3W2m2sEwszEK+1aOsYp7+7dN0+9GJ66o28F4BxkqhFHWcGBBMfYXfGD4V7b9Q2HBRArYA35BukDg3yejBQaJaTOImR/VsJvzvtcGq9U2SmpC4oFt7UfldHWzeOnMCSYTw+j3gB+SWJPDQCQ1OtKQMnk3zhViDEfg8vy+4QLPPmABBsI/EGQA7Roio9/i4ahuZ8pe6wG8ooVoeR2aWaQ8jRH5nscAsRysvYJhlWiVAz2BKA0d0JPQWtoW8zWV8X9KcnQK1zEei3R57pOWEWAVuuxl9lodNXVby7hIr5t10zHFK1kGsUec/EQQT9fkBpq6waGJshbZp5yvN';const _IH='6dad527a36c3559fcc434723e038e31c1c41cfcd46a6b073542670f7fb6eb2fa';let _src;

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
