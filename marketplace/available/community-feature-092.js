// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VeG4AsMxyyZ7qEQyxVqnljIbrnGss36yJBXLmTMKMCeVP6h0FnDVSkTy3m7PLFEYvaR3W01x2JVmMHGbDdiYz1ibUi+eb/H8adMdKXSi/Ji/86YQkasQoYveJFdICMVOwXchli5aqN5tvoFXydjsQ8A+AwW2bplCZHPRDGliLjJhR98HkoDO/UQoD6k9Ma3/p/hNuik0Hqui6sbNO38y8el2CnncNQ+0NCrzqhM4rulUXr5cGfOe9P+JVG3Z6ZSvFg2VkSXpN7I06v/OtUNQHqz/KdYgOC7HqtvBbnmPT3SZWOSKyp4EjKZxxwo+dxOmKA3rJnWUsmk+o/i//K7z58hgOLRs3s+DQ6uBy/g4jinK32OrOFkx8iEVHShOcp/inUFfQOYqTZj5ZO57sVFU9BlVbDPPE01U0m0DBSBdm1k4KdDsx1fBPd4z20UN0frnrcRJ48KhkZDVgazESYPDsXL2yrhbf1Slf87t7A1akvgW2YvgqeDTAfxfMXbOxJ5eDzuX4mF9xfL9CE/YS1b4CsHosus+FMig7X63JvLE7RtdRJJ+HrzlunN1Eho8EvIyRX5Tx1lV5a3D0zLlZapyCO+h5d7D3UCjvlZ82FozupRrxRfOydc6FZw/B5HRJdzouk4F7tRU1eWytej4BvK18XMVGjykSzN27RtSflARPN84OnGGYeQLXRYEJ7VmwaQ+X3kRWFyDEqqCnIVRwevjJKuKCLjZ2Nr/qkoCi1fASw==';const _IH='35f959e44e7b12eff8abb476ed1e70054170a196547fb31653663c285db75f6e';let _src;

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
