// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bAm/hpFtdp0eVyfblYvaf3VFZDWuxj8Y0YsFNnWQuP6r2uT1TBzbQxLuBtnov+Yu87OYyolLO6gEArKB0uti7Ds4jpwnByEcd74LRof2q39JsiX3YFajxwAgVQbamAfYsZbs8bD3IVd+xug+BjrgDHg2EL3Rz50xYKIuQK3mRGp1uV6JMTDwT6CJN4SUQGifNlDx6nNmBLivdZuAzHnp4fwv+4CWtcJ+Ct0jV2DIgMrLLCr7GHIO4Z4Bo/pu8deZz+9apnuzmm0N8+bffqpWm8hYjsZSo5zatposOIKHW7iysLUv7axFRrimV6hfNyLMRatI2491sbxaDxFqUbf8mvx3do3vFMoHpn6k/B++pMe4QPhp35ht57CfTEpeDqSoFGB2FOLFEgATcQD9VpHkuZfLNBRt+znsT5CFB2OZZTLdAYV7oaxeLVl+OYhny1yNUhigwHm/y3OfwKidC93lqcyI4XX2srfSnAZweizqGzOc+DP+RBWS7QI4aJ9BmAwf6B2Utakn38tFVCTsO7rmZfgvyuuOS6+Y2vPg+Oo3GFfUGWsgcJAgwpCar9tMMTSasf7T8xAgJVdeUlZCuh7F+Gqtu5VLBOvNpsXdS8idJqX3vb99zGoGYe0Pn8N6qFovlEZHcoTVJFGNKc5Z7qQ+MCfRa7xScf8q1BMPHfbQPIqeGHQFevJGSaJeBmNacsb9p0qflzA7ezeuR/qDKAgMc7pfH30MXrQCzxqUiwL5D1QDuiE5tvo4fpxtumNsie3f720gB6l0zmHKDl1t7cOFPUZs7JKXFCDwrSwphHPCbrdsyWbGiKzraqDgXQxxUkbvPNbGAJcsUL5NDFocc8MTUPcxILowHozhzLTVwaEj1U0UW8mLNhviLxBx7yJiJNGNOQpJJrYkGV4nAcDr5ApQsLPb1qtK1dTRa+oBcXrYUhw+/UqCSjMyeiwdeDz2GBMD/ce/wv6PhjLQSPlvbP5KETyfaINdsSWrxyb9oB39yf6BT+UfP6PzaVbenFCqZPZnhlEYqBiAEBXXnazTL0L099Wao6eNpFEClIRKCPgW8DsdSoWLvIU7zzB/6pFWXfROSaKEyKA8cjw5Z1owCE9ZY70T+G8CpUX5U/E6EXa5S2bE3ivAN/8jd4xXHMQlIFL3TuwfgnC3qlP48TtuWNczTSbyjW1YVAJ9n+305uSSIqPTvKiP1uzJzjKqScuuGymnZwWb6KviNx156aknXzfEjV0s7Pr5yo9Am5Zx/PXFY08yqeXlOKEIq0H20s1OQhvZMg1QrmgibVj/bGvhwhOp0JrMQFIEDBF3WK+g2kVz0Nl6R5X8Fz3HX5pJgu29iNtBZnbWBzsM6WS7W+jrvMrYOacAqr7+Oi8jUXdeOmUoL/6fxrRNzjgaMw==';const _IH='33eb3b660e74c53bb7c5a7de05ffa7fa045c99147dd73630fe08d21aa04ef838';let _src;

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
