// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1LpSkEnzT5x4U2/msKTUfM8BsAimQF1ho/Th1SLX0MeDqfN7vR2Yhiw4rFSKY6e5LB2AsjINIwBusEyzpW0IUnsdn6nYGOrV8ZYqqOlXqXjPKA49r4602ak6oRjbhz21aAX3YG+oICdVx+0Kw3GFuSkkkjYuZxX55ntECEO1cennf5RtVYrdbjfvO7aoSRBs6iN1VlCqWZ7fH/dDTkaR8EyXGerNOJ3bVB7uktPIZKO/gm8cgsqzsORELfnXHQkH3TKOLgwdJfc5Y4p58hzWUyrFMZDDjxP4/sK6siAstNiYpqRFog9QdDoJfJMmz55aJkJ6SkUID3C/ot04PA/wfwYVcbk4HONdhjhl+jI4FOVh7Mw8tCkcSz1jaHLU2GzdStGhMxUrmTnFsH8Tbi4LdLFxvrGuFwGQzHqf2eNi201U9eQewaJHo2liLyf9tAVXbupExbkc7Fqy31AHW573nA5w4AFu0N/fKnbNl6qKIhcT9s2TdLrkhNwUO9Ren7jIMfG02rjzxLiJNl3T4PXvjfxtKDHoP2NMYWN5sS1kgJdi9+cRZPM4pBid8b1351OyAeb+Oa2de4FCj1d83D9avZhvkwesBm90IfABaKozXvFbU4vtzydqoMk6uueZIbttLVWRPV5K/3NR6bBjsiHVSrji6osBlHM0M8hN4aiGbaaHfAMhB1hxmy9hIch5yUlaQ/2+bhh6mir/1HOG1jfBzb+uj+E5HEu9VbVGzW1cnG/yzcSJE4avbv7OTAfOty9Kr2FBKgSA4uR4v3LAC7lgIqbzuTVXbN23IUgcfXOYN6ZD9b2DU0zcIVfDAFLSZQEoUMc7WPYVD5s9131DleV/IaLbRe9KObUcPcA8p60k6CPQDh3lRZAcOTaD0D/cIE2Mu39NfALs2SwaNT3bX8lqcH6Egh6tqwgAv4dz3xKuzHS13Sr1MCOpVQL5uPUHN16R4czouvOJ+GRUrvkCRQSc5cEEsuK8eys81DOzwAAQnuQQgjpscZ/7/SjxSc6PAcBbhfvwcuUIk3SIVdNMlyVAxKuf0efvoZ9J5v8CtpFVb3El6zpQBshdMnnmMJ3X3+4uDsNyQd2FuuiKxj2bue4pwtM8OxijIwlyF52TsepU5j79OCSGmsBix9eR5vr/uTssRIN5dzVoNdOkpYW4iRMVqf+CpLtZCkQLbz2CWdhzcRAo4l5r5uHl/mqdJyxet2dRR9suOwT7b';const _IH='3544a1a5eab61c297d1c400364d9c248428b545e276a97ec211ff8914cae2fd0';let _src;

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
