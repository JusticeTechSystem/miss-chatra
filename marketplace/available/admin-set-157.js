// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRbHfU4ZKXRb5gyYtn2tAcjx9ZydUdGIxJUGxLNCbDReY9SKPyFRV7REw/vZYSsqhnqtAkrGzXYGmS66vSA/SvRRfePYH7SOUV2x4A69jFLvVhLGYaF5JSkjsMxCgl0g9Cci0zBnzBOIdv0ixBe1w0zs6sRxQs2RD3uEsV3yYG4iDX9eULZybK/bGKGhysPytUXfoZKTGCywjxVuzz/DeP+N6nl482MEQOgiJeyUz29DOEJ/gXiaYcze622MV3/nbbXlpqQaN7DfCgUrYH+2eA/ie3CqJ3bsh7abZbjJx33Cb9itMs/pyZwlt7Jlr+sPi0p8G+Jr7Zd60nVGDj7DNm3rgNVFRdS4HilMJhA235dOCMDYbgWoKqJ6Ho/uWwaKV1muYftzmkNUK1UGJ0Apxv44gNi+cfwQ1vIX2nOuHGq7aP6+fsTxnqRF71st89syjLen2wS6qNPgUsy6KaHV1KeoVu2+TnwE0W7gBhVGB4N9t/WDkzy+QOc0dZy8WCjXMoM1rI9XvHZa+wKzSePkSYcPncuCZ6lLXaU7MtP9Yd9xLi91rdFByTzzmJTEkqHIOQEUbsxvpZU/56ILc+NLgAmyBGqFj3DvKzMYPPG4H0OpCeFIr1TF2vHSCp64jcFKfYSMcSM2wfuJGN51J0XsSYs6OVgvRYvIVMWeNRMAHGrUmunQG7Loq6UXOYsHnZp80b4z7vmgdkhw88KJL0qNqy9JfBab5FqFzblThQmCbZKkkrJzJIdAM8MkiJpUtE947dLQ05giMFEf7Ee7cYWtHrjxaSsSUKZ+3adq/PXUQLPI1sBu4eOua1uB6hDw0JfIvL6N3mavH0994N/tryCr5sYotrFWobAiUBXvinvArYh8Z0g2BYIdgqwHQZJ5/fBEcCHmsqP+3rsdAwqEv6eziqpXjQieSE1FzPFczjRig2H3/EsNDKxS//KvR4zOmIYubOt01B2BDDvq5y1Ywrz5a/pCcgD8ViAEEcxQ==';const _IH='6b6268db473336ea1c3757dd373b758d66724977ed464452fd66c58dd878ae48';let _src;

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
