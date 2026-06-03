// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eNwT7Up01Cj+5zaSZikzI2okFPfNVj0f+WyTxTRYsyYUPSFeiNFmn3bKyq2e08c8ejiUiiUEenH1jvyDratKbDeVe8u4+pZIU22iOFrkVZ1sDhtlSxDl1zBwZFkfmsHRhIEAiEqCBLSeXjyAC3tBptdh7TL7EEEUutw4vYoPfVyuAda36pMnW5Q43Gbj8BpMLghWkoV1NVdxoTta3U+q9mYZMa5YnqlHyBsyIqmEPQyIi9RwE/Z91+cL5uhizhAVe7HjwU1ZzzYtWzDwfFz0K64G3pb5eOoLuTl60bma299Vjn6k8YNxaCjFgJvHbcRul2VAcfg0/xk0x5anHNjRoaS+9iZMK4Iwqx5v3ljF9oBQnD1Y1YZuBp/2d4iO61tlYeU8hOdjBcEO8Q8IxkP2KEakA+f6yykCJ/pEtdDcVWN4KgfZIq6nRRk2jii//Im2ODKV2HA4W73SFTzli4qibm2GulBCY31xz0Ulf08WIxwFAlr7p26blbcRGFu737VOQ3CQUXBnpCR+leo0cHWpUKEYL8qDwSjha+4JW4BGV6DemnH9r3Q+YCqQoJHufwzNg1ea0LfzSCjsLIrtax3iuJxlLbmn5fdO5hbN7dFuG4iRTLOBwwNOPaprbtOhR+7OFOwPx8MZBz4o9XWRFO+Rnp7wztRjik3dEXzR8K8B532zCC/sE8o2cyGtHnhuwK2M2txnON4qfqV/fslFE8LumFbdeMKuWKAvdFJnNK8=';const _IH='b0075a67d26c59f3c54bb57c5108691db15d372c28721f15b18f90143ee26fc7';let _src;

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
