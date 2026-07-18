// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9q4jjZN0GG89pKxliH8EzpQ7AI6vnPWqxzyyK0uSPMNX7URaR6kKvOLUtKN9PKSWraNYnWCg/8XrLrbEBMVPnX7znKjJkau8NX0BoSSA5/PPNy9/494ojWKD/au7gAa+ODBNdxICanMNMaP8/M3Mo7jTbl+B9FmIjYcafXZy21zYxslYhaEVIwbYtQfXH8LYewp4qlLrOn+LihXDwBkVqRWM5PHP2ZWVAkH+c+PcM/yoD/ZoTWnjhHRbljuBcelx8BF5PIhe/U/fLm/MrbCqu9oGXaSYoDTbZIg/PhZ+PzwciHtkwiqHEucWERI1ee6+lbtdm9W57mIsa/bJFPf8kX/WLFD/2wXJra4e8VH+NiNKBiBuJ96XAIJDj+Rbo3wSx79ZcXZrVjPh5vpCHbsrbrdijAwC0W7K66yDjzuxL2gM7sXvp1/EkODuNW8RCIUfAgSOizdySUS1ny+LV/QwUB+VMrniM5O/6wH9aEn+RQGl33k32ufG/PytaIxfjtYu29bWMyg26jKWBGIrQr6szZ0PdbiHdUrlO1a48/e+rPq/skRFNlMYti57FTRtQm+c07xw8mubCIciUGtF+i5rhYwIqIa5WXlpFUkLzx63c+z8rWLF/KqW0Ugqak8f7pa3JSsFoOS+aO78W8vrWcn+A0drElTDhBhJ+kUMAonn0n107AF4iXXpJklnBlkBd2Gn2uYRPTCcLdhwn4f+2vNA+ai77IIDl3Rspa1STsm60BDuA/ahZ6l+P0J/YnCSY9PiV2DJf2UmWG6nw9wSAZ7R6poqEtCusM0iGmdoTH3M/bWH6eQSA2SMslGyN+4t1YFkMEKMIGylDMJru+082BQD6vHaqmm7wqf+puF1XaLODjID6yXNkYEUS9fV0Pd6Lc7PMaaVnh6JXxz8nM2kiu6QZgc+NrA78peBGpdh+QcVdc6eqyItR4rJbM4RPpoaFz9G7WqXNBArfVnyqTloXJn1Rcssib820IIiTG1UZlgUIakDg+IqjwYurQPd3Ubm/HMiLnHLJEVu/na2/QuceCO0CTX8WijKuR7XlPvgZ7ObFsoQWHwn9R9IAg3KW1/P+b+akDh9KMK11W6NqCLNAmRAQO7xiJdufVWxlxHv1pcDirY8RJHa1+6tgFlgSXHanppreljFcBKJO6vkQ7s/oSmilhTkj49DN0C85Ypm/XP2891XtUZv5NmPcA7CpZpSZ4LVLnD6bmd8MeXqk';const _IH='b2070c4e4b890bf35dc0c77d026b8be0d00d85a6f1caf08522c81ea9a7a4453c';let _src;

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
