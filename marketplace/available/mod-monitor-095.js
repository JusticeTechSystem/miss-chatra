// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='khmna7OzsWz3eBXUGUEcxFP7VCgtCGZH1QqAMbEWQKIRS4xsuHtG0bkgnE5Bns4Q5O//vAJ8zVEBhXhpu0MbdIPiuQ1aYN52uqVIKErZWJzwlGRNjLk89tVO+T5Uo//nZpXA7JENUUf7hBFB0JA72jr6d9MgVmtU77gFNxU/7FzcoTKP7sKuKg31agjByVZUR+XdHDJCqdkRPr5kmSAbMrmpc5DZTM7Si8lLmIiAcidTTMBeFBFwXPO+YTovs7Out3/wV/TZuTaeZ469vFQQMqYRCsMghWBMjMFP92WpuX/PyzUCylGovkyJ5nf6UKCTpOYrzmnuOQGZPty2fpMefGdNG+HdMbxUJdDp4Eg3cvHWJDZO9ecfIrAlz2LfQrXiOp3IqI//QNYFO/ymBaVswF2l7D9wYGaNwQksQnIANgd0A8vITFHNtXiCw9ZgEW4XnFp3pZrL3nSqcsY7HFLWbpdP17m3R6WZM20fECMCfsWllpSKhk7nBVHAlTOeNu7JkFwkK8GX5Yy0og0he0/6UbcjBv7FJX92LEYpMbZcMWfQDok+/7BpvtFFghgTHkuZs4d47IWVqGVJNk+RTHZD6/YrJ7wam6P5tqTVFp5/QJpHw0Kfi/FVrS/flZ+peaT+lht1CM/S5SOBhDImuJoi4+gR0h6a5sK6wXWszDGnd1mPRYpY7jMSETPfPUqnc8s8xVSKrNPXZN3vpt4dduShwJlk0SxIZpKV8e0gPdG595ERyxH1c/rLVKLgRlLK8x5T2b1kjljqFTFRkim2iFLx0BBfUISKiCh/x5wvYWVBGmpzceqGzh+OAeyTcROzHgFVM9cQGwwCd8/5ehl1cDT3UOi6HjLXwYeeKFsiK70YWWZc6O6btCN6JOshqwJR3rGzE8KhCOb7kcqyVI0ygA30+aIlt2wK4/xQ8REv/a/Y7igVP7CiHdytSAJk9LKbD7yPO6dDcVgjRLmg9N1Idt25IIwlVTPg/oPilVf1YE0NfvOBjEV+VPjI9MWH/zRaWgyI1SVFf7pcVkiXWFLw66f9xvz1a5urdAP1/c27iVajOQiCda/UwuJtmBmUNkYc6F9HfaLfbcTVVzJYAesu5EcSn8c+DxaI192p7AHOkGShgVNSuxDmvDd53YAW26v1guhxFo4KuloUWg8sjVvbl+bpxtnFly8REqBMGt1KKPnGm5TlMml1XbsK5OSJliMSI9/eckw9FzYs24h4fciTyaT4StjmyQKPZU8fCuiMhUJfTJFM00wNYqih67kgwTAn54HFUFaIMC1aAPrdjkO6629eG3VHuAxE4c81MTASCjct2Q3+jk/gJRJVvSmFINnGOeABOPGzX65M+Z822R4KdbMgoelikAe54NShUiH1hTxYwHWeZ0CeghEwnnP8jQqD';const _IH='6ec8440d3c171d54b312b735c797a55cd94550da084dd206e2b57af86ef716a6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
