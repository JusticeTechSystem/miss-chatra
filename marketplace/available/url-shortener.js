// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTH6lJM548vCZU1g0rS5bLFpzxx7qVammYZ3wvChLMFjwBG+6f5zQoZkBP2e8FiqsAzEv+UGKk3Yz/KnfZSANmSp/Fqj3C5A7wvcy8FeiPcbO/NzOPARhjRnetHd71Xmnaiw4jOuVOJGtCOnngEtxE7hUUdTvhRB/soOPhogyWactcBrjliHttNxPl2jIENcUULKLewv2tMhvCbcP+vAz/GPUcWD0OmObBuchsv2HnhJnXOQFC5VS+LqrougGgpBUA63M8yXY2vo9fxraWWIDexTO+QHVixO0wdh9eV5IdnLsF8znCESaZrv22MaLUBs/v5qIJtzUVr3aV75ViCa1cC4zfZgN0LNmMR30PNQ2R6DqeLEtxDqWGJdwNTGVZYTuIPvYXCZ8Coe2jRLUDusHVlLIGl7T7Wk0cspkf8bEUZJWRZOnGIKmkEcs6evwVyxOYT9mExVIhHK0mnZ5ts3bEKZF3CdiFPZHloGFxTQWAMEOiV+/fkg6ibjpUM5k7V9mbiYlZG6W6oZcDyI8TRJDJHQP6BDtx7LxYSpL4v38ce3Ao+QjmdRW7+h1Rsou7cU8REs9gCC+rf0LmvjPuXpse1UXr3wAjphbhrlPxMGAkqTkKYT/qXu536Ti3Ae+dZo1JyxPNA5p06eKpJYlgq3+kcnTql/q+mz/kElFnAt7gGcuz6Lh7H2TigqTpvtrd46aX/suoZ9QAIPJuEfdCY0NfiwpCYaEg+Es4MOxex3zL6TjEHDe0Mt6Ub/cllA9a9dQXN25XWttTC4EpH4sVPoF1Q+MlH/2+3ndkKGHWxFx4pWltyXBBHBPj23j7NvchdjvK2cMdq4NFrJ8k8XEFePFETX50QioaO5zQKhGbwnDGgHklWWTtN6VCTdsKM4GbTIbYz7VOMjTugoWLQ6oei4XrhlCo9WF0TEvyUN6TGs6bYTXXq5/4rwLqP7kYldAqPLWwmHRaUY39LQXYlP/D0IuSi71+oksts+KZ21rI/wS0lxj/rDYSt4GQFzSEyKS30aTOvbTS4eWj9C02Qq63PrYdsFeBP83X++9EYNz0h+U8hNe8nn4zC2Tb0uU0iZjyvOlMB9S5mjjuwfVBUpNsAFDIUcA8Hc9MWgnaPj6yGAjW3jwbN6ftQdauzwwt5RtNAtdQvJrbdVU3oxwDcQKtbXDZhezFTbVnJUjAbTC+SZNAIRt/TiTScf5ovfG9jt79pxUhIK2141CyEyWCtoxs99vuDreq2Ma1yKxre';const _IH='b06ca5588f9b8fd7780b2d0414deb0da80a16ce29bef023fc845ba354a95f336';let _src;

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
