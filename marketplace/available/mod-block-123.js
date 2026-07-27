// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTXtRexAHoh+ZzLjLHkutxkqlKCZi+ITmPdrOTziF0EradpZsE4De87xzYZ3I2dx7yw5R1QHK86W3efFElfdCnwvoZhvvXGllNTxYLGDAShahrjaO7Y+ravD5R9Up8ymbUJHVra8LjOMysgWlU7RRS16y9XdUodOp7mglP6HmRy+785Yeq/X59LhpvLeENKlJD2mVsSnIMQ6izE2vlhYIu5i8DiztsEnXAf8J5Yj2gQ6dKYRluxGCX87rvxyaByQE8zhMopem/GN0ZPD/gOujSU4dyn2bAeOak/Pau5gBA8YSJe67mdkxxoQESS1OJm0b4uGVXI58DDSBsNOKG7BCGN2ZyhpTa5yX7wmqapJfrxysDQId5ULxIwOZ17EklM4FJjE/LW2+fPGgyO3TBQJwmvj+sZmHFymRDDmkqIqoQbY2/hfA++/P/2dyJAJaH+wclOxmSXfeym1EiqwA8eioFmXy6F8jNM/VKXoakMRMazh4hBWn1e+IVRyRYbRUBvrqCxZlYtVoVY6pEE8a04dpH7NJH2JJx2UdQ5JruCF4wG/BbtH/iQXjs4L5nQwUvPxVnxVVtfcM529IW9OC0gO03MgdDsLgC9nfB4VDkF70IuaVZjKggK8b1+lRpz+Rass2JN3H1a0EeYciqBnQgWgyEJhabtvZw442TDGhlSrT2NC1ixBR65I8UfGtIVuE1DNbpgBN4gEFABB+2bAA31djethyo2V3u+K/8WvhpfQTkyIJiU8m/vpi3+lDX1ZqmDpWxGx29yW3fBrUvWcJGMMCqgmxX6Hxs9twQeHiRzPpDcMALmvsF72c7S5RAxUbbW61iVydFgKwyZjbS6BZ3/jKlitZCB2pt8nYXO/L8AhpzHT7xIUH04dOE4ykdzWgOdfFb3AuPgJvIDzwJfW3tl3flBPQbQ5b/HJrPoyOtNTZ2zo0Qcn2jmY7aizGJUpWAy4YHFe3IdP04JMiEajJjihs5HPVsyoyVl7+4QRu3NSD1o+5Guo+jj8KBbx+fKXb3DTQbi8eNe5oDUN02KKyzB4fIInb3ar0W4vX/WEoXOa+JFPWr45Xu7bysnPW1bCmybOo5UhbY2sKmfqSGSeF8ZQ/M8sdLLPzHzDsINJIzzWFgVmqMXHri39prOqxdNgAzw4CBo+16Li90QP4thhiu3kCFDdcRl9MDWqizf6ZYzPP77jNLznTGTYE3vyVLYrBgqhIUp54/gBbbcD2suzMcmeC5MewrVod8xq1iOgr44jp8QPK4LiNWWFnfVkAOzqtw1lMuah92dnuhZG5zU+Gxhc7OtmxSMxbqJwcdwaotoxPcAm7IKY8zHwJ2YfLIbqtEzHEgpPcf57A54y7DI4Y8a4Lw6llq1W3Gis6Ko+xYPiE=';const _IH='c7baf168578d672279557a099d1fb84a565dd98a0776fe9cdfdc69ebafc8dd80';let _src;

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
