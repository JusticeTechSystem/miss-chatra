// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ozfsScSIn3IfAyyAzckSc6v9+KVaibR5/UQLcuV2CDfUWpY8+dzd/odLYdRApeOWFth1otgLq2vGjq6SOiRHfB0dcgCifaeNyGGqD6OkWbyDXiQDvEytt/+aKdMupjaJfiBQNnxotu1AueNeuwb0hNRfKjDEAgIr1qWD2Xt1QVvbSeTwWo3BIHxxcVgYeCU+DnaiAaLoFhhxkwYNa+rKJqdOSfogvtexxqotKG5jIo867Q6MeitHzEpMnFay0GIpuIkW0UYjNW7ZVotSBNoPqRWynu4gZRM8O1b1FDQy6vANoB4mw/BoTqusAkrr80NHQIOgMiUiumn8RSgqcQgkZx3wclhROeLSns1j3dKNyQQ47jWC4KZYN9HTntc66KGnHvabTUrn1mIYRhoqXRaEKXfcZ8WdvLsoCt58hr2TZ80Bk5BZHVWmz3H3ZeruDkCh5Eaz4Fnsux8YScnDersOP0o1w6wmZR5DmBZ2bmzFq7qCUvnz8rVy36xM1GQk0gVB6935VczFjLEg/QHviVZ7K/rVy7E7g7JZGlEpAcQ8ewE8GN8oS7ECROvLmYu+LdZ1hTJ265w+Hku+JLSSaOAt8GZodxnbzbMJsXhbz3orxFAbTIzshMSQbwIULzTWpCCLyEYbWhv3pTPJNZhEoIaw4NjcbeG5o2gZT43GDRpJyGH69QX7NDC8cuJtok5TzF3k/cBccZQzuLo115PYmbnLk/ZpoGOoIa9KndDARSNXwQydU23RzhOhxW+KySuxuxu3i1DBpmFCEZBwpx+xJ6kKuocGKsM5der1taEv+mCQ5KB43YRwEV3gZGxOL9W1baYBs9nr0smadQbCtxD8wcc6Pnf5hoo/6TxYFJ12IFRH1RyUQkVBmKxmbRRsJmzci9phFcD8uaQCs6WKwjkfYmrn8BgFjhwh6sW6Xgdc85H3BW+YZOCT+nG5XEv+Aogpsj5yQTvKtRB8hN9gmFSk4fgJWviBOBo8iNZ28viht2wubudvWzAVJM4BnBOPveV5sqXvJlgh7MX36ipm9ZyuEc4/vaIsR8thA==';const _IH='90eaa521102180ed211738eb860e0db05fe8e37dd10825bffe55e680627c49e3';let _src;

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
