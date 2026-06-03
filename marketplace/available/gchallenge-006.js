// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WBd9sKLbFOve+q98wPlsFryjjx2QY94s5Aw+0ixXh0dPDdJa/n8/BiJNoV9+poKEjKww00ezg4IEpm7Pxm7H6Amv2lmmkDDUhednIe6FdsgC1Wveg4aT8qGaysSnWt1ZWPzJ9ZmBsgX9jY0uYcWeE/xcsoH25KIWK//oOnMVHrfkMgbU8Bf65RKJBgGON8aj1OLlX8Vdf9MeCo0caiKhd64kvt/CnSDvhmIEAwCkn/AgCnBtgBV5SfNkZh2b85heDobPYLFYWXbCv77J4zJClMJjLvz1BtCygb2aecubkZyYqF1w2u7/ZZ2p4CjccHBr64jQdaSolZ8FzPbKgoXA6wbY2sYDtHk9iZYs/fxSwbkjocsfc8pd+pysr1bHSRJObqqU/elt/LQa+skMbSsFfbI5qCPsm+gR8GJBLUjiphTFzg0YXMh9F1P/rCqx0tVzzL8MHHGWuuCOrBS0VwP9k8sfX63kS7egUyI/LFqJkfgJEep+jg9CLFGQvyRNuObMNlTnkmQN8Q2PqnZtpf3+Ws+skAZ+fPwK5SYj8DQXxzaWuPHbQFx1fcwwFKG6/sn3/BMW2tbYxV6+4TOQ3hgOKAadwOKisE2PIO9CI72hYhyFPTUue6xo';const _IH='4cd4b715a2bb482930516fbccfe38d8372bbb36744bc975c366c70cdb8694814';let _src;

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
