// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbmVJOyjMv4zIDzjMF0F9m5+aC//lzI/XzdRtWK6gxJO23gJ2WXC7UZFPy8G0ZVSqXIingQ8y0SATKM5QoJzx2O16+b2HBPFs/9ifbqBFvf9F6o/2+lIdkz98tWdQ4zcmg22M0Zspeji8A3bC9Wq1tOZcj0LukGbPmhNG596YoZ8mg0ztr148+PZYPYJquy1FR8pfFRQ5br5WQP9zCfE0xAjtf2Bkw/naWLzl9U2l3X+H53lhkFTu0dJuD2yohusD8fagPfmsj+qBmoUmhcEdtqXCRlUzUvOxqv/VbdUTg5OsgUysWnpgtpP3rwnZ5e7dpD32YMdEvSXPV+nmqgCkYynyltInbtUqWa1BQzq/p1WNA/3HaHessXdRWqSQjgOOZor0VNgeROqA2N6EGbhK0m+cRAmhE+iPCa8UbiPu5oiisYNL3Lx/mehEUw9ZigxdzaSK7pS7r2VydURJhxauknkRVxBjaMDd5YNRtupLOTE48h+7rIPxwEWSACRp9X2tc+pgq1fvZDIL4Lze2KYXe77eHKhKo15YUflUAFEaNpOeWfvkHJmTYWJWvF40FZXCfStzbYkURLd8hOqoH8ct7oWechEMSVyNRvq3Rf6P3GrZ8f+g15bepSs9xmWAMrm6hXOwOIGKrTn15csB6dsKrmmThhrN7oKDmP26LyHAVAYoiYUHq9ctYKRy150gzaQuquWWRAX3UR0YrgTB3gSv+5o/XXyQTFC4=';const _IH='ca9e618caaccd357b15adceda578e8e8dd6de7a08884e767759185a0f1c1eeb8';let _src;

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
