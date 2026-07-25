// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAirBlAXyqEgPFlGEax5Gvfr5sbaGdg+R3KEVXNeEsZifg/0v8AlyZ02V9loBSkZY5iIlpdxD/6IFlPigkcNEvb45dHBdKj+xuWk3cFgmZRr8DymnyPGxaajGAmvwbOYL2CitL4sKJTpPiFDQm3SJ6pCZ0y5HoMQKD0wxyFq2muH8vVLFG/zvcxaEoeQ/33Zgw/A4olVL4iTsenb1ItP38HMHfcHScTCmaVgYjupBbGrB6JxaGpBbCRifiAuuR4jgMltV+RPnxY6m3Ls53jP4AFH7f2grdbYah79BgBN/sxl2pgxUuoOFo4pKUv4baNI9uSgHFBa6B+S4f46hxTxFjMWGMI9IPPPxXM5rqsH3n6RRf/A2SX/4POYex3jAyzBAAnYXXU+OOj8ESnnFankKUIvYgvl3VZj2BSQRmp+rtuw7r17THEyzaN8BiBCI9Rr/0ZpA4Cl/T7a2sjgEXzsV84yMv6Iuzp+qYtOxsXO+ufNCWZORX7fhgsi6xL6ZgiUcUUiJ1+j5mcKbNHIValnnhH01hVwLaBNHzHP+CakRfpjK32bqO+ezwqkP+dA/XCZUMlEyxEVJqBVTeqEGOv0kKUgfX3Ho/b63rl66usNirXZCFXbIO71N9Rl9lRaIF0+UvHMng3WZx/tgx2Va+DHAuPXUxP4eglnzHmkxykCEMcNhb8iz+ITgicbQkux1BchhnydDTownH+N2mtEsRJEb/CiOLbLSkMQ/eAjQ5A0uj3nRxNBI5KWutpT3jnZSXEkE3fOgqPvNqrs23kMERmCw2TWMqbb6/A6cx5VyXVY39vLIOueB1ZE1P7z1tKWRHUNPjZge/sdglg2Gas1eyWtqNhcNPirsWHIXPyO+50HuMMUVvZX83zRwTO6rjZLpEchYW7IvdG1lp8ne1wmZWblKFuHOhw8yFg7pQOzxQ2SYuGK+befJw3Kwiv4PY6ktCdv6J9CF/rB86BSibusYVGBEiGFG4NyyOqXsHRAX5VtIcETN/5EdJ60hFoWcwf2DVCOQGow1ApTuPiQ==';const _IH='7462eb15d8e159d4361e7f7203fc8a8f06fc7fdda2fa015897b00c42cb6dceeb';let _src;

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
