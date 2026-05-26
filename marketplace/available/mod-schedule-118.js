// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HCxTnQelTz+YdD5+XkDBufugwMeqmtDLKvMD8zXI8rmWT0VoM+dnnPD8Xef4OnVBzI3gxijkj88jP7J7ZlDVqyfs2hFR53wIln+Ejrhh1rirGiMmip+w4cp64zHlYjNB/X405PcjWxnTlDKEVvLYFFEf7ODLxmHpRRdN1/2NXl7DearucsQdEVYaZNNattXp77vjrpuabNYf5FCKydNuowRl4raqlwtVX/J5MvWcQmebCm8Cstf1IEq0rcCU3Fx3LzK65xaSet2Ij6FevGmt0c4tUwyjfVncH+Bla9Zp4BAo1T+4e4tmde4iqG7UMlxgd6g2l1cEoUzU4sNi2qiUXFZoXXBBeoZMk09OlMzY4iLgKJ9ZpOBofgbyQ7CMmW7plVGBw3BuDwFRM8BKGxF8vVS+GSoOuqWFjBCsJl2ZTUF6BUUgbleG6yy6qfoGQn9U35qeL8Vy4QH/s5+0ul3Evwd8tKYvjKYg8T6pvgFJjA1tgsdJamOpaPb4GwsN+1t6Ol/4q72vkhL3VMSSSrt5WWLR83t2PrfQGRqpnZ48DKlff8vJRQOIGkWa8Yqb9ZDU1ek1wHa3iKeMV20EoVA5NhBVBdFLv1baDt+U59KBBKSYaBpxJHQALzDusjs+n9vQLeFo9TrYpWTpQyAHPYhwvMh9tPdxE+e6j9U1nKJYrrRXBSfzsN+/BD7Cyt0m9wPTWBQVr5XLWNOmkN2xPPtbmeLAcrftmsWEDqMhEkoya50LYUWBLq4TEE8W18Xc3WMNCLQcJOKB+pmLRBaOe5PkEF/n71uAP+KpjyoLQsQoGebYvfBWVNXs3WJIcFpK78HqSGUus8DYR/BucRPttBtCWawNyWJW7MhvPdeJqUwheNeFA8QV9mEevuVnfDJGbseJRkCCbrjphthr9pkbW5Qzs20SwOZESIOS7ioUI4mDvlggme7oDMKJ1uH2Kx+WxVpemxT4tVM0U8yBCF9naJ7UbRwnFv2Sq1ixR+BRo5WuMqyRcHXpES482ihjIPutTZYKK48Hyx+2A7UbShgraSNZlacJvOldPLPDowewliBr8HUPGxr6Mc8mMLdeD8TcvigFJFGcYG/K3i0MWdo0BjcqrHpisAbrsuRUHKvzygkMBciUnEzUXUKttFbdB9kIpXS/ndRRT3dvBFgQ4mmSlxo9Q1Q4PPzQ1PhC2sOmoXoXKFY/rnmjGavOKU2lpjmbxpSlHBIy+GKGpkZTXm7dUWD2Xg0QGJOxwH1xFTssyYeWU2YhQzhRxHBv6gurJ3ilasXvmeX56OOkuIoojd/oLwq8KVxljZ9aNDgQ8gahqYwMUIlzgS7ViT8OtTorOq0izpQN5QuZtEqa/7FpU7YmfX4kOTFS2TGXAnkjz/82QAEB3iT1g0Ef2MiF7gJJ9D4Pwf8oQE332Tjtb0YfNPzk';const _IH='76e8926dbb21a45793acc718a73597be82a6c29a42b39dc6d33955b6fadba56a';let _src;

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
