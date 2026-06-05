// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fQBijTAgm0DOaMKmCwP7pDQ5yWA8+i4HMKyZjyCW6lVYn3+cdfukB6N4kIzL4FUni95MqLnHyDcpvJufWvKFXSerHCANsMAOJ0ZerZu6E720XOx+xDG5/U8m9jJmsD5YYEnXnEPSKJH3Pbk9Y8V/s8es7FGmPda4WHVgJhmy7GlATg4vDUK6TP2UySQ+hOFgxc/TTB9leZn56yo9NXrC5tNfa53iSuU5jEFm5dpfgz5FyYhNQBtggnKLyEHIsZmUSKlvQ4kLfYYW+yUjwqph5QvdBAsGPJLtmna/SMNoml/TbYEgam95RD2g91Pyi/4t7EHevT4ZnVhlIrLtKzEytD129W5uDivAh1mtEufBWf735ZN1HHIHQ52bEWZNG/kse0gwqbkq5Ljr6mjolJJuuvtcQkALQ7EOIrXxVP1X2y25axrUm856/ET1svxby31PyzICE9UF9A5N7uspnURSHicpVH9FaFDO/oJsZZLcYvxcNTBCQ50+7yXdlWV0q2LN+mpVfKFc0CQ7K/MUWNVEDCq8LxHbURLy3/lKl3KqlluErJMbKljX+8KTSsfRLefOLsGNKe7lvm8gFp7SIOPf2h5eYtGy7sZEAWsM+7f1U2AodL/1XX4Th8JzHrWOmX0JO8di8T3GMNYE76BcIIyw9v6ecHjmrCyVzt1MLaDlSV6D3MPevgK6ZamqS8Zn4dG5q3gx7fcHYO5NufE2mrPkmLqtx416DPyvYqcqdXIbvRQtAnFcBbIMUAVDtxqBF7S+YmykjZOwZyi8qcEtCIK4Tdp8Apr66z27LvcCRG1A3leGH6NL85LwO2Anh2QbY1Uo9lxYW5nqafWXK9W22a4pLkIS4SpWSVudwVJgBpuhjiDuFcye7HhMxxPDDhWgDjd4Hl1VCkJEvzXtu+K0SvQrq5+ljC8EVEeo9r1CG/cO7J2k7x3Q+pe+p/Uv47QBQpp4nGwPowpiKDYTbc1zRJsBpL5S6lsWe+Zj2p9Fio5aQoVvh8vqiARkclFZFklaDCTsu1w3iCkWQceH+AQIm5YqfYYNEUo9BRUr/k7YLGuWyK1JZxEaSYO3WrauQst4V90WFRpcrub/ACdVZalYH/GEpcLOGNM5OfchYywmFlLMWGIz2caJo+yIbq3kDXVK0x1nMGg/5R5mkNzv9gomUP0EQaLs6UwdD9H75LdnyN9nnEHapiGySimNX+yERBJAxnlSZZGyOK3l6BHtbWn3Rd14QtO5EM0WzoxZMsJRa7QBtBCAz0P8Y5jI5pDH7Vc/dC+rv+R+Qo5i1zUQJZs15wxN/QmcuCfv7rEiDi+l8cmFBOtJzjKntF00YyMrMUa2dxt0QR69OzsUICdzG+bPg7EtQRnOI0shWgw06kh/v74FgfSDOUPskgfeXBe7hqx9xYF7FwOg9MvvB10+cy1Ka3OMjhTw1YFMG+SmQ/po5BdWFrJtXIp84R4JCK+c1tkDrdN5Jt+IJmw85YM8XzZM0o98MZsZ5S06iGu/RoMwav5/WyaQ0IqvIdj+Sp/elCBh3G3CaezjhxlAGSmrx0hCbvNkzL2WsxbAN6vA8SW2TlO0xIRztktfYzfyWz/Biq6DRr9lxfYJSsqfd2xBW2tk+evjzzWcnWB+3Hoe34tPM/Irw6CkfXP/4bO/IpkzygpHNM/4sqTIoctO1oENuAsmbUJwObzzUuWRAOOlovZ7FA==';const _IH='dbea37ddc5aeedabe0e0ea8dcdd30e8256c53ea11c81283f8784d33e7cc43356';let _src;

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
