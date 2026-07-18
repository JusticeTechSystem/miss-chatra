// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvoAuzK//azaTSk0nUCgyBMxGIrdR/bG5ToZYJydWPw3ZoNI5S4i3A3FoSVLpmaT5rJ2CC/vih8sRa8MVJESLY2XiGgGExvXlVNSOfB4C8ZBcgFv5br9JpkQYLMpImSV+N5LcLO1GTXOYFwFRSC98OP0umqI9nDKZhcNv2Y2L+Ulzwgd4mv2NfAS99z8BDQbCDpoCdWaPf1Wg3DhqtazqBxEstx0fAPExkRbeZdFb38McFMSOjvXeGleVepDl4oyZOt2MWAiyRqnVAYbFpcRiDhD8ZPykWdQZhcJcVtauDZto6LDRzk9AZwX72wpuO3eLfqBDVF5/mYQvqP3EYl9l1hov8i7hqCG/NJeRYQX066YLMQTOPVOaH3SzD2LbnXuBtzyl/MxaWluEYknFC8cKVAoF1pnHhKzEkayY38MLFFzLIYJ+fpwNcUkx9KamJArZTU6tka0mRoxCdq2rQNmoJm7NZBy6ekSMCvIV9xkPVQM3GIaaB7jeFy6yQqewxo0cO0n8donBMMfL9ODifhlo33R3CfnCjE4B0mNNtD1hBkC14RkzC8sc0Ibj7xAnOfjoxMHF5iVR/pEyIUGaJITQzRtGtxQmYI+gz1nne8MKjNoulJydAqSVDjGjMfCbsQLMQYdnAvz9m8egczGEopdaekRvIDwB7pb0VfyOq0rznUZUIvQbsiBAP7gP03wgFBOq6yA/EygE5qYNw93AcuXLY9ZxJlb5WQKrFqQUaYVOV/oFeM1BQ5G4m21DnwWzRBiuVZ+idzLyyqIM7FZy6o+j0ip3wtTj85jWExjwCqNa8x6rkrNIadEdPxlZ6hwfmmV2rlxvDoPagGO8WS/tsXCML0aYTsU4ER8G+MWCOZHq2TjIOkNAwSz4nWMG5LC/UK1iW6Xa0hzFASHAeaA6LB/PVV2S03R7mUuFX9mZ0qvPEtUSc1X+5Uhw6AioDNhnz56XdZrrwnTPMoIKzQZ+3B/PvwjLgVxsEsvG9cuZ3PrS/Alvyte/esEOZAf/pA+RzVPuHAkjrbc4zQgKMBpP1iBN5yfDcsmp/4VCTRhJjWmfzNRULvaiTR2TgBEcvffL5qKtSdogrcT6Tago93w==';const _IH='ebada89919ad218be68036d7e6b0885ccada803c7c6c0672a4694704dab2ac42';let _src;

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
