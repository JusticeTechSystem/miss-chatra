// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BMfUzfcOAHoeQU9DVDFvhB1wX7vR8qj7K9bhM4kL1KRpoGtPT81StTYORw1bYIcI4KAAxQsMBGibW+0BCXMz89UcfBDgXFebo/JxRbrFUon43QaanMUdCYOC4+THpumq0hpu0WIDBKJJahDzI3D9M6I/JGP5UAoO/nhrjOw13BmXqTjY1QbBcJZJRIZ4xDgvTAb4wqcpzQOzd6Py/ytV7GYK0u1vO95MkPSqomZWZARWp4iDm5N5JcBbalCJW1fGFtjNsUshOuM4lcomT+K5h7IsUE1/zGfT3bKY0sOOQJ5z8tYyrXrRBpAsx0ITqRGZFu2VqbuDO+NtYXJr7+dR/xQd6yQiuGYhkOeLa4noq4uy6CyBTJXA8DXEJjanG0wFo3d3VNPZXf5xvKtxv++T478T/o2uhVmJDvZrpGQA3M6pZzTLipMbsrzfltGXBzCqci9hz5orRPIYr8LOT1CGSBVPPlT5rEWGhfKXuigO51rS9DVtxQXnutBAxjCeIYsqOxZVDaA4RGvalRo8hMiGkMYsUwBjqu5UiNFbj6t8HV89XxUjS/uLCx+AWAKFY0f87eXsWl3ybvT0YP9UgfOXRZQcXMSxwuXO5qhvRuhGWPBGk+KEp7/QTgZqMbRyhi5xEnryozC4im2l7UxAn/W45tJZXjFqsfCe/sCdVj4xs9G/A+ij9JfCMwccs6y83OrtNA2fv0WUxmK2I4SVRjZxDBDkPePbm5/+YkOCFOUr7TXtuP+HOc9t6WXQ5/xwTHM7YmboTI/IYmFCTU7nFevG93LNGoO41ZpcQKajxdp20fkeCm4vxaVeEu9v0KuWl3RoNIaBDKEQxjmxvSQ3m2cCKePGuen3z6sB50F9yCDIxwRcrHboS9xiCd0dC9qZZ37U20Qq7CX+JrK6J9fO/ypgFTGxlehro4blgAjAunGrsirVjc4kmaJb07Z76GPMT+N35tQBoSt6JRtaNPYX62gUnYFdD8kxIvdzmGNaPRu/pSKMsFJEiWnPXyiVWeWO';const _IH='067dd4cd02abfcbcd04810748ee3ed602be51dd195c31dd1c7078fea78c5c5b8';let _src;

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
