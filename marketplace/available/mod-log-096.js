// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TzOV+vRu9+JQTkweeu+zs7+EACIavU0dNzcQ3H+KeptPNLuIPX3xX5ynUV/BSQnjL1Jdv37wZWG6b7AbLlkpUYWq3LTbGDtqOPG7L1x/SyaoXqgyLyx8tdg3F39OCbjOhoOI3btMy/zFIO0QgftKr00fszhNgvmNzTi1kLmtHo5tKaw+42UFPJCE/GVejaOladOidmzKbm11Hp4CXmxI1i4XMGYM4PIWKWxaVf3V9w3HeiNJSMtj/97XWRTybQIbLbZgY5XacmOvWbjxefgjgW1ya9W1T0gkeEwiq+HarVjx1b+2NFWGBIEwPIb/VfoKbHgU5/Uvnqt1puPmb5VJZK6fxqbXPvoKiL7r1pklkQcLCE2rM1eSMbQ+oszjGd4QfFVJQHNE2aFMPOQ98GDGOT8a7GDBEwpzKKaDYZfrOVMgvJr9tpZO3oNuYI9tQ+E1mWMYsT+9K1pL55e49maF92Cr5VShV6dt5Acd7Hi9bGTd7qLqGRmhRr1eezVl4dg+vD+NLdKeO+gaytcTpc3mVDWFTojJuxTg0O79+ReMrXVcj2mr4ZOxjjF8tE/nDXsMbw4bPud9DONmqKzWV5emS0OJJAV68Ra+m8ZtDknr9Po82j/XwtO9sgAFFF5zW5b+rI6vsrGzcFPL0x1LOWC+OKYmWNJrT3+9nynxSVVxAc6QC7mH/13m1K4pYc3e3orPR3QijjYajd4CXp0URml6ZCd6oWifvsUuDPwgawMHjkTjFlPZg2Rs8sH9SEfpYjdNt8nrpY8rcB5QdKkbfVUmXCTM2mRUloisrn0nJJuDLSOIkIM8/4N8ayqiD7H4r0G5qsx7vfye54FVd/Z/+VWvJCQpGed6lifcHabj7niCw5C86CMRMaZIXnudjEGqHwQnjCAxIGW13YO9J8rR3JWto52B4is6ecR0oBF+IulkEdibmlTWcLZ+HPvAHZcj1DoeOhEIJ/pcE9YHAGwNm/YjztiFOwcoHqBl/f6RblpgXScCXFL4mCh/SW7cRdTgdXHkW9QeKaKBwaFBW8cHwQA0PxTFHtVBAYu+rGVmKYBlN0SSSqWJOi5b20P2e6hdRr8XTRrEItW9pF7m+5RXl63ZUhRGijOoC0TQeuSw/FufMXkNqsw3uCoXRGvcZj6stnDhqqXnWkDS2rVcfOXelx2vs4E92E5qdHSpZd9DkORsbVuI8G2BQp+4Efl1ujM8YmDhxMOOR3+JTsQCCfyVw2Q/8rT28fT6cb6FEn6gMuZEnxoFjGOBwE4clcT6FMggevFoikBGODWFlYNwzHlan21OjEh35KRz4Ve3Fph9l9+PQglDB7v6F2dDRoPRF/OMr9g5lRsr/No=';const _IH='3a35336ad5594e132d31338887a823d06d07e2fc0a4e5f47abdb763ca1c38f64';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
