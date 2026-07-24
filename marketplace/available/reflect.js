// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjGxr0EsUMZOKy/LHtF19cT+AnNdir/S2ccmRYi27y95lZxlW/+h32UA/SH+lU13OMnTKZa+4qz+Azfqlwxtf6dMH/EGKYSQE+wsZKKSFqfheDm8xY7T36MssiS1Ee2DX1DUNFzos1vpWzpgcXjjdOmplDSnfpOw70eybdp7enqEYnMiqg7VmESwmLTSc1RhDj2f4j+arZpPmAp7S/LNk5NDmMXP97QeJf9S8ik88O9FdlHOTPbqFkX6iFpcMtagENudn3VQs8SqaWKFEiDoencS2pyy/JAYL4dU1eUZX7JD04SnVrZGmdV0CbhBFuLu8xTDwGgGVdToDyoxSQDGtxsZK4ei2n0FIRbar1cUv1Dvhj9vgL4WAVe1a/Nl2v6fdMwgJ7y/gyYzhGrGtgypnCpa5ICQoDR3HTYmlcGiEglj+saF4aTbNjPLM854jviFWaOKwu2Fo6BrFpDe3eW73JBg8DiHoUk9bsrTDVB0mWhp62PPGQ3Gm59kRoAoNgx4+stzApGll4aOAU6hx2KnifHv/7NMIlQLLlZDZAPOjdUrwuUu4baFhHk+lBeQHHdSQyEb26xOGrpWD3uP2gSkUwKXuwwG3lq7e1ggbtuO3mGULnGSDf4hHT+QXIm/bNrCi7DsJSat9qcpCCxdUep5L+cXASQN+uJDD7M5a6y7ANHfwcw6sLtktf0bO5h4/+3wOBJNd5ihhCIJPLuUIWh5KUrrQvV74OzKqZIihO+ESLZGR3vKgfGhIu/uopJh3qZidsZr+qn4M6G020iPv4znI56+cyVpAs79OZb1VwSnprIcKW9HYLSNeO40jzNjf3qClF7Ml8OdDvaLOCSO3GL5Fq0bKJRU3oJiFLVQeeTn7B4lEG0rJj6hPMH3Pdgwm6wvSwd+5JP8tjILV/bxGoX5PMnICD/CneJ003ULBmhhcp4rLQ4VFwFeh2fSXfceBXglSnqe0ps0YkahXwVbBE03CBegwh6JxJVb6gyF+OTcsKwOgE6NPz8jM7YFWJNBbNaE1I7KTR+BqflfIkiGVIoybZkBbw20QRVsISf4qOtaVgm7uBhZ73d/aNGFnX+S1PrIGROnrvmIbFfxFfKnGv/yoj4VfbyIszkfWuH17oR02JMPoRY5aw0KyXptyYP4rXSsXjbFUGk5n4h8rV6PMX4VpAf21VSAV9lvfdRjjxrzOUP3dSkZFLnLPKkjnRA1Cf+ULVsL8=';const _IH='7c6f868d7ef6673a45b9f956526a1bb376041b90624c67c2f83c2411ea4e8505';let _src;

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
