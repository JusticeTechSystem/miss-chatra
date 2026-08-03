// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQbYmAm5pqsO+Al8500g/vI8FdsFdJ7Ae0xy2/LonEOA3w6saUnIiQhXdK+kPxUVoUj/gR2ugB3gcQcN8nubqkZgHyehIRpYg8eDi1vnTtsMsaIjfwGUeXzpDbMIiDBnndSlpTbQqEKGoH4lxBVG+9SjY9spWWbbMaFaylNuYcEZ2a+QLtyZDtN6QBmi8LkAohnwD8hw8WB5dpbWgBQMykzCKLY363jF0PSLaNF+wyMhCMq7HrYr0y1tgYVBQyz72dBmc62IEz0Q13v6nB+dGaF+69rp+hCpz6ldNgcgKDgxHqlD4QR/6YmPCWW91ddRF5LWUuPl/w32Ywf8h+VDVoYQUoFX7fr0nl84CW+R1bz0fJ3Rehb0/HRC2682ATBw+0jckTuBaXqsYjQaNuV8vSPGZPoyGe1lBVyep57j4be31h5BmA5oUkcgTh8hKz7qx2ZwmXhWHTmCJwjHzroaM7+k/GUWmsCJAy2dXM+HQdfAgreXbjFu2BoNa6ovk1HKmiSmnNnCg/MgQ7nOuBGhOoypjzFHbdjuE/1UJVDjANcXc7nrYun3ygrpBbLvkyUT7ivjLG+SvaNpNoP+SNoa17FDmPggjaCneLc+2ZQpG4yDpKbt06f2rz8fmtahzSViplZvBpDs2w5CYHx+Wz8vChocfmeA2aQ2Hf7sY0MPrexPK7jOffl231vZq1Gzk+2e63CrgBPIjLE29BlfZQa5jG7fpYC1/4w9dDny+qHi//Qmsl/EKyBl+KVptAbXcto/7O7uDQhSovVxPLSH1cWsFVVqonxZ3MNXG99g7JPBsmNgARYNPAlz6z/6lTzK9NidnGcQEO85htaGw/9nuPD+BpC6L9ViCfgGM8vzfMDDcOUr4WQb0jpkbMQGM6xcQjfm3DI6TCVzFJhbpDGhfmuUpSuUBB1SIpcI2t2ow2Zj06ZzEyn/tJg7glhPI0AxKnX4Tj0bzvjAtE6hkHpkQ9UxGdydWtboj5EGAFvC6Kqbi8XiasBE5covUEKY7gQa8S1w==';const _IH='cfa1ed4c6650c958c4dda967bb1349979214ee6caaa226d141c68109d2b0ef82';let _src;

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
