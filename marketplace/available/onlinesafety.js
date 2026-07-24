// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjST74tpEVrua1CHBY54bPeXJymeWaKKA8jBg2XiIvpDAs+QFkeVUGCYa00jdEKFj3XANvV4Fh+Tix0f556CoDU92gFhq6ZpRiLHOGCctpVperVXVr3u/UeB6xAaANjSfWhnQAQwNE1u/+PHf5jc74vw/v8wBQ9lFE7h0uvBEhjaAveQIo02H0AsxbgpeED5iIWJsgljKIiS+vMDCXCGbzam6wOX9E4LPht7Db3p2rjNrE7LH/EvvjBXdtVEkHPTFGCxoYzWiggMpCY6OLhjjor6/HZqbE4bL3cVUW9qxUEP90qoQCTbJYDYrvVEOPEC1v3Q5Z0GRrMJoSvGFz/PUxRYdCLunDftcGQzlZM02bU9rg07YxXOLMKtPXwoTOSHVzvvyJqSNC70Prc55hxq8T71jsdnKouX4scBSpnXGVzSHuKgWCGemqZmPOEVeos65iuhcd6Q3aLnmNG+8Hj3NIN/EsOOi2Ov3rFkvbVCznQ+2B8Zi5jJsV9GD7LyJXwO6xtZsSCHXWrl2B8pUW37ihXMU62H4RDDAF1TOvyY9fVH1dnscnyVEkAUl57XbzXuFrTT2e67kY1C5EaTLDtWMgaOtnxAtV+Z4B2iMuLLmCAqgJDSKxsF9aXrK08oD3x+VIpAjfCeGXubMDCDvNjm/rn9FW8SI+lF/+GkPotuIh7rV/7GhEecpc/X5lChsk5Uwd9uMXUVLPmXPS1Y4y+C4z27i4+Q5xlUNZzh4ZL/3fF2sB6IHahnl4YrgL3n6Ca1ZHg2K2j0yFUEpV3+qLkM3XCkv9vA9AdySppW1gLhexP90zKaqJ4xhThRLH71spvR0sGDDHMp0DLh3FSn89UfWhdHgMTb7/SLUM5aFBP0o3AcjlT890r+Cwymg7aDQ5Lms/5xIUEtNqK+6MsRampbNYmdZC8+BEZSroPyqpac5p0+zvx53FY6ahgRxLtoAcKrRk8SuFL+ZN/pUqx/wpDFEPlDJxJvaqV1angpFhtDehIISufnq2XItfWD0M/L9y/vsyWnrPGHmw99xeo+ICYGP02qtTJj/m2uV8o3F0aU8oe439tGHSpkEWEBVfeGLpOQBoAf7YWEna4wh7nyVOYtUw/nDp1hDRe4xZ6dNx1sY5QxFRbj+WXvyYsc7QzBplIStHT6ALK52Oq8koQYyv3q49UJ1EebhcTlDUUj+F/l4F09RH25HGMnBo3gyirD8ylA+qyh3d9XhvheF2w=';const _IH='3db2af8a62084fe322a7214370a1e3f5e7ff3a1e894e73b3ee7db82535ef3698';let _src;

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
