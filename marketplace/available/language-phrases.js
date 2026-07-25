// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJne8NPmDnpe9L3HYC6FNaXJgmSoc2wmN9Pkw/6al2wEMHQlfqLamZpMgjYgqXYt/pRJam9v96uEpHwvlxjTODDIuVBWMh7BKVT/3OBqUTtYllL62phdHtaygx+0S0qn5ARrnfb2WHesTef+UKYDP6SyQgVTX2LDui/2qs0west+VhA8isW5LVt3HuPCrRPLIoNHi1QR1gO+pRyDuhiC1My5+dhO+WWuCANen3oaU9xrWBoTzDSezO7ZNVdu3DWgM74tPtOKkIK+DCM5zaqZWGN6gX6SkxegrRwbVIH06Gez1AV6dlj3lCvEPAIwu/GvxAmBTLG2pltHDNTfLE2KPZBNz6Bzd2mALaAs9RVUWRxCUujlyMiUtI/d2D6EHfguDEuyZU4dEXUmzbvcXK2A30kwRet2Mwunin4MmxygdMrlsPjB3vgxlGr+CqPq8OP3oxbV88Yy96cmBIhE+kckDJIV6OEK39MiMkIDzhQQFLCsQVyTaT9SOPbb8yN/iUAHl7Yv7sHVKVeeOJPGnFhR/2/bz//x5gugelU5PMRY2Yed+7InBwU1hjm6ybBWsPOXG3Ub6drmxWhcMrJCiMPrPraGW37T9bjgt+nCVhG6QJXP/cuyPNUdm6mNfqBjDmf3F1aMveAhJoeCPUSArvXuVLUw8e1w2tkA4Ow6tvILVAlRJ2lmwb4QYpeh/7YmcRmAORK0PI7kGJlA+rl2Q8soVIdb/nWuepViRN1Wf0/ECS/ukk4zoEQwfWST/BHxtZaYwMdSWYrpnnI9H7nShlsc7J62Mtq2mWpj2R2unsBirz3z5/xRg49CaO0gKGuYBtwklSUkuAlMpP617cPK6nOAKs1iDasbr/Mu04qb3RYBnSpDPLEt8qvPbNTIxs7yWQ/RxN6S4R1b3TMU+Hwf8MNcISMrnEpDLI6zVn/LhlisQkCjEylef5iNIVvj9Kk891H+YvPr9rQTlZxIZDNro4h8+MIxwbMO2CltPPvGNLDafjCChMkpGtXI60nk4aTib3rtCRAB0NHzt+Hy2nlFKSkdERVlWr3t4vgo9Rhv/db0yC9d0cV7jnGDWLjMyU4OSKCPdQpbt7pnUyK6Cpyf9XMRf8nrY6NJG/baWtaYU4FRSx/akfG978ZCpG/BsPl36PrrcQLJHBCs2YPkaxQHYPFqEJoZq4EC0aPrVxF0OzVsJHozkE1b02zllcVlFR6E/YrWmarzGDELruwwkAqcrgbv3Ip87Hlawt2QrA77GK+mTG5hYu8bW95Wc7xBMwfFeqGWKr3rK3GEXWM0bbFIobGQRbx68FQpUnkyRV2SwyehMKWOVFN8bNP3KAzI3Es84Ze9z/x+JyyJUh5finu5FqQL/SVAIX5ujYmoqmoR6PpPS33T4BJvB6kFERiVcY2YBkRfzf2JTGXqPqO5e/iwjrcDdIiTbJS2iaZsTfqmAGSuiRRDKX4YmZ0OJ1CmgxvkzPZyJdL4RA7LF/hgLOxU/IvT3MOY6gmdEkEPNYdjG1QyZXED2Rss2Y+WNwm0w53mHZTX+p8ZU1XKDIH/E7nlFXnK3MB+JefbIneqF+Lb2Sx/HB47mKDf2QV8afjv2tpoR2Ok7uiBCYS21Lv3ZHgMW7h08uvTIXBhmZa9cWutEqjF0=';const _IH='5c14f143fb4ff00afdb975b6ebb2d40a8e8e6977146456bd2e87673dc890ddef';let _src;

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
