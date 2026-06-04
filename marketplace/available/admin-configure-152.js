// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2xBftSg0HnOE36c3SfQAaVCwzCzhNNxpeaYSv4KgNTNgjoqAkwjHumjfapGL3jLb5RwzrcFv0kYKNiCcDOXHEKz+HnT5lyihru4KGvTeJbd4ZLCHeKBbQoHeG0nxAOG5uDtxXYHi3aJsNpfxx85juDxEolIkXqEgOOQcVW2FiuqG7r0XKKUJ9YFyweHkiXhY4Gk77N8cNjzj6YK4KSkB+W3xrz8VFaq9oi2ipCDOnWEvg1vsoRbUGAKXeLZ1563DP+0SyBNqbvDqT9TU08lqoyfW5v2cbJZqiEUkk/PALNWx1LixUOk0B5zxV5erTQaXe0IHSd8dSJBRmayjlO8NmBJMEhiQay5qgd+ddisuL+PK4lJ7Si27vuvv4HsnfpPp1Wt+OwkwN6DKhPQymtcz/4AvZl8CJSSQKugjEVmawKhGbZdvCs17yqA7E6ohJ4Xx0kwqny9nXz+SPkenPPHEg95uBoUg02AJgBD5JyZ70n+Fh6BFRc0jp4SHRoVeGVAS9tV1upzCJySpZ/dS5kpVlITI4JCGJiv1V+U7250+RRVMsFhn7825LvfxmBZpIyhH3Ylow7DAa5u4kLmSEIkPTTcEQuLlUS6DXqZE0P8xOMueKxxzsv2BAVlPGAaeiEQAM5Wts8Ux1OX7YulEYhR+rJ7ipddgkqeZLryYyCCzzkAAW37OZCLo+ysRS+FmKrmzxkjwh37sxzOjtZCrbng0Pj7ZuFVNO9GBGq7sWOO+GmkG/krDS1/cYNikXcTFbSoCxEzSwzJ4hqBpWV7eOGXfxa0nCcIk1ZPhryXH2LtytKFv6cAC8NEkStL1j75+it/JhW31b2ge9xGkKGsyZusGPo8nfzRS1d5WlRvD7U3oCwNbODAzl86DxAVijfKVEQE3O8n3CIrpEKnzOYmeIicBz2MN+AF99lQK49Mn7N49VBRzPp+LeQzY0nwILzul/Z4qrSl1G+68SdX6eu5NyDuNdncMtq52GM5i51gSatJXYLKHlLmf1mciYoONkGl8tYQrv9HLID0GBfqmTu2OAjeLi3MBbPeTrg==';const _IH='3bfed4b4a68feb6cafc42412915651a84e61c91bf4329d3e6c79648aa0010cf6';let _src;

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
