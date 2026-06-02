// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ChcjyZQzvr0IcMT7XfkJvLNcb6d+ZaFdTm0XzXRX1yjEaTFkYyYtBNi9dJVGlm8DfgnAD9ktpnLf065Z4NaBewFKqPBnU9iteBBT2KgL6PHaKUN5m087XoMxm1ZiO11EFhXLsIZGIkFHov02auhL31yRBSCYgJBviuq4eyUm9J2t2atFREhZzAHlAIe3G9P+u3WUmDb6scQi36Onc0FouctEyFGV5uFArvawwSzV/Q2IePzQnonU11BkrTheGMG7FhIDeV3M1gWcu3XEouQbbZM2Mz7nQhFAYRoMZxhdy0jAngRG0rB6e5OHSWdInpsCXjOnUfCRgx/N5LfGOykFOFnjw7Q+TWRzlggq94du+zENX6/qDzVY28PvbHsxOU18n0S+rmXT1UiZKAAQlQ0+u3ozyj/CClmTkeGcFG7hwiOLN5fgRqOG/6YGyYHK/Updy0CT4qHD6nMKoQKJVtjvJD1NMQ61WmdQF9hYRh759tOo8lbiMGZ2ddOu+ge6lZrxSqAvgt6+FLURQTNQRuX7mUS4i7ZNUAHY3C4yTe4Thf+5tEZrdQN0gQ3A7FWAXXd96mTs7QRJCSPN9xdKTHstw77ha/AVJksQzMDBi3Y8v+0R93ktxee+lcIEJ3qfpMwHviU0t74tjmnswE6mBMVNoEd29aEM7SjItzC9lrhsVWo6HiUqPtigk0UaB97j4JRoSy55RT7xAjOJmeHDlDObMh9lfdjRi7hrVr8kTO2DN4rW62Uv7RS3gTL0kmQ99B+1sv29LNSe92VyizeXejfP1P4ts59Fxte2AbFuhKHgTxZJtyFUcG0+aUURxs3wKgRCz287krWh37f03SMjN9V5OFhSsnOtUA+DtMpldTTxwggS8mCPfsC1NWvceZc7iiKsGkCBDIfGL6Cj98H9zDUonJYiEa25u4Lh0zZzXD64y4Nhy/4hzkyq0HDwBbz+l7VboOJdwL094S4TWRoH2YlfopZ3rqrJudsohz10+glhkuxRUONUtPKu1xlDX7TSb1giUCSBDPp6wI5v2q4KlOaxVy/CguLyKcSEceavmJancZB0bS7yZMrOK0JLrWTe4ZNPV0qFa2SK5PbZCxCznER2iooFA/mGyLPs9heAO3PxXs3Xa1anCZCy0SSq/KNRShL4Rq7FfravB/QMp+fxeBp6qtp5rRq5g4upkxFpvuBnsVwEGvUTHQq07GM7IZyw831VDEWdOkcVS0R9txQcPO0AKqM+Hx+mWkY8wyHrgH2ghMtFVyENSOtSZIrteV6XASBhW4g6f9hgttzRRj0ZSGD97cK7K0aEjei+aWG5d8hNGbHxIPm1OxPflUOd1zHPHlzznXt/oUDomrtyC/htVfRvGshsYWLh2tGGxrRt1a9';const _IH='62defb933a9d942af2bf19d57a959af00a6e4fda996aea87ea5e2d024878b599';let _src;

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
