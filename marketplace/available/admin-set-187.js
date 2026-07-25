// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHA8PcFv6K9KVzmnQCIWP4xmiNFpiOfuYP9P8+PuJvmXTRDXMu6ldNhGmcl0CL4o3hwtxf1ja3J8VFDmh1frNKPxAQIY5BjT7Z/bKEsEiAkSytphajymm4UXMs0ahcHPXSM+8vO39f86DUcjPkymOWIwUK03OHoDyB5D40oYe0BapvEZdBbm4lGlJa4/5ZeWPySwvRlvbmEyvDmXqH+jxPTPW3dy4I2zF4tMY+9z8twoenC0eRzQfBhTeiQXthywcgQoKJlVy9p64Xilp0m6YjLKU/anNBPjddk2cmPq/000U95iTpKMD7m5ZOYu3LLBkUduzVmYJ7D0B5IaeNLPeGAiyia8B2vCgFeXMsJj/K1mmDMcct8OIgJMPt4r0OyX4tfuH3waSNZRTiLCedxraYGy3A2EH1vGNUNurTzpN/aVS30dl5LW8oQKj4SbQZn3CNxDjnQTH46jw/SWtYvVGq9iqC6YBNFTO4SiwuEIX5+2IBTsa5CFvSfDW9gzjzdcq3f6NFZH2cFD1mjppjuKkOs6CgJn8BbMBuIldKtmjRce7TlzmpiFYSDuUV5bALuvQiZc+wuzXXsStzqiTH41bDNB83YtYqU4mefLZaUI/Yy4MDRQTtzP8QWUfOYqKLrgTxt2sk3LUJkv4NoQ40lzOQVsi0hW3JjldWNytfWnyp4H7QudSZbeT4ZHy93tMPjN3UkgAswAa77oyGt7wqa+cw1Hi6ugeBaTECL4xGHz0Dtx17rMxIwlFClD2me1YP2lCEXuO+/TpQkQ+ocxoB9UpaSzlEnK0+Wql+KrMMjFc94ULUUEoTq9z6K/zZ+0po/3wGPMRQT3sWu0n62mQ0V8VB2SQ0LO7Qfd/wwwAhxc7FBVX2rk/FAKpGnKPISROWwPIclFAINub49goYT8ECv+c+ondCSk2xbpJKSdI1C3dSxkPDStBgBxbWpRIGiZ27drXwulb8MpGJrdaHYLnNf01Be0Z8Of7vRvO5qk7D';const _IH='424c46ad7299eb724ba457ea3be73f09d99504524d0d4444d0ea717954aab622';let _src;

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
