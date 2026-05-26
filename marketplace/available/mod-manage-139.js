// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xVxKYZrZdLNP+eUjwO7ivLDdjwUX99b+WoWhpvuQkLnwqBg6aAV781gyrFhVh8S6asC1vjKwepngg9Dy9rX/aleOP8yU2lRhFD1zAuUK5LZqHJL2LUcvBcZ/de9FkO/2kKsu6z3vBvj/1Wli8QXJcGQqAJ4U8puDbn3ykvjmGgiFcXw0w5BpbcRpD1KbDBoOrHNICjt0sKkmhTBuZGOBP18sQxjTgjgFAD87EQZ1VHFYe63GkJieiu0AhhVS/A1d08K7OZ97Jm76wGAEOXaHZAnWRDH/gC4xQ/gqKHbbbfy7Bn/YjPQZq2iVb7x6W/SGInkUkQS+x4klBBDvuSJim2FClq9Fqjqw6MFZoekGIM+JZeJ+2+WCtRCewShZuNXkX2uCb+4RTAqgHIpdgFjjg+yXb80P4T8bvYwG38dnnuhE09T+sysSb+K9Q2Tz1X1BLTZ7p2n2KUh+7ZILG441yUGZx84q4ohBcw8DEwwpKAzZTVNOEIhF3eB7mqMn7f4t2ZN0Fv7LhfzZGE8Pbm57GuiE4KGqyaKeWXIyc8pgd2DW5xfv4x2hIsdrZH3DTiXMwCwVc7BESUGjyamNgNAolIYtZwdprB+oioYdBzT9WkeCDqcT3wCge4u+Wz8KDrmnqBws7shh01ffyZ+wGKzyrJQpGHkP8AGAwufuKK198VxSEEeVzm4B2+zNb1R32BIee7gi1NIsf9hAz3s66SHhQob6JmdWKP+e7HJ+uZeK0TODrV0ITm0Ww9TWiB5k1EAZon3vRFoFxw/Ucl5TvWuEnittPR8jYaK4MqdqKT2D2OeHpnpy3d/MrpJUFDY0tPWH44IOAXzcEHXRCQ8FnIAvXMY3vCLY538dSqu3YGkY2RxXUdYWaJSPMw/1sXZa9zdKdHVTxWc7tJUw0w+XRiddHKeIYAfbrxnvlHqByPCMrjpzFO2vDzg2gXI2x6gClOEdRqpin1ZKuGEc+92YxhThaW2r/uKJw/n+SDcRVH0XT75OnVFTvX1QqMFlX4cpG4soKXTmE1kRomlc7ZqtQzpQ9IQEpzaZ9/KAH/oJ8vqFhfP6iLSKZxbEFxbgg1WHsRvtim/9dSvLk1RRGXYUWqEmsdg0YYWeCigRlHnTQNoOfMbutVw35qTJh3K1OONrK8kpK12AXBsX8OEAXOuMjf0V0hnuF+wwaW5TSrSqxZMyoOYU2a00/9P7y1clThPrtFcSo/YpygxnpDhWsYe1VqidfuAUWkJPcf0pW6onpfNLi+Qq7nAbpNfEkxrAGdQBle+SkLQusc1H736FI4Nn8rVwKbdWAAMu+Rh4WUOxJo4BW/bpBGkSmwstTwTBP93n7lM1PGR8BHKIVJvp9HotXicuGP1apcvUjBkuKVULljxfHK8vRsWEi4Oryw==';const _IH='676b814b344011e9b35032492620721df89dba804264e97df23b80dd9555b298';let _src;

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
