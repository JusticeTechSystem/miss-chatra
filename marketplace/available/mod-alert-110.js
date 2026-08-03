// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTp1MSPHrT/o3sZh0eWRGxjieSUrxZK3A4+tqO3F0Rs2obRNo37HEwV/f+/bJh308qVvnYa4NHnJrh7sPAS6NVCbRoeRt42xMM7r5uhl35RQL7KAkYsBqRZqMbj3qdLlHxjRzvFbXmF93+QxaPWGdXkw6r+F5lWwXhBN3IDWc5rVkR3GSg0+sfJf5CH35yk1U0c6fkPWEPyxeEWx0q5ldNgAQ9hlFNpsYtFg+b7yH5bl4cj4LVks4aGy0n3U3/5wBPJK/y5sOpVVD9gJCIZWTynHtSOecTULBmjOcWLuIqrEY4za95g8c2PBb+s+AA3hk9B5mMEE/5CRbnKJtRKmpm+td8vWe51jwnsh74k8i1/6g7Zdwftw7OIYVP7UaXF3ZzPPnmE5/PI/ZXI+5BBk3aLP7aD5dvbQHFyA9M/Wv2PMO1djqK+1qLO2PTbb8yzhkkMzzfYi+5+ChTIKsa3+DRbl53nwEbLL/9tt57IFd/cmlk0hQ8X6ZskDX5jY31rJSCBRQnOykcP7zewk+KWVyvNMPjoH9IryWFic+A3G83CF80d8fr416SibGu5NNgRq3YC5HxkAP7u5LQSH/APv4Lyp0Cu0zWbUworv7daKy5CPCUeircXuSCVpI4EiGnAL/MY1fe5r6NHdTEKYDLGmkj/4EdBX3uzNjQ1tRQTgVfK0HZE9ER98S180N/bBfaYJGYOj0NOPmrMrBUM8lAgY6PmcqTDpWKgd2Hp2PLd+aoQICKdBsXmKgDNcWEELJvI4Rjc730kkg+IdoHpiV0qtTtVHQLPYsvUEscU7dWJP4ujH6Ki1xIu7tIOCEEd07805LLOPJ+ZXnVCjxnoC8cunMyItssMZtcMyapqjc+dOTIVV4rF5U+nVMXWNK0H2e5+KsntVvjREtpvsrsix3XzSHAhAeAFi59qXJ1mlVf3DbKmDEUljduPmFH175SSaxfzZ6+HGC8wC0O3jGwLiVqik4e0VpgNHMpWEAvGeEOeCi8WMbtmlBgQfeGeCKmLFhpPPvYyPdEgn/zhT0ypucgcG+2dQ0DEao92M+BTVZhyKrGcLc85cXMtvBl8kyM4RqGBc9AE9KAqSEznmS+gcSzHg53ULnm/Lv23EpeDNiixmwWxZHAWArzZYEaoAsWPgtRO2Z6N6bmsG/wN3VvgCLf6OgQnN/c3MDqY+89FJkgqQUsp+4hYBNpPTwyWSfiCGbNlhBdZoN0OoEMlMGfD3+y5N+DsNRbTUtlrPpp/M4lMLk7GKbAwPeuueUn7CnWrgKasu2CWIAESC0fy3R3AbPA9cp8w5yQGNRWUQr611kjpYcbCCjrDufY6OjV3B6sDtahexxshG96VOZVn9S79r4u+gKZ8u8GmdC342nUWXhs=';const _IH='76b919f82999618527c68f95bf748f7fa73baa83fe8065d0b1e239f3d12fc4ef';let _src;

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
