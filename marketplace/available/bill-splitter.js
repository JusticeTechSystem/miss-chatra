// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3b+siWfbPWBD/TODjHTT3itcq7g9Sy++cdqHdfZAx0lVqkEzAGIOq4o63XaHZn8e9kI/ZVwwOLeLKVlB1idRaSubTAYSGUl6Y4a3f49XWANbgDghKC5nE46z4nLzkC8LlCkE3UsR9lmmzVaHWOYib8KVVmmrUsFgGIHrwSMKldZp9DupDGTI2zmDXlVLfv/y8oZIhq1Rmme2Xg5y8Q0J+rayMfLmkPFv3MHayVf1qQsIh3U7bgZ4Xp3up7GrUY+jW03ZgR9bRZ0dP0MWfpjiImjTuagqHsImoRqJ2GJBvsWjTeHb7PanFnl52qe4WudmVf12W3jSU3R1DvB2p8bsC87vaFmDt0vEUEpphGINHJvnwjpdohDQcjNfc4PUDYmHqQG6KZfEi8UFtGdfY4W3Mo5ddX0noU2oM9S1XhWvpAQ09su6ujXR97PUODAptHDSU/PTy8VJS2PU1d8/v+ArCxZZS6sLNiw6lwijo+71uFaOCE0UbjFq+pSrKiKloF0FOOBTB9PEhz32InodRm7svBMht0jLun6OhSi6zfzyv0p/6lZfVKqD3SStNOigfAu7XOWcl6dV/Q9tFoWJX61BFfB995SIin6x379D9P2+oAXPY1MJb5I74xZchG9HAVZ1OfeDANXqw4ryppgHS8hjFiAi4WrOThNbA6J9GVpaUlboy125uPBkOOJ/5a0TcRIUGysX3IkQt0HYfJ4MShqLv6PvfEu7fCRukeasr+ftdryKqCL8fw90J2vg8pHdSU+5mpPR3Wp8h2GPP6Kye+8NV3FlI6v//BCTT1NzwN2iBkcht5tpXENfx7ULDBbePm+IvNgpvoMwl4zovn5BsDgUgI2yvcWLSBjsHhxT0qLt9e4CZoeU/wfWIqyiqq8ZkI9nDEiSXix6XFbigksJseaJva+OVLhLkovNue8z+39vPpedV65Ebj4rG8EKlMVWTCuC57nAvabCZyM05oToZS331EhGDam9HtsKO4sQReGgBZ6rWcL7eiDsBfkoyqHpNfQ5PSyY1eqOhNmvPKJZXXaN6C5NmBygVG1ydRbkdOWfBPslbdynIuTdfFtkxNBEX5CzgAkKIXjlnLpeFsbpG7CBdEkLlNpEPKdlAJ2PCfJjp2YwuqvrKxKDB3oyu9VEXrsyg/613/NrIeCk8bTC5nciVhIc+csrhTPC3L63e3i3SmXGNxI2XOSaJXZQwYUSuz/Uheu/om8cBGN1NqnVPwtKkXOt6TJzCv9VS9r6erTiGXA7Mk3X57Wj9n/GSsi7YLV8SZSt1PEow43E6MqzhehH6xwArA//YPd+hGCjNC2qMKbIpOMKERSoPt8+NUJa2Z3ovYZxp6aafaKX0S7/UAXPyOUNG9qI+usUqYJOyHN5ay4CmNYyl4gmYjxsUMzDKvi286bOOhwUwHReirNOatZzvNmSw+w3wtq9q/U6gImdcfJ5ZlsD8DUjS/BgludlvuESj6YwYdC/cd0jmYt+8ItjgFLnfMxH1jY9RwbDcg0BO24cjI3mALcQOe/JK8FgS4euONWiZ+5Ql9noljshCw7Mrs4s5qVnveqXb4BLDpsazd1S1CCHEIWPUBms/DpUy8GZ1f5F7NVbbRzKtPGio07smLRukIZ6HQWNmmMZHD3DjjY+MFHAGuDw6gXleKsTdWU2fmy0zSciTPzr9CFjcHr0HqiY9mQ8Ox7sCr+Zyy6YgmRa+4YCgD9nQEQuRcC0ZUEWx4Rc5k=';const _IH='c55fa868e9a4b4953d557d1de8f127d219d8550aca6ca6ec07059da29e7ebc77';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
