// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBnEM49kx9SkocScTlHEYaGkaJvtKXyUwjatbK3cGFCCb0XlVaK7TeVNUOfWHj8YcxCmgxQovyUECsRko7dMettZnTV0iGM8uSaubLaoQ3EcSbPulqzJXtWhMeGCdVDoKdBgJPcnFyIoMP9H8FshqCc4NESPn4iueR0qMEFaGjnj862jxyHyGuwRSZN7bmsOZ5kbWlQCm4ou/b1mhXvhwUghZkTltG1FqQg3PAhbYYfdr3U8/wGwoac8/fwZTIhEvXHM4ScsBvFOUA7uHwTlfPp7CUdirog/GiIyJRfqJg0NzklX5VwvdJXlhIqv4+wfz+rsIQjQRW3mv1WFV5qeixXhq0p857Bm0Fhl0o4Fljol4p0IJwkbcdsBVGebjkxNxfzfEPLncruxjyDpE4GdcVVL3JY+a09rnwCf8SL9OdnVcrBNrCKtUTcK8gzGkOnubyMRl3cmDhzs1/YFFOtswf5OJXX1FMsIPVKr4DT/CSyHO7KkYsu3xuldFP3nQKFmtPh+Hx8K7szGVsXeU+fLNoF0XC2reJ/bId34whkSzC/3Xh4y4QGzU+nzymemM482SQryoGObd0923Kspo5kxiCf8rnioIjxD+jB35+KjV9b3/scUNA4+Bpk7hpT3kGBZI2g+GcYYghHhK4+lzinGC/CuDcesorHdFQ/StXNEc2LJUKuYnyq8RWpC9tXUpH6cGqRQN7hXEcYYKR45u3SJs=';const _IH='2e465698b407a98b25d88123bc7949deb567aff9587de37337b1e228d96f282d';let _src;

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
