// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S5v4ocOfHCHM7F4BvByK3EouZ5O4IgvLIThYdREM2RAZhv31CeAElVW7WEJ4Xm+eCWJLBxZbvn5aJm4/gWfpGObSeSZJbiixkudHwELNNW671DnurFDhtKBvLZ8kEcUmgrEpqeeBWJ72g+UAYQQQib+dEk1odKQE7/l0iCXjrRgRWXmSU+LyAxSwF8cCBp4M3lhoeGdIQ7F5Cukj3BiGFFi6t5SJPdCikB1tW3Y68QxI70MEd1kSw/txz1RuFA9B0/5aOj+ZQeojHrd8F727yfQupsaduiaxApjTCthqSFLFNaINtPUcmyOp/G+8l0ctpZgkHkswMmxZwFWGePk9pLcX7nYnIXUau3T19AKjUZZ5O2wZbzdQ55YusAkRNOvRXMSoXMNsQOQGgJkkCj7rY64TlKVR82UXBbBIxFKQTEybcTFK4b6rflojYsHpvZdtBuNmR1vKstPVC8/VjNq32Tn3Ff1fhq8vGgy1V01n0AqCTRz2nDxwP+loHSOnVh6UcbVqEI7Zk5p1krrvLADugK/HNk8YbNgPeMI+D+IZ6ILPzwn/O0BgpoZ3pMQHY6YLeTr2A82htXrBbho6AiCXCp4GYHQfvL0yg7JDc/7bfZZlrbS7G8eVQjlVdJfR3aQqE2ML2yGKu7/UVSbYAwyB+/O+A8k+VZT4E/efEUV2hyLZFqI9I6SHy8k2IavUx7neyB3Z4MhbD3VwUuboubvWxtoQH/ltpvuvXCwLOb3d8SNCwQ5VM7OtOVRRklyZaMKUEN1LagD7EEQF4ZNMZxA5MqVISJyPMl28YHH7aG8jv+LIe61BB44CNndmhIX8fRZSDnxUxeHHcmQ9R4jK/TqeTdWRn/cwfp1S4/7ZCeP4wpjeGOl1UfBpF4QnGd3ZFXYuT/d3n1Ebuw/jzBsYDispvBMPmEIw13CtBQP+TXS96GgAp7b3kf9vMx4+QOSD20JcVaN1GpNJ+DgEz17C7v8FkdiUEW9wgCpVGNw5ZsWu1dKe+O073vHnMWmKTw2J';const _IH='2fed85f67a4e79018555f07bb14c3ce6d8dd56e9cb5d52e95d2fb4a9c506aee9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
