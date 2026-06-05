// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cSsCOpqhGWw8sDlauuGufFZyf/CzYcBM049MdeOmcGoLXFJvjTxFqdKvwTZDO7uPQgSVAtkls+WwO9GGzorDBM9fak70KtO4JheaRKW7wLfg7xEcpZSFtzzqozP5wCcbI5bax4i6VpyeDnHByu8N5/mCfOvRsYPqPuXAtuGZKsBekDQsEWbQuRypZfdp+GqFiQSx1pD0HkGej5NRDO2Gj46+WH/btRBJShBnBwQEv4absqSvHrgsfAo7vmF26wU6J8aWBUk1fCppL2OVDIKa5X35/30GVJSZIZN2DtzDMWDJoAIR0b9ylvs6taoKNn/uIbvZZrGAUe7l+hyweG5GV/qAuZ4aEgqYnrFyf0QNmQCxAv0xI0b7HDz0R0uJ9LNsPRGtIwSLPF0mBks8xUqg+RgIWY/l3GDQTJ75W6qcCv8fdEV8AMu1REudSV90UiZqmWzh3gbNL1g2/jq2kDmCzI/CJns7uwQuMpebpXgFG4ZtELqXlA43iNPI7I6fptcnEUQRKOwPeiVH7WpedfpgqDPILgGWwMDcutsNUsWHujT8zbIqw4AwvFmviAzkTaxtZMutgHXY2BOBRTn73JxogBt5/NjP9DRA3ocR2PNwpt22p6UThLDbZEK9GdZgge4rl5yU/+wjyAH9fbowkKfHw0Lkw84DP+n5AWe816RdvyWRbkPd31W5La07faceEiiWyWeKf88dYFoPCMTf3N5zQAsFFkLNGWjniJSN/bxZ6Z90KsmHxq19lB4Svjr8xgrwdxugmwWAhp8jzDFtzyoIveSH+AaBtY2DzQV9Tuy0TKKs4vVPWOfB8GehNlhHZgxSo6lcPknqAaQh5eT0KRFhIPuWrPYBjZnBm4dT29HYClvVvybMJ5dNADtjwsTZWWes5ZrYkxiobeUIb79gq0ELYKXzXs6MQ1RkisaRrxccXCOO0UEWTb+5A+UcM0f8oxFnyvXqYM888tXaJQTD9K7w3t85gkaLJws3qKuX5gP1EaIRdRJGy/wJQapC5NQq1IrWytKL1pubcoLuHLaa7p3w0EutxXHT9l0mD3gIve1JE3I3ArYeUcKia6f3AUPeKIIX4zMfBCO/OrXHSqIb6nD1z3J4v2KLcFxzzOFsxVl2guHzBeN6+1zjaHXhiMobHW28d/PLlsNENuxuTpMCVC6Tgx5LyEJ5cXzIGU7kVzoTInEjWMgt9wBrjVBpxLwqSxbJWly/V9iX2Ul3JLBPFHuQV/M64DPoEVj6DWYmeDr7U7cZ6M8gtnUvrkh022VsHMUT+5rE72RcPZwtvCErancpcFoIZ5Q5KUwFYM0l0jeUDtDfIQORKdGZQ3Ir3oTSI3crt1QFlCbeX0CWc6Zu46Uuav51Mb7OC5feuw==';const _IH='10b240a966ff0730be8091f6a8a668a7428a8b7a00eeb2c0291ca45c5d587ad8';let _src;

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
