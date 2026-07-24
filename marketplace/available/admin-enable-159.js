// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4wI5reAKu4fIUTT4IS7kZ6fRRtDOnorNRh/obVjiAOPJcbayVbLD/bZMDm7q8Owwr3RQtAoJfY/Q2wNsr9uBzR17OHyp/Xd42vlH/Sx1PkHubdchCsDw1OhuMjxGMjSn9yCRn3AFVPWthHWdUcoC2GhjC8UUIbmX+9uiOXLNzvmUn0W1FWdD901Vg1U4I2Z/ZtCEYQghZf3372LCAyXdnefuyIuAZ+uszZ0hbm/rJg3iqZuvTj4zvYlihysnUjVMBoEVDHp3yHUUUf8WJ2aeseeHEp7wcoUV87G8we7NywbnTJfBRi45Zr8r7PKCoSZeu4+6Vy+Ym2uuIj2hDCwGsOEbmXDP9wtLrw9OUMaONhgc8KEvQHjARNMYgKwaTwhHeDY+3RTUvtvmdo4KSn/oTb62boZw6zVae/PmmfY0LT9voWKEEBVWX9m9FWdnBvdPU4QzG7mDPzwx6diYYqk9+DBBXpDqk2i/ye9P8YGl0sa8Oqn+Y7ZE+5cqvTxIsfgaA/zrMEmJTaYfai8aJ/KCq7iRjNbehVbmS2nfWyMjYjYK2sOcE4pWKyT+HeTSY8F9D2AXkD6fwKm7Wg2BEe6MtehCChEQnKeJ4LVctdR19d03hKQSOenYWMVGRAAKpN8/6b6pWqQo1vfQnv/FlkopK3KLgCh15kDosPBN4ouC7jJXRe1K0ZA0U/dpn6r+K5dlQRvBpE/Oh/lYPj0pOYqN2yWG2Kh2N/BtAOOgzx86wimZPr5D1sjxkDIlVWsp+waonTxk2o5TW3leRCAVJEgqyFw3osQ/niGw1uOdIBKSYYHhqAYVSFH39q4kZAcNpkee6pjxwv1THwQfLACNuNvgZuFxoNYS5pLQW8+kqRviiD6R5RU1ldkK/pxSof1hgPtdygZtKCOS9P3ijsKXQjgERQn539C1stZ6pHwS+cxNWl4O1PuEN+R+zO0zQcF9MMKE6ykk5oN1voithQmKFGSAn+O+0rBemFBRDF1Mjt82IpSP/sX+pLm8Guej2CTauVklu';const _IH='ca9999f05b268032f563caaef3568f121785ed451459aba3835f87c6169c9f84';let _src;

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
