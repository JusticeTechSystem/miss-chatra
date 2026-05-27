// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='liQndN92QsMHzgsfmkWgwXHgArTnJin7N4A1TEa44vqMO5rqdEBGYXUG86NY//S6d22U9fsCI11N6Mpr5lZiSWJ2XnUvrR53OYmbBHjyQmo9K3wesGw7sUDR4gvZjpP86BYI12t/NWwOhVBNEI6tMWNyl3xLrKYEvadnxdY2J8+xYPnzLFK94MAX8Alev54riDmSDcPCySv/yqX62gKcRGWleJxvefwgFs3bkhMNntTzCxnn9D3PRoL5PGLA4Oi0LiiaGGyp7eRj9Z3KnS++rD8vpnTIGJZCx3iACeEnYM0jfKe7kTHWXjCy3j61QeYBydqNPLDKga1C9JoikyWmB9Qz2K3xwke2L0C56SacM0SRJBYhbogEY9nMp1KuQrtKok/e6Oy+pRv4fwrkLFl5kkelIPr68BYsdYjfXGzOi6H3hv3zzOeVGHTpa0MsRKAA7qyrAiNyuCQ5Ja1wCGbgjRor4nlwM/EGQGCovGHJOHzzkboLfxYFghsBeAN0VtNtAaU3B5GUgca2cWmR22U+3li/ofkpnRz0Zz7YBiyiIxgvZtS9vZCwM44Z55AK7N9gXOkrrIyRr1iQI7HTqOzswQ5SCFtvYwoGT0bSWF6/EL8AVtYpzNMwqA0ee12AGCZ1dOCde+Mh+qlSrqwxReUEibgpYeboiOnCYrjyOJyAogKgIc+LS86a1H1FGBwViX8FifIGOjvWUlnLUuUanmmfJQXpu99YXTlR6DidkIIpA/2am1JXoQ4m33k79w5pZBPE+6bmRqiYFKljHsWpOV3i8A/0nX5oPEK8FjLsvWdXmOMBqFQNm3SuDmc71UQkR/Tnm9UQS6vaJkvdT5A6mzGh6PI8VZUN/6AxgSLnVIk/UIwvDCYdove5zZ3EMD5vnRiBuAhZAJ4EzVwzIfk9MDB7vx7PNyutBDFr4D4YmmutbknxQXoEQr3roDnrd8K86XSXtR43E1uCpee0iwg5yH5bNMRgl/x6hVB2otYYL8yj+XLE/CDgH3+Oi3RQKlRy';const _IH='fc68edf68bf602e4295daebf678ecdae34b0f644576fcdb0240a8e7699a834bc';let _src;

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
