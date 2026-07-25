// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYoPzoP5K+pGuVSEYb1mDiKd+GQ+JBxUBbdfGQxaewE7RAIZhYina/v20O06bF5wRFDPzyhz4K1jE0N/pV9tD5pS19KHN4iNhZ432GeITcAz7UIafZE1Na6Y7NTx0hC2vcJm/RY+k6Ua6PsYhVCTIvkaWiLvklnN2N9gEKsmZWLK3jeF2BJxvnmfxljCx/0iWyO7BvlvkiXFzcoXJTelrOrup5cnQbKFt6sUOWQSE5R0inrOAC9SQ+9zPMsDu3hB6mUYvXAx/0KcQhE1dyz5W0MfiSVgeqBrDStxuvShSg40WpsN0OHgrkXoXR+0VApM6N3FKfHsVAhelg4556QMuZSNfcVYSMNFkwRpU6QwaApYI9OYyAscWzwJ9gT01Z5O+M+usT9W/aIrwy+khISrtX3Rvt1OS1GVj4HJUkLOpi3LRb6HoLaL0bODydF4qWQkihC/OBYJJvACrdKC7DPTLrrLAC5VcUJHORQNKo3aw22tXMA1zRkUnBmN4NRyAPZDYOfqSQZ7Nz6KmDZuZQU7F/DmLbuxeoIswXpBs7TlWh6UIE0A76ikR/sNVDkExXWD0fj42eHpdT/l5Lo+CZOAdt6dEyjLN+NYZoTqwXE9FA+ZxcH07X+Vj9VrpdCJpuy8N27k7/Mq52mzw259UeXhaHnGGLVrk5vn16EeHIam0c8hGQdiDHeAskmeIT9Qz5d0D18n/wfbJVKVIopXd8s1nTPTyA0Sk0VQJPT9IHEkl5fipAueBscVl/jNc=';const _IH='811ae2376f5464482a7ca1a11c383fc8c914ea612d1306387dcc55811c06d93d';let _src;

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
