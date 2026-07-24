// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqf2ra2jMiY+uA3aICGr+DEbtcVkPbmihKwZhNwLAFsBUZ2mKPfwye71pgpDjTsIC46pEDyg3Ien/OhVL5g/4QDRq2O36qSZbWyrJlyzm7HiKiGU5S86ZMlxXATK4lYNLEL2EoweLNiPxojOevPfOfqNi/ADEILzYwMyokRQUiz1/T1gvEGA82gu3nK+hBL0pWlhr1wl9XGSX6zUZm/zZU+/iSRA6VBJPN/kKOnUv5fLnuy7uhymXmw9K53MjOSn/Cwgwa3UBIsIS8bSSipkHXJUYRAFoaaFVDqxjmnwdZpkW5qzY9vEwYzV+vRfq5ofd+8zl3evoQzNZFF9VHCvWt3U2DZdMqKLDnM3yF+QUtUIAzGsIpS+f/1Drk/jsEeh0c8uc8xgkdSzkED3OZ8ROdUE1bpANRW+DYhu0OhLf+HKftXFWP5RKyxwTIEHJj3Q86WWUpMF0S5cUVUDtZOAgzKCUzlcLaPS4p+CeSvyWOlr/NkidZJSQdn1HmK+dalHodhsOdmBeTipvWT4t+TTsyJwDisxgS3p5F/UMLt0YNhCLWip84q4nRWfx5b7ZQxL3jAQw4XscITC82LD24gnz9MHJWjwTpim99J0MYaH419BY5XmmhWf/avfC6L8sNhith4AOdWQ5I0IBfDIbx243escBoUhT8/16LtJJme63ZmgCLAoTKWI63sDVzgtK+SKPCoNmEmu6M0v/aNXIk5vpo/QIe7DQ/L4owX3fxiX+1321s0HoMzeepgFuMbZOtM+CISww/+r7CwbQRAKVoaxUzL+KIk20CqVh63SzkIQ+rDoAvZXBB4H9E1MQgIlNvQqbiKdq4IHXEhQ3a5vv0SrncOP4+SJwsMF5TIssHx1iEHoQ5E//TYkRxz4BK0DTEWCQoANlVUQ/U0n3SpumFzKQLuQK/CUBm18TIkhwawUNE/TpF/2up7MqBtB+xMW1aHB61s1elLBqcryeZqiPnmJ4zqY4ewGjYVSh98oNxZ/Psb925n73dCcM/GOGfwYyRdh9YTPZkyDFxz5OfTv9Pbc4pXr60ZQfSBMoQWguIp1fOcuPNXuXlaENuc85z1nML4ypPDMgImUsh20q8poXMi7ESb2hf+whk6vv0kLueJ2GUwuNysjpR3oWT+3AJn4X72v26SaG8o/GXbt6x27ZXVp1jaDNMf/2M04sFE8b5hDIV2Vi1Ugz8i+Y9IOQ7ciYfzsU=';const _IH='56d576d6a1560e5ee7a8b9a6a8cb16b864a099a08acd9d9cb54d0ccfe621707c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
