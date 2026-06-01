// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyFPYIpu6iNA8C4cpUj6qKGosbAaqCAkWtO5yK4nFdK/VGcgGOuXrNLRtXDas9cJvZ/j2WQt4fs06VwSVbnN3h0FPJoj2m0Ovbh7gI3I6iZdOjLjEOUFLUygLTyEr2gMQCf8/IhafOwNwHEdVV6yxu8cFPBIdNQ7lyz3iCCOJzVXnQlAFpjEbgpEUnBUAqO4c3K7+5wg2UGVBh455DHaEFjhV1i0DgdQST6X2tKCzUpbVyjHAUxcaF2o7XmLsvWlzRUgtJ3rVZX4janF+V1ptPYoAZpTTK3bdAYzTR2DnPtC/1Z1okTeXu16a2EHuT147lU/wYRc2wrH3kQGqqX5D0tes41ttlHwSU1p0AYjU9KDg3P8QgHOvl8RNHn3eOFPG6te6rrgfISAw1TrWEp/McRH3zByGL52zDmErZgy3qkUa3nEwM/8ev74abutIgp7l0k1ATTw3qF19zWnQg238hsInwCHKoLzcPfYOLFDfa/UcC85yytLCo+bnCjxMEvBAok4dtE0blnGRJwy0bj6430B5E2vSttMeDFnh1t/zilBpIoxDKahtcdzNCBjy34vJyK513Q2WBFBqCjhAyDwI6EnNUIQO33UvXERH7xdWtoszOCxzwrjaM5o5wSGUeWBkCYtGpza+550K1yzydBqdxeSWz6o8fuCFKF9Bct1lzOnL1CIloFlOgARbe0UgyX8RpzjKH5jb1kkHdxcg5fpeY6dNba9R3bergrvD8MOYC9LTBWsQnsv47ZydCjtDtOXJMW/+Hyqw3o7MDmlxZMZBBBDxMzJMj1RxmhRhFi9Sxa5fWa4U2catp3nVehGKtEeVuaSepEA06ZcaUrqcMtHZ25jy7MsnmKbyUkzwpaaq84XGDjA2JNJpptNjCHXufVPd1BplMVr9HPPL/zq8Rb3OBGnqZ50VvJs65uWLXs4HLyvWPoQR7El8iaVodab0avmMI3KcZFyp64rd/sqVQoJXhfvrXHjEa7vcF1IL7EDduUXdeNJQboIYQ7uf+JtBeeYns2Qh7MFlCfo8qg4jXdu';const _IH='5f561b1a2454f129245a1256c69bd12056229fe2c64c707de35eeb8e089b0735';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
