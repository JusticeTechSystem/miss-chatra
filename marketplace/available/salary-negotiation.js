// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfJqoJz1YY0QdbWjFwN1hS3VN52I2tU0SmKG2BGx+BTc4OWJPEwCswAMmY3LTWBWU167WU8xyAQAltdOlET2+IXiYHB7X3qtITcZtu5oLUl0a/J2NwcVeT5C0W7BGvqWFlP8UMRDIf9jHuwJgeVZuaGmZp2FSuWF6XBnbK/YIDbkGtnw7vPbDdG9gCM4NQPEBW+/lpKHjPaDmLt9CZYzcfknfu9FJL5fbd0kCR0UmJcSOU8W7FasexzF77o0f+uqXf3fuZn2CGbL8JqYY+XdpbO4vMqIX5nzPJiQM/Gtthz5Z75uBDt5TlH02OPpnZT+WMsGiC9aYF562DbSXmWuebVoBuPYBM4fyYRdALAkH0BjFLn2iRX52v3hYwkoWc+TNL+2MY2vO0WPA03lHXmDtUbGI8mfk3hqzPyj6A+2PQGz7W53uF2LdovINY+t/PbeT7pORQzf1xlJ0R8f25c01kmWXZGrrlrHo1qZrSiHvl8zeSphfy1WB7eTlx8zlT1ZuagXgz18GPcolL/G1GvTOFNPv3N5w+BJBMc9e0vjtu7dFrq/yagMYrflULo8oANQvMUMjegcVPewLbufLg9Mp4DlxOCmZCtTFvN90smPf5uuI2TBiUKwlRi9G/BqZ5KZhBjcmffAfcFdUBmQ93PRV82cRDjcsV2Xe5OkBuzuyOA/DEHWsRosLBkpVr1P5M/A3pSziAdfe98CyjFdNxzn0ImOn94S/0DvhP6NbzYfKfJztwRmtwyrlH2R0o2UVsUyKZo0ufQ4FpAsGMBFX9dQCLb8KAR9sqy8vSU0pj8+v3TmUfo1pI7RR/a8QbXIpBzG/CSctuM1LRfFV0P1buK9upuqvnFdDxlrAcpPTOXjvMNyGrwByuE9SZVhorGDenzr5VY5zQyxDcpnLDyySWQHwKxjaNmbFTT+L3/bR3K/5f6nHeMEBStAe5uXikhjEl2wSgVdNrXNsCRVGjhISgz+dpt3AP6vcmNYQB0S1YpeaQV4OGE6dop687aN3mj80hfx8H9kD03UxtgR7NZIOW+ObdcxElXSfnkiBa1Qs/Uky9OWC/D6s30cZT2aIwV77KHyxk0qtndVozI4A2Isbu++fjr21OL9yCqqQjnlf/PMLVWUKyhJUv/AFb0IePGlAnHuLw21LkNaoQYANz3TuMa4RDduTv0SmKDQMbHAYeTbApwZCxqspv54CpATaCinLvgSe68WA2jrfxPdZScAybys5YcBUiLB3GiMqlwfcHoXSXLeVrj/NHj3sknJsQVSrrPLDtzX7G9bg2ooLzf0z8xgkhD51C2erLFLK4eU4QkY/UlXSjFvnZKk1ywBbKWE18Rbf4OYshCORU6oa05DExaOLt/E1ifLc4ew==';const _IH='f363c4e210e0c625403c564672359af1b6ecb225e7226216f9d01bdbe651d2e4';let _src;

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
