// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fftJKBsRkuoD7Two2V4Lhm2AFugRB0s7bXSy4rNn9gP+GrNZYLJ4n8fu+ODDoWPP9TfCOj5qatDsbiQ7nwG+GmxbN8W2UXES1Rrn7kseVrYecNQd/AiT0HDhJfjHk/OBEwDH4NA7L5BjGG+lLoRWlE7sfSkRgRFeHv9fw5ZWtKZqV3BYJgLmMmH62ONlpS2KpmvvCIO0iIjeVor7n7wybdoToCJ5rx6kCecSSavvqfu3lLevXygd2YnVBG+oqLdExtKWnlUytzeH2xyto1DkUlEQjDE4RT/OepoK54Q2w2Y+pptxVaw2ac+i9SkpVitbEHeou16yPzTmWzwHIfv8T4MP8SJipB9L7Tbk28h91Fi0YzFdVd2R6hAm7nohwn29vZRB+Vot7WE8teop64lCmLnU/Vlfj+co5xCiNVb6aPlK+PObWG0jK815q8QDWpv06FfnPZAeDIwetDttoMPynKPBQqRIiGl1MD64nKFIALqPNQXpoQ4f6c+3q674O3IaqyWmOB/lhpnw9PHsXcAeiY+qzNpelrBgUB0M/Ivw/OL4y59Ht48cRIR7PhSI1l+JZEKh65EjFrbn4JKj/UAivP6ZrZH8Od19jx1r2PGYNg/pFuBYvKEZHMXnowgSuRaGTawsqbPmodddRT+OQkYzDtZ5cUzvFJuuhwMOGFLzTkTTpltP2QipMdxRvdYZ4+n0IRKNA+i4L2/yaBziYXTmXpuXRSQ3GibZRkglHiawxt/7EBTUgeaZ+y4B6nWGwIugtD6tuaiCbjDQtEmXpqzAeBA1cuQ+TDnQqA==';const _IH='7dbf364e9e90e1826cd35ab77e45b758cd65b6c1b14f93c1b406b61f98b27def';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
