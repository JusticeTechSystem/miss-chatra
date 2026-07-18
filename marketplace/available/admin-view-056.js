// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQO0oDCntsUFQdcELSY3smYxm3YI4GgN2hOCtafEjaE9VINxpimM80VJgL6Qc62kVZ9CEuinX7p6HsgGTvjv2wv907oB5wFAwcCq5FIv4AjZlLBFWRyi/gnyBLA0nWR91HIfeSwHFUc0cRldxZekbeLkM6uu/pgJX1CMMUIC5NgFbIqa16XULShvN8oFcW3fBs5q0GzwpM/UKyk5/uEITRWIyfT6dJo7yKZ2mpE8buBnpfOtTtKu0mBv9I7pQkcRsS9qe/p2lslC271Pxb4+MDNia5FYQga9fCgKpNuBJUfLJ5HfRuUlaQ40KbZcELWL5QotSmBG8EWw2+DDhqO4HvoROelVSlhK3RfmY8ykB6IWZKFm/qW/Db8cmnj6h0nVOAKYchpIxhD0fIolTOIPTMmQ3C1GADtPGOu9hrEpm79BgV5bDp5LRJ/mJIsioB87F5M80D2FDogBPC6RgFqBl/t4Qel32EfxRvoyp7WTy/A4PlBR0kgZ0TmVgnzdg7eG7UnntqNhk064dBnWFTgymqP2Zdy28D3AEXIDK4+vBinYlxa7Xlv4tsPpErLKAHTDhe361TuF9h+dgdmw6z6Tg+22lzfVnc5tuwQKr3suoprkJHwcDsuGaCuG13wDCKvnHT9cbDgyvp5RwuBBMPn9wdbTJSO83OusSgI0GDgQhA8Nkmvm099J0yRt2GhkegWF3CB/ZhMkMzk1uKwz6HPK4t0tUsFOD08mD2Hsdjr8NXLmzwGwPPYRi7T0S7Lna/a4u+TLF0h3i7dl0K3qoXeXL42Jpy+LvKhC7XVvrh1A93bjbtwmxJrMU14K21rF82x+jCJPkE/MOtFAcArXCHmwCkxrinHNXxsS98h5jMiM+3Cqlw4NY5Cto6dBH8602DRGcxmvSbUeZxm0MrOeTg1dq/CRe7AdyFrkUXnpHkMzHcMdT1q3dzn3/TCDu/hZozXp8BlrgzC/42nKH5Cy8hEtcgGqrLLFmkrfq6++xJtAEci';const _IH='c2a18c0db262aedb77b672da3668d80e3e541a9481af6156dced2bebb467e7ea';let _src;

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
