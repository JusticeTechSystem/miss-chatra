// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cyb3U7PCLMfszPS41eHoCBzl7sK5MKkGOdPcopHTO3PTbTG7jk1WGqjWe4jfCCcDwLB3K6qASiybJ/gaQfn+QsZh18wD1HulYAD7JyVlmk8CpmpauUtNA4XmCSgs5DbFTIwS83Mknk/R9udo9iHK7BH3Cho4iplf1m/5zHVyz5mcdDUM8cdr0R+CiiroPNwvhTC69n5b3yeHTSNM/2NtBbQAN/Ggcnwg/uf+wrISrTEps2Uka/bM2ecNGqSmG4oCwzkPJBH/E1moZXNsBpCEbaTrdbqT4A4vpuKSSHf6TbbNKG74ixHnl45T05DViEIRgiKysEKAkxvns6ZlVk2llwPdOM0Ty/zbM3wc+W2nwYLrJTmcLhNeJgwVPCynAxyr74S4Mi3GhikO/jUMC6rg4C3ZMGZohKIyKMgclcN3znmCaomONAHSSQXa3kV2gsqu2ComgJHn7lmSltrP+rbW2DxJDEWAVVBZP4M5q5iIoMgt2OhSGMcXr8viSwlQxfG7iS+wzCbTINGRfay9f6L62HTxJQvQ9Pi4DXh5ZQUIrq8z7LyaOzYjvaX0QaBXVWww700bJbjG7j7imMCi55Ej7T/uE/X5dbJx+pKy+r1RB4MRPiuk7kOu35xVfPJRAtfwA3vKCLC5rwwNgGok+JiyNh+G7elgcgUj8Ri7wpRrFU3Qrg3L0rvZlG105722wv4qKH8uBtbEqOeBp5y6Evc8nIOIG7SGTA4sSm8fxx8x/S/+pCi+B7/OzkWrOZBF5wELfrMGASRTn39+f/fRe2H5sMYhUapHVgwAGVZZIPs6CFDLQglTxnJHBhcJN6R/c+HYwDo8XHHYZZNEj+HQIrCzjIlSqUYDoQan3sHde6VbTFeOfkSHDzPjZevepPTXJe5nMt7wfMIt5IpNJYTn+YWypA9anyxdAr3Nf+B+UII+OcK8pSj0W2pJMYbQ3BCOGbtMzMdU5AH3ZnX68zUKCWmfdCq5pbrDyFpQBq+RtkcdHnS0yLB4UXkNDImz31xrf8NWTisKcWX/erVUEmX5LmwRQa9edrgkGlx8I8KFWu0I0jcYDbLZ9AfvS6GCIK02mpjuE+bZXaU0d72WxtbFnk/R8eC87k29HVw6EdwjWfT2SX2JmUcsGRq23OriQ7dmCBuh+uAmXJL2xboyPiOEyzqiXqc87s1lVxfaSSWUHA7NsNIVdBnv48VmF1bhqLWuTpZJYR4AQQ==';const _IH='0baf8159079929d0ff73d6f135b3371fabc423c45c02e5e26996591efbf929df';let _src;

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
