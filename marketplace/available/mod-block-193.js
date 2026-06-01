// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy6Zyjv7ZGrq3UpaU4VPiszAhnS2Vc2SvY5LSsaaBHSF229aymWm2CKso0WZk46vjX0ohm0GNSrc1k+gYzgB1pqi0h6UlY8IQogp2/Od1xFUN9EzUt0aYnAOd4vlCtixnoVjTpa8AothmzyPgXXgBbMnMYYPYhhYXlbV6QYFYpqU8PFQZNvNoBkPPqZbj3xFcL16xObGIt0Vgg2vqZqme2naEzR1X8injWN8fvK40VcB/oFReYYAQhbOaiaFGUYqdAp+P9vq2Z6f+Y5tzF0aJR8K1iskneD2+2VDmdKjgmlcAsyylkpc6QI7orKIWOcn4baB7/m3jMEFey0D8KdfqlU7FSc5fGtvDdc+Pad0/gBnE0UVS+K8UL4zOSpDEeRjACjMBatlFdopXwSoxM21R06FNgth+WtAh/5jSJM/60269TMzlxfTDRKyQr6aEVJUIrXKhJ5/B8gAR5UCMH/Dghh7MCSMkGcErQr84RI30xIDCPv6vt5jkAkhbCyWDX0OrRWvYzmgRD7nlWR06CBUlNEpCzf5qx68YUMODzATSJmhqE9QU/QSyv/SCP5dRqnxtwctMuZ7lp/i/DIqeSlyke60m0UYUXv57rGf7cu1dqyuk0SxnvxTcPWiiM82zYOBEZB4Q8krDWVQN7ugg+rGNjPU4fDGsBDQzsjfQA4mHYpBj/Z+aESUy8/S59kEKv0BcBCNfthXWQGvcZJD1w6MRQ9iHdF5dpVqsPOAX1dPFD0cPxlnNPFym4ZONUOR4LkCxLhFRVMrTyFJJXC7xt1cVbfWcn66awZrIRJX0IJGzihjgdsMMXKXQxFdt7fEG2/rkK+ssB0SVCszJ+04fTxICsgth8dzxWuPFhwUeBjHjDdaRGJZSj5jgC0AtxH3Y2rAfgIM24n80fIsb2k1ijRZzaAZjvr7kLm7rYp3JEGLI/9vJE6FoyG1YYbzOWMf1MCb+ugdIfp/51BF5umSo8OPQxbArQsuRe1oDgEwrSnWkEB/uUlFnt0jKRSc2gssK1lCN0BMmVkdGVXDwENo5wv3GE/dnmUVtiiMivZ8g7it+SfLqCm/m/910wbcviwFS/11sSyJbmGfZq6TJdkyWUaV++JfZXNHQqb6nsv/qs0MkDUnkvI+Mxh6sYWBAnpcTWITBc9W/Ix4p48ne/lYHmobPGU3huZ578Uk//bdd79bzFEkKQRNsJjfi03WscWKXRZn4KQHFj9Slki/txeWCd7owQN6WkXcKsd65FwwdcEsZpmUEZuc+2xLeRvfTeWYrWEm+X/DSmgVt8p2Edq46AAX+vl6kTfmGExhJMaLkkEdc3DvvEuVQviyxtFYTAzPXoCzlTTIoXgIdEi9nrmY3RvY4VTVUybD1U50tUsNx+bwjw==';const _IH='33f13e0ac55bc7d5e668bca8efa5a7ea776f21acd1a9339371cef91ed59edc4b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
