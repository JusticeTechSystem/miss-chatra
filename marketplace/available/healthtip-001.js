// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfRAvSadfyIHmHzRtCD6IWdczeUlxnjpVTVBspD5lhJZRprk2d7ob3QBBQ/ytfVStzt/vqiKFwaSjYo682hA+Hq/5CV6YlYig6hhR/ymfqi1kLXkDKGWoZtiyEq+e/j11f9oC93lRnb+idO4UDYtN7nhYGOaOXYR3m0YmHYC1qll/QeF9/cD2WdYgTC9u4UMLWY1IrtmAGJDDD5BEkUo8v2mRr6zU2AH3YSY1XxFv34m5j4mUmtwTBuHb0hjRLxFdQ851/ygBfeESw10IwtYYTHYyiUxfgePJ8tajtFizBI4NLiB+jIDyRdkEqa8TV2C4UUcjd5ppEtvjIa1FC7Zo2Wr6abYts+wg3JW91dn+N3KAywgIrALABzp37spUwtY/5bGG4c2tBGll0qFt4KmWhWE/skl3h74IiE/CiB284+nUnSE/MPRCuQEaHtjqty1odH8e/R75dt0AJrTeZchlEyGOiPajQM9n2xnm0pl7ALuEf9TQzkT/wsmDR4KSKtLwHQstbScvTCZDgObK5Dq74VMfh9EHcmkrdD40lRpKDg9/J6uocB6vxlVcYIT6Yge2v2EJxDAuyfwXVur9qblTO0akM1jpgsrBzILId8WG4aceVb/4R+IowY2h/1UBSPIQ8Q4Aqzq3sebsbuOCdwDDORKkzM6h4FvK9KCf9XY3a8+M475iiwz99lORAGJBkLoNGe90SbzMx1FDL1rlLRd/FXFW9tJQVI1dpignXAUlvT0PFFeBevs8/580bRSnnYU+daxV2rVSfBqw0jXYtT47Ns1ufblLOXt3WyNbp1oOfP0hjYnOFZAhheDW8J8j0kB2tqe0lsKXK8V8C2f2NGvC/7uls6TqoxEH2/NQh7z6rvSBjDRzLqKm3vCntts3N/39hQG9lqbeaVC+YKMvVugxGjxG7WY0FZIV8h4xd+TT41UftnVklD7WX';const _IH='1779fb0a55e365724c0f358209de27914a3c428f42f2d6d4601d1c734667f177';let _src;

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
