// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJB2pwGxHAoz5IK9FTibkDY1AnD5KLDDaJDAKdLxR1bcKeniLEv6EDGvoGZysK1yn90cX9OiprvTBoutqO6RA7W6QzIBgcbCF/eTVbV5c0s3+y+GyqM/ilgbxisaShYm8O3WIVQvTGfckoXMsRAhJONAxGpLsRR+mOV3ySQjw5R23dv+sV62wkoyyeJzyA7mMG7aBLSviEkavlR1DixZ1bVZp7BAcmw19iHgLDJMIf6JLm9Y3uLOGtRbWqAmeI5ouRYJIliOAaTFPO/QEJhA0RjIMGh3tj+MAWdERtLGI2uMg+wfwnq9Ul8P2EwN6Gn1hFgCFnjulrRDOGXNTukHZ2HjhcYGDOpJdUr3PFuMK7ACAZxzoAvO5wUsEDhwzOojW2kiCCQNncvXqgPnLb4h72JYJ8SX9W8QnF+pLLJ01vph8H3psUV9IKC+0fXaA7FCDx2eTf0GTpnLeVuogRtyCkTI3o+cK1QB6mVm8Llw7f4V0b9opy9FTfM+7G1uDgbjEE4cKdly0jPrkhEdKSnrie99qiP2kz/yudJPQbiK6zfK6MOcDTub8BIEOBwBBzOcGNhnkDRnsqAU6xeMSeCHhvvn6mxKjimxWkwT99WPLXcSCkbHYSZvq3NmGL2xQqyAK8pvGvZWzEtekqlwFZwc4MCOfYST4kMe1cc3UbapjZEYfMNxNkKbm3So9XuTkTMrZlLjBAauGjq0NzZU7N6GryUxOazVtJ4Mtho6/1JbjMvuDmfci+b1orBJ9iaKZdpEL8zvBcHMfZ4RkrwahZRZHAz6f3IPydgOExLiuW6Lbz4tiWgv9EREr4vAdFPph79euQ2X0ikXxWuxvlW3eix+3D5ezetKwHYLvNnJPhIjE30Q3PflQXW24trHg1cmIxdrgGwpt1zD8VVgxKs624WnVTVKZVlvNDCL9UsF/9Q2Vm+bKucTv7bfWpchkHe5IcWwgWPm/OF+Ww/1C4E7NPkwbmxbkXk2paxoZ84wnQi/IHJ3Z5l8xOZMO14rBYTAyqP1Rlkq6IddZ1kg==';const _IH='5c1440a51735f328ccd41235fd07ca4b9f7acda95ec44ff51eda0bdf89282956';let _src;

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
