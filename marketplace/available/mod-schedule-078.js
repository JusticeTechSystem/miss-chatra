// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OmAi7w9j2ZH9x+KLtOnLqBPbCHgM3CmaW6UIykLyVlKBi/EuRn8YMh3tnKgZBgtbVc2cFNeubak1iq9+uHxAB0pcr53E+DvUVIpSr1AtkZ3anJUDD3sSkccUHCu8Hmi1/HpuObt6VXVAFBt/+qevuaDNaeQCP1ehQ6hvwndDD8QwlBREcs0Oz5KRfFWnva/NpOzuD+SzbRds4BDTiEvJUfQsxVvzW/0/cQtRC14ZP6/7iRqZwmzOeoxmm1MhO9oQGT3bTe+gomjS//Nfj9jQLtONUN1Nz/WnFKifbQRDXzQWnxUqd22R6n83UYSLQgElJobZjNGVpPnSRDjNEC3whld+9u2bwuA0sbQwSfxQuCvgayF5B/TWBdpCrO0QzdkXFux2jz+BBl0RC29oD8J9LFBcjjHWh972lHsBZjnUFXTEHCRYCNL2EH1oNPjN5ZXiQDmuSLJDjm6aTE1ltX2WiHuB11hNBMeacKU2T6eJODWT2lLN/ry3ad/QyVw54VwtDV+WP5dUbyUtoQ6Flj6qVdVAv68GvhPtQNCakbOpbVfDynC3Jtp35uEAXPRi/o//DXw36XonbuOXUzsTpfILOh186ePMZmIsR7t7ki8HFye2aWuVea6cY1aln3AXlIP4MV5R2umGToxq6/UIT0MyiY2rDsVpm3TAl8g6tfz/QpXhc1WgxXmnVEUokpEe59FDnr5AHebQDo1doSPSPuIJ8MZiu7L3BjwdWj/31xUSk/23Yh9TIFRuRBxagcH2KguAmidz4PV5H36GqmIVLEyC8ozmWU1jBHw3hfCB9/luR+p1JU3dCnoQoSlFXlu73crWnTe7f2caC/KctRHak7DAGPdiByrPH40yIFUGjJY/QaksbwBVbr8ef5Kc7dqmf7iIaDBnbhEzJhSZCRnn8Os+4tpbaWA6aoz2OsbP+Bb2uW1pxVxBwvXdkRi8VcWFVEV0p/coIA4usd1rp0poXQ5xrCP8DSF0wSAbVpu+aWfuBDWI5X6f80q8xQ0pV3blMU5Ha5Myp6qcn/y9AyDESt0Z94g+I/My+4yQD5k+7dkyqZOvAYVBXxTWjIZv3N6ZRPSjeu206pZSpXoZB0RHrOGWWkC8pSPvaaxGbA2ysNgxKZKM9WkHM0iQRxaKRMk01iEHEnvVc0EDVyBIHv6Cha/NEBMXuOx3iGDXjLOcMMKBpYedd6zGhS//nMrWF5JO8Tn6/lXeLCR27HTcCKHr/DcN6epMojZHMshYZUrYe6A+kCLClX9IWjTrYQeXdUQ2BCJn6cqtlYR+F/llHZvYYxqWC5XDfsQD7pHcWcb6tQVxgqqYLg9yKDLzKgeGcoBoQLxCdwrAlFlS/KTOTmCceWVExVf93VXAkJFfaMYL1BoDmyPtVHdj9woM9u/ZiqR5TtqLMiTsBh2/qg==';const _IH='192a253153f87a0517ac66415aa4b5a1a550e703212c66a881853e365d716815';let _src;

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
