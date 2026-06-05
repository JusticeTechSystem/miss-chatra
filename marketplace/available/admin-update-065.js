// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='buL8NA2qlpclNqDol5Ks6yK3Ji5CMWCT3VTLhfI6VGurBpJTHCuCFdzc0YOihY4j5Tvv2UpbEosHR6LOh9W4XuinO/naNPfA6PvFyVHeNI/KWTtm6Mm7/erJDc749PWhqwu3e/7IgMlslbRHp4X34ZTjpniW4aQGi9XbiAvr5TLlsEmgAeBDqMs19NAyJanAANnlPFr+JxO36K3uDtOMp1Pt8gaoNFZ9Gzpm6j+6NrVyW9CNT7pNhNsqDyuNbbAHXw7O0zgs+ORAi7PZlDzgw+huv5Nh0OQGPV1EE2WYy/4J6QYY3UyocDqq5QWUjSEw6MbqOkGimZ3Xa032ZTFCP6ziFMNjLMCJl5t77Qh25H++3tnf9lsxWLcwXsXPVfHCtfvorWgWSPE1468TAaJk7Atw7G7Juy2EWEWfC/GO18z6QajagebPkuq+gWiRMNK6EgCVW4R62LcRqe0tj4Etw3ZVwFIHhmoGDYQHKTy5XXa1wRsx+fpF1GWhs3I6T0kuVXVS76mWx1Zw6UTUt2UC6Y8EWtKdPZJlvnhJ/1WyP1OcdaZA54/I9GiVM4lfGhKwkNx1KXfF2oM+MvDEsv7fsmYZoGQUHO7Zq/EdWRTrjfy4SbZLbRonD0CEcpDBUTqI+QAxUxff6AqeknjL2PBUc3ZTC6bQLWQjzffCt+O7UXIGOn0FTI1j9UA+LXG/hFW+oZUA3uyNWtmxdjUhqsrltCeqKr0qtwwXPQYRyugq+vKfvqYGQ1kYt7Lxdwey3VSlVLS8tusgMPmaXSAwRc9XmAtzpB8otp5le5QQivM5OEqN9A/pUauNa00g/GXBiNWdPLUvtejPgepqYQX8o21BaPMJHPn116EZZNgT7g7pAgTGUIEVqDBTQi7YqiSpCsqjtM6fPPDUXhmcKLhTJ9k57Q6wCUJWdkL0RMcByUzKvbp5tS6xbdE8Zm7rM8PnsYWiZ/uLL4ps/Z1O83zN9tUHWIPSu7sBG9ns8Pz3Ovq/P39HUfhXihUQF4/8FWQE';const _IH='de37efbe2f8fe9e0fa19bd21d1f489c7e13ad57cd00cb3577be00c2f1b1260a5';let _src;

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
