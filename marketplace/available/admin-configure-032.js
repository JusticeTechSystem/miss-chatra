// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BM1vSofeM8bMvpgjAN7LJm/otTQuDnVvsh/JUxOIQgOo6NF3Ii4gnaagxbeA8F0mxsAmMUAQx0BxKF0PC3L5uItRAuIHYXz4LySGEvl4r2VLQCMDOV8JrgOjhe9aesxs3UuxusQfvtDw+pIknrekMHmchIZMUYP4TpRddB7rwa/wMpOP1xLyKyxcq1QdY2r3rW4agG9cQGVdglhOsbAziWfMRWovKKVTkwkhNSoJP+CcCTXO9PV/Zill+KxzQ/mWX89qBzFjEMo3uQbaTzsj637lSB//H8g7t6Wdsxo81UcSPquWHYyJjbghwtwOCoWKfCDzN5ENyss80BkLLMcBr9gVnKifxhW/PWbNOzpamGEZHXebqZE1m0fheISIipw+kRiOhgiKcIhUqn7MoJ5VKmWekTSrFP2iqFFt6vik2un+JTAgmsQjbfgJsoNKM5xY0Xg6RsXMajLNhVZUPREEfycwrMaApfloByHXuPsoRnLGVKIENrxflE5Niet5q0yOEe2Jj8wpDKmNvTBwxVChgCL8Ny+jrZMglZ+/zZzD/wjFfuMTPWy2osWCXdGpi/21DRTmGkMHNH0L2EYAkZRAMevvGZuFrUiP9U6qhDCfVvqV50KwsxQickqktJAPCvo+nuk04tv2AMQXGYr5/UwwQfwvuoSdEbVt8fBw5DcQ0e7u0mzz4Wcwpheod/Xmems2HcYLPmDXy8DdMxuwGNLUbXXuEAm1jvqwrUvfGLR5e0kUBjZXAYWdxO8W6UyOaVLMk6VM6QSn0F/rbKB62yZWiYbDS38vPN+p1+0NIQHqck+mJrTWROOAySsgIQ54xjNAGusjoElTkcK4gSwpX6clMjNBuxPlwHLqxEeL/LwMaYhUD/BPOwbKk23pkwnUHIw/H8OeRORzKqeuPgKesG8D+nVxoZsyqA2JCSu5ExdqmV1du1K+g2CI34BUu9EDA8D6n/8u/JHdhbNTQscHhhov3KcAOaIA9ePTahbGt1HzsW5FwVHthmXXqwG72RpcbuGLHkTyClopptMHiRQG8PiqGBP5';const _IH='260cefa061208452f42167b38c81c43322abfcc21556057440580d4ccb4ecb74';let _src;

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
