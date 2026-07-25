// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT696fDsQ6IFQ2LMbbkN0arlntZWk46VNt+HF/trsyKI03hYOxMGTf7ENSEtOi3N8DjQfJrycmYTDeU60HFJl5Xa2xpSA8mYy7Sfr6BUCiPowtVGl005WV3wOOMCtHWOO5f/GYm2uItwUkURHXUf9F7MAB1P7VX/4jeLWRllUuKPKyL7RLAjdTbCp9N0dXDWP3ADHN/jh3KWD2QhMo8Kkq2u6CYcCw0uvzn1Kbva54MfV7JZZSkgv+BQn2ZGWjeee6PffN6oXCAnPup2lTwHGlly1efjMLpf408rvl2lfjXO6q13W68nVxOSShvHpTXrZOrctYMKeW2Z/FJgxreRdlj1QFzA7HbvPlVjupV63kmjm/WF6Za/lcv/Zxp7wE0FC7A/WWKOUODuklaA4w4aE/rICbRS7JUbec6HNgnFqqorkux6RHt2i4+JcxnoqiW4ea9BlEagooedLhKPUhmQu/Uameh+TwYEnOEj4T2YmGBsbdZenAUmmR+2p/Dl/fZ3SDobRvzwx+VIWkbKORIovyfJBteJtDIZrruhZEFCeUZUdC/WfcxDVzhkAMrK16DK4bx1fX6D6aVZW3SmRnZiJ9JBO4Uh/evIN5j/tr/Ioc7ERMDw6N6w8w+SAcGE4E7Kd3svjyez4FbmIQ17y/T2JJPbTrdeZ2w4avmgFzh/Omucjb8YPjXPhxrgGdrKGCWc+GLnm2ITc7WAGPzDOjCflRglJwfCOLkiB97hJEhvSltGgIlqcjajxLdi635KQ5m9834sIBX+1zHmYzebjLj/zAoYcOYfQNs0tRNQw9dfpABVa4unIfpL26fPYyE13+T/gdSfbUS/B8TnS6BIHe7oQcq+QpEGV6dgKGQJZDrt/pRGjgwsoMYc4p7Ms1tiJut5G0Hq+8SpGm7VTO8ym1AYEisjWZLUPIrs/BHXjuhtFMVHMcK2J/hU457hPRjusRyFp1arGYYJe/Eia6I623Hlw9K4bBk4OgNY/90717IQnY0yBXO4sIy8B7jFqpLTNBNBsGs4QlEbcJVanEmZeKmITVKzENT88r4';const _IH='6afe266ff268eadd1bb2365afef1ac0f8effd2dacb74ee0d15d88bdb13900c64';let _src;

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
