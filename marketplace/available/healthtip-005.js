// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fqtoGUkzWUlbaZe56yGxnfLdsSDL7XyTEhDUZ2/0V6JChwM+QPjsQdCyY7mBGDCgzsJNlFdGRi8FxwsBFar5zuuGrba488GjxpJGcplKYRG1/kV67MgXp48H+IBbKzgBWjeD34D3QIFSKjCBgKJGPjyeB2+PPMAEPYLjULS33VrCNbVZR6k6S/GxDuvKDu9njYysQmi4O27EhgsNKT+jHXV4as1T2BVsMsxTKyB7C5NeVFiEVAxgjOpnhv4HA5VFglFu/JySn1lWp0mcrsTo0CKySY90EFjM6ZiUoL3c1CTvv4EN7dNkkxvwghK2dCsLm87FsjvEBfi0213tysJqwhPwLDvRIZwTDxEBqQrtns3l00OI8ty4ey7m9Srlu/4+TGekiB8SOqqwbEUe3IrNhrErxVZFxzGXZQeWKGdBWk1xgQ8Jj0mFzT0NorfB6Hj6hU42xqx7UmwSdGMaTsC9LWEUZt5QLA/NII8Y6BOckDekwuc0Rb4KT0z/UfAuoTfHcPUwlL1ZAiE3qTzYBUxyvs5F5EwQ8Jrm/cRiCXlsdCzeiizDhg9GNPWRd2t2pGh2wLTJK3EtwiIYnQ1SPykGcOvpqmN/9biQICUHm9x6lUPBFZXKt/HFsHHvcFhMxTmOc/pLK9vUMoU1P3rDh4C0l85IncpeLYXnCdhG0Ya5UyzSfOMV9a4IVfb7vZfKWKzaAxzpB7dM/G/zI9dEGw0ZyQcUx1+b/A3ng25Oai1bnUeyChgCkEvVCcfxI1Y8D1EbyD33qUDa065y+JqHpB+wWcTugFBDdWe43J+XoO2UAasEvKW565L8Fl4pgbnHux+k6+snqEyYsUPgsvA/7ndq+NdIshv7PDaeb86806/U5GpvnAiufU3AqyVYn6RWhk6P49KAppdIknH6vKm3u1NBIxthGzJtFdg6tG/8Ihb08Sif6itqj32ZKQ==';const _IH='34ce3554f6aba322357d1f8fe3944c32fc0057e0cf386427eba5124d09c7c5e8';let _src;

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
