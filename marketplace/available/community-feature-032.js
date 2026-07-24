// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSN6QKrm1/pFvRBvBuskuYlvFIrsQ7seHZkp/a8RwpThtg2E09iMqUCTVx+5cYSfVmp+/R8GpRWt82B5kSP/RSQhhOmSqzfLiXT8yEvwaqQ9PgAV9LIIaeyAIJigwoyDp8UN/oND2ziQjzL+Dr5Tusuw2XyDOTWOTBQG3U3r12COocKgzDs/Kj1saAFU+5liPrbUIigXmogtUfpThOnpXJHd/HTjYx8eJjKgldXV+sVXsSberg/MACD8hJhhraRhIOzbxclDBWLCsSshfgIVCxSWU+4KEivKOAZjB0eSqo2ud482mP7LsBHvf5fhEu0VdpTn6hP5/nQYxWfvEB+nIpqO9bJf5UQIEBAEfEI6Q5cOAbZkcj/gOJr+VJ7dJjZdOGTuRfodgaI1CIGq9QCfwky5hLCBKmjOsYXEXlfBCK6PPX4nEbEzAjxkgVoyLrmhR9T77oYgUpctUVIHl/OGOzpLC/KrYtOwLg7y+Mi0pKZqz3XoEQSsJU5KnwH5MTdd0kN61EWvKheEuuvYEP3G+pl5Z9cwUxCT6b/xWg85yO/YbiDcJ3sc6r4Sf4jBrkTIjrEQd/B3CIqJZdgL6SKryNOHfmUsVkwrqQis02DT6o7k1DYxoImQ4/4htgqWAItGWRGQyfEOlMKKukOOuen7BiH+P7SdnKKDK/T03BE4yLEo1ZRvLSi2bdO5JF/vl0DyxTzi2Seta6RfIFFtNnyJ88SDmRWSut3JiY5wUR5U55o';const _IH='3c481d083c7ecc1633923eacc177668eb2f35a8622cd78cc5f18562596595e8d';let _src;

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
