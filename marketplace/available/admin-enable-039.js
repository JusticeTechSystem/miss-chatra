// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='soYbiNhsiXiIPW/jFEVTIeoBScPdigXGqmlxbAUxD0IIhEhMis1eGsolnd7L9MZPljDxVmDmpl0htttydq/YmshbRBKKpGfLJd8hvh7YHVKr2mKErFmAkMkx8hyVG2LICgdECXoBp2Ua+tt+xBvi7sfMZXESbTwu/S60fXnTet76pr80VEbhUViIoubMtTnpcE6+SWHq0v/Ycb+vU/+0Xz9hqZ3kwxa1jXYMLOecUtYpJBj5UqDSo5ahpSl7hgF3JaXbJI4PDO8adiBSgoqOn0k+mn1bi0TLsLNZ0nPbDulSWWcbGObg7W1MQO3HxsoPkjxnlcaY4YYAon/CDQaqg1DhCedUPGfv1CAnUGOhyTwtafyxucEcCF5Ae6ImmSQm8s15Cnhmef6wnb93bs/s0sFjS18jxtyS9yODYiW3xVzcQnnxV9CrwrY8ytbv7cvJUGmlEkgTasltjM3obMrJzF5jxBHhVLEZK9EvSHePHohyxPiMLerwfltyfiuizI3Y104btz3HqgrsoPheuMTVX7QcZbsCsu+cs8MaRLhcY7SxYS+gHrNcGSugvXlc07jCfuVemym3MwXtDWAo4I2VIkWJr5qzT7b+CRT+wrRhrNr6FcFrrggdSV2oC2VCVoR3rOuC+h8uyJCYF6EED9s8GqXulahxV2wirZy5qMyDsofvPhVHcKG9LF7PAOjTgcGc1hV4txhl/M438A8uasWuFXeHPJM3kunaSLaTfUaJalz36M/++XixOVfUWIdX2wOeqS1vHwAHH5WOrORFHduWb0Q4Pdu79nSfp/dnbEaF2CmJjJXU0a8atB6UaB9XZH/iGqwDV3aXQaVjANMfw5pIEupU6t292Zxa+6XGorAj3J9EE1A7AXbkyzxwiYOHtuC1Dr85nN4EBVS7hCKXOlA7oGKpBTlcyYk4z18ylGARYJGnYpTBfAQCb0RH5U4AyI4CnqlClwoEm4gXmj2IIXYfKwoCme98aTW4UFfcrPe18lZW4U+21L5w8n3IfSWr';const _IH='a41e488d9eeaed03d3696b2b4265c6877217884c738ea7b0854256f953a317f9';let _src;

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
