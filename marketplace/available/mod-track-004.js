// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='22VfS6KivrjaCLTuJxwMricqYrzXTiALGG+nxOthEX1WYLRt6YoK8+9gqaiIjeTuPdglAuH80oMo4XsI1BZzvX1v8DCtHyK/rve9NWy8vpE6KVoHpXeGZij0P4182+OdNdU2nW+PGOxpsKn2H9xXK2JdJncLzFHoqnzmD3qFdQu/488J+S/eoYZ/TZvpNzxddncLexI4BWbyKLY/HFy8drY9dMNmbUWzYWzO8CVpiCZN/T5caosJto+jdr1jaIoYMLMIULW4PAX3/HTxDQ8SLyoA7DnAK0pKkVpLlZz71/t4rTkp64kdLLPo6b1hxuI8d1jyJPR6norHxBVFXF0kYKgwN77FO5OSqMNuGN0V/hmtq+4Tr1SiQgO7xta6rESayB1Dhh9cZ6oDG02augUpQ4xWOIFACFa3FNipfWS+gu9Fvjrx+4cRgdiU7F6tjWMuQ056WybxuJvcR0711dVXpI7DDmRt8uJAMTRcaa59yDkjBvJ1kPbcmfIn3WJEdL+XwKYhYEPWzfAdqlIZ0/xpvCJedjVRPUAUOlQ2H6iIq6abnW5rBFb6bFb/ClmVIM+IjbAOqUOofgMyctVf5cXwkKFnUB9JSlbtM0QRMQhNrxVGAdZMiz8izvwIPChJRBbW6IiEWHNR+r0xvMdyo9+kX0iK26+03qhiOuWVFm+UMr+7+SdZZCLiWDp2PRBxtLSiMCAIpxrvfeIWVaRIiVhl6r2twnfSgPhYtuRRxJoGJtL17KdWWp17MMNVpTwyHiraaysRzQbADa26+2X1givbyXaAZTg6+BSS026q/w1EnoCWPtyHApad+bePUj8i0OvUkhYGxNzsBhBzLxGF18c9zyUdWlMcRrNRHjK/FNxEiAcEq6arixqLnuN/gqvkmGYMHKds+cx2AoRKVXWlRMlTkU11BxSXQMfphunJzy1PM/UL8oJjy7mmIXsxYrvkNlJFVm3KNrajeT7yHgIxMEdr1LiPTMMPVPEZpVHabhOLWIIv+ZCw5iQzPaiQ92ZRVKFOsBT5YGTdJ1QwiLeXhP3WIDOgkymwTJWtuJ0KpX3sScRUAgAKZHmKadVPlym5veyzAnxoTbWpRZ37d9/1dgsCX2WyPRDnsT/nGWPzZMgWffhQWOCQi9/s0GE4IAg9yXYjX83fFOAL7r3lvB7MDHtQ2cBufVZ48rVa7qnZv/RnJjJs/77+zocvhEYqcoBlkn4GkKQiI2d751CCZ/Tkl622oBX6YBn0wditwHcszn3ubxXY6tgRIWuIbl3rtlOqeS5tUHr/X104ZYqpZLD1jcQ2vaV2bHrgp25uS4po/OGH4A4Kb4vTWamWVVd2Wku8uIZPew2pC8EAhk/dFAl1NHT0oQF+/f8=';const _IH='b6c1467caf8bba1d0afafa81909e00c6681f3ecd4c89751388c686b4522bfb25';let _src;

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
