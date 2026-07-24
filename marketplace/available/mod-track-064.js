// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhydqwCSZWfe3Wih3FwhKRDnMDDpQGRuzM/My+YHFQOuyv4Dt/dvN6sqzLXs71sk99YNtZ+lNuCwjbDiO4X9AJXWLvYWfyypCUu9Qu5lusQa4vJ0G28++ENc1ofEIMJjq8wM2b3lRB1ZyjX1mGI3026LHfKvx4wmrP/pQ5eDWrYnceHUYerRP2jH7Rc1cVRph7rgyaJOIOmUhGoHplQ2y6myDwbqzO/b+TE6Knj9SkmUUq4Ey8OMr3ao8dSjucVgJjHsm11Dnfvi6DqVSczZgyf1LBSmPYIwIYj8ewaAOawPgpzdRF8a7CE8h+OUX0G54nXAjN24z67ejv3RneFCE0Q3dK3vBUp5Xf2WzacZjRo4oVS2BfJ16YxE5AsRDhkN6kb9HFMZovPGo+TiosSkKL9L1jmlC5LY8OHFvtYo+x04fPYBoE4ovEhCy8NxrWaAX6xjLiTW2F5y8QZnqgmGyvCgQg6TYvHEjM2qbbgQOHL9ngN+KLedR+/Ibf4eER+rZ14LeQ1nG46HeY2d62k97sIo2s6PsbvAh4m8VXjXe7+mQm5eGi/k/yaJU2yomWJfqzHd3p7k1IAjj4LavhKbXLEwZxCdZN4pG9XuIYzJqySRS9LB7tdunP31EeAY4z8jThdZRo5VrCXr4b2wbJbAOLF7edPxPEQBcwL0CC+pk/kb+nXTY+nj1/YRfgGMF4A5Ka/4icXXIDE/oz+O2QqGji19Y7fQUynhqk4hpC/tuDJkt/s8ECS5IC9n2BHt5pWb2ZFCDwG+a+oAGKKZ0RpYdZxc9p3edgQNPheJcZG9Sxph1qNSZw6z+zLfi4RDcdbCqpixWFL1HB4vZ+9z8UmGkD33sYrnID9A5dS+HmFc88z0uVmG84LkqkLYlY/qwamw0bexiu6idUS/d9pSG5WzdMuIBOy6EMYXTyCdNLISYQfevp6Mrl/QisijfLd2TAE+JW97uVyrUzKgHdcU0eAuwr4ara8AHuKkJunet9PNSiVWXyFVxmzTIwOjcngG4lEc5q0tMBJRL9aymwv9hb6vGs+sJaWAJMKukuJMxGQY1F0tTapasX60aawKxo5mm5tTwdZ+p0/KY6/U+HCTpxbepcZz+VAjVFq/nQHQxi2gzmo5mpoXszEJnRAmvNehxGbGEjmcLYIjsf5avgHP2xTP86YoFTGu3SoVEWrQN+vJsv6bCpyA7+Kpr0qS6bsuQey6ZpOuR5m9a7ZWl8y2QER+urbCjl4p1viJbQnIi5SEMXd3lap+Y2afJGha73Jph005nWw+NQVRnTfSPSDOH5f5Bggo9Dii5nIuy1z3Bof+1WhZObYORwNKxrwABaspRAjUP30tRuR8mp2hfwdYA+NPfO7DAxLwY61Wvm';const _IH='f27f7dcb919c89d6ac6c7f95a86772650dfe58387404a9fda86e5760b2d20978';let _src;

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
