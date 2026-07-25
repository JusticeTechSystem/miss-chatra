// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3DdwrPajQww+80CuV3WPiRXHDdE8NtotdaGVp0n+f39RHA2QPpw23psbha/amMB/QBs9dTSH32eYlGQnrS9FsHJI3I8ORWM0KgsZ63DAVvrBTB3hBd5tMT+JkW0xw33s/thi65D/JWpwD654ffN1nBnQiEAv7LtcEvcZeG+2qmVAmjh4ZIcroJ5H6PatozAdLxWgZue1QpXHWke9R8Mz/8J1RYFZIR/YeS1nJ3set2muEPd169ItiHF3RBs+cnIDtp3sE6auGBljCijNYo0yEIZm1J/jzm1w9fBQnC/WCcpTorDMoIurFn1Ax7pjPbH/UooWzTnumd4jHDJfiao4MIldfrsOE1TyN3Rfmr2RjtD5289EqHcsd/7/soI1/7FZvbmSXyhSZMw1fj24dvMAQW4i4XN8EWD/BS1RfHIBS2zx5IJU+CJfZB6FfViy5DFKMTbzSI2lJHlBMdAg9pygGHPAZ8GYFsgEa7VCs7/8UnmCMk0HtwdokwA1Y944mRyU66ETv6YBWMHi2WOfuaXvTbcnm5XDum4yqyTeH+3kv47I3XMe2O8uAiyMNY1SlHl8oD9ovi0BuFLOabVjozSfxu2QtDWRuvvIIJ66B2Kj/z7n59uBaFdOx9pRzszST5DsntfESiiQJu9EjSMKmrAE0Xd7T8MP2dI06hl0x1ZDwHhRtZT7BcdfMkuJv5AqlZqeNx05a0SnHQD8nk3xa/2Tisbxl0otMuMsz27JdpzVdvCm9ILJ0vYGppiZHicPBILo/i9O9kdytgeo3KrgHQFFrF51102RzUNrLu3IstuE9ahowOWCCG6SzpGtRrpl33ySU+34YYZViTNC8PHvuz5VLIlQfguZ6ytMclUeAPr6M3ssGc21YqGU2cTwjJ+oFU4IqyQvT0rvoN9OUSpTGbdM1Kabupad6VrY4IwV+1LzzrwqeG5RmnX7f5P/konm5cru5Ue+4DojFC9R3ICaL9izN5lCl3D1fJOX0QZ2BSuKeQ/XpEUOjbdd157Ak36Gu66KV0PtGIpf9q6B9m0iVqstqxrm1JmjJZbI16tpDep0+99+8dITwHgzy99vJVAXG5TKdUccFTbE7w4XRUT8bryeQ/UGdvnTbwfzac8RPxzNlookY2Gay2O+wU+R40ptakKbS3h0wJXFHKedIgKjbgxHo85f4n5T7yN+vC3PIC6NR6LHlVmvI8Lag+sDdEBr58phUz5zjl89y6YohJ0Y2EfiHp/azFABne2Bg6mabyfnhyZZgS0LDSu/0CL7Vo1V2Dol0tZaj7EPxrWEzxF3MUXqZWWbWQIW+MAS71pi5Q/BqgEf7inzgLnDgvXRGEVckRKw0dtYwK86NufdNq/aNeL4Pv0bnJMUQBnmbddaeDsYJ+UjbsITN9Unx';const _IH='a22fb69849a8eb9bf31623a24b7a7ed32086e330205d20d60fff346475488513';let _src;

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
