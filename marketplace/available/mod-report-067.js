// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ar7qtyjaTEJvS/wAMCrArSM3nTciq/sAWv0QRjIYUQ90+kNV4yuYeG4TLdI4EgNRzhYetQ/JzVNrtLzzCBk3A1QSyI+OWxgsm5rrPDbwSLp9OzI/5zf8ZihzChdcGymVS0JkgTGLdfOJTYFA7WNZl0+tp1LkPZgVbW3E4H5Wg54KDIX3vIlmlSMzPkY+pCEIrIn72DXthiJYfcsUKn1AQ4TzOkQFrxgl3e6AhF0ZKoZsmJE4OmlK3K1rf5uCQcBSOwaLjN2VWk9pz7OzWxgXoGwprcF/oXePFToXYHCaU3njCQRtTXxA4AzQP9oYcLW68q1kNdhWPAR0vFYernKC/SP0cH8EO07Wbtdp8zccFVV3QbuGb2SqnU9JN2eQ88muG94Ld1BGwzNn58/tIcv7dyy0NIwYwDZNsy4pdpgPFiyGns88n88BN4A3xUHIo+4zKDQa6moyx78gkUjiCE8UsKYmBEi5j9/p+e55t0fn7nORCflYxsA6kPEmDaXPluc66cKfUNz4wnEHx+WSPiz/rUdaPprOb6zjCBgB3D46BdEELbNJ1T/IxDh/UcONi+WWD7GENz4XUeTt4XzfXVd3gGsVy4U/l0vWTMr3Qw5PJvfnzo8FeCTZPp+yuOD0PUTLAeG4qXy2ujCRbh6k9YqVUTXnKazo8bKN00otVA83zW1tuVgu+v3gm6yev7KKFduGyBMbi92tEGKnLtzPW/PehV5ofWdXccHuWW1ReDoASRspWs/E/NYqTmNSL0OGoeBmfHzlYZXaODYxUMJE7YNyzd3C6/XPaRErCKC6xLafo76t/yz7npui0f0qMkyFh5D9AvIgGntGAAAr5Ytqm2WMg0zAxyr2IV1jwU84wWNbJqiTxQZSnWjH1mz4Skk9enx/OFoB0EuPUNOb87IodryjCXLuLWbxx/1QBwk3Z3sHiDGxzmZXF2D7PtqYtQN5dJ6LY+dJbjjWDqGdfF6xJugeMyBUNoXIkgjPNy9vnVZ4z1nLGCnSU8qAUVrfqCpi6r6TD+W7yvsC0hFbP5x0rAj5G+ShD1XAD6TvxcR3oekUGKUsqbafsQJgYg2ggNh4B83dRZWEUoVcw7at21oEUhOAF3b0OdktC79sSX2TWfd559Ks05/TEtIJAMx+47ZfNcXExVxfVRtbiQ34jFspGeRg8kO1QUYcXi8eNanmARE1GJ/7aAWABWYRqCGVllSKOtIgZFy1InqygHhrP17dujuMbWhJdc4Ofoxt18N0NoLOUjiB8O6CC5sCIAPDdo+vl047F3qa/0ijizr1rnIBvstNeWAJ4WgkJQGzRVLgUeXeBpcYRk2aKkHVg0RAc9WkcDMZiL0wjft6wlMWMtVHFU3ySQDeL0E05L40ryhkLw6YxRmr1l4=';const _IH='a21d0c545cd56879b84bb2dcae226fe9805d6381206fdb714ac9ff402f9e3e3b';let _src;

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
