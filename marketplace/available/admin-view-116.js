// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6AyX76g0WJUwEp529k5tesEdwBA4WvF/HkZ5tF2oVU8WcqnvvtwAs1QBkS5jQovDAcyZPLnYqVefXCAtRaEI2WG4JXONKX+TC4uuRqh1PzHUa4XNYS2kIJYtS6l/1PIfIihbzfnUTeduQvsad7gcvl80QBApL6uIpQCVcg3NzseWhIoMAHO/O/J5WHj0GnPkNrc1aY6mPwxAkjt+Kf5rj8xFT52ysJj0Dr3NQXOW2tgaIIQ2og+S6X2WGjciniLi2LXbeWFQQzfxJcXliwo3b36e3V1H565uxM+T3k/ioz+5X49kLIieUeChGWlFVUPKpoN1MpG9o9YN+WzoQbNVt+WH8wxICsyYtBjRsqJxR/NN42+Qb58Rmgcx1LNERpF8//J+fypLLI9oryNqqMg9MB71S0lB/zgM9F649Ux4+MYrWhiU3eqiFCGRdnllYLDD7cxi0p1iNjtKG/TllySVEEtcAfSFT7OY/nFvORarb/FiD3NeYOpORo2zpr7Q6nt+yLWu/itTW0XDV1r369u6jQ8DG6XYJezFrMtZfvVrSL78zsCkT+CakKGfPSZ8Yd5Xl5MGCsSBVgptjRtnSvDlQQlDpsnt1IW7JGLD60bd9ULbbaf7Jwwv5IEIZG+uwroxFL6WuxuVhKEIVtgeBwNmwaTQmgxUy/GqP4C2wg9CqIyblTR5GPsvPnOsh1uGDjvB2+XXygBs2wreQmo2A5E6XQPLOkYIowKMS9de/v9fTF4T2oeE970gXWYSzuKWeL9fXZXOyadZ2SDZO+xLDS4Ot5xn2rEuyjWeMFhhKBNAVabFvvr71q28alVDCxtFXDH291Os8OX/PsIhMUhDwuhulK1VrJahLW5kPmuQUpNVJnop6AGjH6lkJXXeJhaVw2gjkTTb950Cso3H6xz778m5FUUo6TM/46x+EMZajqrWcxdhjDsUGeLk8nrFg/dBK1B8PPvGx5v2dP+CQRdlp3Z4f1M/taJn7Q5ywcu8Co7j+m7eMqY=';const _IH='617b1478bbcceaeefdd31c3bbcebddf3e87b0496ed83f3c19fb30109b1ebe03d';let _src;

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
