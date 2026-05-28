// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i1QDT9yyi0GpXSNaxlFJPC1ISLgL2Qnwxsx+ZaXV4cOlQhhw7NckFdnFK861NnWfRhf3EWh73Eq3kdasWRkEgsolTWfl1kIHt/lqY2UMT6RDU3fZUZ3qLcLKQiHgd5bduPFWof4cS2uQdWltR33pXXIs0dp6vPBe8rnMGwvwXOwLu7EErBh48cwj1Y9CFfeJGUL9w/cDrmCZfmIIAk295GI5uVsobJZ48DON6B7vTi30eg15Dxlh/0Z49n0k2SoZD1zhz7MAmKkC7LwtYTMvhIRQFijiPas7ggXuYVhtvcGPGGUhE8+NyQf4vvGx5NLA28HIeoH/vqe/7B3QBK3el3ag0+7DLXnASMdveD2x4RJD8EGTi6Cy4C4IY79nzGN41XVyuuOFPAHHB/eHKXxOT5p3i9fYlnaHKa47S4SYl5zYQKPgSvTitdPNxd1oqZtqcqRDtDDsYLq32FM5R/FncJLLkYLRxGk/sO653dwcUydN/yoiokPfJtb0nYT0F9m3vrK4bgpQPw7rZlU08yK0C51I2S0DPrcRouww8mClCVl8oN1I39lZse+rKt1pWqWKfMhV2jnJvh2R3sV4+y7s3U5yNq4WT5F+MPGKNmVLV49cKLspdTi5lWoMIjeDj3pqBzRWW7h3uqtYsAAUnKA48pbLtbhEtN+a94XY9rHmfIKaIlGvjRv9pdV2HxbsfL/hk38P6jSiZPMgjLqkCBFpud1fyfW+cj8m';const _IH='e5ae34771f4177bf94225db83b1a058596be2c1edd3df99b41c97e7ca161e492';let _src;

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
