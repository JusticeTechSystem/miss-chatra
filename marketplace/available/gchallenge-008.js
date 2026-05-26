// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2zJAOjbmO0OiiAVjplY/3G+bpedRg0gB3pfkme0pQFJ5k8GDidZ+rIMBJhT5DIQl56Z5noJtlR0ktiKRq/7xxVwfFACxA2g/cMvDJs6YQpT6cPpy4d5cSFYy7ajzeeBYmTqKC3A2H7E74KfBpe1SvkuNgiFkmIYreQ4Mk4Hs0Mco65IVM5rXvAOueADz9J7oR/8wbSMRcy4DE6l71XlQEmEtlSG8aGGZcOUL2f0gAyv+qkZ7NkTFTeAtk38w8i8b5T2KWKmR5yho5IPUKSdSonOfszyCM2Bxsu0+ofOADKdoIzZuRHWq44rn81Ae1bdwadTSjbcO0gfiSQ0mJ/p/IBWEY1L17qlHeSwSOCU2Tz4/RW6gjUQh132M3S9Zd8CtVt5XOLbfN+36jdxdx8A7sSd5CA/xuiwrA0IMsdnwHJbo+SIu2S9THlJ2gcKu6CwPlweBLo3CCnNxk7DzcP1Ees0Bd/Mjhrk4T+o1o16vRKwijoBUxalbW9rZQjBUweZ1KTHes2k57C+2VnF2vvGmFxcb4HyOQyLxmCbYVstmIF9G++qLn0rFSp9jqz9qColmpgZg5/n3sTdfcuZgAXmJYGxULb8RmflP8nLZi0axvXeVkoCugNgaZcI9X6vO0RmWDHrQIB3XPLpgOnRTVnHA';const _IH='28e49641f161e8eb6e2e9b556808213697ad2ba8d3b6852f59b0720a4b4cf18d';let _src;

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
