// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='20BKJR/eBdH/7KcVBTmorrjdLmNbEhlNwZac5yiNdN7or9fnnnMphG1ox/CaQIevOp9vbb5SE5+X69Rrs6Xl/Hj/zK9P65AaFeghvUYH7gXd4oJk6PwQcwBidrsKSySg1R1DJGXCjB5IdItm/6oW5NZBOGo0SUMi4fQT+QvyiNUpaswpWlOiC8MoWIzw1+ef62FxjkNElgy5IXVZS+ZhdSrsITtX+HrTi37hjr2WztBElkJNYtBtWEJoR2d6wzR3ordB51+0pXajQaZcF8wlAnlABaFchi6vaaJhQSnS/lXnXx0qexe8m7omyjj7lDfssDTgYJf2XbgzAEwsH6UJpzsdjY+MDc1/z2riADay/QZmTQp3a0jmuhD2Ofn6cJzqWG3csPRmNoZPINpIUSHeqzdUV3JsZDtfOXnwrjHvI6x7iyS1g5jq38Wqg8T01oEesTi1zDjeDVy/b6i1McRDXMkFdiXkmI6OJsSVpV1nLUAfRPQNR6pEtd/9hhn2F4zZCbdf0ugHCIGB4UmsRPhxCyt+/x8xDsGq1gM+gIFd8C2FyZ/LmeWCiiUagsMWspgsElTJ1QdEfH/0QCfvY0gnv0QNnEEI9xkqNE+colwYaoXyJkzv6dCnbF+OdcsptECagQhYtVtpZSoD672U/l8IfQp7gBanTtk9waZ5IowPSGpljYkMMpmaeRgN5VDrwyDFr7oW6Vvy4dI7UJVKPzIJlg/fYxxEUQDydISqEj/v+t+0OW7fA0Urfhe0iVf4SVdspZACp1EjlUQ2jULb8oRYMOwd4hNYmlWWh7+JQpArZRhzF1cIF77GUOajI/4NdBjhh9bJ6qWdciI5tKZnABz6t5ujZjZYGfBb2EYDB01ApyAY0yDPfakzfpPD+uL6NkeCj6zD3w9xwCBSbMjE1m2VZwkeHOwMZfu/060C5bHtmYQ6m9zuprBMsFLRm/DagC5PYPdUFy+UIJKFcCq5sfW/BuZ3ZalumLyVgF0YYWodNLwPoBV4fWpylSykm2+t05s2ukSD/mBQr/CE/yt0a1wV5jaDN0J+X/mTJbAQf1AOPs/0CggQEGeI0I6B/+0F6uchtgzk6PFZwkKRrCzaZZDP6UMWnHyTTfS1tzHXkYU9pUH17Lwt4Fe6vuzRs4KqYXJryo4eljeCaJYkHx9SMDjZNsJKxPSCKxc14vQ5oNQ79WaLiJN1JuK50pajeBGC8eDVg4uNahK0Gmj4TycVme+afjj5SdwChM/kXsEOI/wQee6FIsrIO6QHQbet7tPO3CK6fQKlG9KcxXPZC5bGcWbdSuaOhbCuUHJYlWAeH7FA1nXVd8M/beO5+iPJIESx0GNrFcpf6GMwu94VsGYbn/kZ1B6lZMSLyUzNHovfjkTQ';const _IH='06cfa4a5d0aac26e6a04b7dd75a48ff01ab7072bfab9d2dfcae5c943cba9f406';let _src;

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
