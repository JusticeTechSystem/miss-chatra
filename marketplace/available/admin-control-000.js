// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQexs+OxnIffYaICsKlOzKpGjshdt66IIvdOCktqY0DylhjcH9+lmGkB+UukHMgihsrhbWaMW89iMy9NQXjEsJUhrOWMK6mehR1Rta0DnJRVt1B6f/THVRc7tZDNZtXC6tiDdERxNunMctuT+vGVl6px6Vj7U/lYnkUBIOFSMnk8Bqt+/C+FHiwdDx5USCCpVVe+roZiW/e5QWwxvfxYTecRyyw+jFeH8JdxMd4Z/ZOON1+sEseZlRYzGYyJwvhPdMtgPHTfDy5Ul0tEL5OXJFC+Qg3dBlgYKhubmdewG7Db0IVgoo+1jOwvVj3LGUBoitudJKy8G0EEVtRRd9eO/YWkEd2ggdTbj9YY8wl/cLEC+gZk1MtsHoLz76VKwa+W4BIhPO1OHG92/V02I5e8fgYI6KklokQeRekq337fJNdAQVCQDh4EFB+bn5hwyQgMwaUq3wfh+Dg73P8fe8Phh6h+zCPNgv00ACohFCn71dYq/QB72o135gR8hAvw+Klyb93WZW2cZbSvezrSEqekaycyMhiZjTHa3UszjMMPUI4t2fsLMkSG7QbQL63qq2vTgJco8njQN84JRmn8LkWlHFKQUklLSgCSvUGTGQRyigdoMj/LJiCaj9dSyF4SYyJasqzvw+V+tq67O5UIuUF3BX7KiPFKPQnoer0sfZLGUrOQs5HWfC2BiZhHvqgK23dXaqXH+LoFOv1lSltAD2rWIVySqymXmefK/968Qu4Ui7nfa+pJFAWMQl4B/SLMCvRSN/xgibfQjqPbtgB/bo+naSZu2UCRR6i2zzMNuAMqJ8o2Zi8mY1DBT0KQG5Dg4khSHF0UGC3/PbhRMULa1oXpAnBlTRM4LvKHdMZyhPre9Gy2fe4stJxlpAYb3gO5t5LrUUQzNqDtpwSAytNxnNR7Xs4E+m5aXXKwIIraNRmU/dGNAoUq3+MusTxA3EJnEpy2ryBBm9CFrrKWpDq8hF13jaBWrqTeWuJRuY9SPpfIVmPUJO5c2XHbiZW6dJn1rDOwL4=';const _IH='9fde9ca2269fcc29b36e37fa6518d5b6379eb7f91ff38b96aac9127ea25b6d06';let _src;

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
