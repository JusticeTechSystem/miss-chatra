// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MUmMu4A3opVF9pZK79UFb4deC7X7IGtgp4DvuiPZSmYs9zjK0zaGJRCtSwj20L0GAZcdPQDGM4APrT4bjuY+MEsMqsxKWj2nNrqsjRYz1SdbID/3ehZ6HbPosSFVM+wzyS8CeAth3hW7bXzC5RcoqF3PQEx1oDQJHhtvkJWaQF7PRNUteUAzl4QV1/2pNmHo3td6rfL8hRQCVLJWo82jOgj7ylREBIbwXvr060ZE92CEUKLpMfIe2tDVHR08JAoYhHGsbTsii8guL6PX+nx/hSCrZyJY2lONSOMqAlJ+nJS+y2Nm2r1W2450c4y95kNa9yt6P7vvIuBEv/VvZxhyzjXD3+GlMAaZGiu4PUhZ/zctu+L/O/jmq5ZJX+lxCc9j/xr7+FGkHWrKc0daY5g1MMYv7KKUsW0oARomFW1IQEPVZWfpNOZi/NpV26ALYvOBpybkjnQxDo3YXc3IiaihAS7dDGL7zK4HZR91W9h6MPW+3hegRfFTAZn0B670B8Ug+VV/2Xw0xqWWg5EBLUzR6/NzXBwNRw7lIuu55m26usL81XQ2uV+0n4727h71Wt4zzyVAGMuUdD3tKBBo';const _IH='5bb33062e549bda5d148d6936e3644b77d0ca6c87941c3fb7b40db6b6d1369d3';let _src;

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
