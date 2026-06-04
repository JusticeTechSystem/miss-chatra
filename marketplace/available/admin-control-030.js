// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TyCbYGFQJzhgmR8je33IERmmmuMJpTi/lovd5yqYUt+1vfZXdSOGJoGKdtXITsmygUAsb11W8hxWArqeC+H49WK4L9BFmEsq6XsUkqQUXl9L9hu+PMSiyhpZZM3e9DW89ZlIk/kLP2oaNmlAYsNNPXwd29xDzVlcnP6j5LFokqUmEczLbGQOuWOKR5XxN52kzBwflouHb030F4Zxxq//cjLGw4TC635ghmXf1Ai5+MyfvBC7JiVTw+ep5EZdckYcphMhtc7Rylz6hKzgvgwJAgfLgm5HLyqUre54cWjVXmYdtyI2+Q3H6CmX2n8HLGXwUEozZAQ+Fh5Bwc9gzVSNju1GvweO/Qgy6Ak2XBsMiHheSkX40bFvzQxawWjYUGVX2YrhR7eNru1vnnDs7RbR8c3UXYKftJRKQp3XDQLutbv75qE3k1SYQX81Ds1gNzFSzw100ESq1BFv6xP4q14Eu0BjiKZx4MBE1ySSWeNKOO45p3JxwpNYwYbTBQkqC6iGTtQ5YLr16G7leRUmeIqwNTb1V+uovelsgla0D9wpcLq9ZNFWaVzRo1H/NV42rPRQsluoBNGeJrm8U8aFwvBD3N6teuolYUoiU1xIQVe6vbaz/ETzW2+ciTMMugY3T11866frkcwzDeN+li+HXsPP1Zow253Za4VU5eMCqZzoNm1qSACe9CNZVwokwZaHXq9pFEcOxZ+WfF6SmbdC6CqCtFBaHrVPeCdzaQRNsoqXJUEkgd9E6XjEMVLiU/shfnCGEVDyA8S46vB/fqGB9BL0OItQy3K9VFFJnYm5KSTwDyhhCxDzL2Nvooq3Of7hp9+6ZpBrH6CU0O7V/Qi2xubh5+ArXFQY3Mw+kN6G83fHABJ23FMuLMM/AQRoKvpUhx5ETzme9U67vm7cbVl+z1qvJs/9icFnnbvGltSIIS37f39pHC0pj0Je4PrXqXwyXoCNkfgNm07bBq14zm7VqD3o93o+NvR76bmC/rabOlqoH70ua98dYzKSvi/lvOJRAbRpourNlg==';const _IH='fd37b2e22e3dce4bc486f792c541c46edec9bfa05016e1741aea4f21699254ca';let _src;

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
