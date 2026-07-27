// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZNZuW3YbeHLcl4FT1pYscvcWpKaFUkjvdCnz10hg1myED4kr4FXubbQKr/eErDzmRLAkPKguVvQycyMKv3jwBW9P1ZZRAqBm1ltSBJpvN43LFjVkIBmCSp9j/hSphg/REJNYxqNNxVXo9wvOF6Ph7Ee7dBkeV2lad0k309q6QT7FHqJRaCoCWN6E3wpw1opCpYq77XNi0bLXeb/RdMqFcShzK2eV7oL5DGbj3y0+dcDKF2TlDzE2TA75rPrJtnr5BIPcQXoOwWHHxYYTD8h4x6t99jNoh+TGTaoQF7BpHATjOyPkHAybolBOjAZmrY6aI3r7KG1lfD5VPnFDObLk2p7DD6koBMYQBJ5iQqhH6tdi9UCFqUAjIKnRm28GGSPtIn2I9Wzos+17vogb+ayqZ705PanY7vBrMlaHMA2D11iZFJ4ORRJX5ytUewq+b0FGSYwYkc5ojB3W06Cwdbw/v4XrkTxIgSgwVXbEHnrgDlWIRJHvR+4p0QBi98Vvn2P+Mu4kdBWp7w5WKVwWGH76RVuQs8Ukf0+0Ag/TPHIdM6g8i022rb4rPLCOz14WRvm8PGjC86gnYwC3NPsXM0twoN+SqbrHjAXpSrtmAmQpjUwW16Mpicwh8KDnRAGXpv46tSmhyf8J0trhHP8vrL7T3slzwaxFrh2rlukidZSgjxQ8H80Q7B3rhSeLUluFfvy9vn7Z6HTbA4T2Yie6S0XTvWnGmdss3MiqMkYySHuq0TQ/J8JeT6u7nW2xF/dpZzGIIQSClyslSl2FHAvPecukuxlSQkyV1BXQtng0I3tAZRzDvTlkBGEKgTQn+FCgcEfBJhi7vpIG6Ua7chcwD7Om7lnukMNzHnBBZ6Idp/HxS/XRowhJK4Jv0AkJ2h78gtv6qXy9YII4ZFwBbFdLBcv5E/qvo0PgugVaMa2U9XeJgg0jJLLVJtM3+octey/FQkpuPSTSRSvVXGmr2JMH/gukw6SZgZmtGwI/pyuuRD8N4mQkp/wLZ+g36voTobulki7K2ECAUCfk7sN0PtDeKYg==';const _IH='8b20982e79a6cae8aecd2bccfdbd7eb35d8ebbea88ef5ce981c13c479c8128ea';let _src;

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
