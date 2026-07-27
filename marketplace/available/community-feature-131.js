// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT96FDOg2eiTtygB21XZynHdaFIeqlck3sk2UKNIZpCXBDnrqKYaVJwm9bT+Hwn/gHsSnifYD3YP+Ka0lG72fsJwYtqlVn2Gljrcft759OabxEtYiAVVF8AflUHaZpmTyX5HeSG3uHOvB8z3/W2hGrsSzpgV/23Wkvk4WsW3iGHJ+GR10YY3ZUv0ZwOm72AWd1auhu47nSMWEw+3JEHhesu2eiIhiiid1mBou+gZ5sdx6YvgkU32WwF0SAMWmQCiNn20TrhE5HPK+fWizRG1ywb6e3OrAcOX+xBFG3sxDcKVkNwSCFvYsvl2YDgRq3qR6V7+Ms7ooEAuc5lQ147VPT6IQ+RbknJH3dGEOPZQwoqPNlfmE6DScOSID1/WWe07lUgFP4u6QAkGmS6LFqjlMh4csegvG20OY29pI9LHOqzbWL7aeqSyUSUlFiuq2/wGFW3G+PzoYWmxksScstRzp6nauIo8cpQomQg+xv6dDKCR/8isC0zw715+s8ufKMsroTl0qaSp1c74GmZiReD5GO1TRO8xtqgoVG9UlkSArAnvk8MhsyBz3fvZewldRiwGVhzMqx6Lw8+s8txcyZfPdB4kh05Khu4YUdly/BbyMuxQAJV7qDDsEBkuCXEUQf06Yb8m4dYg0m6pn2zWi4tpnYoedwyoipo2dcJGdCmq716jwX/yieOLnw2gi6hZTOY4F8wBc1MgAN/lbazIrAK5sBxpeLPlidXUN8=';const _IH='b651dd3f1626f0d9ef94843640f3d1a9e02dbb2dc7407ce5d76ea2cd9791115a';let _src;

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
