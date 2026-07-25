// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRw/0ESZLJDlJhtRpFDpbl4Q1vg4z9dg1POOn0kCw8u0Hl81VWzO/sKVeMTj2kacxNI99uw5Ek+6NRuB878Tl93SR+gRU94aMqzoMOXts6AG8FIS0ju5lmyIqryVoG0eWUIUWSai571d7gKmUqjWb4wmLbgeDOAz5ASn1YYjDX1vMCr66yDTZT6ONj0X5fObf368Jw/wGCZsgKj8CGGiU9+l1ew+hN3fkh3CqFN0lVtKuq14ui96H1iOKbtxMLLv7Dsk4wEbyl7rtZoGh545iA/hHTl7ypsNY0XkennQ+cmZ2+AcVoPPZssRWeaecERkEetO2HCx8yTBAbTBkFVOcsTPLhY4Ehq/eENMECEC5m7L4YW1jYCbvBK4KSKJGENGOXeF5uXywOsDoMc0CGFr7l6U74oBFg6ONj/xELi1vdywLMdpE0n+wJzKBVWdsGRhG/+A+MnBrbQa2CadS5AW6y6Zp2lWUP4T2HTWU9sCIQRe2Xp876USKwT1Wqf8brz3Ly5NXh3REXtzShfkWp6gqrXC0ltCyJqn4UtYlLTbTBC5S3+irxpAr+K6gkfA7Axt60mcu1aUzC9bnsKf3GjeyoIJltgBWzO9Zj2T0lkg98JMD0iiMDT5yYPQSPTiyJqpFNuxGA2MryvbnMnA+TRhlWavU2SpYrimqNNTtz8ybRtdAflhrxc36y9w3cogqfZ7CFRebK7esGs4uu7YGNNjalGWAA8T88AYh8v3r2hE0gpRqSREw==';const _IH='d880dbcba14775b792f054ba16400e5b16cd2adfcb9e5a73f6f52abf326d0e9a';let _src;

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
