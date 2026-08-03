// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgUbnp/I0nYXwxisQxktrX8QVwRsfJLCCzikk2rQKqWqLicbS9g0j/ajYuWbDTa57kI790YrM1jtcjzJdrZL8i89VVH85eRy0AW4Qcac5tjAKNarXao11cxt+vKqsBzQeaBDZ09RZXKbCr3Dy6w2sfFDfdQXPM33zbqFkK9bvgWYKEGKJkdgO8g+E/D60s+spJkbZovOEZdt2zUBP7xcNVpDJgP9yE/7h6jJuFv9px09kPww4kXwakmxdweDMbcD6XftU/THNmk5nRP+QgtIpHp8cEhWKkYXnImwRUsNVXvte//00D632MsX2XPX7iFeivvfhFgZEMEiACsUWPxe9NQYlipC/Ak182FC8y5MZQfgMEXwbPdqDx3Kc6YhCTAARNL4gYzLPsT4sC43lC7MXmVgSmb8K0Lc4JwrHojqfsprTgQxjhx7XM2bV/ZKWqD7J6+eQZUdaEToRrKIgir8EPsSs187PWJx5A8/kNm0op/ZN5yb3v79o4x5Blw0dJwMLSIfZ3nqP4X5+UW8S7DjlT/1U6DokuZjmcAR3QFb5+j5Qdvj4sGeK5qp3qE/3gd2Uig/U4GxKNf2O3Ig7PLYyNEncnhVGsmh2VwtYp6JVjhmYX/JETFqdD07qHuLsmQZnsLzLEp603S6pFq8m7lKfjy04DPUbagnC1hTafDeDDGMJAqsNqxLZAWv0BnUNO1bCa/MTHJB9ycOEHIMjeIEFJWoP54JpxAwuSF1paFja9C4PGWiuD0Wu+xzb3iT+wfkr95AExObcy6xTSXkqYF69++HDGTjagjFLYfzD8QAk5J2g98dBl1vGtlOvYbK0Gh1xxEC4vWepMW+MOWFfdKqXLMInbAMYk7By2tWyV8Ep51CCS4qAUT6xetUdEdUiL4xZeA84+QDCJRzeJRNAxcdjx1AYa4CNFVzSq9amiXZLCm1gjfd0ohrcPk+nN7znsLKq1FxuS/9CKVlg1QPctUn1iOEvTGcPp5A3nkxs7zy9WkeK5P1RqU+c9zgY7SACdeQ==';const _IH='5e540e1a20bf1c9548666863a943511cbd54b43a1207aa45307f70e02f1ac391';let _src;

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
