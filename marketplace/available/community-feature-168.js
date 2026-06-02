// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nmzoEO/Wv6luB/gvHAYnVh2fg2AzqdUrBwiNSYQBJWs5EW9H5OGQ8q/ggWOMuu333UjxJ6F8Zjoxkmh8S52/1MToiD7dv8yB7qzPZKzT3imoPR4ocsjsAQ00fDez1tXZdzrJrnrkSeb+gEbVPxGdeO+qvPuo9maTtgVxS3feVEsTK8YOClpD4bvyGArFH31biL3aeY2yIs7609uVlETsosqnzu/2DhkuaYIqJS7UyBRLlIxhmvAWSokoa48xaSc22beWRxlHqzMpOxHew9+zhBfXZGtxqwsStQxTaIrh5Tg5QDe6I1Uz2bQreOHuWAy8qVml6X67g26kvnuARweqHPF2kw1itiOE3MCEwCtOhcusCAUPpmjoGeXngTojV0GR//wssSVmzsadLffTAwjbQHPXpU1mgqGqxD1ZftrvpabUtwU7vdOYAQqxRYG7WDFFS2dsVRILZ/+DeTm6Pst0fTkME0I12pzWx2jtvuw33ZPFLqBFq7lAd8sOLsQBaizyuUz26pXgd9uLYlMlO+2FiI7CYKj6lGDar3BMa2PVKClBiOZSoIw6Vw55hxfc+HUOdDb/U16unZosL018iOVmGufnghkMY4e5BAfB52hpwkAZCinWhx1BPuQPmafkLMZuao8eyu/kQlu/St+sd1ENuBwAo5jeTBDQ8/E0rTFGXcDUMneMjJ2zFFv4Y7fXZlSoWH2rYMQRcCeK20u1J4QDC6b3gPOKjA9YYTBp9LE=';const _IH='53aabf227ef8dfed59354323af63a80e52a5516bdb9804cae783c9ccc58e5f5a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
