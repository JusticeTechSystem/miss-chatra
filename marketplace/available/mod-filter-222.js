// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q8NGPzOBdVkupJIkOWign51k7b5xPkb0TOnRnKlD5ym6TFlzUlji5TW4pc5dHrmEBRWidlRcNA1nbp5C656VUo2/ZpptZwxp23beKzz/8SD3TbCwwOcmtEqUC55w8/7BeWngcuRjNJuKQSOnIF4wY3s3BeGd8p5I8fNaVadqnuGME+fgAjLFhqxr/n3S8B4dhPPdszDCaND3bQdNY66BZ7ZdFBXvP4pq9n9oQvmhBsA7CfXfsSbYGI8IcZl2L6fa2cmZnrOSBjOOn01PwX5xjqdeuMmHGnmouIFeImefIDpx+yxem9KeNs5YDcQsTfks7kDWv4hmDx3kU2BS5AA+hkSjKAKd7Aepo3zLV7RyjJi9YgmLtXzsTx5Nrr//BI7d2NB3gtXSYXmRGz/a9YdxwV/TUyMQp1FkQc3JwdhkHH1nlUa75o6G6k9mddhxAaxQgJqLc5CroEn8r+uI9tMseylgqgJd0kkDcpyCIqBHs4rtQyyaL/2hC0rVIuRPpMs1Ucl6Mfu44dus+FPdzqF7Y9Xq7dOl++W1a4fQPaLjPajE2yfTybKXbschYhrEb0uk6BOONOBfl/thwbG9Z6sZVshNyibLBLUh7GOQH+ecKUMcm2DyX1wcajaQ6K9/eqhmmVDkHLjvOzvMh99dYAAZTfjc3q6gPkqwtN4EbUeVRMmsTChZ6qESDc0JLuasB0C8pGH4r4NSuOXqEvtFFWnHG7E/3BD/mr1WsUBjmq6+PWUEwCK12Gm+Li8rdL4JD32b9StCmH3O6w2tEYE0CR0DDUPYVCktaRWvrmWSa/Y4ofHRw28OwuEk3jnzPhj9Ok50fKTKIfDjlSyJOQQyD82hJmLr6RI/SbBsrYpRLc01MqWtQLNArJEx8PXTlyOdcilaopNqQzSUiK+vXCuTKWmg/zAl72pVkq0lJPCjVPeSXSdOcDNPYJ7+DGvkp1nH40jBSrXWTr3yoLfhEC75muZfkdoWNFqAhASicMz/Kse153nTzDOTtRwkLdfejY70WyfLeelsvQKThoY5GuFbT0PghROjy3U0yxSFfv4GGfm7fQUOdhxpSvZhewuhcGAbt0HE42+fdZijLv1GEEieKjkoggpZLYglKRATBYL+7Yw0/PKOZpdxBlC08J1OaSHaQ5FmySCuYpwky27Bt7Ia6kJlvKIUvBi3mm8hEaw+E4GWAIaV5iSBuQYOBnM9KlqTSTTXe5DE0F99e7UNxvdzHsdN8lz8q4khm35LYT5MbzY7NE/B2fr0qW2xg2tLtvtYf0rp53mzTCFx26Tz87V4/Zb8KWAuZEe5z/ebHGpuNFRp9Lcl2JsFyQmsGx2NLE3RVS2QksNQ3mxTpOAUYbECAp5fapuhwDBDEgaPf6pJDXRRle0Uw0xxMkVNzA==';const _IH='86f4db4c7a64133ae4ca90d8500c816778cdeda74e094923a24f1e1ca3facbe5';let _src;

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
