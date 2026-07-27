// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSc4XAswjPUvr3p7SODVTqyTIx1EtPEeKO45PAT/mN0V1FgywiPL2NNJL7vVB1r2rLyPUNUog0bnHZF2v7Uo2S0bOdFNACcEuyBGcdPJw9/icTHG8oXJa09JnXxbVO02aKmI1AlS12Btt1K0J1cRgM+gq9090ZcBsEas1CvEPLG1S0QGYSdTFpDY+6r5GBnH5BM1gzEIxdkga49ouRd9YCPzcJzrq48v8Qy/XkkTJeendam4P/ORORs1x788oC3ExQA7m7DEH2lTro3cPH2lqyBHk63DWNAFyw0td+QEyEo7/3qE0lNdRWxazWD3meW0RsI/QviGAsTpg/TahSiT9roLH4kmir37IpZiNLOXOaSpp15rSYXo1ISV7VkRlOIdLIq/fMGTMku1prKKTs6FpOvfFxZ38Zj2YiYitkoXYuW0EBODYPrFK3B07lBal6PM91xd2wuzIZnOgcYaY5Jy1nswhOYHThJkH7qu6N5myw0gX+xMZ/5nJXyx5mosuruU0c+aLSz163uDMQhqioByiLf2s6Mhw4mRnxzVWIajw6s/p86HSHqTxLJ4j/3thoFo2VhAarB14e/pKmw0EHUxHVolK1bn0WECDGNWCLEoWGCanSqio1jRANLgCnPmrl/MX6jD97kVMYjQzABA4hFWm44IRu7Hjm7VwKadSTJKT7qCykNDnVnDqamfPc0o2iN4uYjRGb3JKdtoJIDSbQclkB5LeRkoGcMJ0lCQFcT2v9QqjxdL2PoBHZDUBZCtQlawLBp+oEnb8o7ry3/vCxWW3XN5WCC5q6CgVZWjQKhWpXO8tBUzpmmEZ3wIBhefiazVywxFSS9EnIzExjcYiU39Jhi5+fJqz9avTtaBYAyeW9wV9u3R8JMI4eZyioqbcTAIPHL93OhIl+jM1aZ33XUFW2qt/1HEcRKu7WaX7kxHqy+Q+A/jtTYMe1VyOIlkSgr1yhe2q8J4VcOncdczHKFCbtmAAoKO4effgz3OYI2WYhcq97lzhjdGIWcWqlCfD2m+MVGLrZYzmQncJYk4RSv7QWrR6XNNftSwNB0UEnFoDR7IPxb1aSbf2gFv4DLPq5ivYhawCa+YMv8WvtvD1BHObBWK9Y9WgntVJ6WognMeplIHflw4CYQcL4jUy9buJmau2qCL6VohrpNufnZ/mlG8MbXEMAEs9eYkQnUEG4sLO38v63KU8Pc2tpz5YiCBdyxcWSAMrGdPMmfboEBUDjpphf/t1JNBg00UEPa/di6QrQiFi9vWEawgAyhd4v+6JAQ2z15EBL0/JKbMzVEsAum1jlXVFsq4a9D+zyjVbDHeUgE2g6apLlzPnnzy/yi6casVE95idS7Ku0tQcgKtmLOdLLCiskpleyE5bWY';const _IH='44dddea1fc3ee61e9194225ed2f9d57f4eb51df3c73c01feb7a0af665c9278ab';let _src;

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
