// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWUXuKNO0pwSLTCa96zj97Q//d5EpPcHd45d6ZoHY4TotqkMNiuJUzF9uWr4bV9aMUy6WIW2ynGz3H2P6bPEit//rs/w2C3bNh/9XVSd4irx3fG1xq1ilta59UqHuoYRT5MEbMo/SsyiqzbFWKHmV6bt+gtCKmIlSroYoJH8bjdpnUAmi0ONEQ6p/snOwKFfCYuq+HM6q7BuYR7AI8ef//gqj+/E2BRrDIbBBJMaInH5taBVQ5oMQ4ZXbCDJyN7ExFjW7ZazOOoK0sROgUWohJcuHEXpD1vztt6df67ni10V3uDBzKCQKNDn02+DaC2kOKXKAXT/ZZosc5D2+j0LLIRyfHbhyiUX9HfocBmKEn50sT4QbwC02f27iXOH/bcMT1kDLCiA1rOWsw+ai6GuwwHRs78aRi3ioLZjT6t0apa0anijtrIhAHD6uqHiEwUiz9ODWJfYynhveZgHWM+FqNaKBQP2NJkCWHp1pBKOa/Xct61c86gW6xQ+Ieu27BZyyPMKssqn7NMVAxwTrhzsFUJa/f1OCKbXtaDAWuFWu4rxNKYp1F+ltdcP7aElz3PXNoumwJOkopdviz98hJtRZ7ZAZd72lTd57CXpUca2TmV/behKKQ01jAt5/pJQJvHVlIn7ug4nmTC359WLSpDmzETbPxepuwSY9IClMdeWPwqawPDJnbZY+gx7K1F8uDyNL9Ysyr51QMQi0l3WcsOo9kK2W4y8RqjXkLeGJrROXYVMYS6+1aINJSJ+yOf9ZO1k90sw+Nf7Ecvagmxffr8GpAeY49D7zMszJVvKOHFetZJwxV+iSeunG/R7QYhD1eohURoVuGoN1EdDZkX0mk4YjpuMU0q+Z0P/GX4Fekg1vDXQwRsvRBVjddVogULQLN+4Nc9HSSoAgPu5vSTuB9VkRmcdq3f7c+P0HZdwIPJ33C28eITM9lIO4d/+lngTzooiwJnFSyMjr4B40ROz8MLQ31QxoJjzXFkKxi4NWbIgP802bZ7sjvbzlSkEAGAhFO0QvuZwG4BOLw9Q==';const _IH='e4bdd3e6c34062532671d198783b1540fa618404dfbe00bbaced7272e4601862';let _src;

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
