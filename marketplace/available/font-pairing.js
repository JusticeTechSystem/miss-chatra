// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAFgy++n8bp+NuiFNypUfBYVsaHYkmOMqVXA/zKLxq5RI9MKdM2jidOIyE4dXqxO7CfrpAr0/hjH2yEjqimFYpIcVzcFWzDO6Ib/1vTfGbp+DMgOD908kbapbxTVAaG/KRCbvVkDApA9jXQCAZD8saXK/H3ADJS7mMScN1skPIt73qKuurPzSHRUNDo3HqvVizOeQGKwgOb0QLuKCAV2uuClTD17ZgkEt+cmd1Vxsh7OmwJeUEbO68YGo/PlEgb6qJX+Oni0wWA69jzYi5uLVfRIxgGFVM4o4Cuvti86MDSgWo6NQ0shWd2ac9S9N6Of3TewTgPJITt7OlPGWNJgY6qi9Mqm2vABJ2PX3GRkFxosCHiCPEL2TurCkWrHycUYObwG9gCu9+jGG230EOU1kHtdQi3idlnrVPzArityX4c+AMC3YYNj7rAK0MNVEcpXEfH+OfktdQSmgG36dl1q29vuNYtFQq0LOlJoqrEtO0+IAEgPe5IbLueCtVGJ0CYRWmLOKAIUaNE3doWll8bF8h61WL47UAzwIbd6Vg9OFEqWbsdfs4sr03lniHZ+FH18nHWpibRE6NLhCe20loziYkDLJmHgmo4GgUaGsMtUbYRgS0ZY7z4sbYcpb0DlRJJP1ZQJZWxPTLQlnvnSc8ehxUrBdHX0AIcd08qaiE1AgEZmDfYMiKGucr/Gu1jrakd5gbXy/CN7d4WsQPt1V6HP9btrn9gV1JLymNsl840LyD/70vhDu/ZQXaqRDehk/3TZ0cgNgTlNykf41HVIXD1K8mynumRl21yh6IRsDpGin2PAFaaK5hWxuWh7IRJzUuskbat7/2b2EeilpdkpdzbbLdvwfrGiDlbTt6yU9haw5hGIrQ9GayOnPoxejJiKZK5OcIjeB6HomykoPUKGWCTMo1tEK40n1TkjfgQz9IbBrlbNy2edJH+uNvRN13SvZ3y8DfgvwWMUyKtSA6uPfP/NirmOtbxt7IsFBCIEORnCgHUtJOaJdyBV4QYTieHIxyXNnFVypn0tkKDUvp9NSvLtTpk/TnuVrs+8xZd3LW+fMsB0O8v1611DpI4ZNo7jHu4LsyjMzVqlP0U52TAhFenDPMgSf1xnL9GPc/ywP5oA9Zp+qUcdoTh1ZjmxuoXvYHVoihurTHIq9hcI+HWSi3bp66qcg1HfTxu64NslMTxeYnt3Yr2nYsyzBIoOIPYPlnWsxgPzNZeCFXq3HUyqw0LgI8d2hNrXkOUZOPz+k1PMBSf6qx03s/+ACbiFuNlEu8Zia00MUW2yhmsKDylxWDyLeCtMmlxiCvjSwCJGLaoS/Rza8RACz1zjGRM5DILh30O7ZRJc1Xk8PU2ZMxsSS1HUU0iPYa00Xom2Mflb/tKPzFbwwxYrq85U4YRg7zFAVKC1IaEwMinBg41YEAJh5EdUGKn5dZZkb2ogAyQeo83HTAcdmx6T9vVK/p19rOP9qX8+AaNfYnK7h7/F9Msntwva+GhnyROeF6Bj/2SckVjHFR7fpVSvJucTkbYUqGpY/yF07bCKCp6gNjnCBZL0k=';const _IH='a47d9f3ddf15158cafe771f29a0182d48552421cf5cd38b26791c8401e71171d';let _src;

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
