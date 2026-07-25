// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzb5UjUTJsQMVEOWHWhxpVml7Xd4B99XeVojUj+Ff7hBGZWkTF9h6WuCGktBsRv70DTMER3/tJiwRyhN8SQW+a34WBlWPQWE3eyFdxuAX7tQ/+XGuE1EnxUFVZJ5McFbxox2ru1fR2ZFqgP87IBxQs/eLBCh3yliyRkzx7mMUVEq0E+BSSGZhIBAqDjnDjbnDILQs4oKkAoysT3yidwfsveU1rGe4q613d1NPYCuJvN/h47QWb0RfQSD4Iv4o36cQ8IUaBWQW6Evovm93FNidM3IiQX6GXEcUYQAFDGyeBw1n2RrUsgRpNLnXff6gB3C9X5IJ6FIuatzj53sRijS0+BEZctL592kVGch4ilfTVLZNsWvUv4YaHUyOQeMV5waYahPj24Qc3s7JFyoXIhcfH9bQGo2Jjvcx7QPwk4Xdj9KyS0/4K5VMJLbW5uXrdKsrkGrlCBhK11/bWThX4vaDJIqF2eWoYsOzREpccOVyFqyT+I2OoZC9lYvgTtvMqyUJ4uGZbL/C5ylOIrcyjK1LEGVOSOZyVW1V+ttjGazz8mICY9tprtcJAb8xKKXOMFhyvcv4T9wFUSUkDu5hVIA==';const _IH='6c5a6361e9dc0cfc2558f35fdb70c4bfb09799d46bb931ec715b3a2d3598e754';let _src;

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
