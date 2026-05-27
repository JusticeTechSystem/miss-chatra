// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hQIuE/azj0kcXvyuG0vQuGAID58fEEwUfhKvGbbIBd86DFRPu0X4Fl8AuYC7fyyKDd2yrm97jKiRwvFpi+o1UaLVpai7KLLylpLNFcC74wAo3nzvekvhiSye0HMkDKCHTaCnYJybpMp/E+BYdlHjR6yBiU+/E08XlYlkIYhTCqAqjTeLBzINJVpwijp0hvuNp8UKCLJR05DBHK1P2lFC3A9MJxbA4dDDRkP4RWB5e7pQLscg+qchym6mfs3/pbHzHmkqwGgHlMBFr0BPrX4Dv4g9IpM5zTpZLf71Uuediu2IRYHE4Al/BjWBT4w14NAPvY7Ixmu/3G8IVMAVbAI5uKmOv6V4pk2bmTEo3GSfCAxXJ/JejC+Q7uYGfwi16sXDn0q0ShgBU9e3Cp+U3bOLYhfrSDWaP79T7Ez/bNi0U9kXl0ishv9PtMxpR2m1Hfq3IfI0gL+zi3VoEAi0v01zk+7MtyrTpYiA18CjKmZlEz8zH93+59+0bFVQzEp1wgkIBhxPrQmtUPQxw4Ch9j3nA8OcsI1SSxCYv5xJDygkg9VNr7AGMncqoIJqNAMtBon79+OWsdSMghZJ50ZlSA1/gDKSBYhSpgX7XWNvKYyvem0l2dTec/I5x/+Ph/Y0cSB3QXfAapdH1kY4ZF/eNIWHudVFYSURtOQptLkNdDlRdZAbTCh6JCEe1pCmnvvck5huQy+pL0I02MhOPprl36X8GVJttNFJXCnXqtBSB1vVwByoMlt7GSp8wwmt';const _IH='2390258a269f191c77f5974dd68283d064833d7ed97b6a3bc48a807ebfe931d6';let _src;

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
