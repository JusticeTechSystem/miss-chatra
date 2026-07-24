// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTS3hZrPayluZnz5SVYHxwIgKyc9Zeg8lhYVcEZ9brO/BUW1I76G7JYf9fiOm99C/WgjtqiR3f9XnavUhxlfL1MqLoEXxYGvM6/MERL8pmgFq0WygH0d3F1oirTXHaYPjlz13pT3qQtX3aohGk3XHCuiL96YW1DA/VI53VFx0ngurtBYjAlgGBgyp8MV32/9bSMBcsem3D7SClmh6F5Vs6kCCZpRax0KPy+vTB8FJEfKmaaG9p7aYtzFVUPyfvDwQC9538idfg71Upwc5GomtphHlYwmXHjdXzyr1nkl6N5B8IxjW/a+BrKWUQdCTIURsjVeZeCGcAzWeqH2y2UdgbC7zcOHfN8eAGRy4x3vGguUn6lR7dLR1kqwm5rr6NehWRNsu2OVRchw9adux7CqUAuWE/MwH+qcFr3GVTtwxb2qN7RR79Yr9NACloaXXkoRv3TQrZcrcSpPOiky+Ky/aeVIP/Cwb9fIalkSDOwXY+JetY3sEVyggiHPiQSN6c1b74kospswHtuisldTQ4fwrqU6cy1Dze0edty0Gn2yIQOqe6vMJnS+qqlT9G5z5DWk4K6BfxbOB5VOFR86l8xf586bn/DKl/BegSH87kbYmiZiCjEiVSs1f85xe2ylx5y4/h5C0PqNgzZdVy0FK/vY4k6K9ZGue+lsY/SSmMj5IGeMUgumWcoLvGNxmKJff4yTD5px9rVmbL+z8pdvKyDyGaLkMlRgg==';const _IH='b09e3be8385cb3a045038fc0751b1c782dcc5e2ca13a7e8c13ffba78a1bb82f6';let _src;

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
