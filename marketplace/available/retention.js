// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DqEzbwKLkRAao+SCA+W89BH3wLmAzIiR2LJkcWVqqliz3r5C6KtaX/c8w5iweY8cIFbLO5fzFh9YUQreNvNCkLKUAtu7u7M2hOKoZQq6cci0Wa9Z7X245mIQFVvodfmp10NvGaMOt+AUJtv1mB1xPYE3OugNhO7oIqM/HBOurpfq9PaHF2gqo7Lky9Rtv60l41CMSdwIRhC6kv/1iuSXDmbNroA0vcRYWqIETbt6L0rB10Rlm26lvqHiiY5/UGX8mrgzsom91tTY6X2qmG+U8aml6yQ5t9bIOKzcoEH3Op3GGwTEQMG6x3gIro5uJ2dpF/jeOatHzaMzWwdqlffNNi7FF7EWlesmN0P0GXfCHiKZZ0N1zBwLHvg+KZ1+9JncVf+hqarhUKPGgssPwVIb6i75inSObgvGfyVTHpMsv3LJTAzyYovgmzjr6NsUgnZpNB3UsTN59TkU/N17zK2EvkdYHYwXZczSsd6YVBWarynp82pszikbWWmHzmLsKNrQ6b42hiDJv63e4PDnZ68Uvi3UyDuPFQ283g8PMPNewlTVd3zVGqsxm6gPaAJIOHMhwkHyxhevrVM1rw2JDlLAHn/qdk8UH32kECUFiRMWXWpedNSd+xzZfdvRgh4hyY+8/njBge16T9hp3jaMs7EX02Ve7V+2ZMU9zcPmV9LyQnPp2/+yFbc5hhOSmbK43RvdYmUOiHXz9f9VbvOQfAM+VZBYBLx9ZSh6vaPewZ5uarnwzzRK2ZoDYnQoiCk8U8nuZj235ZaNrZ5Dz9luZ0MocoF/GZ87v5CttyzFXbmRdzWYsdKEK5lS4MKEVgxrZZUZjROn6JT3FyaQwH2C7LQyzEGm4GINNyEcx+JkNH3VsDdQTyzBkrAsYPl4I8LZSGzZfy69kUhcpwvMwD5tRkM6F952Gl10gUNToFyvcXU+DxrWgtHjVE3Mur5sm+fv8Ohhq+jBfxAmSgn77dpKAkwXO+554lcWDRfS2Okp3bPrx4nMDR1SmOUaD88bGcyQlXEQLNluEjkqQ7Chh0qLMP5MrvCp3wTb4JxNs1obpolagkcCWOmCWdtApdTiv5C+cPGIy1hKOVNO160z7sV7aeNQDFJ7WuZtbnaLYQyDWe/Ya88i1ZvKJJjw3n9/L8yT1Gvzzn1nABA4BaOFzazpVLd1KzzffXli+7kKBj88H4VPYTVKhqaegFTWdGcPqLHkJELmmDNhs8F1tyPuoA==';const _IH='0be15aecdccd93351a4d8b627962d318c0cd3e305678af77b1f40e3965afc079';let _src;

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
