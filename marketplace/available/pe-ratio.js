// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AZyxFHxc0AghJ4QRGiYoDCY/kNTn6ScjwZvSiW5FL9wEoz6khuqCqhiPiXHiQhIdzPxeNr0TAeXXTuydCmk2iF/n/2SziBwddrICji6mNzfXxQgKgT2eo3mynK8gw3DgzPN9dNiP55C1JYqlRpJPC+1ysXSHqYqKVEYP14E9ZZVBSFjiFq8/8hSB/TC4UG9ZKAWrA/SaG91cyW/YQfiD95FLnTDjRVsp7/4P/IrYmhz25ALbSN4uaWTU/kBggEs/MF02fvkQTyYvxvmSqaOVLrrP4Smq2e53kAvsConn5DYcUEI7ARtjNencTS9l3srvcJKs5W1t+AaPeU3Tj2My9u/vFhB04IZw7uo/zIGOPh1oYAXEFz8b3DxTTGq0HFC1/KVnG1BeJgEIn7F77DjkHfP+BK30DbuLAOgGKqRS6Liyj1TfuY6RtwYDLYAfjWaUv1t6wbRRI0gBZpdkcnIeQNZBDnsG0vF0XveWnWTxwKdk4tRrPW3o/XsNxA/JfCbqp8SuYcacDa7Pzpu18DHJ4qeZVmizmq+eOUTZh1WHwLvh9Q0qdBrVp199jcYLuUGFGyPs05R6sApeeWemMZESdUyKTj2OrPDaTa8uSwnHIgTk9q77zXuP3R/n5na5ennfqKbN+dfOcNLOBfG1YzaFdZSV4plvN3GPqrYc7fak//XtjKvi3lp1S2KsUerKB+40BO5AEB1e3iIX7KWXfLP9yJweos+6cz2/Z8SVGMr8UbaWD2fneOsc7lelo8ZPvueVHwrT7U5jMbBgPy7bma/esQ8nuHiwg1RGxmcTF4HCAgmOTcSea2mhc8pzOPCS9jjvh1nFXc5sEihWZFsAjw7D0/903IyhaCPkZW7rEVAD1qPnDsRlo9q/TOV85EjVx47bKVl+6VvMp5yiVWj1U922FoMBxDVhzUtZNjDQjBDnbHl/JQYkyYNnfAKmdpOEQ8GBQkqDxL9cxaukFaV1KmzoxAGoR3AHwmKIPqRwDw3eD2rM0XgC5/UnmpvDfvW5F6MCk3yWPKmVXZxz3XJa654oGiqGgc118F6rtwPbud31tgO9hldMCs8wxbhFPmlxNLBLeI6h3rLe+fTtuG1+97RD39poaVCJlMERtqIHwj9GxFvIY/15NmPvMrVAUg==';const _IH='d92c32cbdf24fc187280d2364fd78c79a86aa8d82e627288fc886ec35d6ac537';let _src;

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
