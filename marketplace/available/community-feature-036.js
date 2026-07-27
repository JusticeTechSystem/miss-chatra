// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSx9Y4DadVn8ff/JkCuj52eG/F3k7D5iPkUSd9Bb3y5vCDu/uxB5kGhuv/TNjwyczKZv5S4Rdegm/IeUSm8/GfSU0gJrGj0AsTiOAcTV0f9MoquVxuNBdhjlhW2Gc4U18X7fUzF5kSA6WSrWzaMAbdm71W6uvG0Ltvl99SmqLvwTjMnVeiB07cqBEutTctuS5rr41T/i18+iZDKTg9rMFVeLd+LO7mJNEOTr2sGcVsuFF6gST6BcqEnnLeE2KVMoQLOYZJ8GK6M4adK/Qo89v4qpVZ+HEewJX9Tj80Dgv9s3+aDpFFFlq0wEqcTkERgogdgbWT2z0bmspAmEnwFDm0aaneUrAd5W09MLCG1ON9js/lUNCFP3gyYQ5d/vaimOp21wXZ1IyNVTmXcev+TuENC3CffsM5JMjLB2mypB74aCWOuZTUhQbrFnluetIFSblTiF6rxRvZtogTxb9YIGdN5Twpgy1CmcRwqk3iuUhvMxGZl4VkPoNBHOyOVKCqburUNTeKpiNMzxTudTjgP37XHkaWtK8CTOnoXX3pGd3sjwiPjHtz64QWBtN8c7msoddAGznfNMEgFC4Y3U2WYm+ej4FYiYexCcEkZj0l7iGgDSvfae7HcCYg3RANk1fbb5bwfJRl24belznX01h8lbd/cWatWiRvcOkz+VtICD+3GoIoBQfYQIPdSmfxeJRAMlFiqRSFV4mRlryuUUuqz8QNMUDwWrw==';const _IH='e15265be1b8903d8e6cbd8b8737229141764345219f3eada2d5e514dbd063542';let _src;

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
