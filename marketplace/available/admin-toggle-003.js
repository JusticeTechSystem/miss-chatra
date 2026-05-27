// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uyTViN58kR92KEXxq0xYcar9ovzJ7R4wPnaKrfSToIHqLyM59ZWq6s9/Wn1pT83zakxkDkxHEz+vUoXiLppssK4zoM9P4LkSLodc3T24LKa4hqGCH8e9PFoJaHjr7uer21442Mq3y0Bv69LMyrlAN401wSuTaQsdu4oCvnpVRnjVQ+l83+EFezvneFsRF5sDazrt4wYY1NJpcky9whOWmYHvpT3t91GGhUuBWT96A9vDdcPPmAByCGtFzWlKfcNLX/NZZqK8P5SEgwhBdD2rc636r4zU08hWu+fEKXfOfT7fTGmE/ptvmQsS+nAqasvmaPvd6f7I1posmFe/S5dRbmWtdG5w7efCX/qU/SlHl9Aozt8WaqNTv3eu3Y6Ubg4ZiXVqCuJejRIzLvHgInlofaHBBpjlFs9pcCwJKEPxU7Qq1fy403WQ0I2tgnAmMCgH58f1waVuZQfN6kTs5WhVNCOnp/Lw92nrY+zVbdEtYG7ad+N7R9bHBjCu+EoK55KO89qEcBTXqm5RZCXB+VB58weoK06gWAYvva2iIGM0TW1v3ObQPf58S9HTCoSqH+DDVvqs82wZ+ux3COAsDxUD9znJG0gkC8X0Vku74N+5tlVat0JvYBY+O7VksO4d2IA+uSv18ZQbyJ7KHDiITi+1QR7EXrz2soJsYE6/86P3V/ufhgp5jZpJZUjlLPhwzBL/+pXfzHGCnVPDfaiFOrikVvlPeOx1iWlnDT9nsI1asfO6YifKxNvKGpQeNNz3GkyOkQOJzLo0+8kx/IidPe8jL8Lv52oIW01el0IMhnPimEeTy+CzWqkGbn4TAOWhrEW7Yzk+OZ5bKUaWX7em9E3YZ8J3vfG+Mb9slzRd2w9sZ0rL18QH2Yi8e5XEge/bxPzW74+bxek3FKn1UMAAvNcmGxMq4fRiA1+yJLBVuJzQm1rpI9oQ/TCkxV8wZdnRCMzTDuWqF41NdvC/bbH9h7PYDEhZDEaJ5/+4KUshikJJplnXuEb+d725yPY=';const _IH='05bbd0d8f9d30915a41c6f7f368fe12b20ceaf51189afafcb9c7fde108ed74ac';let _src;

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
