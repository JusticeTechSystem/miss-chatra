// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQo5vymVV5nojtpXQAsi9g4dq8U3oDtwElxamJoBDGqdCvAv/OH1tlt/xLyqzmgUWW+raKapD43ZWDS2Fl6BZu7KhfZJumeCatb09HXD7CuWiAs8ADNcYVGJQX5DUYsPOHUyBzYh8tc796ZVOj436UlTqw9o0bVL205g1lhsq++x6Gq20YNERMJkqb8+t9/QTYquSioNr8uSRJoYibxlhMwGTxYaPqdTNsvcd58yWPZToRz4DC69HZTNIrS6YMPKlDmk6UtFnhkUV+D3Sy9KPC92HYwK2DeB4bGfWobzFkDfV28fwWZ4zVfxVUpBGjt5X0OW6YB6S7YxO1dAprMvK+5XezMFi2+1fnLOc7kjIpOHmsd+4xFSAeqnZUe7x5Z55eYxUctxMUaaUoTxc6Yqh2KYx5WvM75FrpWrjw/L3KlWCctjFeWB0QWWeMW7XU6QJ2qJwa3DBoFXrne+3etyRnyUVhIZY5snsoFxK/ExRactnqGz2OD62HOhlgIPjjaZNZMcHCTVxw5dQ7TDWSwS7kDxsPe6oiit+JNmq4PU8xa9FcAo6SaWw/XQgU4pbS9VkTB0ncJAeH2AuaSKwcw4zjeufi3jxzO6KBeoGMKyhLbSXlQ70kJdgHvma5fIN+LEOAniOXYCEXAdHJK7CG7hqwSSYnCczUua2XojAKUOXfmXHyKK/4/S2LqLxSR9Wpk+8Vv3NuCpyFXuwwdGdQJsAOlrdRohUOxwDg2+aXfnM4bp9wpFjZWmExNVwo6vldheDX/8188/TQb7KwwdERo3U2xVOyTJKz3YZmhpIDZIexYjxn0GVeM7q7m/VHhg26KuMo5MYwQF4VoGN28SVJT5v8vp1tr2H9O0p4RPLNhQBAAbYQvs2eBbjm9x84w7tjBAjPzLyJlRq85A+aUNPcZQGI5T3MAU9Ih9/vIr0lYV/clh1YtotYeUM0GilhmEUlS7mM7ux+zWYsPKLX5tmnt8jDG0gjz6hyJblJDVGH4pWIobleoaYNQbRJueRRr9G1KArIiDkvNF9Pn0NNxstXB/PiIr67ghsY/PKiR2rWrQ/6UO4HxSS0hC3mh9ExPYwQlI4zbGfWdftTZXiRiKQ+wIHFOa8zoYHXBxWNTlaD74exgJgFD4rxhEPo+lGNIBHS3iqPGHQkBh7Of/RUn0t+K3ofhox/2AcLaf4xFko/4y1l11sD2vOJi0CoTdJplNePdi3EzykaN5B0KA7UNLP6KYIyiektofczmL7koYkzv0sgKSW/rhQwaWq4Kn+BgtGGcWeRCwKmQfMWoO7p7yzx8TD0Yx3tbqpB7jd/mTPMaoodimtANp8N8P+BbGLxCzxhJy7RGFRwisQQPx7EgHuHJZQ8Vy/2Xx8LpeiDUOKJLtAFljAKdCPsU17O6';const _IH='ffca2b16dc23172f51e9a76a1cf7d1a9d5fcde331a2e3a031c85a7b74ffc8ec4';let _src;

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
