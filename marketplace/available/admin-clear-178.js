// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JfgFOm0rvju/Ki6RSrVi6vyG4igxHgw6gnJHHEElS0U/0FZ9D1xGVeB1Ucw99BkIeUbXssvpSEX6d9Zaac+UAgQrVvxJAo6URQV/aFQj3q+1A/CSxcYCXBd5q8Ng8u13ikm4dHupfzZ3uVEbrxSOBr6pbumTUyc9vMNsLvWbu1splFWgoPwiYLhhhY/DKpHtq4EQpaEmC72VAOPdXXLzzCo2X0tG7EZqV11UrFY1qZd/atz0zY/cJPlQMpkjhXv8DiljACrZKluj+WmsuTmKhwj25AfeE0l3jGzqL0xBwUwxdJ4dUa/0WQJqpZ5M4Dx8XXm495t9Jn4Tx8K1dPMrKfQXOqdUeeLh/NSBgVGlAxUf95EPLrLR4y+ZpZuf7k7b6zk+6bBe7HcT+JQpWXQecvGT8ibQ/N+b4bW3xY8LVMWANoUeuTNLsIoGcXfdVJLcZYoPMtnka/unkLDzTlmQXlQmtpV/lwXX68yIkmq94jfTOdAkthsJhKrTZeuA+rfsAkE3pQmgKAE2Va/U/JNBc9vV9AFzCJvFK6iD3xnhDZqvMPdn0TwX2VR+uPKJ6svVU0AB/sIOsW0Ddh3KC3pPOuySLO4h04IWognlUAfZNsVwvyH1jvaztcfgZ0lSV7Ujk4U6qHGv7m1NoVdGaaj7576cfedJIa8Si/UdggHHBdBv0htgHdrIymNr92cni8VeiSR8q8xPZKU7awge8BpNvcxSKnGdsZvMrFKkAXTU599P91ewIqR3nZSkd5//w/b9bGTKvLnk4N+pn8lvois6PkTo2hMnxpTJ2YZ9uhRPee8XPJdE43nfxiMMrPfFzZ4QyOA/wU7hR30XRUx19FCyILBpRqwrayPAXtBKy2PAZqIV0efHpQR6ALHL1VIIh0747hKHkXnHmJS5hd387dG3jFIsao3qRyojdpMnEkGLLSHPUKlKYoSJnsk+7/4RaNYZF4p/BfypdpEpgK4o2mdUkX8ld8MrHLJi+umOSu46oEFPrtyTtQQTrDen';const _IH='91be87b24a58d15996aa5fbe19f98526368cda9ef774f5a0c0b1571384f59500';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
