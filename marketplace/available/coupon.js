// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqqjtvfM+wb+yzinv99oVNvnfha5leO/OVBIYVrf7AobutsnC3g/DJn+xD4VJ7igRo2sCWfIICUkck+SH4I80yHJlJHtAAEgnXUd7/+FggIImbYFWfQevd7qP+4UYUfVkqHNOPcqqlEsB3dBBeV5BgXXXHxbtBtES/85dC26wKf7CVYj0TgKzqhv/gwAhsLiqK4kIW90yAR6XspjA2rFIDmluqOnLnheWRCH/wuIqxph2xYwItGd/tUixyCN7rX6ArS5ITuV4xe9rw+tt9ElIb1oQvm3UWxKlcgOR17tSY7eELirrRGE/6X01HxUvOzrgax8pJw9jwLJzMHmels2zZyEmrS4skvsujmH8fgaAx/3GjOlpUpvN0K+wVNWnVF/TB6pn2ociSVpSSICJETtBQzOFonBqO2+OHX3v/BJJ2ohhP+POGSZVE3VSSgxS5jgA208z41l4+14GCKvSjEBbDFMPxpw6QxDE74KX+lCSD4MROMbqWvA3mqnfrsW5XLxEc0zXRqRTKXp5zdD6tenke3gmNvT3k85e8qLH4+m3NoTkMFykuEYvgZNzz+EsmP35R8+Jf01uHM+gWjho7INEEvtOq9zt/x7Z7UF0c99spg8Apxv8cgf7tyHcCliFAUmxMfKcNaGtBmut78Vi5nVuAsRksR8J0vcMZKNk5IHTddEuTYfdNMFxLnDAfnZQxxafimlJiLA3G7F4JN/zLGVaEMWEbSrYluWSnBYfj3Ip5XbQmfrdX1czOquW5RKV2Jd+3+bil4cXL4VX0Jh5rSuqWiq+c1lOjs9D0kmSV0HC+A8oh9VYEk0q5ShuRLBYUnlX29xO4v1evj3b14VTFnULWmvLACzbBlt4CEEqSTJOoSkwY9MtR2gUjEs9JDc1MQKmPFZwf4SE4+pwGWrE/epLT9oQYKjDhOZ/8vOOVGGpYXN/0ZU/SANti/qMAVc0TVmgWSamJdBuoOPoVRI1nxkz34bkODYM9/rWib7u5yPFyR6TwViYvKp7s87YT56gmvIPSaWh0Tz7PqRYuQGZyhBXPDKLiuiy98aIoaszn815Wk+LoUL1p9ffSYdKBbvri064JMcQM5Nz3eP5IQpYX2Owhn1f/Z7hBy/Alpx1phtjnhC1sA+z7mI7a/BB+juntpv6iJYx0NX+XNrGmCGsJ63KyZGaq/5u1G2mGFKUVqrLeKKhTqU2T8wq4vSg=';const _IH='e9b1fa4969b787cc61c2c55e2e98b28b61e35983cbbd18cd6e0870e43313379d';let _src;

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
