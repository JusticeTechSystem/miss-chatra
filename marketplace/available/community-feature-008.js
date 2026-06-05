// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HEWhK3zdrk0Vi7WqfY4VIHFVrSbif/cNrvBSQulozVCpF6hDIv+NDDXCNI/HEaV4SFsRSv2seILst5PpjvTQglnbSSW34elMgqQcEzuZaz1iwtRJiurBFvTtPtDQrWgxEW6wBHuSR5JaXqYl3bbuJwCUVPA6t9B9upJiHfIRzRXqqw2HMUMGb+t89RrRlpnU2u2IyNYjRxRAL39OPQIVEovvDIuwLszXwvAYftZg+Lyzs06BtOEnjRvRFvsyIJ3m7HBo4X/DGHpkNzIzV62UQdFn1D95/nS+hKUOuIsud+CChrxYmd3c79UoL75Wab00NeJou6Xf2pAX6V2EKKhXIH5j9UtHKXoBGUTltkwYNrSKcoU3UnEda0m0PhVuL1zUNL3CoOAlvijRIXRdhkkD+7Dr9ceScBHnsDjMj1FJvyj52Wfma8OmHeBEyzvnTLX9U8Os5tJmM7uRLUSi5GjiKTWo16ug2ecNTJuurUn7XfG2wN+lLYiPD0qzcOfHsDBrXn22fDzh3+T/OoUjTTs8427G+O5nsRsyo9xRNbXSEKn8zEKhF4Tki57HBe7TMss7ko37aTviDZuKNAnnK5XZNgXKnTaVK94GpAY/lgVzjSFuTzL8LJkSVGTpCW2ZlOaHAulMqbluqo+QCVTMIeTEePnKfpdkriyFUmHY8dEZuMMb7kq6q2FaRmNTV5Qi8ys2+Jo0gP4ji4Sy5BmLOBnPS/HavbNq';const _IH='17c3fb7e561623606e8e88ad59336ebbcdb85e8a142bcfdce4ae3138b4914dd7';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
