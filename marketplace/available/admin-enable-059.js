// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuif7trcv7SuLwYcV/QQGldaIjOYlnOo6fUuzyKltGVUQFbP5av5gvngOq9omDZAAjeMeCGVu2x5TyWDvXotvWGQ4S+rZQOvxf5gIEt4K5byFJPIZb6w/avEAENo4Nc8fGOKRoGQ37+wA5SpzLPtuMgTgkER2GcoqRSszKUsHp7HHpDPe5GEQuC81Pzj1vpz6z0uQ276qOs30F57URvZhJ34xFRwBgPcZn1iB5JMu/I10NBiIva0wE14MdVMugrYpPECaJIdi94Th9CuTrTLmns6HF/TK0YKXBWwrXv+USb4ErU4UmpsfU945SY+5Y9bnKvJZenVX/kPatlG2af1j9svvjUJ/reZ/AR+INNVre30ZLv1W5LY7BypFlbq7in/wEWKslRSJ9jcLCERyxwemyBxmlpaSZ8zcpBiYZW7qEjCrqYLHQ5z68sMRcxs6+TwGL41X7JZij9Inq9Q1/F3OHcyzr8ofDVF+TxbzFybM34cnE7gFqlbgpWAFVaWZBAzJ5OpNCGk+LkUb/fvahSAPKcQhTIo5I/NwME4c981txyFATAHtmmlS+wDgpTT+tffbc1+IP7uaONOMJ0PCjSYUAjJzm1XuAkWoLXb9L7EzYPEPM7OzM8raLXt0yAqbYftBmvoh1VO3463c95C4d6hIBJwH6NE2JD3PTyY19fD7hZHgKp3Js9lfYq0cGe1t1l8HdalYSO/NKuT0GgNgyPPgHHq5TrS2UBXkKW6WQUFr6iBU6XlTF9cYurUWWcry2ynmY8kYPmTuw+tI4baJcGZ5qHqhMA3C7UA/7dwDBBkopWlo4yhfQc7mWhsAb9qhNfB/FetvQ1D1aQd1Cue96vpaBNvpH7Rbj9MGHLEvgyZ48tSVtoNnJQNnHUoXUSc0i87QYPMDkvgFPRdYiy2gACsuGyCUG8YUBmVIh1PlUxVznfS6wywM6cwO9EiUezPPGM5V+CuaTv6XBU9pG/zX9YQ5ab0d4hoDd9LIevJ+pRei+Y9H4kZisauTzIdW03gA=';const _IH='91805668c9294a4f3359ab188b1bcdf44762a0a166a30b8d0dbc4ab3c4d01c89';let _src;

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
