// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='69g9XTi7O+eGP8xLw4fd9Izi0Z8saIAGF4Klt8umXSUI6uORnyixXPcWhE8HIQIz24469RCCcFFl4SiLi/WHUjhQOrh80XfYW6Wfn7m3BBKvRTOHbQt7zhYsIez74+y3ujQU1y46dMqSwtiYRiDW0s8Yhb/sBcEmiTMPTtc9RFvWoKaf/CVK8J6rTmLzgZn9OTOo0oj2snG9efzods2Q1n4ul7/KRxRLymsVP6PazkWPYCcAoqTpbI8Qh/t3Bdou/IC7CiWRs5DptsLnXO3DrPUhQ45bwmGJw4bDTFztLT0dpF8tbOEdMrhZ47qT7MvqwaAh7YdiRx04iU98r0NcMlL78aMLfQGo9wK2bMUCCe5CoO96eYnwvbE7UyjRX5lMbKENPhi1pGeTVMXC/0zFtMc/jNT9tNAXb1sWLKe5pI6CQONDzKM2NMQFzVkqhqEWizwjKVV/F1StJga0Gr14sytz4Hl2gTyXWuAtTdjrxop9VOuUUTbFBdvkVPKCI1RCxGBU+21GM7XEc5r3iQ1n7USQmtBI+rbROMpJHKkVHbowXD72QATBaK9daXLopYa6HflRZkJIdU1Z3TVByCUtbujKrKy8/NXbnB/n/GZWfO4fbKx4x59eO74iCvr3ESnDWwDtmf+wGdnyak40g266bNHSP01MelSO6I/RHN8eG4gIs9kwZ/AEDi5CLCCmF51NZZtZg31YQczqTQsdvthK+ebTFvtt3RhnwN5GWA777sUNgJqBmj4vRKYfcIiSCpKAhLPwff5ItybZQ1l8e09Y3sG4EnTXA0MLNC/NBtjewkbNK46YzskNp1/BlM+El7eSRpdCJTF33bF0zjuixPADU0jSI0jriihhQIFzc+N4E0sPwN/Jyeqj23+VALcRwykeDKUdFC5wb0scw9W0J6HEZOz57m0Fn0/vF1ZG9cS9kbbNvgC+V6gy3aLDKrDJI719u1DdWL7aofMcJ7cYTcjzQtzl1VnDrEot8TTonA==';const _IH='abf19d2be6f38a0e4c202039b56051f3f23faa2748dce094b5fb2ce5d9da7622';let _src;

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
