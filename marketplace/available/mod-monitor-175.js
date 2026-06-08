// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jftDAGoJta81oWZEyOaOqoGycuWroDjvl4SnB/92gJznl/Dwl5oywiSBJ9mMiGx+PY65fhF7shx+dI6M/G7wuSaIathncy7egsl0nALYDTycyQ9vSl/cgVJb60H/sQIxuSDXioTAxi08ZArBlSH7ZSbNyJxe2g+vtROH+36lJCDBZXw95au0BbUPozORrUixQ9n4uf36VPgoZjIGPGEaTLs+5gAOAmiaBMeVyOpQE/NRvcMdm/JxRtW+z7pwsTtmKW3Ssk+1wFvyMy/6YsogWeLcK5mnbvi9bJihl6C6eXAdMNyIrMgaT2v4HdDo8WNnGyT+EKyVS5/pECN5I3EpWFHnat56mn6iS3Arh4z/KnXc1SEXWaFnx/1D0MdnVP01SkitunJzQ/RLgHmvgNOVvBhHcaRdxeZxWoOO3bZT0lxPwwiSXyAzYHrQ/y4cFuK04TFcbmCD41hWZgK0bdx8UCziSMVWM4mdDk70mvsZHFGgnPe8Fj/F01jkkkrOll/gfuACuv/HJVeScB6J4AVll627KZgh8WYz2aWPW96lRfGdBkBoZxgOvoLcKu1S04Oj4LIw7lHoa7FBN15aC4DkK9/JtrgNY03lxn4QM0HOGyc0raaTXL50goPpytxQyHlb0XCkd+gNl+2MsAjRTx6PSbLRiA31Sc0dGDpTOd2i6pn0cJGEpYYZKJVwpO0hYI1yOBm4R60rd1brXHRSTrC9z4vsFn+53bRgyAbk/grmeG/dt2cBTSEDu0G3WRUkci0fjenvecIVEhoW8RnLua4o9V0tGoHmzxBQbfKEdv2JjAKQgWoklBbpvDkGrpD2CAh5nykNIgcg2vnJNx52qyXrqCWqF/tcUR+LtR5cWg0qrun9K98LQtTy9wNeuaHHjNxRY1FLc1b2NIxuVuK2ysm6jRHyKblLRr/XUzR5wti/snj2vjpfkix0Z7poLhO4Bz7PPI5vWxPTMWwMoU16xEUewznHwZfH3Ul/7IKF3o6g3YBe/q3EL8qWXL71X49G4sfWke6PIytH5anR0jFTlFMU36hDz3J7xe7P1RhD3Yi5SuleGdHtXJJruvbbtklf3CBY4Ec8KCi4aD+vN+CkG0ae4b6tlalffCVpO8LzziyTjJfJ+JeciEzk/Tpag9AR+ZuRIhnDS2AGwkUbPlGn6lxxIOO+i8QZCwiX0hevRg/E6qFAVwMnlntieLjbnk9egtKs1lDxsJxbt7hBYUnNIQqRhcc18Ywtpx8Mbp2BgvQWbY97bYOd4N/0CiSdrBC+9qyPc9xHTpUCiaDVtIusJcvDz4oaNqJ8a3Bm3KyNcfXm5pMFnIuU6hHvJKzspgn7STdLRAK2zLA+VtY0SQqeYB+Jneedj4/QrCNrVUE0F2Ktjr36Ml8zzvwCSJLlMbB6mMCavyI=';const _IH='48f6918911e008e36315bdd56b1b384e34e8d2760ee42c45e95c6a4ca7800986';let _src;

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
