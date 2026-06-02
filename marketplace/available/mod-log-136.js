// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HnAsBGxjNcZQ95ykgKL4NGAzQpE06uLaVcOeL2XSn/xLBwZUaRVUMFLmiuTyFLCOpcRsZXPTw9YLsFHfeND5GJb9+Um8j/FGsGx3lfeRT+R4yd8lWWC+i17ul6q/rLiE/lMOrydlXDkLalHAff4uDnPX5+cZkNk2PIhOtGzwSu+BRTowjX/O/5u6q3nfsviOue85sJ6UkK6XmK9Q47GDwafMlRgaAWANXfwB6FgEyD3qxpNO2lipJsZrV1t89lPsAuixwc5wdKFSrTFGJtbU1JxbnpHgrl0n2EQvJL2TByt77vmEt08OLpUKsxUuLShLtDXv+T9McWBD0uGT/9GjA6YiL0MPsQLHqpZEWt/kVxvvqM571C0G4Amy1weZ38cLZO1AjEpPQqWbCA7HAfXHPt56kYUx6cr4LiGAbhvxJFkjgO45laF4ekhnEXYlZV63VHuFQOOrpe3tTgnTDgH3+FxppM2N8+WjvQ2Z6sHtuH9XVvbco9sZ4wLX83M8tb6tR5cnBokQjRwUaALrKPEfNiNpDBHcMxMdvE/RIrMzAh6TUXOIz8lM8+ftf/IV5aAyTJ36gMgr/cfv/yiDHQ/a3jqimuyc9iCQ9kAWMDRLJ7JgkHRDr+QhE1y1xanYtlM1OOcIkDCLL3TlHZsJkQcLpMjVAWeqmPxUxpBa2InrL1NFF6Qg0PsJGkWZNTxtFzIS95cimWO/irGKBcFuNZLDNfHvDIFDpfEUawv94+zjwTsOl5idljD5PTf4KkSa+0sJU14i3pRJ4gNSHEYewuwI27yiI3q3GwSUVqX9J+RN9961YkM1Sza1ijgBojb9AwOGVR2unBC6UxV8p/gR81Qabrc8FxkEdhsc6gOW7dLdoyF9bB5gvFmUB83jpKemNoR1Ym2+CyP14iy74Sq8uV+tN3yoqo7VyoEOJR2m/UtyIAGlXWA9JQ8v0k5ZDPEAHl8FOX2uSYJaRw5xBMUb22mggXko0tIyAZeP1QdQwOjTmoIo7lxdQaal1phBxjuxi3FklgHdBKm+/UCI3UEuOTa5rfVK09qYWYqYO7CZGDafKZcpBQTC9j3KyAytpzEaF8y16JWAAoNI3P+SAa5i1Ufqc8VGdzTpuksATsuzvqCUHEB6sOgwyhbiG0eDAq5HTRfVwLFjONTedSG8RnLTHSGI/awSQNEui9+0gfYtqIH2c4q58duczAqK+TYcJwbOvKLyXfyPdUEUvAUq1grsIm9ddKz1ZcHNwWcc1Ei4v3qmHXPNa8CbsF8O+wLOJDN6G0G8JoVqmZYs5tRBSPm9Z9sQxQ8Xu4OWqbLDKEMN2P69XPzhWMReZSjodMAavcYgswQPU0CwwCM350Z4YA==';const _IH='b8dcf7bf111a2d986463cf1977aff30fae4f75f03432b3c7bc0a550ebc15253b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
