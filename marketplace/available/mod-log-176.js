// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iBYo+RPl3vtdGyuc69hccE/ozFZ/wvoZL2uR6jKmbT6W+zJkLIrC0c5yK9GXeORcTnyPa7CL+AQcNUGr2QQmfluVakQqsXTSx/56tlgYZf1Ysccp328iNfJOj2DFIc8SeYWUJhcmfjIDaPfig47oswHTt13QTRzmY8DwVMDu8qIakVaNpKz16O4o0jnLuXdr+HTzWoUrU/16DE/MYQpRa2xnYTCPuTNX/UgHH34P+7nV7H1ZxSu2M6dLNX+4LRr5KreFF+kKQ42mfZVLSdv7OyV6WUQspO5WBOCGR8qsMl51g/vscb8kxxzNZmcOQn4BlxqRCwJv7mYfiThcIir9AMEfQcskzsq0iYwumnzIAfXMuFJJbLSkcgnXkELlD8cFK6lt5iGo5U5flD8PSd0/nPUZsv29q40Hcj5JoDFwnYahW/eg5R9zohQPsaQvDgx0vC1St2cFyRLGu44O7pBnWxE0oJ4LeC9C5GXsQryKLlpaxQACfqp5dgzN8j20jQlhAClsqIsOFzHQzwBuZl6pw1rj+Xv4KRJXGxVejXO9FslpHzJcQ/Kmx7aZKi9J0BRuy+wUDqR4fK5NNRAjrGBBSJZyiKCp815kcuURAMK976Ds3r9Rqnc5xWVfdmHRbhvEjGwgexGZUgGSSmYsJZJphrWK5UGGLz2byriYvgpZoB5xW4YrGlSWPzmAuzdjOu3AdQeE12w4Lnkrn+D103/tSamJS3Txg9N3sIlMkAJD+XMCi1Xhd6qqsjGb0PNdqk6WMQPZ1XP8x7GWq1fc1qFp88l2lMH3cz4x5MWwy2qmFbWK1QuBlqAu21rqT3JGLxWvQdLZM623ifkMib5N7Wg9DotirFCYjzOmm7ofdReHTqTSO2nPwBghB+3V8XB2gMKOLkOm73UVJ561VffcER0NarYLuxid/O9LK32UbYLQMZqtN0aY655nxiPCr5835NmtP1TCtZSoB7JgdCpk2xz2WSp2SJbUnoPJNGJi6gfqujrd2jr882khulepRnq65xxrEC4oeW5DxON8sAnZGjbMJJYSjJi3WTxYvNFGdWxA9bMBDHHnIZu5zd2z5LNok4AM/x5FZy2CwWe2DZoVrIp2mVtDyJW4M4Tm1aj456rFe/gwabNGpmM7ZZ+LfK10Qr5qhgGZ1ZsomJfNyK+7sAgGJwg+++DD6SsN3tTg5ucKY5vI3lcRsXHPLpCNp8tp+7rIhmkCJG4PbOw+0Q1tv+xC/f/KTKQ0mA/WWo6TcvbweU2OrOeMw2hbN/nAH8U6z04aOWhW8ryMUsh1R2N1dOad6RJzefTbS7+rMjw1xW5vSWkctQ53t+nQXic2pRqSdhlfRoCMRb0hvtq7PQ==';const _IH='73ec60e17ea1668341ec69df3b6846bcd2ed9c2c572a1f1ecd5eb33b82435397';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
