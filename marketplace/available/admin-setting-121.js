// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwNuDtrcTnCyjxLx28C0UHLuTUXNuDfAgoADUuOfYW3VUDElAha+hVBMTkASNjdfXNQaYTSRAy4dmg8CwNPoCSlAZGLL/hda0+J7mAKo+CjS967ToI4f37kNFC0EzhiELszd5ZPqL/leR/jjumBVZldPmR8hl8u7OL3apFyycF56VR4FncjwWqT2UFB6TZUS5Ku9dQpvkgWUA4w6RzrKrMrAw44EhgaqwH8h9ZE9mrWNYKvmtZ0tTKBfGR8NA/mmWvUNYyPKkn3D5feWPQLPNH+sfjdjIxPCzEqRtIewZq6DH/2qS/+8xn6nVH0mIlFeC0wp6APP5+66wsyttHEZ0SjvX65oteXEKFE8meImlVHgOZfFF5QohbEBnwhKiiqEJoZOp0egZrwhY9VP3T+IfOFQ5dW/3xqAJdRdL4Y2RUrdcT4kia2TS2YRU/bBcNrmr0z+bEkvqMa0yhIt9t/SZMOt7GNKKOFXcOmeVIH1l+vNxwOwHsS3D2HN5ZuSFVw2hcfObZrT6I/WSOJjkL5S3A1heuQHZdeQ7vrfo2ZpGMbZ3yCBA11H9dlW5K7WAlDhtzkEJCHeHmw65ZBnf4JK34U28Tg44V+8I+PXsO4uAFv/HoYa5HENXFQZIaIt/lrFnA5JA+yXs4Iw4pwTN4JWhNchVHWRPiofE/7SL6d2/X23YfN6F4Ru3smBYWAupkLfEX6DfIO5ITJVmX/HALLI4ZjAQYchsgAsQI9wZePCCYv58qNAgH/l1H2CPgEntO7RTKBr1+ZtCVoO0PkJVonPKPM8USoCOiZv4P3p1md6nXwBSaaxunv3HGAakTrZNGlihpKIfkP/m9wi6JZj8DQ+Y4mA58C2QWXJFbJTSwSdOnqwfu5sgBteig6kH5lNmjHuGlO6OQId2aXTLqKQo4P5UmKY30aMJZ9qlnxG0KfCzdS8gfNL/1V1x4QcuZlE81r7L2ptbznKFyRg8dtMeTSVF85en/A4rLEWOvzQwoqolapsjxSQPZeiTFjD3KdQIH7x/atMEJn+IpUg==';const _IH='49a2c4fa4f4aabda691ab820dc8dcdc7b942eb6a6d575e85e68ce11c5e4e58e9';let _src;

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
