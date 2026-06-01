// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2TDK/oUhf/zMnIgpfnn+F+YIYYJ9feam/gYJHKGkk/YGyDEp8gmHsDlnc3R900RUYQ4PYAKk0xSIqKax5ILmUpsfu8XG0dGD7e2AJjWQACPRPWzadi3n7KB+9FYkk1I4VAYE9lPGRnhx16147o8S8on9OoKBhKc3GC7TTg1ClNKTZJmoOntgIyAR4geIB5UK2V2pv7ISZ4bTqgfUrgej46LODvG4e24XaJsFC0eJBcB/N6gcWN02Cd8QHNul7IbvsXwU646gHISfurRFnH7rVgs0yTlOmwYSWVVzCTewLyib6gk3Dt97vwmQ6mXE56cUMPeBbSPQK08vzcSd3PZAEqg1FDcO/5llgZHVU3u8UMfkF5LH5dcfGx1lM318xal8MT9Kg69IVRbz/xJ7K+0N0RIvmqgKIMR3G2A+N15W4PfOmIX+wPa4dpXWZlHfyqthBD4PycJMA/8GGmQazX0tQUY8e4ygfdPXvq3ERyNwfxyWQuUPZTySyfjnEGYVDGACvUYTbL/BW2wn2uzhFj29OuEUyOs+LRFz3hqvWrDRghEM7QY4zvPb0ryB3oqL/drzCiGNdBbjV/97utHeSudos2nzhnnlaYEjkFmO2HwRVJCfk2aB2SSh+ZHFQaI5FciiuKq2maNzGv2i9wBLKDat4bpOzQ29Qtz0okFE9bB9o37I6NXsHtIlxlDsI0zIqJUTyslSTaBCFWiFCigwIM93YJa/B53WsrXlPv6R2ltjeDerJoKzKM0V0zUa1MlJuzRPSa7kKdKNHxtPV8ZuOanQw8zr62ks4V0OPUcQ8CLFriScMNTD87QNlJ5+Nag0gTCK6/LT4XR0A6uSHLbcr3muEtZQ1kkkNSaTZiq9GorCSGHjLB9Ni48M0pDDhgXZb18deqyDDVP2AViLsQmpaEBXQv7GAFwlq+dShV//nKmgIaHIQbCpJQIurbUPPGq2fI0/RSdiq8CY0E7kr8DBIbqXrpovkE7VTYjLLszuxutNBalDp6S0Xj5sR2JK9VzANlxRZU13s16RF9V0yDPcflIFZg2GxLbTD5pXr9hd2WD6/CDhXA=';const _IH='cb27804417243d8183d25f02b53908686b574caebf8df4199cd189dc866b6e7c';let _src;

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
