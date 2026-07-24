// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjHkl5DV3orQUdoHnU8UfRcF0xL47bOzkqbsi5x1b6pelV2GrYishHBWKmJXFPmNbxDcoYBSq/zO+Wm/TXqsbGNHAWz90zNEu/L5517a1hVtrG281pfdfLTExfTno/9WbZ6YPvz6Bk5Q38/i7FAc7ANhhCbJwdfJMo+2CPEdtJbGTELgjFBCncjyXLrqVg13ru4yDi9mOXfxA1lb+TgaNJJt+Aq2TlyT58xI7uxC5TDu7MzELZjG8yTB7O5tyMt7Gmeiax7/wlmv2B2G6S/3359hl54gI0c+YntHWpa6MVTFtyd8VhB088fX3WmqTZD/yb6BFcMA0n61t+Tdh0iDvBrykAYkkvnILMuySYnzIlFop6BD8UgjjHsYfzIdfVb1T6HSzBZhZgM6skQ5hQuwQr5hU9pKicOjO8LpGcKM9UZoZ5V4wQKkrtLCPaxdekMrqET4TsKqxywMU2OGSfTuKJtzpS/8n1tw==';const _IH='3296a277b3bf3d923f1548175135fbe53cdaa32ad0ad78ea43b7c634deba31ba';let _src;

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
