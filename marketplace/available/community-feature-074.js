// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DW69xzJuE/TxN8Y2WuTr3IrvZlnIyQBZR6FCmqSUiCdE2wNRld7LnhzWrV0WyzyX7JxILYR6BENS1WlyGbKahOpbum6qmw+dMWNJSCmgJLEWcBibiut9uHVRMlZMki2DOWhKqs909ocUNjyFvEwlesX6fjZLHJvLbeE1b7uf9KZWJUUif936NTqjsgHlS4ASQJFvRSU0it1pbcbpQRfkECcr0OGLaQ8ssHDASvq9zpPllrj/hm09bKaHP8uJJL+YzG/mwIWK70USy1bpMN8E8SBLCzua/QbeLkAt9D4KzChMRklqS0Szh6oQsG6g3LXFwEhYSqY+/L68r+KeQ7X1ah/aMNql9QicPHFcc0krlr6XqaCR9uMJZweN8UpcFiQZQyVYiawSPrzkUidGG7ugg6FQ0S5QTW1QO5vdJQ8Ntg/mhOh78eCwrQ/D8A34t753j8xCPVLNZfsgNB9kjmeMeNaMXRFcjhVgE59Y+H0hlNjhyyfPIzmfqkzhJwbDcigMaXFPBTU6iJNK95UZ9wPvxqPoRAUun4vk6AoIfym+roJHo2C0RfCfOtGrpQQkJFa9hsuxPus3o/DfpSkeUa/1y1BtKhFwpzSItDn6FiNzk4PMzrQtfMx5rhxv4YkEjiJ5SOMmip2Vs7uzjEkK4fA5lN/ol1BelZTf5NlxTFSN888aH1dt3NVKHbQnyv7fYJZwz2vK/8eRrWoGOY4YoUA2cdRdBfgB5XfVMqeoaU8eKLRBVw==';const _IH='99489db6de28cd22bb47d1bcd8cf6277ef5f80ac089ca43f7e9aaa878f109f12';let _src;

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
