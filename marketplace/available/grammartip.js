// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tdH66dC0iMKJOR9djPS35QZRML3vaq34GqumtRZ8A1xZnFBsfSR6yQ2YBrp6Z0cF0V0xte88bP7B+R5FtyCHtm64J9DOAxlAY6xH9p883tFJkOdnOrcB9lFGbOC6kfijWu0oxEFLJbVj1KnpEy3XG9yNslK0KGvtB+c4x+VhLyq9tndLbCHsmakcdqcYoMLnIT9O5N03ttl3zCavZeCJ3vJEwZLxDcvsFWXi7OLXbfZJjiQVq2XuKcn9Gs7IrXHIKfcvJX/txsQdyGw2oxW7Sq4FRa4aeLo13IHQ7bSvP61d5WmnissTSVfh10zztEp1Dy5A8+OXYuTdWOVGJzd+guDNK03CT9D9hS5EmhlkQihbok/yRn1RaKdtAdtJYcuit+UTW0mhgEPBlHBvAZe6Fde+bwJvNaFPfAf2+q1k34sbV6DuQpCsiTCb3NDYLDE9Ax2uuyLSxLIofz4T9gLWb9jqkis36U3gpwifS7UesULJzYAbDcsM7AsywidCcNDgEEK2jR5Lg0/PDU4H1maxiDNXoSaONTr/tYYbIJno7Sziqa0CfuIeaw4mU6NY3uM0soQ79y+QrIYdTQrj8O5I0UjbE3ABOmOFNuCMchqDiKwdrklwWHdInZiABGw+vOMDpJHBl02tTpoyDCjqyjIur0uQ5ClK8q66QqNP0PCBFJXGZ651Bbro/21KrogVaWERNcoC77Z+58louwZb06eU9WMc/H4Ji8G7CaV9B2nMO9Gpk2a64Y0UBkgYtcBq2T2io3Ih+CwUYbRc8UgkLwPANWxCMzR4DAEhzQIM7IjsoV42yLi8UJTvtvtTUujcZXWi24DwMAPKbB5pyECosGBqEMFhEGZ9/tD6kgTYBr7H8Fn/aUJhhx6ouDtRFv3nttnaTkXzTzRsQe4MS7lO+x2MvjQK75QdK5eES9bD99Bk96rkRov4qasTP45TGRkZQIzaLA2Lf+DUkmslViV1FMMmJH1X4+zdPuz1GPq6MWYc1iVv/lJ7Cud7crKPXeKflDluPKKrAJItNWuX1Jcq3ULKYMnyGQBj9AaS1igJVCFL9DzCbRvfsI+ONVqbkLTd9twQEhDWAhi1XxdvdxK0waAGaNybuqqXrALCNayOXJ2F603XSm5N+Cb16L+zKbV4MZLgw3TWceAPtz12I0qXNZG00aRGQgidoLTbiHwkerJkCpiuy3P5FS6VyPNuQsIrrsDI/KQTJ3N7Sx4=';const _IH='7a277e8874a65859869ddfdaba3ba63ec75d7f88f0f1f30e2dd33ff16707aae3';let _src;

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
