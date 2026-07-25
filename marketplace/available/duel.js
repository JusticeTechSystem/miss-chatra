// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6uOUTbOehOd9UpfQC4T8Yy1c2UJ7M6CJ/F2iqirhwjV8hynwqKvSaE92CaNZha17FtjgoC835s7cZbgs9Tu8pZ7wkhxS9jcyrieOEBT9XJ+OtikR2BrTYRJeqICfPAlcKS+INYvy344Sp8I1lvFI97cURpaNXbJAUDMUJims0GbLZnbELfegk3ElZ6/khlGkDGQaIUaojUlp04D8gWE/m4dQho+QJi67hWndbfRkkWyTn8jKzqVB5dLbwKf+i1Yf1ybT1i+VBzXjPI3qBCopRRCGFQJhgfFHcGspOTScOWYf4k3oIeJBI7kopOe2F8YNwFrjR+SCfRx/6nfLfl6zFcASkwebtUN3tcQ9/VNxdWFDqkSwW9yzTcfK0IuTzlY+52XUMnxQqLogYHLcsVUYJDGD/kD7Lj3hlNMssAsCiVRArPdmAUNe+lVqq50bE7UhbyVhyStgB7XobVZyuaxIUg9J4qM27TkfA4EwXtn8JSBPVHxZOgdUKb+eo7SvCSMDWBjEW3HJ2lMUYu/9cxfcomGZGofCBmVouiBa+UB55TZWElnApvX+WBsSJ8syYn6yLIyKd+tFmUoyliBgh5tTsqlqiGjy0nncCYXZoxuTsSAiVGJFumdmJplAj+SE7EjmaazOnCAzGpuiIEGfLvH3imf9mhyTPmtGvaepEDQpKwg7zde5XE6wG32xav3FdeyryjMU5RC837lI+vQJWomTcXpRNfBshht733oMjaklAmDst2mHQVn68SomOsvDnMz/zKdyCUI9V8Z2mc3ufQxlyR1HlJDUsPXiEFlrA4wxvs6eET0vo83Shrt4NqlzYVof9nav+i2iCT4ADnLjdzf/jPC/FtS7FpjpFZnzX0PJ5IdTackzkC/Jt/CO6GoqFsRxYz+PTKxycAp0BV3N2xRutk4yY1kS1GWRrpX2GAYLnZ9SnwUR5iAqhvSkP5eQE/RBnoOtQ2wW9noHc7UaQ/HyepnwDTPlFcSu912Y636AutjVeWnAtWshxFwjLcTUPZ8BgF4+p0CCfJxx456OcHugV3wp9pIZ1XY59p2VK/Vef5LzJCBTvkT3rNht1lpB8BVYo5/ntoi65xj/os8SCHyvAF+sd8+Li07lkGY59bBGaxVj81OcUX7QLebetgA3Ah8d4lQKd09xqMVtozfDh/MiublHWPoV90tbyknQ8J8M0KvYQWQ==';const _IH='713c923c41ebb8fd37a4af566cef80cc620c22f896293a248ea574b5fa9dc0ab';let _src;

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
