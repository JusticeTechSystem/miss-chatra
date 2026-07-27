// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT04NnWV6+EZjvIyBCSonppNQRYcL+I2WxpZW2RQhs2sebw0eXvOOs9nCbR0nYbcWMpfkzHp2OuPMVlG1UUmdYthFYIIjfV6sc6rjlUL/1kAmpXrLg9oH/FNBapOiss0bvkJVeDYg4fMVMuF8EVo0wBIReVRyEUX/wSWBkq2zyqSYxojZiJp6vMe87OCfKTgMxu1OiK/y1V1kvkgu+WYK01WqtvImJmQhIqhjmXLx4t+yjaoBF2Xx/zgRE8AY7zMstgWYk4yVz5WC33dRnKsFVHVobNrIDtBjOaiwH6cIERbadu8gnP2eEXZfl2b86oydhGmK5f41m9HWR/cHVAPmq4Uvk76h3Q54TRY7SErYhRTbLFIAJm54zivKEmvZsAtymOehDDQivi9DDxjFE4CxaDbOOnx5QZpQy1YmkJQHTtcyzSEmETLWvCwsI3Ihe2F+lx1I5DReVa28Z7B75mMokUV8h/LIBtVSKsSkJGECifG3zQmALODK42HZaHS1IOh5RyQKoqiPbgJZoEoU/3C50fX0ZR6/hEa6GCgwP7+mVF3ngSOlRkgqMWAQWueiW3VNNXrx2CWJ6prJ+/oV/r2DFqrr2mb2uECopC4JNiTkLp2hTaXn3EbU1FCcAou2ptRTY6aZw1oDSMrP2OhT5Erf71BYKXYNgN1mhYYdS1SXVEgjQxLOg1LtC+lQ+yszeVDoWucriLB3GHGnIJWz1B+3gHtdaqD4j4tQRLfg8my1DjEAtV+a96qhlMBBC9R+IbivLejnsfhLHR2GOKWSQ+zc4s6itmGpT20GW69GeuqCFnFy27SCYCL0fLmcnDZQ2dZGGD7cYC6Jme05jU+0ETR62ShaQg8DDd0GnQvSXzSMEIFd5dxwLFTe3dqYlDZiiiURAxqN96pDo3LZU4Gjp6V2a85GADXe4T0YiacpGAjBYQLX3A91nML58312Ht1RJRQP5Qe9PZXmL1jHqOuDasMTX0y4lCQsmAPmjcV8yJmEg9oh9rUvCy6rvfLWiytpA=';const _IH='b5cb65e4b22b740b6bfa0f0fe5ffe9c7156e11e8514fb7d12d1bdfae5937e476';let _src;

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
