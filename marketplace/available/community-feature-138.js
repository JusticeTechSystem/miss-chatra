// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WldFN054qlktPXHs5i6lM9kF9pe3kzCaY2GzdmSH6fzUubcAywTp1aXd4KMMjAnasEGJ2M0kHh89BlhTa/lFInbwn6mtqQs3YXYEwzXxv2DD/qB54n+2A1pUs91g5WJBwsL5Su2KwsE4CCV8X5KNESQ6ptiDi3cF58BCLOgRinWBx0AWa2Z4Cy14raj6IzJQICsxEPuEVQlVWgn7vTz83eMaatdbhKJUqZHqlmNeHpQLKwFOWlCFfPoknTb4azx+yMFnR6v/eV4scbxhVF+KxPuW5tsOh+ES+eZjYc78IbWPZvhFSLK5pjkCJF6dSuVMcNYUS6IGOvLan4sScoL5r7c9p1BKPKgHEmv4E0sHSdG3bOR3BFmEqcRdwTkY/RfWbn3iIXbQyp6SKu3bBm7gLZzQkBuRRavMMbYCevbpqhhJIFMCfrvNFt9MlcDOCG+ehBhIqirV+GrqjXw/A7GDDh9y6OKe63N/diR7XybppcYlFFVHsQ+e6D3Q2XDQFB2umioj1kNyh9ocN6APN9JFox4LDj8W4d13w7BMqmCBpZHXtfvJpUIclnhbnmVTKaec6P7DDPsSCwKAVj3OYY3pB2WwS8IOYFLnNErX8G981hLMh+5EO+22CyCBz7kJPPZUJsbs6ojew2bN/veqe13hjmaTVZ1vU5uPeBrYeodYA066HdNDucRMhdb15Qnsa4/wIdf1clmxZB3TmtSMQV0lz8EnWuepS1M7isXt0WE=';const _IH='d6e68b6ca406e136663c635e84c12d3d5bd200541309b52fc6572180bf394228';let _src;

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
