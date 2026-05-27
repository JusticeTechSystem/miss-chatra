// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9ZoKO1D3eMz4YBTimjPwWena6g99Bn4lfa5WKZZcMnfPzHJhGM2Y4S7/O2XMIkxMlAFNZTlXdYmxDNUwGcy9+cHQ1iqpOW54H3jdBsYc3VNbcpclpzW+9usaWB2aST+gjTu5VUl9PwHrBXROPVxeJLGIKKPoe9/LJkRuoU80lc2TKdXdq8FBSufB/6J0IB2ure/pe4YFjwDrNUvHSjZ18ZOA0iV7jP0LrY/sKT9dzUMVRCxedrNhWoPJa6LrlDjbBksDexkW0aI+zdQaz+l482YO9me1uRbKXsNDyUMODLNfodgySoF37uh2zGJ4iXEpsUguBuTS3e2ijPbYFzPDh1Zl4bXkP5av+YBwut8ffktW2iWg7xGEKF6m7RTUWPNVOXeGNVuC+Zy8olcsuV0q+2lfkmCAOlWiGqPI7O2w/8nUSazDQq+sRYVSpMutsBnwcwq1S99z8MhuJZIlCBt5hkZkvm8vrKLpYBpxrNwivRNhuoKx9qZQrzW2JmbXT36uxebg0AiHR4MepDXJ3eEVoTwQbZP2F8BRd3IVe/vsEpkmZ7krJ87y1Nz1hLTT4AOrz1z0oxPDfLkXfglb8FKiw4S+Irrqvsnt8VO8DuQgPzMX0uSjIvANMRebqDsAwXu1bfACPRUucV1PvDbtaCRSbJQ+Up5F3acUdTk1/0pEUGb2YfvNCvUpDlVWsBoY9lz6YeEBhQc/gWWJZ7lvuLvdQHQ/mnChGIq8';const _IH='23c60f2cb2c8201475b32a79561a89f8b8e4e081a5b6355b7014f51f758011b6';let _src;

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
