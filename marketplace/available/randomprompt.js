// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AnN1Hwm4XmU6tsVeed7qA5SmHROnFiDvL2V7wzJtTygo9TQFsPEjV0hRffJBBPkl77ou78VVCazKJObzCBcE+ZRQNFwDAhZZ0uRCG28hFgi8SsHKylFIQpbHL1gGNU0kLkspou48AKl44wAggAhCnctNiJ3nhI9C2V6p49dIAh3BzTxDTPxFLYBaL8fWUsvZ8rSMyiBaknWMj+duP4uyYViNIcI1BzqDsqGZ/qXtTxPx1RhY+5AQWGJYyL0NJqS9Hytnrops6Ig8EXf/Tee24Shp7QrgwQGFlJCCkSM64m15fT3f93xH5ru8Zh79sdGRR+Wa2JoAYgXfe1RGXU35SLDfGjzJg7UMtqtspqG4SHhqTJlBjTcYz9/fJkF3e+JPxtxlYxH06r5bC0sbQR/VD5Dgkjzg8M+TT82pwwD3jqkK2my/Oe4XknrYGlmbyIBMq1iXuPLmn0jrodIl+7DAuloF5368/8Rw8mDiXA8u0CxES9g3HTzq7GZGJFo5XgFN102ObsjisQ9t41iCEiGcuM8saCkbDP6BPGze5fMgPBEkkbaLVsJUgt3k1STtrHZq+uDeyQDce1FVf4rC+A5K5Jz+C9rRXivgtASlRYZngFNPnLxgirn4gwSHH2BHe0KFV8Np5JhGrDMX0V1xU7cojGfS2B3yyx4SQ9XeRys6FtHoSKsPp/k3BskUfdE5h8GEBg1A2Z4DOs7S5PbxQYVSuyFkHocoXij51HL82M/alRdoj56zQq8feKOYLQqEzsPut4SeS+HkOlGS017atDU6FSxjeOuwwgnbj240ePBguDHZuyqemgLUMpxTCXYnLnT4i0lVYB6GTyDimaSeR5I76OPUcKkhnlxU6PUU6CEk1N8S/XTiycCHSNXltLfZOhAyYru9ccZSDjZZ19d8Kn1ElNM3a2P8Wsfqr+UudtjbbfrgcpxkZ5go00Jwuol2E42j1/lUOyRf1kixvdSavNXScIVQcP5OmFJZ6dfNpRAkHVbhZsb6EpL7Ev8L+eFK4IpDSB+uTra/68dOTU/wCNbr/vgK/lqAyjlfZneJgkIsX75csgo8d7jwA6PS0YDk+AloKynpxrFDU5KmnoyuMcr9R4mF8zQNZzO9yA3+EN9KHJqBr6GlDq92RKI9NxfJgEryIpU83e8evXhhEveSw+YM6Ff5MSH9+IZ8/EgjGTzFfeZqLnl5vqkUGR0Blox3U1eRu8VUH07pzMtu6A==';const _IH='172398c6c7f22922c76a7f79f72e68e35f822034572a000396c5c7fcb0a4e9f6';let _src;

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
