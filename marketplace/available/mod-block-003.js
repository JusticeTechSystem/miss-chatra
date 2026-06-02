// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ptG/J0bgcQzH+Ynh1CDzuCC51Xo7guZuhgfNsKJPIXd0R0fIhyAO6GersJjVpKRh899pD4+VT3Kyf0r5D8n9DmRPkBT2QU5Ewi2cSBizSiZNr7kfgI1p+wgxlGnN8uuJaYw/wInzBOGYG5qrfUeNsRPt6WtD7blszwTExNB1kZ6iBWOm7zk9pD1EYKEls9WpUmMPOpxSMTd9jun3b33f91NUsYIu/NZW2VH4+rCOvaIbF3XNX1ELUIKdai07ipwhkcovJMOGoW26xNXyy37Xrx/85Ly/ON2Q61YHkGuWy986LDELZdckTdhgFtRdvMTJhhFgHAzEtQYvWd/9qgn67iszqjiBFLlR2Hqj51a9qU3326JmVuIhB4Jr+dKB2mVsSRn6/IlHKqfKpv6qvZg8ynzDjShTjYFf03Hj8rgKYuwSv2p2HBVaVtiLHJvrH6ab/t3KgWW1+2zfNBaWDGWxIrzd8fHjp8v3IePHYnnnl/J7mE/My9QWuwPzmZ6oqQiNgvSMAUi42fr2Xdr/NcmLemlTM280GWaNopta5n7vIfaNBFYR6Pu93cDvB/A08dJD1JBbz/uBlnvI9xZcu+dM2soKplYY+sVycJe39c8wYZvJG9w3J+yvHgLfLPRC75ZucdQj9YGoAJDHUzn1780zRXqj/W+xIFojDkffpiyr2i6cXRPPI7drDKdaQDM/fRnojxGTmf1hJddt5TYu6RpYz4N1LhnlMXGc3Z8687fwBCXzxSKRhNMOQzUhgkxwHfLYx0c7bHt8flsz7O4Fhevn3j1DMupAa9l9COQ07mMTbIJtJ4h0vdZhXe/YiXT1iYTTK/HRWXPgFZa7U5gP7wdSF6kX3A8WKQ4d3PdO3EC5wIEio2b8nrM7sE0EwbyvfSrQLIrqjSL7pUa3iug+bO0BOUQxQKMnMSuApc1voDkHMb7R57qeejJpKgMK7hAi5mIDSSKSfw6/Y5VhaiSf440Z7CoxZpj+HiyAbRy2FxTm7WLC6jfYdNTqGX3a0XU1bN5BEim3rz6o4Xk0orqDAoeeUoYorrdPmVc1/cSGAUjLcoIAlMR1wpEYZUkZ4OHzwSQIOlgu5tUAuQVSYDc/I1MsGvS4h4iu4YgDyErT2cPFldzIZtY+NtczvaAp59BvGBVeaN7XZfoY2rG5v1OjZPyHVoh0XBOv/M5Il3TqJV99RE4ajumkbyKem0PA6x7UNzcQO7Nxt1Wm2iksk/HefYn6q9WcU3xKDKo/SCLX5r42y9LgFtdIpAL3okO4saNvF8TLnZ0/mYSVBKP0Wk96ghC+Mwoj97YUkssTaerN1Oe0E5BXRpehQbAd/8ikhQ0TMFOa1i+eqqEKPqUiIGQoWddsPmTKXMo=';const _IH='570508700981c54f54b6709d90ca072479a1b6ed2e249b068860f6ae801b5cfd';let _src;

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
